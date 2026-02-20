import whoImg from "../../assets/about/about1.jpg";

function WhoWeAre() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>WHO WE ARE</h2>

        <p style={styles.text}>
          Airiv Infotech is built on a foundation of engineering excellence
          and business-focused innovation. We design and deliver technology
          solutions that address real-world enterprise challenges.
        </p>

        <p style={styles.text}>
          Our team blends deep technical expertise with strategic thinking to
          create scalable, secure, and future-ready digital ecosystems.
        </p>

        <p style={styles.text}>
          We believe technology should not only transform operations — it
          should empower people and organizations to thrive.
        </p>
      </div>

      <div style={styles.right}>
        <img src={whoImg} alt="Who We Are" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    padding: "120px 80px",
    background: "#f4f6f9",
    alignItems: "center",
  },
  left: {
    maxWidth: "550px",
  },
  heading: {
    marginBottom: "20px",
    color: "#0b2a5c",
  },
  text: {
    marginBottom: "15px",
    lineHeight: "1.7",
    color: "#555",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "6px",
  },
};

export default WhoWeAre;