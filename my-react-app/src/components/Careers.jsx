import careersImg from "../assets/career.png";

function Careers() {
  return (
    <section style={styles.section}>
      <div style={styles.imageWrapper}>
        <img src={careersImg} alt="Careers" style={styles.image} />
      </div>

      <div style={styles.content}>
        <h2 style={styles.heading}>Careers</h2>
        <h3 style={styles.subheading}>
          Grow Your Career At The Heart Of Change
        </h3>

        <p style={styles.text}>
          It’s Your Time To Shine. Bring Your Ingenuity, Curiosity And Big Ideas.
        </p>

        <button style={styles.button}>Join Us</button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    padding: "100px 80px",
    background: "#f4f6f9",
    gap: "60px",
  },
  imageWrapper: {
    border: "4px solid #e14b3b", // red border like screenshot
    padding: "6px",
    display: "inline-block",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  content: {
    maxWidth: "480px",
  },
  heading: {
    color: "#0b2a5c",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "22px",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  button: {
    padding: "10px 20px",
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default Careers;