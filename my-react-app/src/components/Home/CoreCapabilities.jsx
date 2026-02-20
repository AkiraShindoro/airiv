import { useEffect, useRef, useState } from "react";
import aiImg from "../../assets/core/img1.png";
import cloudImg from "../../assets/core/img2.png";
import enterpriseImg from "../../assets/core/img3.png";
import qaImg from "../../assets/core/img4.png";
import talentImg from "../../assets/core/img5.png";

function CoreCapabilities() {
  const sectionRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = windowHeight - rect.top;
      const total = rect.height + windowHeight;

      const percent = Math.min(Math.max(visible / total, 0), 1);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { title: "Artificial Intelligence & Data Analytics", img: aiImg },
    { title: "Cloud & Application Development", img: cloudImg },
    { title: "Enterprise Asset Management", img: enterpriseImg },
    { title: "Quality Assurance & Testing", img: qaImg },
    { title: "Talent & Delivery Services", img: talentImg },
  ];

  return (
    <section ref={sectionRef} className="core-section">
      <h2 className="core-heading">OUR CORE CAPABILITIES</h2>

      <div className="core-container">
        {cards.map((card, index) => {
          const threshold = (index + 1) / cards.length;
          const show = progress > threshold;

          return (
            <div
              key={index}
              className={`core-card ${show ? "show" : ""} card-${index}`}
            >
              <img src={card.img} alt="" />
              <div className="overlay">
                <h4>{card.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CoreCapabilities;