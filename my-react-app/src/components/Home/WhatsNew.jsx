import { useState, useEffect } from "react";
import img1 from "../../assets/whatsnew/img1.png";
import img2 from "../../assets/whatsnew/img2.png";
import img3 from "../../assets/whatsnew/img3.png";
import img4 from "../../assets/whatsnew/img4.png";

function WhatsNew() {
  const items = [
    {
      image: img1,
      title: "AI Driven Solutions",
      desc: "Leveraging AI to drive measurable business impact through automation and intelligent insights.",
    },
    {
      image: img2,
      title: "Enterprise Transformation",
      desc: "Modernizing legacy systems at scale with secure, cloud-first architectures.",
    },
    {
      image: img3,
      title: "Security & Reliability",
      desc: "Building resilient and secure digital platforms designed for long-term growth.",
    },
    {
      image: img4,
      title: "Cloud Innovation",
      desc: "Designing scalable cloud ecosystems for performance, flexibility and resilience.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Detect screen size
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const next = () => {
    if (index < items.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const cardWidth = 100 / visibleCards;

  return (
    <>
      <section style={styles.section}>
        <h2 style={styles.heading}>WHAT’S NEW</h2>

        <div style={styles.carouselWrapper}>
          <button onClick={prev} style={styles.arrow}>‹</button>

          <div style={styles.carousel}>
            <div
              style={{
                ...styles.inner,
                transform: `translateX(-${index * cardWidth}%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="wn-card"
                  style={{ flex: `0 0 ${cardWidth}%` }}
                >
                  <img src={item.image} alt={item.title} style={styles.image} />

                  <div style={styles.content}>
                    <h4 style={styles.title}>{item.title}</h4>
                    <p style={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} style={styles.arrow}>›</button>
        </div>
      </section>

      <style>{`
        .wn-card {
          margin-right: 25px;
          background: #f4f6f9;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
        }

        .wn-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 35px 70px rgba(0,0,0,0.18);
        }

        @media (max-width: 768px) {
          .wn-card {
            margin-right: 15px;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "140px 120px",
    background: "#ffffff",
  },

  heading: {
    marginBottom: "70px",
    fontSize: "32px",
    color: "#0b2a5c",
    textAlign: "center",
    fontWeight: "600",
  },

  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  carousel: {
    overflow: "hidden",
    width: "100%",
  },

  inner: {
    display: "flex",
    transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },

  content: {
    padding: "30px",
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
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
    fontSize: "24px",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "10px",
  },
};

export default WhatsNew;