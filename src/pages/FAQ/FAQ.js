"use client";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import arrowBottom from "../../../public/icons/arrow-bottom.svg";
import arrowUp from "../../../public/icons/arrow-up.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Wie kann ich einen Termin vereinbaren?",
      answer:
        "Sie können einen Termin telefonisch oder online über unser Kontaktformular vereinbaren.",
    },
    {
      question: "Welche Dienstleistungen bieten Sie an?",
      answer:
        "Wir bieten eine breite Palette von elektrischen Dienstleistungen, einschließlich Installation von Einbaugeräten, Beleuchtung, Gewerbereinigung, Laminatverlegung und Hausmeisterservice.",
    },
    {
      question: "Sind Ihre Elektriker qualifiziert?",
      answer:
        "Ja, unsere Elektriker sind zertifiziert und haben jahrelange Erfahrung in der Branche.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2>Warum wir?</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`${styles.faqItem} `}>
          <button
            className={`${styles.faqQuestion} ${
              activeIndex === index ? styles.faqAnswerColor : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span className={styles.iconFac}>
              {activeIndex === index ? (
                <Image
                  src={arrowUp}
                  alt=""
                  width={42}
                  height={42}
                  style={{ marginRight: "0.5rem" }}
                />
              ) : (
                <Image
                  src={arrowBottom}
                  alt=""
                  width={42}
                  height={42}
                  style={{ marginRight: "0.5rem" }}
                />
              )}
            </span>
            {faq.question}
          </button>
          <div
            className={`${styles.faqAnswer} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
