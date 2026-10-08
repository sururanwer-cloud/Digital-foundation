import { motion } from "framer-motion";
import styles from "./Process.module.scss";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your business, goals and target audience.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Creating a roadmap that aligns design with business growth.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting modern interfaces and memorable brand experiences.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Building fast, scalable and responsive digital products.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Testing, deploying and continuously improving performance.",
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>OUR PROCESS</span>

          <h2>
            A Simple Process.
            <span> Exceptional Results.</span>
          </h2>
        </div>

        <div className={styles.content}>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.visualCard}>
              <img src="/process.jpg" alt="Our team collaborating on a project" />
            </div>

            <div className={styles.floating}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </motion.div>

          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={styles.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
              >
                <div className={styles.number}>{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
