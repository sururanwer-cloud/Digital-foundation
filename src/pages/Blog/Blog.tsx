import { useState } from "react";
import { motion } from "framer-motion";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Palette,
  Globe,
  ChartNoAxesColumn,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHero from "../../components/PageHero/PageHero";
import { useContactModal } from "../../context/ContactModalContext";

import styles from "./Blog.module.scss";

const categories = ["All", "Web Design", "SEO", "Marketing", "Branding"] as const;

type Category = (typeof categories)[number];

const featuredPost = {
  category: "Web Design",
  date: "Aug 10, 2026",
  readTime: "6 min read",
  title: "10 Website Design Trends That Will Define 2026",
  excerpt:
    "From bold typography to AI-assisted personalization, discover the design trends helping brands stand out and convert more visitors this year.",
  author: "Sarah Wilson",
};

const posts: {
  title: string;
  category: Exclude<Category, "All">;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  icon: typeof Globe;
}[] = [
  {
    title: "How to Choose the Right E-Commerce Platform",
    category: "Web Design",
    excerpt:
      "A practical guide to comparing platforms based on scalability, cost, and customer experience.",
    date: "Aug 4, 2026",
    readTime: "5 min read",
    author: "David Brown",
    icon: Globe,
  },
  {
    title: "On-Page SEO Checklist for 2026",
    category: "SEO",
    excerpt:
      "The essential on-page factors that still move the needle for search rankings this year.",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    author: "Emily Davis",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Building a Brand Identity That Lasts",
    category: "Branding",
    excerpt:
      "Why consistency, not novelty, is the real driver of memorable, trustworthy brands.",
    date: "Jul 19, 2026",
    readTime: "4 min read",
    author: "Sarah Wilson",
    icon: Palette,
  },
  {
    title: "Turning Website Traffic Into Qualified Leads",
    category: "Marketing",
    excerpt:
      "Simple conversion rate optimization tactics that compound over time.",
    date: "Jul 11, 2026",
    readTime: "6 min read",
    author: "John Smith",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Design Systems 101: A Beginner's Guide",
    category: "Web Design",
    excerpt:
      "How a shared design system speeds up delivery and keeps products consistent as they scale.",
    date: "Jul 2, 2026",
    readTime: "5 min read",
    author: "David Brown",
    icon: Sparkles,
  },
  {
    title: "Social Media Strategy for Small Businesses",
    category: "Marketing",
    excerpt:
      "A lean, repeatable approach to growing an audience without a large marketing budget.",
    date: "Jun 24, 2026",
    readTime: "6 min read",
    author: "Emily Davis",
    icon: ChartNoAxesColumn,
  },
];

interface NewsletterForm {
  email: string;
}

const Blog = () => {
  const { openModal } = useContactModal();
  const [active, setActive] = useState<Category>("All");
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>();

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  const onSubscribe: SubmitHandler<NewsletterForm> = () => {
    setSubscribed(true);
    reset();
  };

  return (
    <>
      <Navbar />

      <PageHero
        variant="centered"
        badge="📝 OUR BLOG"
        title="Insights & Ideas"
        highlight="That Matter."
        description="Practical articles on web design, development, SEO, and digital marketing to help you grow your business online."
        primaryButton="Explore Articles"
        secondaryButton="Contact Us"
        onSecondaryClick={() => openModal("query")}
      />

      <section className={styles.featured}>
        <div className={styles.container}>
          <motion.div
            className={styles.featuredCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.featuredThumb}>
              <Sparkles size={54} />
            </div>

            <div className={styles.featuredBody}>
              <span className={styles.category}>{featuredPost.category}</span>

              <h2>{featuredPost.title}</h2>

              <p>{featuredPost.excerpt}</p>

              <div className={styles.meta}>
                <span>
                  <Calendar size={16} />
                  {featuredPost.date}
                </span>

                <span>
                  <Clock size={16} />
                  {featuredPost.readTime}
                </span>

                <span>By {featuredPost.author}</span>
              </div>

              <button className={styles.readMore}>
                Read Full Article
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <span>Latest Articles</span>

            <h2>
              Fresh Perspectives On
              <br />
              Design, Dev & Growth
            </h2>
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
            {filtered.map((post) => {
              const Icon = post.icon;

              return (
                <motion.article
                  key={post.title}
                  className={styles.card}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.thumb}>
                    <Icon size={38} />
                  </div>

                  <div className={styles.cardBody}>
                    <span className={styles.category}>{post.category}</span>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <div className={styles.meta}>
                      <span>
                        <Calendar size={14} />
                        {post.date}
                      </span>

                      <span>
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <a className={styles.readLink}>
                      Read More
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.container}>
          <motion.div
            className={styles.newsletterCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.newsletterLeft}>
              <span className={styles.badge}>STAY UPDATED</span>

              <h2>
                Never Miss An
                <br />
                Industry Update
              </h2>

              <p>
                Subscribe to our newsletter and get the latest articles on
                design, development, and digital marketing straight to your
                inbox.
              </p>
            </div>

            <div className={styles.newsletterRight}>
              {subscribed ? (
                <p className={styles.success}>
                  🎉 Thanks for subscribing! Check your inbox soon.
                </p>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit(onSubscribe)}
                  noValidate
                >
                  <div className={styles.field}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />

                    <button type="submit">
                      Subscribe
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
