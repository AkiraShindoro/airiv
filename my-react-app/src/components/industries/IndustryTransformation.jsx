import { useState } from "react";
import img1 from "../../assets/industries/tol1.png";
import img2 from "../../assets/industries/tol2.png";
import img3 from "../../assets/industries/tol3.png";
import img4 from "../../assets/industries/tol4.png";
import img5 from "../../assets/industries/tol5.png";

function IndustryTransformation() {
  const items = [
    { image: img1, title: "Digital Modernization of Legacy systems" },
    { image: img2, title: "Data driven decision enablement" },
    { image: img3, title: "Automation of critical business processes" },
    { image: img4, title: "Operational Resilience & scalability" },
    { image: img5, title: "Secure & compliant technology foundations" },
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
      <h2 style={styles.heading}>INDUSTRY TRANSFORMATION</h2>

      <p style={styles.intro}>
        We help organizations accelerate transformation through intelligent
        technologies and strategic modernization initiatives.
      </p>

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
    background: "#ffffff",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#0b2a5c",
  },
  intro: {
    maxWidth: "700px",
    margin: "0 auto 60px",
    color: "#555",
    lineHeight: "1.7",
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
    background: "#f4f6f9",
    padding: "30px",
    marginRight: "20px",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "20px",
    borderRadius: "6px",
  },
  title: {
    marginBottom: "10px",
  },
  arrow: {
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    fontSize: "22px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};

export default IndustryTransformation;