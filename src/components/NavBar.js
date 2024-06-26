"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import menuIcon from "../images/menu.svg"; // Add a menu icon image
import closeIcon from "../images/close.svg"; // Add a close icon image
import styles from "../styles/Home.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu if it's open
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Renamix Logo" width={70} height={40} />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a
          href="#about"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "about")}
        >
          Über uns
        </a>
        <a
          href="#leistungen"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "leistungen")}
        >
          Leistungen
        </a>
        <a
          href="#whyUs"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "whyUs")}
        >
          Warum wir
        </a>
        <a
          href="#testimonials"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "testimonials")}
        >
          Kundenbewertungen
        </a>
        <a
          href="#faq"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "faq")}
        >
          Warum wir
        </a>
        <a
          href="#contact"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "contact")}
        >
         kontakt
        </a>
        <a
          href="#appointment"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "appointment")}
        >
         Termin
        </a>
      </nav>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Image
          src={isOpen ? closeIcon : menuIcon}
          alt="Menu Icon"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
}
