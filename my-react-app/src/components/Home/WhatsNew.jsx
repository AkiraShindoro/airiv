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
    <section className="wn-section">
      <h2 className="wn-heading">WHAT’S NEW</h2>

      <div className="wn-carousel-wrapper">
        <button onClick={prev} className="wn-arrow">‹</button>

        <div className="wn-carousel">
          <div
            className="wn-inner"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="wn-card" style={{ flex: `0 0 ${cardWidth}%` }}>
                <img src={item.image} alt={item.title} className="wn-image" />

                <div className="wn-content">
                  <h4 className="wn-title">{item.title}</h4>
                  <p className="wn-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className="wn-arrow">›</button>
      </div>
    </section>
  );
}

export default WhatsNew;