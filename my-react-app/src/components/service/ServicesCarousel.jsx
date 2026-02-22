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
    <section className="services-carousel">
      <div className="services-wrapper">
        <button onClick={prev} className="wn-arrow">‹</button>

        <div className="slider">
          <div className="inner" style={{ transform: `translateX(-${index * cardWidth}%)` }}>
            {items.map((item, i) => (
              <div key={i} className="service-card" style={{ flex: `0 0 ${cardWidth}%`, backgroundImage: `url(${item.image})` }}>
                <div className="service-overlay">
                  <div className="service-number">{String(i + 1).padStart(2, "0")}.</div>
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-desc">{item.desc}</p>
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

export default ServicesCarousel;