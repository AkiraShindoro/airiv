import { useState } from "react";
import img1 from "../../assets/whatsnew/img1.png";
import img2 from "../../assets/whatsnew/img2.png";
import img3 from "../../assets/whatsnew/img3.png";
import img4 from "../../assets/whatsnew/img4.png";

function WhatsNew() {
  const items = [
    {
      image: img1,
      title: "AI Driven Solutions",
      desc: "Leveraging AI to drive measurable business impact.",
    },
    {
      image: img2,
      title: "Enterprise Transformation",
      desc: "Modernizing legacy systems at scale.",
    },
    {
      image: img3,
      title: "Security & Reliability",
      desc: "Building resilient and secure digital platforms.",
    },
    {
      image: img4,
      title: "Cloud Innovation",
      desc: "Scalable cloud-first architectures.",
    },
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
      <h2 style={styles.heading}>WHAT’S NEW</h2>

      <div style={styles.carouselWrapper}>
        <button onClick={prev} style={styles.arrow}>‹</button>

        <div style={styles.carousel}>
          <div
            style={{
              ...styles.inner,
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >
            {items.map((item, i) => (
              <div key={i} style={styles.card}>
                <img src={item.image} style={styles.image} />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
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
    background: "#ffffff",
  },
  heading: {
    marginBottom: "50px",
  },
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  carousel: {
    overflow: "hidden",
    width: "100%",
  },
  inner: {
    display: "flex",
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  card: {
    flex: "0 0 33.33%",
    padding: "20px",
    background: "#f4f6f9",
    marginRight: "20px",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    marginBottom: "16px",
    borderRadius: "6px",
  },
  arrow: {
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    fontSize: "24px",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};

export default WhatsNew;