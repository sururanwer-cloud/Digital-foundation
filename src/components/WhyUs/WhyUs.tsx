import { motion } from "framer-motion";
import {
  Award,
  Users,
  BriefcaseBusiness,
  Headset,
} from "lucide-react";
import styles from "./WhyUs.module.scss";

const features = [
  {
    icon: <Award size={34} />,
    title: "15+ Years of Excellence",
    description:
      "A proven track record of delivering high-quality digital solutions for businesses across multiple industries.",
  },
  {
    icon: <Users size={34} />,
    title: "Experienced Team",
    description:
      "Our designers, developers and marketers collaborate to build solutions that drive measurable results.",
  },
  {
    icon: <BriefcaseBusiness size={34} />,
    title: "500+ Successful Projects",
    description:
      "From startups to established businesses, we've delivered websites and digital products that make an impact.",
  },
  {
    icon: <Headset size={34} />,
    title: "Dedicated Support",
    description:
      "We stay with you even after launch through maintenance, updates and continuous support.",
  },
];

const WhyUs = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>WHY CHOOSE US</span>

          <h2>
            Why Businesses Choose <span>Digital Foundation</span>
          </h2>

          <p className={styles.description}>
            We combine creativity, strategy and technology to build digital
            experiences that help businesses grow. Every project is delivered
            with quality, transparency and long-term support.
          </p>

          <div className={styles.showcase}>
            <div className={styles.showcaseBlurOne}></div>
            <div className={styles.showcaseBlurTwo}></div>

            <div className={styles.showcaseBadge}>
              <Award size={30} />
            </div>

            <h3 className={styles.showcaseStat}>15+</h3>
            <p className={styles.showcaseLabel}>Years Of Industry Excellence</p>

            <div className={styles.showcaseDivider}></div>

            <div className={styles.showcaseMiniStats}>
              <div>
                <span>500+</span>
                <p>Projects Delivered</p>
              </div>

              <div>
                <span>98%</span>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{feature.icon}</div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;