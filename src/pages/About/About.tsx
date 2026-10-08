import {
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Briefcase,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import PageHero from "../../components/PageHero/PageHero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContactModal } from "../../context/ContactModalContext";

import styles from "./About.module.scss";

const stats = [
  {
    icon: Briefcase,
    number: "150+",
    label: "Projects Delivered",
  },
  {
    icon: Trophy,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: Users,
    number: "20+",
    label: "Industry Experts",
  },
  {
    icon: Sparkles,
    number: "5+",
    label: "Years Experience",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technologies to deliver forward-thinking digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Every project is crafted with precision, performance, and long-term reliability in mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, ensuring transparency and shared success throughout the journey.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "Our focus is delivering measurable business outcomes that create lasting value.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
  },
  {
    name: "Sarah Wilson",
    role: "UI / UX Designer",
  },
  {
    name: "David Brown",
    role: "Full Stack Developer",
  },
  {
    name: "Emily Davis",
    role: "Digital Marketing Lead",
  },
];

const About = () => {
  const { openModal } = useContactModal();

  return (
    <>
      <Navbar />

      <PageHero
        variant="centered"
        badge="🏢 ABOUT US"
        title="Building Digital Experiences"
        highlight="That Inspire Growth."
        description="We partner with startups, businesses, and enterprises to create impactful digital products through strategy, design, development, and innovation."
        primaryButton="Our Services"
        secondaryButton="Contact Us"
        onSecondaryClick={() => openModal("query")}
      />

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.content}>
            <span>OUR STORY</span>

            <h2>Driven by Creativity. Powered by Technology.</h2>

            <p>
              We believe exceptional digital experiences are built through a
              combination of strategy, innovation, and flawless execution. Our
              team works closely with every client to transform ideas into
              scalable digital solutions.
            </p>

            <p>
              From websites and applications to branding and digital marketing,
              we create products that not only look great but also drive real
              business growth.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={styles.statCard}>
                  <Icon size={34} />

                  <h3>{item.number}</h3>

                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>Our Mission</h3>

            <p>
              Deliver innovative, scalable, and user-focused digital solutions
              that empower businesses to grow confidently.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Our Vision</h3>

            <p>
              Become a trusted digital partner recognized for creativity,
              quality, and long-term client success.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <span>OUR VALUES</span>

          <h2>What Drives Everything We Do</h2>

          <div className={styles.grid}>
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={styles.valueCard}>
                  <Icon size={38} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <span>OUR TEAM</span>

          <h2>Meet The Experts</h2>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.member}>
                <div className={styles.avatar}>
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <h3>{member.name}</h3>

                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <span>READY TO BUILD TOGETHER?</span>

          <h2>Let's Turn Your Vision Into Reality.</h2>

          <p>
            Partner with our experienced team to create digital solutions that
            inspire, engage, and grow your business.
          </p>

          <div className={styles.features}>
            <div>✓ Free Consultation</div>
            <div>✓ Transparent Pricing</div>
            <div>✓ Dedicated Team</div>
            <div>✓ Long-Term Support</div>
          </div>

          <button onClick={() => openModal("work")}>
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;