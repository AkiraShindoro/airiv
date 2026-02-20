import missionImg from "../../assets/about/about2.jpg";
import visionImg from "../../assets/about/about3.jpg";

function MissionVision() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>OUR MISSION & VISION</h2>

      {/* Mission Card */}
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img src={missionImg} alt="Mission" style={styles.image} />
        </div>
        <div style={styles.content}>
          <h3>Our Mission</h3>
          <p>
            To deliver intelligent, secure, and scalable technology solutions
            that empower organizations to innovate and grow with confidence.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div style={{ ...styles.card, flexDirection: "row-reverse" }}>
        <div style={styles.imageWrapper}>
          <img src={visionImg} alt="Vision" style={styles.image} />
        </div>
        <div style={styles.content}>
          <h3>Our Vision</h3>
          <p>
            To be a trusted technology partner recognized for engineering
            excellence, innovation leadership, and long-term value creation.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 80px",
    background: "#0b2a5c",
    color: "#ffffff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "60px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    color: "#000",
    borderRadius: "8px",
    padding: "40px",
    marginBottom: "40px",
    gap: "40px",
  },
  imageWrapper: {
    flex: "0 0 200px",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  content: {
    flex: 1,
  },
};

export default MissionVision;