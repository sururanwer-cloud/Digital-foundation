import { useState } from "react";
import { motion } from "framer-motion";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/PageHero/PageHero";
import { sendContactForm } from "../../lib/contactForm";
import { useBookCallModal } from "../../context/BookCallModalContext";

import styles from "./Contact.module.scss";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 XXXXX XXXXX", "Mon – Sat, 9am – 7pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@digitalfoundation.in", "support@digitalfoundation.in"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Digital Foundation HQ", "India"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 9am – 7pm", "Sat: 10am – 4pm"],
  },
];

const reasons = [
  "Quick Response Within 24 Hours",
  "Free Project Consultation",
  "Dedicated Account Manager",
  "Transparent, No-Surprise Pricing",
];

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const { openModal: openBookCallModal } = useBookCallModal();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setSubmitError(null);

    try {
      await sendContactForm({
        subject: `New Contact Form Message from ${data.name}`,
        from_name: data.name,
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
      });

      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />

      <PageHero
        variant="centered"
        badge="📞 GET IN TOUCH"
        title="Let's Start a"
        highlight="Conversation."
        description="Have a project in mind or just want to say hello? Our team is ready to help you turn your ideas into powerful digital experiences."
        primaryButton="Book a Call"
        secondaryButton="Our Services"
        onPrimaryClick={openBookCallModal}
      />

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={styles.infoCard}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.icon}>
                    <Icon size={28} />
                  </div>

                  <h3>{card.title}</h3>

                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.tag}>Send A Message</span>

              <h2>Tell Us About Your Project</h2>

              <p className={styles.subtitle}>
                Fill out the form below and our team will get back to you
                within one business day.
              </p>

              {submitted ? (
                <div className={styles.success}>
                  <CheckCircle2 size={40} />
                  <h3>Message Sent!</h3>
                  <p>
                    Thanks for reaching out. A member of our team will contact
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <span className={styles.error}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label>Email Address</label>
                      <input
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
                        <span className={styles.error}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                      />
                      {errors.phone && (
                        <span className={styles.error}>
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label>Service Interested In</label>
                      <select
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
                        <span className={styles.error}>
                          {errors.service.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label>Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us a little about your project..."
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <span className={styles.error}>
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {submitError && (
                    <span className={styles.error}>{submitError}</span>
                  )}

                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              className={styles.side}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.sideCard}>
                <h3>Why Reach Out To Us?</h3>

                <div className={styles.reasons}>
                  {reasons.map((reason) => (
                    <div key={reason}>
                      <CheckCircle2 size={20} />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.divider}></div>

                <h3>Follow Us</h3>

                <div className={styles.socials}>
                  <a href="#">
                    <FaFacebookF size={18} />
                  </a>

                  <a href="#">
                    <FaInstagram size={18} />
                  </a>

                  <a href="#">
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>

              <div className={styles.mapCard}>
                <div className={styles.mapPattern}></div>

                <div className={styles.mapPin}>
                  <MapPin size={22} />
                </div>

                <div className={styles.mapLabel}>
                  <strong>Digital Foundation HQ</strong>
                  <span>India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
