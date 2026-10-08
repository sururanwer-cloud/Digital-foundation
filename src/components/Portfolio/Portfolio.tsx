import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span>FEATURED PROJECT</span>

          <h2>
            Building Digital
            <br />
            Experiences That
            <br />
            Convert.
          </h2>

          <p>
            Every project is built with one goal — helping businesses
            generate more leads, stronger branding and measurable
            business growth.
          </p>

          <button>
            View Case Study
            <ArrowUpRight size={20} />
          </button>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.photoCard}>
            <img
              src="/featured-project.jpg"
              alt="Digital product design showcased across devices"
            />
          </div>

          <div className={styles.floating}>
            <h3>+320%</h3>

            <p>Increase in Qualified Leads</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;