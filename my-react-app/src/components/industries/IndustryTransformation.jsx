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
      <section className="trans-section">
        <h2 className="trans-heading">INDUSTRY TRANSFORMATION</h2>

        <p className="trans-intro">
          We help organizations accelerate transformation through intelligent
          technologies and strategic modernization initiatives.
        </p>

        <div className="trans-wrapper">
          <button onClick={prev} className="wn-arrow">‹</button>

          <div className="trans-slider">
            <div
              className="trans-inner"
              style={{ transform: `translateX(-${index * cardWidth}%)` }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="trans-card"
                  style={{ flex: `0 0 ${cardWidth}%`, backgroundImage: `url(${abstractBg})` }}
                >
                  <div className="trans-overlay">
                    <h3 className="trans-title">{item.title}</h3>
                    <p className="trans-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className="wn-arrow">›</button>
        </div>
      </section>
    </>
  );
}

export default IndustryTransformation;