function EngagementModel() {
  const items = [
    "Collaborative discovery with business and IT stakeholders.",
    "Flexible delivery models tailored to long-term support.",
    "Agile execution with enterprise-grade governance.",
    "Continuous improvement post-deployment.",
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>OUR INDUSTRY ENGAGEMENT MODEL</h2>

        <p style={styles.intro}>
          We adapt our delivery model to align with each industry’s pace,
          risk profile, and transformation goals.
        </p>

        <div style={styles.grid}>
          {items.map((text, index) => (
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
    background: "#f0f2f4",
  },
  container: {
    maxWidth: "1100px",
  },
  heading: {
    marginBottom: "15px",
    color: "#0b2a5c",
  },
  intro: {
    marginBottom: "50px",
    maxWidth: "700px",
    color: "#555",
    lineHeight: "1.7",
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
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
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
    lineHeight: "1.6",
  },
};

export default EngagementModel;