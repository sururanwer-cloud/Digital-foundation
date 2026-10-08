import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Megaphone,
  Smartphone,
  Search,
  Bot,
} from "lucide-react";
import styles from "./Services.module.scss";

const services = [
  {
    icon: <Globe size={42} />,
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites built for growth.",
  },
  {
    icon: <Palette size={42} />,
    title: "Brand Identity",
    description:
      "Logos, branding systems and visual identities that people remember.",
  },
  {
    icon: <Megaphone size={42} />,
    title: "Digital Marketing",
    description:
      "Performance campaigns that generate quality leads and conversions.",
  },
  {
    icon: <Search size={42} />,
    title: "SEO Optimization",
    description:
      "Rank higher on Google with technical SEO and content strategies.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Social Media",
    description:
      "Creative campaigns across Instagram, Facebook and LinkedIn.",
  },
  {
    icon: <Bot size={42} />,
    title: "AI Automation",
    description:
      "Automate repetitive work using AI-powered workflows and tools.",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR SERVICES</span>

        <h2>
          Everything Your Business <span>Needs To Grow</span>
        </h2>

        <p className={styles.subtitle}>
          We combine strategy, creativity and technology to build exceptional
          digital experiences that help businesses grow.
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Learn More →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;