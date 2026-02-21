import { useState, useEffect } from "react";
import abstractBg from "../../assets/industries/abstract.jpg";

function IndustryTransformation() {
  const items = [
    {
      title: "DOMAIN EXPERTISE",
      desc: "Deep understanding of industry-specific challenges and workflows.",
    },
    {
      title: "SCALABLE ARCHITECTURE",
      desc: "Solutions designed to grow with your business.",
    },
    {
      title: "SECURITY & COMPLIANCE",
      desc: "Strong focus on reliability, governance, and risk management.",
    },
    {
      title: "LONG-TERM PARTNERSHIP",
      desc: "We work as an extension of your team, not just a vendor.",
    },
    {
      title: "DIGITAL ACCELERATION",
      desc: "Enabling rapid modernization through cloud and automation.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
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
      <section style={styles.section} className="trans-section">
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
                transform: `translateX(-${index * cardWidth}%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="trans-card"
                  style={{
                    flex: `0 0 ${cardWidth}%`,
                    backgroundImage: `url(${abstractBg})`,
                  }}
                >
                  <div style={styles.overlay}>
                    <h3 style={styles.title}>{item.title}</h3>
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
        .trans-card {
          margin-right: 25px;
          height: 320px;
          border-radius: 16px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .trans-card:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 1024px) {
          .trans-section {
            padding: 100px 60px !important;
          }
        }

        @media (max-width: 768px) {
          .trans-section {
            padding: 70px 25px !important;
          }

          .trans-card {
            height: 260px !important;
            margin-right: 15px !important;
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
    textAlign: "center",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#0b2a5c",
    fontWeight: "600",
  },

  intro: {
    maxWidth: "750px",
    margin: "0 auto 60px",
    color: "#555",
    fontSize: "18px",
    lineHeight: "1.8",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  slider: {
    overflow: "hidden",
    width: "100%",
  },

  inner: {
    display: "flex",
    transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    padding: "40px 30px",
    background:
      "linear-gradient(to bottom right, rgba(11,42,92,0.9), rgba(11,42,92,0.7))",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  },

  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
    letterSpacing: "0.5px",
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.7",
  },

  arrow: {
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    fontSize: "26px",
    width: "48px",
    height: "48px",
    cursor: "pointer",
    borderRadius: "8px",
  },
};

export default IndustryTransformation;