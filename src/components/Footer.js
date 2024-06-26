"use client";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import locationIcon from "../../public/icons/location-icon.svg";
import phoneIcon from "../../public/icons/phone-icon.svg";
import emailIcon from "../../public/icons/email-icon.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <ul className={styles.navLinks}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/leistungen">Leistungen</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
              <li>
                <a href="/impressum">Impressum</a>
              </li>
              <li>
                <a href="/datenschutz">Datenschutzerklärung</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.bgColorFooter}>
                  <Image
                    src={locationIcon}
                    alt="Location"
                    width={32}
                    height={32}
                  />
                </div>
                <p>Mariendorfer Damm 151, 12107 Berlin</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.bgColorFooter}>
                  <Image src={phoneIcon} alt="Phone" width={32} height={32} />
                </div>
                <p>+49 (0) 176 6410 3683</p>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.bgColorFooter}>
                  <Image src={emailIcon} alt="Email" width={32} height={32} />
                </div>
                <p>info@renamix-bauservice.de</p>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.footerLine} />
        <div className={styles.footerBottom}>
          <div className={styles.bottomColumn}>
            <p>Impressum</p>
            <p>Datenschutzerklärung</p>
          </div>
          <div className={styles.bottomColumn}>
            <p>Berlin</p>
            <p>24/7 erreichbar</p>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>Copyright © 2024 Renamix-Bau GmbH</p>
      </div>
    </>
  );
};

export default Footer;
