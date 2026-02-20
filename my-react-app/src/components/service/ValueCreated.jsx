import valueImg from "../../assets/services/value1.png";

function ValueCreated() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>VALUE CREATED THROUGH SERVICES</h2>

        <p style={styles.text}>
          Our service portfolio is designed to generate measurable impact
          across operational efficiency, innovation velocity, and long-term
          enterprise scalability.
        </p>

        <p style={styles.text}>
          By aligning technology execution with business strategy, we enable
          organizations to achieve sustainable competitive advantage.
        </p>
      </div>

      <div style={styles.right}>
        <img src={valueImg} alt="Value Created" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "80px",
    padding: "120px 80px",
    background: "#ffffff",
  },
  left: {
    maxWidth: "550px",
  },
  heading: {
    marginBottom: "20px",
    color: "#0b2a5c",
  },
  text: {
    marginBottom: "15px",
    lineHeight: "1.7",
    color: "#555",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
  },
};

export default ValueCreated;