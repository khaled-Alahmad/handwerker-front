"use client";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import contactImage from "@/images/contact-us-image.png";
import locationIcon from "../../../public/icons/location-icon.svg";
import phoneIcon from "../../../public/icons/phone-icon.svg";
import emailIcon from "../../../public/icons/email-icon.svg";
import phoneBtnIcon from "@/images/phone.svg";

const Appointment = () => {
  return (
    <section className={styles.appointmentSection}>
      <h2>Jetzt Termin vereinbaren</h2>
      <div className={styles.appointmentContainer}>
        <div className={styles.formContainer}>
          <form className={styles.appointmentForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                Name
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Telefonnummer
                <span className={styles.required}> *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefonnummer"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email
                <span className={styles.required}> *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">
                Anliegen
                <span className={styles.required}> *</span>
              </label>
              <select id="service" name="service" required>
                <option className={styles.inactive} disabled>
                  Elektriker
                </option>
                <option value="lighting">Beleuchtung</option>
                <option value="cleaning">Gewerbereinigung</option>
                <option value="flooring">Laminatverlegung</option>
                <option value="maintenance">Hausmeisterservice</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                Adresse
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="Adresse"
                name="Adresse"
                required
                placeholder="Otr, Strabe, Hausnummer"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">
                Nachricht
                <span className={styles.required}> *</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Nachricht"
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Termin vereinbaren
            </button>
          </form>
        </div>
        {/* <div className={styles.imageContainer}>
          <Image src={contactImage} alt="Contact Us" />
        </div> */}
      </div>
    </section>
  );
};

export default Appointment;
