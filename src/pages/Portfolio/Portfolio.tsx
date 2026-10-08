import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  ShoppingCart,
  ChartNoAxesColumn,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Building2,
  Trophy,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/PageHero/PageHero";
import { useContactModal } from "../../context/ContactModalContext";

import styles from "./Portfolio.module.scss";

const categories = ["All", "Web Design", "E-Commerce", "Branding", "Marketing"] as const;

type Category = (typeof categories)[number];

const projects: {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  icon: typeof Globe;
  tags: string[];
}[] = [
  {
    title: "NovaTech Solutions",
    category: "Web Design",
    description:
      "A complete corporate website redesign focused on clarity, speed, and lead generation.",
    icon: Globe,
    tags: ["React", "UI/UX", "SEO"],
  },
  {
    title: "Elite Interiors",
    category: "Branding",
    description:
      "Full brand identity including logo design, colour system, and print collateral.",
    icon: Palette,
    tags: ["Branding", "Identity", "Print"],
  },
  {
    title: "UrbanCart",
    category: "E-Commerce",
    description:
      "A scalable online store with secure checkout, inventory sync, and optimized UX.",
    icon: ShoppingCart,
    tags: ["E-Commerce", "Payments", "UX"],
  },
  {
    title: "FitPro Gym",
    category: "Web Design",
    description:
      "A conversion-focused website with class scheduling and online membership booking.",
    icon: Globe,
    tags: ["React", "Booking", "Responsive"],
  },
  {
    title: "GreenLeaf Organics",
    category: "E-Commerce",
    description:
      "An organic goods marketplace built for growth with a streamlined shopping journey.",
    icon: ShoppingCart,
    tags: ["Shopify", "Inventory", "UX"],
  },
  {
    title: "NextGen Education",
    category: "Marketing",
    description:
      "A data-driven SEO and digital marketing campaign that grew qualified enquiries.",
    icon: ChartNoAxesColumn,
    tags: ["SEO", "Ads", "Analytics"],
  },
  {
    title: "Prime Realty",
    category: "Web Design",
    description:
      "A property listings platform with map search, filters, and agent profiles.",
    icon: Globe,
    tags: ["React", "Maps API", "SEO"],
  },
  {
    title: "Bloom Bakery",
    category: "Branding",
    description:
      "Playful brand identity and packaging design built to stand out on shelf and online.",
    icon: Palette,
    tags: ["Branding", "Packaging", "Social"],
  },
  {
    title: "Coastal Fitness Co.",
    category: "Marketing",
    description:
      "A multi-channel marketing campaign that grew brand awareness and online bookings.",
    icon: ChartNoAxesColumn,
    tags: ["Social Ads", "SEO", "Analytics"],
  },
];

const stats = [
  { icon: Briefcase, number: "150+", label: "Projects Delivered" },
  { icon: TrendingUp, number: "+320%", label: "Avg. Lead Increase" },
  { icon: Building2, number: "25+", label: "Industries Served" },
  { icon: Trophy, number: "98%", label: "Client Satisfaction" },
];

const Portfolio = () => {
  const { openModal } = useContactModal();
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      <PageHero
        variant="centered"
        badge="💼 OUR PORTFOLIO"
        title="Work That Speaks"
        highlight="For Itself."
        description="A showcase of websites, brands, and digital products we've built to help businesses grow, convert, and stand out in competitive markets."
        primaryButton="Start Your Project"
        secondaryButton="Contact Us"
        onPrimaryClick={() => openModal("work")}
        onSecondaryClick={() => openModal("query")}
      />

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={styles.statCard}>
                  <Icon size={30} />
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <span>Our Work</span>

            <h2>
              Recent Projects
              <br />
              We're Proud Of
            </h2>

            <p>
              Explore a selection of our work across web design, e-commerce,
              branding, and digital marketing — each built around real
              business goals.
            </p>
          </div>

          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  active === category ? styles.filterActive : ""
                }`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((project) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
                  className={styles.card}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.thumb}>
                    <Icon size={44} />

                    <div className={styles.overlay}>
                      <span>
                        View Project
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.category}>{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              <span className={styles.badge}>HAVE A PROJECT IN MIND?</span>

              <h2>
                Let's Create Your
                <br />
                Next Success Story
              </h2>

              <p>
                Join 150+ businesses that trusted us to bring their vision to
                life. Let's discuss how we can help you achieve similar
                results.
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

export default Portfolio;
