import { useState } from "react";
import slide1 from "../../assets/industries/insurance.jpg";
import slide2 from "../../assets/industries/utilities.jpg";
import slide3 from "../../assets/industries/healthcare.jpg";
import slide4 from "../../assets/industries/manufacturing.jpg";
import slide5 from "../../assets/industries/tech.jpg";

function IndustriesSlider() {
  const slides = [
    {
      image: slide1,
      title: "Insurance",
      desc: "Driving digital transformation for insurers through data modernization, risk analytics, and intelligent automation.",
    },
    {
      image: slide2,
      title: "Utilities",
      desc: "Optimizing asset performance, grid reliability, and operational efficiency across energy and water ecosystems.",
    },
    {
      image: slide3,
      title: "Healthcare",
      desc: "Enhancing patient experience, compliance, and system interoperability through secure digital platforms.",
    },
    {
      image: slide4,
      title: "Manufacturing",
      desc: "Enabling smart factories, predictive maintenance, and supply chain intelligence.",
    },
    {
      image: slide5,
      title: "Technology Services",
      desc: "Delivering scalable cloud, AI, and enterprise solutions to accelerate digital growth.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 3) {
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
      <h2 style={styles.heading}>INDUSTRIES WE SERVE</h2>

      <div style={styles.wrapper}>
        <button onClick={prev} style={styles.arrow}>‹</button>

        <div style={styles.slider}>
          <div
            style={{
              ...styles.inner,
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div key={i} style={styles.card}>
                <img src={slide.image} alt="" style={styles.image} />

                <div style={styles.content}>
                  <div style={styles.number}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 style={styles.title}>{slide.title}</h3>
                  <p style={styles.desc}>{slide.desc}</p>
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
    padding: "140px 120px",
    background: "#ffffff",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "60px",
    color: "#0b2a5c",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  slider: {
    overflow: "hidden",
    width: "100%",
  },

  inner: {
    display: "flex",
    transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
  },

  card: {
    flex: "0 0 33.33%",   // 👈 3 visible
    padding: "20px",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "20px",
  },

  content: {
    padding: "10px",
  },

  number: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#999",
    marginBottom: "5px",
  },

  title: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#0b2a5c",
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#444",
  },

  arrow: {
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    fontSize: "28px",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "8px",
  },
};

export default IndustriesSlider;