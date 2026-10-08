import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
  primaryButton?: string;
  secondaryButton?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "split" | "centered";
}

const PageHero = ({
  badge,
  title,
  highlight,
  description,
  image,
  primaryButton,
  secondaryButton,
  onPrimaryClick,
  onSecondaryClick,
  variant = "split",
}: PageHeroProps) => {
  return (
    <section
  className={`${styles.hero} ${
    variant === "centered" ? styles.heroCentered : ""
  }`}
>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div
        className={`${styles.container} ${
          variant === "centered" ? styles.centeredContainer : ""
        }`}
      >
        <motion.div
          className={`${styles.left} ${
            variant === "centered" ? styles.centeredContent : ""
          }`}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>{badge}</span>

          <h1>
            {title}
            {highlight && <span> {highlight}</span>}
          </h1>

          <p>{description}</p>

          <div className={styles.buttons}>
            {primaryButton && (
              <button className={styles.primary} onClick={onPrimaryClick}>
                {primaryButton}
                <ArrowRight size={20} />
              </button>
            )}

            {secondaryButton && (
              <button className={styles.secondary} onClick={onSecondaryClick}>
                {secondaryButton}
              </button>
            )}
          </div>
        </motion.div>

        {variant === "split" && image && (
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.mainCard}>
              <img src={image} alt={title} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;