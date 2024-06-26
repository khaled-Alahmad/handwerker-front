// components/WhyUs.js
import Image from "next/image";
import styles from "@/styles/Home.module.css"; // Adjust path based on your file structure

const WhyUs = () => {
  const reasons = [
    {
      id: 1,
      icon: "/icons/experienced.svg", // Adjust the path to your icon
      title: "Erfahrene Fachkräfte",
      description:
        "Unser Team besteht aus qualifizierten und erfahrenen Elektrikern.",
    },
    {
      id: 2,
      icon: "/icons/fast-response.svg", // Adjust the path to your icon
      title: "Schnelle Reaktionszeiten",
      description: "Wir sind 24/7 für Sie erreichbar.",
    },
    {
      id: 3,
      icon: "/icons/fair-prices.svg", // Adjust the path to your icon
      title: "Faire Preise",
      description: "Wir bieten transparente und wettbewerbsfähige Preise.",
    },
    {
      id: 4,
      icon: "/icons/fair-prices.svg", // Adjust the path to your icon
      title: "Faire Preise",
      description: "Wir bieten transparente und wettbewerbsfähige Preise.",
    },
  ];

  return (
    <section className={styles.whyUsSection} id="whyUs">
      <h2>Warum wir?</h2>
      <div className={styles.reasons}>
        {reasons.map((reason) => (
          <div key={reason.id} className={styles.reason}>
            <div className={styles.whyImgSection}>
              {/* <img src={reason.icon} alt={reason.title} /> */}
              <Image
                src={reason.icon}
                alt={reason.title}
                width={48} // Adjust width as needed
                height={48} // Adjust height as needed
              />
            </div>
            <div className={styles.whyTextSection}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
