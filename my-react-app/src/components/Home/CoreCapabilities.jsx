import { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/core/core capability bg.jpg";

import aiImg from "../../assets/core/img1.jpg";
import cloudImg from "../../assets/core/img2.jpg";
import enterpriseImg from "../../assets/core/img3.jpg";
import qaImg from "../../assets/core/img4.jpg";
import talentImg from "../../assets/core/img5.jpg";

function CoreCapabilities() {
  const sectionsRef = useRef([]);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const cards = [
    { title: "Artificial Intelligence & Data Analytics", img: aiImg },
    { title: "Cloud & Application Development", img: cloudImg },
    { title: "Enterprise Asset Management", img: enterpriseImg },
    { title: "Quality Assurance & Testing", img: qaImg },
    { title: "Talent & Delivery Services", img: talentImg },
  ];

  const alignmentPattern = ["left", "center", "right", "center", "left"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setVisibleIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        ...styles.wrapper,
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <h2 style={styles.heading}>OUR CORE CAPABILITIES</h2>

      {cards.map((card, index) => {
        const alignment = alignmentPattern[index];
        const isVisible = visibleIndex === index;

        return (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            data-index={index}
            style={styles.fullScreenSection}
          >
            <div
              style={{
                ...styles.card,
                ...styles[alignment],
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0px)"
                  : alignment === "left"
                  ? "translateX(-80px)"
                  : alignment === "right"
                  ? "translateX(80px)"
                  : "translateY(60px)",
              }}
            >
              <img src={card.img} alt="" style={styles.image} />
              <div style={styles.overlay}>
                <h3>{card.title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

const styles = {
  wrapper: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  heading: {
    textAlign: "center",
    padding: "120px 0 60px",
    color: "#ffffff",
    fontSize: "38px",
  },

  fullScreenSection: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },

  card: {
    width: "650px",
    height: "380px",
    borderRadius: "24px",
    overflow: "hidden",
    background: "#ffffff",
    boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
    transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
    position: "relative",
  },

  left: {
    marginLeft: "120px",
  },

  center: {
    margin: "0 auto",
  },

  right: {
    marginLeft: "auto",
    marginRight: "120px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "30px",
    background: "rgba(0,0,0,0.65)",
    color: "#fff",
    fontSize: "22px",
  },
};

export default CoreCapabilities;