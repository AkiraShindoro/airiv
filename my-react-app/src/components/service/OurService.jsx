import serviceImg from "../../assets/services/our-service.png";

function OurService() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>OUR SERVICE</h2>

        <p style={styles.lead}>
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
    gridTemplateColumns: "1.2fr 1fr",   // 👈 more space to text
    alignItems: "center",
    gap: "120px",
    padding: "160px 140px",            // 👈 more real estate
    background: "#ffffff",
  },

  left: {
    maxWidth: "700px",
  },

  heading: {
    fontSize: "42px",                  // 👈 bigger heading
    fontWeight: "600",
    marginBottom: "30px",
    color: "#0b2a5c",
  },

  lead: {
    fontSize: "20px",                  // 👈 stronger intro
    lineHeight: "1.9",
    color: "#333",
    marginBottom: "30px",
  },

  list: {
    paddingLeft: "20px",
    fontSize: "18px",
    lineHeight: "2",
    color: "#444",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  image: {
    width: "480px",                   // 👈 square size
    height: "480px",                  // 👈 square
    objectFit: "cover",
    borderRadius: "24px",             // 👈 rounded corners
    boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
  },
};

export default OurService;