import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { X, PhoneCall, CalendarDays, CheckCircle2 } from "lucide-react";

import { useBookCallModal } from "../../context/BookCallModalContext";
import { sendContactForm } from "../../lib/contactForm";

import styles from "./BookCallModal.module.scss";

const services = [
  "Website Development",
  "UI / UX Design",
  "E-Commerce Solutions",
  "SEO & Digital Marketing",
  "Website Maintenance",
];

const timeSlots = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 7:00 PM)",
];

interface BookCallFormValues {
  name: string;
  email: string;
  phone: string;
  services: string[];
  date: string;
  timeSlot: string;
  notes: string;
}

const today = new Date().toISOString().split("T")[0];

const BookCallModal = () => {
  const { isOpen, closeModal } = useBookCallModal();
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookCallFormValues>({ defaultValues: { services: [] } });

  const watchedServices = watch("services");
  const selectedServices = Array.isArray(watchedServices) ? watchedServices : [];

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

  const onSubmit: SubmitHandler<BookCallFormValues> = async (data) => {
    setSubmitError(null);

    try {
      await sendContactForm({
        subject: `New Call Booking Request from ${data.name}`,
        from_name: data.name,
        name: data.name,
        email: data.email,
        phone: data.phone,
        services_requested: data.services.join(", "),
        preferred_date: data.date,
        preferred_time: data.timeSlot,
        notes: data.notes || "—",
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
            aria-labelledby="book-call-modal-title"
          >
            <button
              className={styles.close}
              onClick={closeModal}
              aria-label="Close booking form"
            >
              <X size={22} />
            </button>

            <div className={styles.header}>
              <span className={styles.tag}>
                <PhoneCall size={14} />
                BOOK A CALL
              </span>
              <h2 id="book-call-modal-title">Schedule A Free Consultation</h2>
              <p>
                Tell us what you need help with and pick a time — we'll call
                you to talk it through.
              </p>
            </div>

            {sent ? (
              <div className={styles.success}>
                <CheckCircle2 size={44} />
                <h3>Call Requested!</h3>
                <p>
                  Thanks for booking a call. Our team will reach out to
                  confirm your slot shortly.
                </p>
                <button className={styles.closeSuccess} onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="bc-name">Full Name</label>
                    <input
                      id="bc-name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className={styles.error}>{errors.name.message}</span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="bc-email">Email Address</label>
                    <input
                      id="bc-email"
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
                  <label htmlFor="bc-phone">Phone Number</label>
                  <input
                    id="bc-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <span className={styles.error}>{errors.phone.message}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label>Which Services Are You Interested In?</label>
                  <div className={styles.pills}>
                    {services.map((service) => (
                      <label
                        key={service}
                        className={`${styles.pill} ${
                          selectedServices.includes(service)
                            ? styles.pillActive
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={service}
                          {...register("services", {
                            validate: (value) =>
                              (value && value.length > 0) ||
                              "Select at least one service",
                          })}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <span className={styles.error}>{errors.services.message}</span>
                  )}
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="bc-date">Preferred Date</label>
                    <input
                      id="bc-date"
                      type="date"
                      min={today}
                      {...register("date", {
                        required: "Please pick a date",
                      })}
                    />
                    {errors.date && (
                      <span className={styles.error}>{errors.date.message}</span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="bc-time">Preferred Time</label>
                    <select
                      id="bc-time"
                      defaultValue=""
                      {...register("timeSlot", {
                        required: "Please pick a time slot",
                      })}
                    >
                      <option value="" disabled>
                        Select a time slot
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.timeSlot && (
                      <span className={styles.error}>{errors.timeSlot.message}</span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="bc-notes">Anything Else We Should Know? (Optional)</label>
                  <textarea
                    id="bc-notes"
                    rows={3}
                    placeholder="Share any details that'll help us prepare for the call..."
                    {...register("notes")}
                  />
                </div>

                {submitError && (
                  <span className={styles.error}>{submitError}</span>
                )}

                <button type="submit" className={styles.submit} disabled={isSubmitting}>
                  {isSubmitting ? "Booking..." : "Book My Call"}
                  <CalendarDays size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookCallModal;
