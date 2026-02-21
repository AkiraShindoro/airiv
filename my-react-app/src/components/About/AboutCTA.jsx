import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <>
      <section style={styles.section} className="cta-section">
        <div style={styles.content}>
          <h2 style={styles.heading} className="cta-heading">
            Each One Empowers One
          </h2>

          <p style={styles.text}>
            Join us to collaborate, engineer and build self-reliant
            communities and future-ready businesses driven by innovation.
          </p>

          <Link to="/contact" className="cta-button">
            CONTACT US
          </Link>
        </div>
      </section>

      <style>{`
        .cta-section {
          position: relative;
          overflow: hidden;
        }

        .cta-button {
          display: inline-block;
          margin-top: 10px;
          padding: 16px 42px;
          background: #ffffff;
          color: #0b2a5c;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.35s ease;
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.35);
          background: #f4f6f9;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .cta-section {
            padding: 100px 60px !important;
          }

          .cta-heading {
            font-size: 30px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cta-section {
            padding: 80px 25px !important;
          }

          .cta-heading {
            font-size: 24px !important;
          }

          .cta-button {
            padding: 14px 30px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "150px 140px",
    background: "linear-gradient(135deg, #0b2a5c, #123d7a)",
    textAlign: "center",
    color: "#ffffff",
  },

  content: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "25px",
    lineHeight: "1.2",
  },

  text: {
    fontSize: "18px",
    marginBottom: "40px",
    lineHeight: "1.8",
    color: "rgba(255,255,255,0.9)",
  },
};

export default AboutCTA;