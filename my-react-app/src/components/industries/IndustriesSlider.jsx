import { useState } from "react";
import slide1 from "../../assets/industries/insurance.jpg";
import slide2 from "../../assets/industries/utilities.jpg";
import slide3 from "../../assets/industries/healthcare.jpg";
import slide4 from "../../assets/industries/manufacturing.jpg";
import slide5 from "../../assets/industries/tech.jpg";

function IndustriesSlider() {
  const slides = [
    {
      image: slide1,
      title: "Insurance",
      desc: "Driving digital transformation for insurers through data modernization, risk analytics, and intelligent automation.",
    },
    {
      image: slide2,
      title: "Utilities",
      desc: "Optimizing asset performance, grid reliability, and operational efficiency across energy ecosystems.",
    },
    {
      image: slide3,
      title: "Healthcare",
      desc: "Enhancing patient experience, compliance, and system interoperability through secure digital platforms.",
    },
    {
      image: slide4,
      title: "Manufacturing",
      desc: "Enabling smart factories, predictive maintenance, and supply chain intelligence.",
    },
    {
      image: slide5,
      title: "Technology Services",
      desc: "Delivering scalable cloud, AI, and enterprise solutions to accelerate digital growth.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: "60px", color: "#0b2a5c" }}>
            INDUSTRIES WE SERVE
          </h2>

          <div className="carousel-wrapper">
            <button onClick={prev} className="carousel-arrow">‹</button>

            <div className="carousel">
              <div
                className="carousel-inner"
                style={{ transform: `translateX(-${index * 30}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="industry-card">
                    <img src={slide.image} alt="" />

                    <div className="industry-content">
                      <div className="industry-number">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={next} className="carousel-arrow">›</button>
          </div>
        </div>
      </section>

      <style>{`
        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .carousel {
          overflow: hidden;
          width: 100%;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industry-card {
          flex: 0 0 30%;
          margin-right: 30px;
          background: #f4f6f9;
          border-radius: 16px;
          overflow: hidden;
          height: 460px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .industry-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .industry-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        .industry-number {
          font-size: 16px;
          color: #888;
          margin-bottom: 10px;
        }

        .industry-content h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #0b2a5c;
        }

        .industry-content p {
          font-size: 16px;
          line-height: 1.7;
          color: #444;
        }

        .carousel-arrow {
          background: #0b2a5c;
          color: #fff;
          border: none;
          font-size: 26px;
          width: 48px;
          height: 48px;
          border-radius: 8px;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .industry-card {
            flex: 0 0 45%;
          }
        }

        @media (max-width: 768px) {
          .industry-card {
            flex: 0 0 85%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}

export default IndustriesSlider;