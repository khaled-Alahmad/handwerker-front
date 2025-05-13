import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const Appointment = () => {
  const router = useRouter();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [appointmentType, setAppointmentType] = useState("individual");
  const [useCustomerAddress, setUseCustomerAddress] = useState(false);

  useEffect(() => {
    if (!canSubmit) {
      const timer = setTimeout(() => {
        setCanSubmit(true);
      }, 60000); // 1 minute

      return () => clearTimeout(timer);
    }
  }, [canSubmit]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // دمج الصور الجديدة مع الصور القديمة
    const newSelectedImages = [...selectedImages, ...files];
    setSelectedImages(newSelectedImages);

    // دمج العروض المصغرة الجديدة مع العروض المصغرة القديمة
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveImage = (index) => {
    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit) {
      toast.warn("Sie können das Formular nur einmal pro Minute senden.");
      return;
    }

    const date = event.target.customer_date.value;
    const timeStart = event.target.customer_date_start.value;
    const timeEnd = event.target.customer_date_end.value;
    if (!date || !timeStart || !timeEnd) {
      toast.error("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }

    setIsFormSubmitting(true);
    const formData = new FormData(event.target);

    const customerDateTimeStart = `${date} ${timeStart}:00`;
    const customerDateTimeEnd = `${date} ${timeEnd}:00`;

    formData.set("customer_date", customerDateTimeStart);
    formData.set("customer_date_end", customerDateTimeEnd);
    formData.set("type", appointmentType);
    formData.set("gender", "male");

    if (appointmentType === "company") {
      formData.set("customer_address", useCustomerAddress)
      formData.set("work_address", JSON.stringify({
        customer_address: useCustomerAddress,
        city: event.target.work_state?.value || "",
        address: event.target.work_address?.value || "",
        zip_code: event.target.work_zip_code?.value || "",
      }));
    }


    selectedImages.forEach((image, i) => {
      formData.append(`images[${i}]`, image);
    });
    // add log formData
    // Log FormData entries
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    try {
      const response = await axios
        .post(
          "https://backend.ihr-handwerkers.com/api/orders/send_form",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {



          toast.success("Termin erfolgreich vereinbart!")
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error!");
        });
      console.log("Response:", response);
      event.target.reset(); // Clear the form data
      setCanSubmit(false); // Disable form submission for 1 minute
      router.push("/#top");
      setSelectedImages([]);
      setImagePreviews([]);

    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Fehler beim Senden des Formulars");
    } finally {
      setIsFormSubmitting(false);
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
              <label htmlFor="type">Typ<span className={styles.required}> *</span></label>
              <select
                id="type"
                name="type"
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
                required
              >
                <option value="individual">Privat</option>
                <option value="company">Firma</option>
              </select>
            </div>
            {appointmentType === "company" && (
              <>
                {/* <div className={styles.formGroup}>
                  <label htmlFor="invoice_number">
                    Rechnungsnummer
                    <span className={styles.required}> *</span>
                  </label>
                  <input
                    type="text"
                    id="invoice_number"
                    name="invoice_number"
                    required
                    placeholder="Rechnungsnummer"
                  />
                </div> */}

                <div className={styles.formGroup2}>
                  <label >
                    Auftrag ort
                  </label>
                  <input
                    type="checkbox"
                    style={{ marginLeft: "1rem", height: "20px", width: "20px", marginTop: "0.5rem", marginBottom: "0.5rem", marginLeft: "1rem", marginRight: "1rem", border: "1px solid #ccc", borderRadius: "50%", backgroundColor: "#fff", cursor: "pointer", transition: "background-color 0.3s", }}
                    checked={useCustomerAddress}
                    onChange={(e) => setUseCustomerAddress(e.target.checked)}
                  />
                </div>

                {useCustomerAddress && (
                  <>
                    <div className={styles.formGroup}>
                      <label htmlFor="work_address">
                        Arbeitsadresse
                        <span className={styles.required}> *</span>
                      </label>
                      <input
                        type="text"
                        id="work_address"
                        name="work_address"
                        required
                        placeholder="Arbeitsadresse"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="work_state">
                        Arbeitsstadt
                        <span className={styles.required}> *</span>
                      </label>
                      <input
                        type="text"
                        id="work_state"
                        name="work_state"
                        required
                        placeholder="Stadt"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="work_zip_code">
                        Arbeits-PLZ
                        <span className={styles.required}> *</span>
                      </label>
                      <input
                        type="text"
                        id="work_zip_code"
                        name="work_zip_code"
                        required
                        placeholder="PLZ"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="work_country">
                        Arbeitsland
                        <span className={styles.required}> *</span>
                      </label>
                      <input
                        type="text"
                        id="work_country"
                        name="work_country"
                        required
                        placeholder="Land"
                      />
                    </div>
                  </>
                )}
              </>
            )}
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
                placeholder="+49xxxxxxxx"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email
                {/* <span className={styles.required}> *</span> */}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              // required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="customer_date">
                Datum
                <span className={styles.required}> *</span>
              </label>
              <input
                placeholder=""
                id="customer_date"
                type="date"
                // onFocus={(e) => (e.target.type = "datetime-local")}
                // onBlur={(e) => (e.target.type = "text")}
                name="customer_date"
                required
              />
            </div>
            <div
              className={styles.formGroup}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div style={{ width: "50%" }}>
                <label htmlFor="customer_date">
                  Von
                  <span className={styles.required}> *</span>
                </label>
                <input
                  placeholder=""
                  id="customer_date_start"
                  type="time"
                  // type="datetime-local"
                  // onFocus={(e) => (e.target.type = "datetime-local")}
                  // onBlur={(e) => (e.target.type = "text")}
                  name="customer_date_start"
                  required
                />
              </div>
              <div style={{ width: "50%", marginLeft: "1rem" }}>
                <label htmlFor="customer_date">
                  Bis
                  <span className={styles.required}> *</span>
                </label>
                <input
                  placeholder=""
                  id="customer_date_end"
                  type="time"
                  // type="datetime-local"
                  // onFocus={(e) => (e.target.type = "datetime-local")}
                  // onBlur={(e) => (e.target.type = "text")}
                  name="customer_date_end"
                  required
                />
              </div>
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
                placeholder="Strabe, Hausnummer"
              />
            </div>
            {/* <div className={styles.formGroup}>
              <label htmlFor="city">
                Straße
                <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="straße"
              />
            </div> */}
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
                {/* <span className={styles.required}> *</span> */}
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea"
                rows="3"
                // required
                aria-expanded={false}
                placeholder="Beschreibung"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="images">Bilder</label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="images" className={styles.customFileInput}>
                Bilder auswählen...
              </label>
            </div>
            <div className={styles.imagePreviewContainer}>
              {imagePreviews.map((preview, index) => (
                <div key={index} className={styles.imagePreview}>
                  <img src={preview} alt={`Preview ${index}`} />
                  <button
                    type="button"
                    className={styles.removeImageButton}
                    onClick={() => handleRemoveImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={styles.heroButton}
              style={{ maxWidth: "70%", margin: "auto", textAlign: "center" }}
              disabled={isFormSubmitting}
            >
              {isFormSubmitting ? "Bitte warten..." : "Termin vereinbaren"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
