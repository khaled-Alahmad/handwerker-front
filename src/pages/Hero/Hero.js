"use client";
import phoneIcon from "@/images/phone.svg";

import Image from "next/image";

import styles from "@/styles/Home.module.css";

export default function Hero() {
  return (
    <main className={styles.main}>
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
          <a href="#termin" className={styles.heroButton}>
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
