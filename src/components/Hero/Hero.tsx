import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.tag}>
            🚀 INDIA'S LEADING DIGITAL AGENCY
          </span>

          <h1>
            We Build
            <span> Brands,</span>
            <br />
            Websites &
            <br />
            Digital Growth.
          </h1>

          <p>
            We help startups, businesses and enterprises build
            powerful digital experiences through branding,
            websites, software and performance marketing.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              Start Your Project
              <ArrowRight size={20} />
            </button>

            <button className={styles.secondary}>
              <Play size={18} />
              Watch Showreel
            </button>
          </div>

          <div className={styles.stats}>
            <div>
              <h2>150+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>50+</h2>
              <span>Clients</span>
            </div>

            <div>
              <h2>8+</h2>
              <span>Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.mainCard}>
            <img
              src="/hero.jpg"
              alt="Digital Foundation"
            />
          </div>

          <div className={styles.cardOne}>
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className={styles.cardTwo}>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;