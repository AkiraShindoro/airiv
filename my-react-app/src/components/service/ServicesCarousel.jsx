import { useState } from "react";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";
import img4 from "../../assets/services/img4.png";
import img5 from "../../assets/services/img5.png";

function ServicesCarousel() {
  const items = [
    { image: img1, title: "Artificial Intelligence & Data Analytics" },
    { image: img2, title: "Cloud & Application Development" },
    { image: img3, title: "Enterprise Asset Management" },
    { image: img4, title: "Quality Assurance & Testing" },
    { image: img5, title: "Talent & Delivery Services" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < items.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <button onClick={prev} style={styles.arrow}>‹</button>

        <div style={styles.slider}>
          <div
            style={{
              ...styles.inner,
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >
            {items.map((item, i) => (
              <div key={i} style={styles.card}>
                <img src={item.image} alt="" style={styles.image} />
                <h3 style={styles.title}>{item.title}</h3>
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
    padding: "120px 80px",
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
    flex: "0 0 33.33%",
    background: "#ffffff",
    padding: "20px",
    marginRight: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "15px",
    borderRadius: "6px",
  },
  title: {
    fontSize: "16px",
  },
  arrow: {
    background: "#ffffff",
    border: "none",
    fontSize: "22px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};

export default ServicesCarousel;