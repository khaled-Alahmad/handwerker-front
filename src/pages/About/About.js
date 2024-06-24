// pages/index.js

import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.aboutTitle}>Über uns</h3>
      <p className={styles.aboutDescription}>
        Wir sind RENAMIX BAUSERVICE GmbH, Ihr zuverlässiger Partner für alle
        elektrischen Dienstleistungen in Berlin. Mit einem erfahrenen Team von
        Facharbeitern garantieren wir einen reibungslosen Ablauf und saubere
        Arbeit. Kundenzufriedenheit steht bei uns an erster Stelle.
      </p>
    </section>
  );
}
