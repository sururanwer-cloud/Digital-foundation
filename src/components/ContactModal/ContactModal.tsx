import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { X, MessageCircleQuestion, Briefcase, Send, CheckCircle2 } from "lucide-react";

import { useContactModal } from "../../context/ContactModalContext";
import type { ContactFormType } from "../../context/ContactModalContext";
import { sendContactForm } from "../../lib/contactForm";

import styles from "./ContactModal.module.scss";

interface ContactModalFormValues {
  name: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

const ContactModal = () => {
  const { isOpen, formType, closeModal, setFormType } = useContactModal();
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactModalFormValues>({ shouldUnregister: true });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setSent(false);
      setSubmitError(null);
    }
  }, [isOpen, reset]);

  const switchTab = (type: ContactFormType) => {
    setFormType(type);
    reset();
    setSent(false);
    setSubmitError(null);
  };

  const onSubmit: SubmitHandler<ContactModalFormValues> = async (data) => {
    setSubmitError(null);

    try {
      await sendContactForm({
        subject:
          formType === "query"
            ? `New General Query from ${data.name}`
            : `New Project Inquiry from ${data.name}`,
        from_name: data.name,
        form_type: formType === "query" ? "General Query" : "Project Inquiry",
        name: data.name,
        email: data.email,
        address: data.address,
        service: data.service ?? "",
        message: data.message,
      });

      setSent(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              className={styles.close}
              onClick={closeModal}
              aria-label="Close contact form"
            >
              <X size={22} />
            </button>

            <div className={styles.header}>
              <span className={styles.tag}>GET IN TOUCH</span>
              <h2 id="contact-modal-title">Let's Start a Conversation</h2>
              <p>Choose what best describes your reason for reaching out.</p>
            </div>

            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.tabBtn} ${
                  formType === "query" ? styles.tabActive : ""
                }`}
                onClick={() => switchTab("query")}
              >
                <MessageCircleQuestion size={18} />
                General Query
              </button>

              <button
                type="button"
                className={`${styles.tabBtn} ${
                  formType === "work" ? styles.tabActive : ""
                }`}
                onClick={() => switchTab("work")}
              >
                <Briefcase size={18} />
                Discuss a Project
              </button>
            </div>

            {sent ? (
              <div className={styles.success}>
                <CheckCircle2 size={44} />
                <h3>
                  {formType === "query" ? "Query Sent!" : "Project Details Sent!"}
                </h3>
                <p>
                  Thanks for reaching out. Our team will get back to you within
                  one business day.
                </p>
                <button className={styles.closeSuccess} onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="cm-name">Full Name</label>
                    <input
                      id="cm-name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className={styles.error}>{errors.name.message}</span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="cm-email">Email Address</label>
                    <input
                      id="cm-email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className={styles.error}>{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="cm-address">Address</label>
                  <input
                    id="cm-address"
                    type="text"
                    placeholder="Street, City, Country"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <span className={styles.error}>{errors.address.message}</span>
                  )}
                </div>

                {formType === "work" && (
                  <div className={styles.field}>
                    <label htmlFor="cm-service">Service Interested In</label>
                    <select
                      id="cm-service"
                      defaultValue=""
                      {...register("service", {
                        required: "Please select a service",
                      })}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="UI / UX Design">UI / UX Design</option>
                      <option value="E-Commerce Solutions">
                        E-Commerce Solutions
                      </option>
                      <option value="SEO & Digital Marketing">
                        SEO & Digital Marketing
                      </option>
                      <option value="Website Maintenance">
                        Website Maintenance
                      </option>
                    </select>
                    {errors.service && (
                      <span className={styles.error}>{errors.service.message}</span>
                    )}
                  </div>
                )}

                <div className={styles.field}>
                  <label htmlFor="cm-message">
                    {formType === "query" ? "Your Message" : "Project Details"}
                  </label>
                  <textarea
                    id="cm-message"
                    rows={4}
                    placeholder={
                      formType === "query"
                        ? "What would you like to ask us?"
                        : "Tell us about your project, goals, and timeline..."
                    }
                    {...register("message", {
                      required:
                        formType === "query"
                          ? "Please enter your message"
                          : "Please share your project details",
                    })}
                  />
                  {errors.message && (
                    <span className={styles.error}>{errors.message.message}</span>
                  )}
                </div>

                {submitError && (
                  <span className={styles.error}>{submitError}</span>
                )}

                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                  {isSubmitting
                    ? "Sending..."
                    : formType === "query"
                    ? "Send Query"
                    : "Send Project Details"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
