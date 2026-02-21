import valueImg from "../../assets/services/value1.png";

function ValueCreated() {
  return (
    <>
      <section style={styles.section} className="value-created-section">
        <div style={styles.left}>
          <h2 style={styles.heading} className="value-heading">
            VALUE CREATED THROUGH SERVICES
          </h2>

          <p style={styles.lead} className="value-lead">
            Our service portfolio is designed to generate measurable impact
            across operational efficiency, innovation velocity, and long-term
            enterprise scalability.
          </p>

          <p style={styles.text} className="value-text">
            By aligning technology execution with business strategy, we enable
            organizations to achieve sustainable competitive advantage and
            accelerate digital transformation with confidence.
          </p>
        </div>

        <div style={styles.right}>
          <img
            src={valueImg}
            alt="Value Created"
            className="value-image"
            style={styles.image}
          />
        </div>
      </section>

      <style>{`
        .value-image {
          transition: all 0.35s ease;
        }

        .value-image:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 35px 80px rgba(0,0,0,0.2);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .value-created-section {
            padding: 120px 60px !important;
            gap: 60px !important;
          }

          .value-heading {
            font-size: 32px !important;
          }

          .value-image {
            width: 420px !important;
            height: 420px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .value-created-section {
            grid-template-columns: 1fr !important;
            padding: 80px 25px !important;
            gap: 40px !important;
            text-align: center;
          }

          .value-heading {
            font-size: 26px !important;
          }

          .value-lead {
            font-size: 17px !important;
          }

          .value-text {
            font-size: 16px !important;
          }

          .value-image {
            width: 100% !important;
            height: auto !important;
            max-width: 420px !important;
          }

          .value-created-section div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    alignItems: "center",
    gap: "120px",
    padding: "170px 150px",
    background: "#ffffff",
  },

  left: {
    maxWidth: "750px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "600",
    marginBottom: "35px",
    color: "#0b2a5c",
    lineHeight: "1.2",
  },

  lead: {
    fontSize: "20px",
    lineHeight: "1.9",
    marginBottom: "30px",
    color: "#222",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.9",
    color: "#555",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  image: {
    width: "520px",
    height: "520px",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
  },
};

export default ValueCreated;