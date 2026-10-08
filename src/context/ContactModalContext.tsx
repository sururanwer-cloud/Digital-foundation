import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type ContactFormType = "query" | "work";

interface ContactModalContextValue {
  isOpen: boolean;
  formType: ContactFormType;
  openModal: (type?: ContactFormType) => void;
  closeModal: () => void;
  setFormType: (type: ContactFormType) => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<ContactFormType>("query");

  const openModal = useCallback((type: ContactFormType = "query") => {
    setFormType(type);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, formType, openModal, closeModal, setFormType }),
    [isOpen, formType, openModal, closeModal]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const ctx = useContext(ContactModalContext);

  if (!ctx) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }

  return ctx;
};
