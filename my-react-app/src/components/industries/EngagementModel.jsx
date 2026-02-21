function EngagementModel() {
  const items = [
    "Collaborative discovery with business and IT stakeholders.",
    "Flexible delivery models (project-based or long-term support).",
    "Agile execution with enterprise-grade governance.",
    "Continuous improvement post-deployment.",
  ];

  return (
    <>
      <section style={styles.section} className="eng-section">
        <div style={styles.container}>
          <h2 style={styles.heading} className="eng-heading">
            OUR INDUSTRY ENGAGEMENT MODEL
          </h2>

          <p style={styles.intro} className="eng-intro">
            We adapt our delivery model to align with each industry’s pace,
            risk profile, and transformation goals.
          </p>

          <div style={styles.grid} className="eng-grid">
            {items.map((text, index) => (
              <div key={index} className="eng-card">
                <div style={styles.accent}></div>

                <div style={styles.cardContent}>
                  <p style={styles.cardText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .eng-card {
          display: flex;
          background: #ffffff;
          min-height: 120px;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .eng-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .eng-section {
            padding: 100px 60px !important;
          }

          .eng-heading {
            font-size: 28px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .eng-section {
            padding: 70px 25px !important;
          }

          .eng-grid {
            grid-template-columns: 1fr !important;
          }

          .eng-heading {
            font-size: 24px !important;
          }

          .eng-intro {
            font-size: 16px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "140px 120px",
    background: "#f5f6f7",
  },

  container: {
    maxWidth: "1200px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#0b2a5c",
  },

  intro: {
    fontSize: "18px",
    marginBottom: "60px",
    maxWidth: "800px",
    color: "#555",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
  },

  accent: {
    width: "6px",
    background: "#2ecc71",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",
  },

  cardContent: {
    padding: "28px 30px",
    display: "flex",
    alignItems: "center",
  },

  cardText: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#333",
    margin: 0,
  },
};

export default EngagementModel;