"use client";
import phoneIcon from "@/images/phone.svg";

import Image from "next/image";

import styles from "@/styles/Home.module.css";

export default function Hero() {
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    // setIsOpen(false); // Close the menu if it's open
  };
  return (
    <main className={styles.main} id="home">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Ihr Partner für alle elektrischen Bedürfnisse.
          </h1>
          <p>
            Wir bieten hochqualitative Elektriker-Dienstleistungen für Ihr
            Zuhause. Erfahrene Profis, schnelle Reaktionszeiten und faire
            Preise.
          </p>
          <a
            href="#appointment"
            className={styles.heroButton}
            onClick={(e) => handleNavLinkClick(e, "appointment")}
          >
            <Image
              src={phoneIcon}
              alt="Phone Icon"
              width={24}
              height={24}
              style={{ marginRight: "0.5rem" }}
            />
            Jetzt Termin vereinbaren
          </a>
        </div>
      </section>
    </main>
  );
}
