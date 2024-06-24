// pages/services.jsx (or your component file)

import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "@/styles/Home.module.css"; // Adjust the path based on your project structure
import cardData from "@/data/cardData"; // Ensure the path to cardData is correct

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };

    window.addEventListener("resize", updateCardsPerView);
    updateCardsPerView();

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cardData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + cardData.length) % cardData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (slideRef.current) {
      const totalCards = cardData.length;
      const transformValue = (100 / cardsPerView) * currentSlide;
      slideRef.current.style.transform = `translateX(-${transformValue}%)`;
    }
  }, [currentSlide, cardsPerView]);

  const generateCards = () => {
    const cards = [...cardData, ...cardData.slice(0, cardsPerView - 1)];
    return cards.map((card, index) => {
      const lineStyle =
        index % 2 === 0 ? styles.blueOverlayLine : styles.greenOverlayLine;
      return (
        <div key={index} className={styles.card}>
          <div
            className={styles.cardImage}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className={`${styles.overlay} ${lineStyle}`}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
          </div>
          <div className={styles.cardDescriptionContainer}>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div {...handlers} className={styles.sliderContainer}>
      <button onClick={handlePrevSlide} className={styles.navButton}>
        {"<"}
      </button>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={slideRef}>
          {generateCards()}
        </div>
      </div>
      <button onClick={handleNextSlide} className={styles.navButton}>
        {">"}
      </button>
    </div>
  );
};

export default Services;
