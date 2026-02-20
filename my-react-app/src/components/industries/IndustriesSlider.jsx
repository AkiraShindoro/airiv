import { useState } from "react";
import slide1 from "../../assets/industries/sol1.png";
import slide2 from "../../assets/industries/sol2.png";
import slide3 from "../../assets/industries/sol3.png";
import slide4 from "../../assets/industries/sol4.png";
import slide5 from "../../assets/industries/sol5.png";


function IndustriesSlider() {
  const slides = [
    {
      image: slide1,
      title: "Insurance",
    },
    {
      image: slide2,
      title: "Utilities",
    },
    {
      image: slide3,
      title: "Healthcare",
    },
    {
      image: slide4,
      title: "Manufacturing",
    },
    {
      image: slide5,
      title: "Technology services",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <button onClick={prev} style={styles.arrow}>‹</button>

        <div style={styles.slider}>
          <div
            style={{
              ...styles.inner,
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div key={i} style={styles.card}>
                <img src={slide.image} style={styles.image} />
                <div style={styles.overlay}>
                  <h3>{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} style={styles.arrow}>›</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 80px",
    background: "#0b2a5c",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  slider: {
    overflow: "hidden",
    width: "100%",
  },
  inner: {
    display: "flex",
    transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  card: {
    minWidth: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  overlay: {
    position: "absolute",
    bottom: "20px",
    left: "30px",
    color: "#fff",
  },
  arrow: {
    background: "#ffffff",
    border: "none",
    fontSize: "24px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};

export default IndustriesSlider;