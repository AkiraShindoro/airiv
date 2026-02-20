import serviceImg from "../../assets/services/our-service.png";
function OurService() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>OUR SERVICE</h2>

        <p style={styles.text}>
          Delivering technology-enabled solutions that combine innovation,
          operational excellence, and long-term value creation.
        </p>

        <ul style={styles.list}>
          <li>Business-aligned digital transformation.</li>
          <li>Secure and scalable enterprise solutions.</li>
          <li>Cloud modernization strategies.</li>
          <li>Intelligent automation and analytics.</li>
        </ul>
      </div>

      <div style={styles.right}>
        <img src={serviceImg} alt="Our Service" style={styles.image} />
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
    marginBottom: "20px",
    lineHeight: "1.7",
    color: "#555",
  },
  list: {
    paddingLeft: "20px",
    color: "#333",
    lineHeight: "1.8",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "420px",
  },
};

export default OurService;