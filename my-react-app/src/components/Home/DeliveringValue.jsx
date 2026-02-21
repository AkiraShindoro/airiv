import img1 from "../../assets/delivering value.png";

function DeliveringValue() {
  return (
    <>
      <section style={styles.section} className="dv-section">
        <div style={styles.left}>
          <h2 style={styles.heading} className="dv-heading">
            DELIVERING VALUE BEYOND TECHNOLOGY
          </h2>

          <p style={styles.text} className="dv-text">
            We deliver measurable business outcomes by aligning innovation
            with operational excellence and long-term strategic goals.
          </p>
        </div>

        <div style={styles.right}>
          <img src={img1} alt="Delivering Value" className="dv-image" />
        </div>
      </section>

      <style>{`
        .dv-image {
          width: 100%;
          max-width: 520px;
          border-radius: 18px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          transition: all 0.35s ease;
        }

        .dv-image:hover {
          transform: translateY(-6px);
          box-shadow: 0 35px 80px rgba(0,0,0,0.25);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .dv-section {
            padding: 90px 50px !important;
          }

          .dv-heading {
            font-size: 24px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .dv-section {
            grid-template-columns: 1fr !important;
            padding: 70px 25px !important;
            gap: 40px !important;
            text-align: center;
          }

          .dv-heading {
            font-size: 22px !important;
          }

          .dv-text {
            font-size: 15px !important;
          }

          .dv-image {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    padding: "140px 140px",
    background: "#f4f6f9",
    alignItems: "center",
  },

  left: {
    maxWidth: "650px",
  },

  heading: {
    fontSize: "34px",
    marginBottom: "25px",
    fontWeight: "600",
    color: "#0b2a5c",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#555",
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },
};

export default DeliveringValue;