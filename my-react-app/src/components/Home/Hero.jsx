import Herosection from "../../assets/Hero Section.svg";

function Hero() {
  return (
    <>
      <section id="home" style={styles.hero} className="hero-section">
        <div style={styles.overlay} className="hero-overlay">
          <h1 style={styles.title} className="hero-title">
            Technology with Intelligence.<br />
            Solutions with Purpose.
          </h1>
        </div>
      </section>

      <style>{`
        /* Tablet */
        @media (max-width: 1024px) {
          .hero-section {
            padding-left: 40px !important;
          }

          .hero-title {
            font-size: 32px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-section {
            height: auto !important;
            min-height: 80vh;
            padding: 120px 25px 80px 25px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hero-overlay {
            max-width: 100% !important;
            padding: 30px !important;
            text-align: center;
          }

          .hero-title {
            font-size: 26px !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  hero: {
    height: "100vh",
    background: `linear-gradient(
      rgba(0,0,0,0.55),
      rgba(0,0,0,0.55)
    ), url(${Herosection}) center/cover no-repeat`,
    display: "flex",
    alignItems: "center",
    padding: "120px 80px 0 80px",
    color: "#fff",
  },

  overlay: {
    maxWidth: "650px",
    background: "rgba(0, 70, 140, 0.6)",
    padding: "50px",
    borderRadius: "12px",
  },

  title: {
    fontSize: "42px",
    lineHeight: "1.3",
    fontWeight: "600",
  },
};

export default Hero;