import { motion } from "framer-motion";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechNova Solutions",
    image: "/testimonials/client1.jpg",
    review:
      "Digital Foundation completely transformed our online presence. Their team delivered exactly what we envisioned and exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    company: "Elite Interiors",
    image: "/testimonials/client2.jpg",
    review:
      "Professional, responsive and highly skilled. From design to deployment, the entire process was smooth and transparent.",
  },
  {
    name: "Amit Verma",
    company: "NextGen Education",
    image: "/testimonials/client3.jpg",
    review:
      "Our website traffic and enquiries increased significantly after launching our new website. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <span className={styles.tag}>TESTIMONIALS</span>

        <h2>
          What Our <span>Clients Say</span>
        </h2>

        <p className={styles.subtitle}>
          We value every client relationship and strive to deliver exceptional
          results on every project.
        </p>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.review}>
                "{item.review}"
              </p>

              <div className={styles.user}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;