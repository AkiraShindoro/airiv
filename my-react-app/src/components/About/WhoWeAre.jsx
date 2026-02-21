import whoImg from "../../assets/about/about1.jpg";

function WhoWeAre() {
  return (
    <>
      <section style={styles.section} className="who-section">
        <div style={styles.left}>
          <h2 style={styles.heading} className="who-heading">
            WHO WE ARE
          </h2>

          <p style={styles.lead} className="who-lead">
            Airiv Infotech is an engineering-driven technology partner focused on
            building intelligent, scalable, and secure enterprise solutions.
          </p>

          <p style={styles.text} className="who-text">
            We combine deep technical expertise with strategic business insight
            to solve complex operational challenges across industries. Our
            approach ensures technology investments deliver measurable,
            sustainable value.
          </p>

          <p style={styles.text} className="who-text">
            From modernization initiatives to digital transformation programs,
            we architect solutions that empower organizations to innovate with
            confidence and grow with resilience.
          </p>
        </div>

        <div style={styles.right}>
          <img
            src={whoImg}
            alt="Who We Are"
            style={styles.image}
            className="who-image"
          />
        </div>
      </section>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .who-section {
            padding: 110px 60px !important;
            gap: 60px !important;
          }

          .who-heading {
            font-size: 34px !important;
          }

          .who-image {
            height: 420px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .who-section {
            grid-template-columns: 1fr !important;
            padding: 80px 25px !important;
            gap: 40px !important;
            text-align: center;
          }

          .who-heading {
            font-size: 26px !important;
          }

          .who-lead {
            font-size: 17px !important;
          }

          .who-text {
            font-size: 16px !important;
          }

          .who-image {
            height: auto !important;
            max-width: 100% !important;
          }

          .who-section div:last-child {
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
    gridTemplateColumns: "1.1fr 1fr",
    gap: "120px",
    padding: "160px 140px",
    background: "#f4f6f9",
    alignItems: "center",
  },

  left: {
    maxWidth: "700px",
  },

  heading: {
    fontSize: "44px",
    fontWeight: "600",
    marginBottom: "30px",
    color: "#0b2a5c",
    lineHeight: "1.2",
  },

  lead: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#222",
    marginBottom: "30px",
  },

  text: {
    fontSize: "18px",
    marginBottom: "20px",
    lineHeight: "1.9",
    color: "#555",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  image: {
    width: "100%",
    maxWidth: "650px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
  },
};

export default WhoWeAre;