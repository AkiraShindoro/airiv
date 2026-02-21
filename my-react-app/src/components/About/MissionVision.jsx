import missionImg from "../../assets/about/about2.jpg";
import visionImg from "../../assets/about/about3.jpg";

function MissionVision() {
  return (
    <>
      <section style={styles.section} className="mv-section">
        <h2 style={styles.heading} className="mv-heading">
          OUR MISSION & VISION
        </h2>

        {/* Mission */}
        <div className="mv-card">
          <div style={styles.imageWrapper}>
            <img src={missionImg} alt="Mission" style={styles.image} />
          </div>

          <div style={styles.content}>
            <h3 style={styles.subHeading}>Our Mission</h3>
            <p style={styles.text}>
              To deliver intelligent, secure, and scalable technology solutions
              that empower organizations to innovate with confidence and build
              resilient digital ecosystems for sustained growth.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mv-card reverse">
          <div style={styles.imageWrapper}>
            <img src={visionImg} alt="Vision" style={styles.image} />
          </div>

          <div style={styles.content}>
            <h3 style={styles.subHeading}>Our Vision</h3>
            <p style={styles.text}>
              To be a trusted global technology partner recognized for
              engineering excellence, forward-thinking innovation, and
              long-term value creation.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .mv-card {
          display: flex;
          align-items: center;
          gap: 50px;
          background: #ffffff;
          border-radius: 18px;
          padding: 45px 50px;
          margin-bottom: 60px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          transition: all 0.35s ease;
        }

        .mv-card.reverse {
          flex-direction: row-reverse;
        }

        .mv-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.2);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .mv-section {
            padding: 110px 60px !important;
          }

          .mv-heading {
            font-size: 30px !important;
          }

          .mv-card {
            gap: 40px !important;
            padding: 35px 40px !important;
          }

          .mv-card img {
            height: 220px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .mv-section {
            padding: 80px 25px !important;
          }

          .mv-heading {
            font-size: 26px !important;
            margin-bottom: 50px !important;
          }

          .mv-card,
          .mv-card.reverse {
            flex-direction: column !important;
            text-align: center;
            padding: 30px 25px !important;
          }

          .mv-card img {
            width: 100% !important;
            height: auto !important;
            max-height: 220px !important;
          }

          .mv-card h3 {
            font-size: 22px !important;
          }

          .mv-card p {
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
    background: "#0b2a5c",
    color: "#ffffff",
  },

  heading: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "90px",
  },

  imageWrapper: {
    flex: "0 0 300px",
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "16px",
  },

  content: {
    flex: 1,
  },

  subHeading: {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#0b2a5c",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#444",
  },
};

export default MissionVision;