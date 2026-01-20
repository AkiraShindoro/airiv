function WhyAiriv() {
  const points = [
    [
      "U.S.-based company with global delivery capabilities.",
      "Strong focus on enterprise and infrastructure systems.",
    ],
    [
      "Expertise across modern digital technologies.",
      "Transparent, flexible, and customer-first approach.",
    ],
    [
      "Built for long-term growth and trusted partnerships.",
      "Commitment to quality, security, and long-term support.",
    ],
  ];

  return (
    <section style={styles.section}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        WHY AIRIV INFOTECH
      </h2>

      {points.map((row, index) => (
        <div key={index} style={styles.row}>
          <div style={styles.box}>{row[0]}</div>
          <div style={styles.hex}></div>
          <div style={styles.box}>{row[1]}</div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    background: "#f5f5f5",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 120px 1fr",
    alignItems: "center",
    gap: "20px",
    marginBottom: "24px",
  },
  box: {
    padding: "20px",
    background: "linear-gradient(135deg,#2c4f7c,#1f3557)",
    color: "#fff",
  },
  hex: {
    width: "80px",
    height: "70px",
    background: "#ccc",
    clipPath:
      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    margin: "0 auto",
  },
};

export default WhyAiriv;
