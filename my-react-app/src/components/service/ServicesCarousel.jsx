import { useState, useEffect } from "react";
import img1 from "../../assets/services/img1.png";
import img2 from "../../assets/services/img2.png";
import img3 from "../../assets/services/img3.png";
import img4 from "../../assets/services/img4.png";
import img5 from "../../assets/services/img5.png";

function ServicesCarousel() {
  const items = [
    {
      image: img1,
      title: "Artificial Intelligence & Data Analytics",
      desc: "Transform data into actionable insights that drive smarter decisions and automation.",
    },
    {
      image: img2,
      title: "Cloud & Application Development",
      desc: "Designing and building modern, scalable, and secure digital platforms.",
    },
    {
      image: img3,
      title: "Enterprise Asset Management",
      desc: "Optimizing asset performance and operational efficiency across enterprise systems.",
    },
    {
      image: img4,
      title: "Quality Assurance & Testing",
      desc: "Ensuring reliability, performance, and security across digital environments.",
    },
    {
      image: img5,
      title: "Talent & Delivery Services",
      desc: "Providing skilled professionals aligned to your project and delivery goals.",
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
      <section style={styles.section} className="services-carousel">
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
                  className="service-card"
                  style={{
                    flex: `0 0 ${cardWidth}%`,
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="service-overlay">
                    <div className="service-number">
                      {String(i + 1).padStart(2, "0")}.
                    </div>
                    <h3 className="service-title">{item.title}</h3>
                    <p className="service-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} style={styles.arrow}>›</button>
        </div>
      </section>

      <style>{`
        .service-card {
          height: 420px;
          margin-right: 25px;
          border-radius: 16px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.35);
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          padding: 40px 30px;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.6),
            rgba(0,0,0,0.3)
          );
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .service-number {
          font-size: 18px;
          opacity: 0.8;
          margin-bottom: 8px;
        }

        .service-title {
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .service-desc {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .services-carousel {
            padding: 100px 60px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .services-carousel {
            padding: 70px 25px !important;
          }

          .service-card {
            height: 360px !important;
            margin-right: 15px !important;
          }

          .service-title {
            font-size: 18px !important;
          }

          .service-desc {
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "140px 120px",
    background: "#0b2a5c",
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

  arrow: {
    background: "#ffffff",
    border: "none",
    fontSize: "26px",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    borderRadius: "8px",
  },
};

export default ServicesCarousel;