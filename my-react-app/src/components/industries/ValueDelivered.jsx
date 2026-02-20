function ValueDelivered() {
  const values = [
    "Improved operational efficiency.",
    "Faster time-to-market.",
    "Reduced technology risk.",
    "Enhanced system reliability.",
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>VALUE DELIVERED ACROSS INDUSTRIES</h2>

        <p style={styles.subtext}>
          Our industry solutions are designed to deliver measurable business value.
        </p>

        <div style={styles.grid}>
          {values.map((text, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.accent}></div>
              <p style={styles.cardText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 80px",
    background: "#1f3b68",
  },
  container: {
    maxWidth: "1100px",
  },
  heading: {
    color: "#ffffff",
    marginBottom: "10px",
  },
  subtext: {
    color: "rgba(255,255,255,0.8)",
    marginBottom: "50px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "4px",
  },
  accent: {
    width: "4px",
    height: "100%",
    background: "#2ecc71",
    marginRight: "20px",
  },
  cardText: {
    margin: 0,
    color: "#333",
  },
};

export default ValueDelivered;