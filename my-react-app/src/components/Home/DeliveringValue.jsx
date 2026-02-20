import img1 from "../../assets/delivering value.png";

function DeliveringValue() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.heading}>
          DELIVERING VALUE BEYOND TECHNOLOGY
        </h2>

        <p style={styles.text}>
          We deliver measurable business outcomes by aligning innovation
          with operational excellence and long-term strategic goals.
        </p>
      </div>

      <div style={styles.right}>
        <img src={img1} style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    padding: "100px 80px",
    background: "#f4f6f9",
    alignItems: "center",
  },
  left: {
    maxWidth: "520px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#555",
  },
  right: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "8px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
};

export default DeliveringValue;