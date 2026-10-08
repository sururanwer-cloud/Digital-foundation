import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface BookCallModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookCallModalContext = createContext<BookCallModalContextValue | null>(null);

export const BookCallModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen, openModal, closeModal]
  );

  return (
    <BookCallModalContext.Provider value={value}>
      {children}
    </BookCallModalContext.Provider>
  );
};

export const useBookCallModal = () => {
  const ctx = useContext(BookCallModalContext);

  if (!ctx) {
    throw new Error("useBookCallModal must be used within a BookCallModalProvider");
  }

  return ctx;
};
