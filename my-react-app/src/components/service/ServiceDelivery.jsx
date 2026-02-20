import img1 from "../../assets/services/pg2.png";
import img2 from "../../assets/services/pg1.png";

function ServiceDelivery() {
  const steps = [
    {
      image: img1,
      title: "Discover & Assess",
      desc: "Understand business objectives and evaluate current technology landscape.",
    },
    {
      image: img2,
      title: "Design & Architect",
      desc: "Create scalable and secure solution blueprints tailored to enterprise needs.",
    },
    {
      image: img2,
      title: "Build & Implement",
      desc: "Develop and deploy solutions with strong governance and agile execution.",
    },
    {
      image: img2,
      title: "Optimize & Support",
      desc: "Continuously enhance performance and ensure long-term operational resilience.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>SERVICE DELIVERY MODEL</h2>

      <p style={styles.intro}>
        Our structured approach ensures predictable delivery, measurable
        outcomes, and sustained value creation.
      </p>

      <div style={styles.grid}>
        {steps.map((step, index) => (
          <div key={index} style={styles.card}>
            <img src={step.image} alt="" style={styles.image} />
            <h3 style={styles.title}>{step.title}</h3>
            <p style={styles.desc}>{step.desc}</p>
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
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#0b2a5c",
  },
  intro: {
    maxWidth: "700px",
    margin: "0 auto 60px",
    color: "#555",
    lineHeight: "1.6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "20px",
  },
  title: {
    marginBottom: "10px",
  },
  desc: {
    color: "#555",
    lineHeight: "1.6",
  },
};

export default ServiceDelivery;