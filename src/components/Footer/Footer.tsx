import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Digital Foundation" />

            <h2>
              DIGITAL <span>FOUNDATION</span>
            </h2>

            <p>
              Helping businesses grow through innovative websites, branding,
              digital marketing and custom software solutions.
            </p>

            <div className={styles.socials}>
  <a href="#">
    <FaFacebookF size={20} />
  </a>

  <a href="#">
    <FaInstagram size={20} />
  </a>

  <a href="#">
    <FaLinkedinIn size={20} />
  </a>
</div>
          </div>

          <div>
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h3>Services</h3>

            <a href="#">Website Development</a>
            <a href="#">UI / UX Design</a>
            <a href="#">Digital Marketing</a>
            <a href="#">SEO</a>
            <a href="#">Brand Identity</a>
          </div>

          <div>
            <h3>Contact</h3>

            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>info@digitalfoundation.in</span>
            </div>

            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>India</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Digital Foundation. All Rights Reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;