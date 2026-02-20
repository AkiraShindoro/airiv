function WhatDrivesUs() {
  const items = [
    {
      title: "Integrity in Delivery",
      desc: "We uphold transparency and accountability across every engagement.",
    },
    {
      title: "Engineering Excellence",
      desc: "High-quality solutions, built with precision and innovation.",
    },
    {
      title: "Business-First Thinking",
      desc: "Technology aligned with measurable business outcomes.",
    },
    {
      title: "Continuous Improvement",
      desc: "Committed to evolving with industry and client needs.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>WHAT DRIVES US</h2>

      <div style={styles.container}>
        {items.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.accent}></div>
            <div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 80px",
    background: "#f4f6f9",
  },
  heading: {
    marginBottom: "60px",
    color: "#0b2a5c",
  },
  container: {
    maxWidth: "900px",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    background: "#ffffff",
    padding: "25px",
    marginBottom: "25px",
    borderRadius: "4px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
  },
  accent: {
    width: "4px",
    background: "#2ecc71",
    marginRight: "20px",
  },
  title: {
    marginBottom: "5px",
  },
  desc: {
    color: "#555",
    lineHeight: "1.6",
  },
};

export default WhatDrivesUs;