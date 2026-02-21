function ValueDelivered() {
  const values = [
    "Improved operational efficiency.",
    "Faster time-to-market.",
    "Reduced technology risk.",
    "Enhanced system reliability.",
  ];

  return (
    <>
      <section style={styles.section} className="value-section">
        <div style={styles.container}>
          <h2 style={styles.heading} className="value-heading">
            VALUE DELIVERED ACROSS INDUSTRIES
          </h2>

          <p style={styles.subtext} className="value-subtext">
            Our industry solutions are designed to deliver measurable business value.
          </p>

          <div style={styles.grid} className="value-grid">
            {values.map((text, index) => (
              <div key={index} className="value-card">
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
        .value-card {
          display: flex;
          background: #ffffff;
          min-height: 130px;
          border-radius: 14px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .value-section {
            padding: 100px 60px !important;
          }

          .value-heading {
            font-size: 28px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .value-section {
            padding: 70px 25px !important;
          }

          .value-grid {
            grid-template-columns: 1fr !important;
          }

          .value-heading {
            font-size: 24px !important;
          }

          .value-subtext {
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
    background: "#1f3b68",
  },

  container: {
    maxWidth: "1200px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#ffffff",
  },

  subtext: {
    fontSize: "18px",
    marginBottom: "60px",
    maxWidth: "800px",
    color: "rgba(255,255,255,0.85)",
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
    borderTopLeftRadius: "14px",
    borderBottomLeftRadius: "14px",
  },

  cardContent: {
    padding: "30px 32px",
    display: "flex",
    alignItems: "center",
  },

  cardText: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#333",
    margin: 0,
    fontWeight: "500",
  },
};

export default ValueDelivered;