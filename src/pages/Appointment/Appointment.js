import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const Appointment = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // If you have files to upload, make sure to append them to formData
    // Example:
    // const images = document.querySelector('input[name="images[]"]').files;
    // for (let i = 0; i < images.length; i++) {
    //   formData.append("images[]", images[i]);
    // }

    try {
      const response = await axios
        .post(
          "https://handwerker.promotion22.com/api/orders/send_form",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          toast.success("Termin erfolgreich vereinbart!");
        })
        .catch(() => {
          toast.error("Fehler beim Senden des Formulars");
        });
      router.push("/");
    } catch (error) {
      toast.error("Netzwerkfehler");
    }
  };

  return (
    <section className={styles.appointmentSection}>
      <ToastContainer />
      <h2>Jetzt Termin vereinbaren</h2>
      <div className={styles.appointmentContainer}>
        <div className={styles.formContainer}>
          <form className={styles.appointmentForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="first_name">
                Vorname
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                placeholder="Vorname"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="last_name">
                Nachname
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                placeholder="Nachname"
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
              <label htmlFor="customer_date">
                Datum
                <span className={styles.required}> *</span>
              </label>
              <input
                type="date"
                id="customer_date"
                name="customer_date"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">
                Adresse
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Otr, Strabe, Hausnummer"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="city">
                Stadt
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="Stadt"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="state">
                Staat
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                required
                placeholder="Staat"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="zip_code">
                PLZ
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                required
                placeholder="PLZ"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="country">
                Land
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                placeholder="Land"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description">
                Beschreibung
                <span className={styles.required}> *</span>
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea"
                rows="3"
                required
                aria-expanded={false}
                placeholder="Beschreibung"
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.heroButton}
              style={{ maxWidth: "70%", margin: "auto", textAlign: "center" }}
            >
              Termin vereinbaren
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
