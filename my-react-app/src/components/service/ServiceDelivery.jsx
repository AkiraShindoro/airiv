import img1 from "../../assets/services/pg2.png";
import img2 from "../../assets/services/pg1.png";

function ServiceDelivery() {
  const steps = [
    {
      image: img1,
      title: "Discover & Assess",
      desc: "Understand business objectives and evaluate the current technology landscape to identify transformation opportunities.",
    },
    {
      image: img2,
      title: "Design & Architect",
      desc: "Create scalable, secure, and future-ready solution blueprints tailored to enterprise needs.",
    },
    {
      image: img2,
      title: "Build & Implement",
      desc: "Develop and deploy solutions with strong governance, agile execution, and operational precision.",
    },
    {
      image: img2,
      title: "Optimize & Support",
      desc: "Continuously enhance performance, improve efficiency, and ensure long-term operational resilience.",
    },
  ];

  return (
    <>
      <section style={styles.section} className="delivery-section">
        <h2 style={styles.heading} className="delivery-heading">
          SERVICE DELIVERY MODEL
        </h2>

        <p style={styles.intro} className="delivery-intro">
          Our structured methodology ensures predictable delivery,
          measurable business outcomes, and sustained long-term value creation.
        </p>

        <div style={styles.grid} className="delivery-grid">
          {steps.map((step, index) => (
            <div key={index} className="delivery-card">
              <img src={step.image} alt="" style={styles.image} />
              <h3 style={styles.title}>{step.title}</h3>
              <p style={styles.desc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .delivery-card {
          background: #ffffff;
          padding: 55px 45px;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          text-align: left;
        }

        .delivery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 90px rgba(0,0,0,0.18);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .delivery-section {
            padding: 120px 60px !important;
          }

          .delivery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }

          .delivery-heading {
            font-size: 32px !important;
          }

          .delivery-intro {
            font-size: 18px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .delivery-section {
            padding: 80px 25px !important;
          }

          .delivery-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .delivery-heading {
            font-size: 26px !important;
          }

          .delivery-intro {
            font-size: 16px !important;
            margin-bottom: 60px !important;
          }

          .delivery-card {
            padding: 35px 25px !important;
          }

          .delivery-card h3 {
            font-size: 20px !important;
          }

          .delivery-card p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "180px 160px",
    background: "#f4f6f9",
    textAlign: "center",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "600",
    marginBottom: "30px",
    color: "#0b2a5c",
  },

  intro: {
    maxWidth: "900px",
    margin: "0 auto 100px",
    fontSize: "20px",
    lineHeight: "1.9",
    color: "#444",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
  },

  image: {
    width: "90px",
    height: "90px",
    objectFit: "contain",
    marginBottom: "30px",
  },

  title: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "18px",
    color: "#0b2a5c",
  },

  desc: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
  },
};

export default ServiceDelivery;