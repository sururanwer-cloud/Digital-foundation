import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.scss";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project scope. A standard business website usually takes 2–4 weeks, while larger projects may require additional time.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, updates, security monitoring and technical support after your website goes live.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can modernize your existing website while improving its performance, responsiveness and user experience.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. We provide on-page SEO, technical optimization and performance improvements to help your website rank better.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktops, tablets and mobile devices.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <span className={styles.tag}>FAQ</span>

        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <p className={styles.subtitle}>
          Here are some of the questions we receive most often from our clients.
        </p>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                active === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={22}
                  className={
                    active === index ? styles.rotate : ""
                  }
                />
              </button>

              {active === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;