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
        <Image src={logo} alt="Renamix Logo" width={100} height={40} />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <a
          href="#home"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "home")}
        >
          Home
        </a>
        <a
          href="#leistungen"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "leistungen")}
        >
          Leistungen
        </a>
        <a
          href="#kontakt"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "kontakt")}
        >
          Kontakt
        </a>
        <a
          href="#impressum"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "impressum")}
        >
          Impressum
        </a>
        <a
          href="#datenschutz"
          className={styles.navLink}
          onClick={(e) => handleNavLinkClick(e, "datenschutz")}
        >
          Datenschutzerklärung
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
