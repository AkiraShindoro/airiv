import introImg from "../../assets/industries/industries serve.png";

function IndustriesIntro() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>INDUSTRIES WE SERVE</h2>
        <p style={styles.text}>
          We provide industry-focused solutions that help organizations
          navigate complexity, modernize operations, and unlock long-term
          value.
        </p>
        <p style={styles.text}>
          Our expertise spans infrastructure, utilities, manufacturing,
          and public-sector environments.
        </p>
      </div>

      <div style={styles.right}>
        <img src={introImg} alt="Industries" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "60px",
    padding: "100px 80px",
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
    lineHeight: "1.7",
    color: "#555",
    marginBottom: "15px",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "6px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
};

export default IndustriesIntro;