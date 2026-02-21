import introImg from "../../assets/industries/industries serve.png";

function IndustriesIntro() {
  return (
    <>
      <section style={styles.section} className="industries-intro">
        <div style={styles.left}>
          <h2 style={styles.heading} className="intro-heading">
            INDUSTRIES WE SERVE
          </h2>

          <p style={styles.text} className="intro-text">
            We provide industry-focused solutions that help organizations
            navigate complexity, modernize operations, and unlock long-term
            value.
          </p>

          <p style={styles.text} className="intro-text">
            Our expertise spans infrastructure, utilities, manufacturing,
            and public-sector environments.
          </p>
        </div>

        <div style={styles.right}>
          <img
            src={introImg}
            alt="Industries"
            style={styles.image}
            className="intro-image"
          />
        </div>
      </section>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .industries-intro {
            padding: 100px 60px !important;
            gap: 60px !important;
          }

          .intro-heading {
            font-size: 32px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .industries-intro {
            grid-template-columns: 1fr !important;
            padding: 70px 25px !important;
            gap: 40px !important;
            text-align: center;
          }

          .intro-heading {
            font-size: 26px !important;
          }

          .intro-text {
            font-size: 16px !important;
          }

          .intro-image {
            max-width: 100% !important;
            height: auto !important;
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
    alignItems: "center",
    gap: "100px",
    padding: "140px 120px",
    background: "#ffffff",
  },

  left: {
    maxWidth: "650px",
  },

  heading: {
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "30px",
    color: "#0b2a5c",
    lineHeight: "1.2",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#444",
    marginBottom: "20px",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  image: {
    width: "100%",
    maxWidth: "650px",
    height: "420px",
    objectFit: "cover",
    borderRadius: "18px",
    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
  },
};

export default IndustriesIntro;