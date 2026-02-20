function WhyAiriv() {
  const points = [
    "Deep domain expertise across critical industries.",
    "Enterprise-grade governance and delivery models.",
    "Proven track record of scalable transformations.",
    "Commitment to security, compliance, and resilience.",
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>WHY AIRIV INFOTECH</h2>

      <div style={styles.grid}>
        {points.map((point, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.text}>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 80px",
    background: "#0b2a5c",
    color: "#ffffff",
    textAlign: "center",
  },
  heading: {
    marginBottom: "60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "30px",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "30px",
    borderRadius: "8px",
  },
  text: {
    lineHeight: "1.6",
  },
};

export default WhyAiriv;