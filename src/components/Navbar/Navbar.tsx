import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useBookCallModal } from "../../context/BookCallModalContext";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { openModal } = useBookCallModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Digital Foundation" />

          <div className={styles.logoText}>
            <h2>
              DIGITAL <span>FOUNDATION</span>
            </h2>

            <p>15+ Years of Excellence</p>
          </div>
        </Link>

        <nav className={`${styles.nav} ${mobileOpen ? styles.show : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/portfolio" onClick={closeMenu}>
            Portfolio
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <button
            onClick={() => {
              closeMenu();
              openModal();
            }}
          >
            Book a Call
          </button>
        </nav>

        <button
          className={styles.mobileBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;