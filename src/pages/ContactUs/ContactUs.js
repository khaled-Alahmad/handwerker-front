"use client";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import contactImage from "@/images/contact-us-image.png";
import locationIcon from "../../../public/icons/location-icon.svg";
import phoneIcon from "../../../public/icons/phone-icon.svg";
import emailIcon from "../../../public/icons/email-icon.svg";
import phoneBtnIcon from "@/images/phone.svg";

const ContactUs = () => {
  return (
    <section className={styles.contactUsSection}>
      <h2>Kontaktieren Sie uns</h2>
      <div className={styles.contactUsInfo}>
        <div className={styles.contactUsInfoImage}>
          <Image
            src={contactImage}
            alt=""
            width={`100%`}
            height={`100%`}
            // style={{ marginRight: "0.5rem" }}
          />
        </div>{" "}
        <div className={styles.contactUsInfoData}>
          <div className={styles.contactUsInfoDataLocation}>
            <span className={styles.contactUsBgIcon}>
              <Image src={locationIcon} alt="" width={64} height={64} />
            </span>
            <span className={styles.locationContent}>
              Mariendorfer Damm 151, 12107 Berlin
            </span>
          </div>
          <div className={styles.contactUsInfoDataLocation}>
            <span className={styles.contactUsBgIcon}>
              <Image src={phoneIcon} alt="" width={24} height={24} />
            </span>
            <a href="tel:+4917664103683" className={styles.locationContent}>
              +49 (0) 176 6410 3683
            </a>
          </div>
          <div className={styles.contactUsInfoDataLocation}>
            <span className={styles.contactUsBgIcon}>
              <Image src={emailIcon} alt="" width={24} height={24} />
            </span>
            <a className={styles.locationContent}>info@renamix-bauservice.de</a>
          </div>
          <a
            href="#termin"
            className={styles.heroButton}
            style={{ width: "fit-content" }}
          >
            <Image
              src={phoneBtnIcon}
              alt="Phone Icon"
              width={24}
              height={24}
              style={{ marginRight: "0.5rem" }}
            />
            Jetzt Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
