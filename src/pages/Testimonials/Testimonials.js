"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "@/styles/Home.module.css";

const testimonialsData = [
  {
    id: 1,
    rating: 4.5,
    text: "Innerhalb von 30 Minuten waren die Elektriker und Meister da. Die Arbeit wurde in 15 Minuten erledigt. Super Arbeit, vielen Dank!",
  },
  {
    id: 2,
    rating: 5,
    text: "Der Elektromeister Rami hat unseren Schaden in kürzester Zeit sehr kompetent und freundlich repariert. Es war ein Notfall und daher ziemlich teuer. Trotzdem unbedingt zu empfehlen.",
  },
  {
    id: 3,
    rating: 5,
    text: "Super höflich und nett. Erfahrung und voller Respekt. Nur empfehlenswert.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipeDirection("left");
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwipeDirection("left");
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    },
    onSwipedRight: () => {
      setSwipeDirection("right");
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + testimonialsData.length) % testimonialsData.length
      );
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className={styles.testimonialsSection}>
      <h2>Das sagen unsere Kunden</h2>
      <div
        {...handlers}
        className={`${styles.sliderTestimonial} ${styles[swipeDirection]}`}
      >
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`${styles.testimonial} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <div className={styles.rating}>
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`${styles.star} ${
                    i < Math.floor(testimonial.rating) ? styles.filled : ""
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <span className={styles.ratingValue}>{testimonial.rating}/5</span>
            <p className={styles.testimonialsText}>{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
