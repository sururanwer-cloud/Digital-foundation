import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Palette,
  ShoppingCart,
  ChartNoAxesColumn,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/PageHero/PageHero";
import { useContactModal } from "../../context/ContactModalContext";

import styles from "./Services.module.scss";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, responsive, and SEO-friendly websites built to strengthen your online presence and convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Clean, modern, and intuitive interfaces that create exceptional user experiences across every device.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with secure payments, inventory management, and optimized customer journeys.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "SEO & Digital Marketing",
    description:
      "Increase visibility, attract qualified traffic, and grow your business through data-driven digital strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "Continuous updates, performance improvements, security monitoring, backups, and technical support.",
  },
];

const benefits = [
  {
    title: "Experienced Professionals",
    description:
      "A passionate team delivering creative, reliable, and high-quality digital solutions.",
  },
  {
    title: "Modern Technologies",
    description:
      "Using the latest frameworks and development practices for future-ready solutions.",
  },
  {
    title: "Business Focused",
    description:
      "Every project is designed around measurable business goals and real-world impact.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We continue supporting your business even after the successful project launch.",
  },
];

const Services = () => {
  const { openModal } = useContactModal();

  return (
    <>
      <Navbar />

     <PageHero
  variant="centered"
  badge="🚀 OUR SERVICES"
  title="Digital Solutions"
  highlight="That Drive Growth."
  description="We help startups, businesses, and enterprises create impactful digital experiences through strategy, design, development, and marketing."
  primaryButton="Start Your Project"
  secondaryButton="Contact Us"
  onPrimaryClick={() => openModal("work")}
  onSecondaryClick={() => openModal("query")}
/>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <span>Our Services</span>

            <h2>
              Everything You Need To Build
              <br />
              A Successful Digital Presence
            </h2>

            <p>
              We combine creativity, technology, and strategy to deliver
              digital products that help businesses grow faster and stand
              out in competitive markets.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  className={styles.card}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.icon}>
                    <Icon size={34} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
            <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <span>Why Choose Us</span>

            <h2>
              More Than Just A
              <br />
              Development Agency
            </h2>

            <p>
              We focus on creating long-term value through thoughtful design,
              robust development, and ongoing collaboration.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className={styles.check}>
                  <CheckCircle2 size={28} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
  <div className={styles.container}>
    <motion.div
      className={styles.ctaCard}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.ctaLeft}>
        <span className={styles.badge}>READY TO START?</span>

        <h2>
          Let's Build Something
          <br />
          Extraordinary Together
        </h2>

        <p>
          Whether you're building a new product, redesigning your website, or
          scaling your digital presence, our team is ready to turn your ideas
          into powerful digital experiences.
        </p>

        <div className={styles.features}>
          <div>
            <CheckCircle2 size={18} />
            <span>Free Consultation</span>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <span>Transparent Pricing</span>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <span>Fast Project Delivery</span>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <span>Long-Term Support</span>
          </div>
        </div>
      </div>

      <div className={styles.ctaRight}>
        <button className={styles.ctaButton} onClick={() => openModal("work")}>
          Start Your Project
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Services;