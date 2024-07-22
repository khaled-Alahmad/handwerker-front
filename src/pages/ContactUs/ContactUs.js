"use client";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import contactImage from "@/images/contact-us-image.png";
import locationIcon from "../../../public/icons/location-icon.svg";
import phoneIcon from "../../../public/icons/phone-icon.svg";
import emailIcon from "../../../public/icons/email-icon.svg";
import phoneBtnIcon from "@/images/phone.svg";

const ContactUs = () => {
  const router = useRouter();

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  const handleLocationClick = (address) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className={styles.contactUsSection}>
      <h2>Kontaktieren Sie uns</h2>
      <div className={styles.contactUsInfo}>
        <div className={styles.contactUsInfoImage}>
          <Image src={contactImage} alt="" width={`100%`} height={`100%`} />
        </div>
        <div className={styles.contactUsInfoData}>
          <div className={styles.contactUsInfoDataLocation}>
            <span className={styles.contactUsBgIcon}>
              <Image src={locationIcon} alt="" width={64} height={64} />
            </span>
            <span
              className={styles.locationContent}
              onClick={() =>
                handleLocationClick("Mariendorfer Damm 151, 12107 Berlin")
              }
              style={{ cursor: "pointer" }}
            >
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
            <a
              className={styles.locationContent}
              href="mailto:info@renamix-bauservice.de"
            >
              info@renamix-bauservice.de
            </a>
          </div>
          <a
            href="#appointment"
            className={styles.heroButton}
            style={{ width: "fit-content" }}
            onClick={(e) => handleNavLinkClick(e, "appointment")}
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
