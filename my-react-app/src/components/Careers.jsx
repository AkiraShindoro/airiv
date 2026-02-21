import careersImg from "../assets/career.png";

function Careers() {
  return (
    <>
      <section style={styles.section}>
        <div style={styles.imageWrapper}>
          <img src={careersImg} alt="Careers" className="career-image" />
        </div>

        <div style={styles.content}>
          <h2 style={styles.heading}>Careers</h2>

          <h3 style={styles.subheading}>
            Grow Your Career At The Heart Of Change
          </h3>

          <p style={styles.text}>
            It’s your time to shine. Bring your ingenuity, curiosity, and bold
            ideas to a team that values innovation, collaboration, and impact.
          </p>

          <button className="career-btn">Join Us</button>
        </div>
      </section>

      <style>{`
        .career-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
          transition: all 0.35s ease;
        }

        .career-image:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 80px rgba(0,0,0,0.18);
        }

        .career-btn {
          padding: 14px 34px;
          background: #0b2a5c;
          color: #ffffff;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .career-btn:hover {
          background: #163d7a;
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
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
    padding: "160px 150px",
    background: "#ffffff",   // ✅ Clean white
    gap: "120px",
  },

  imageWrapper: {
    borderRadius: "22px",
  },

  content: {
    maxWidth: "650px",
  },

  heading: {
    fontSize: "38px",
    fontWeight: "600",
    color: "#0b2a5c",
    marginBottom: "20px",
  },

  subheading: {
    fontSize: "28px",
    fontWeight: "500",
    marginBottom: "25px",
    lineHeight: "1.4",
    color: "#222",
  },

  text: {
    fontSize: "19px",
    lineHeight: "1.9",
    color: "#555",
    marginBottom: "35px",
  },
};

export default Careers;