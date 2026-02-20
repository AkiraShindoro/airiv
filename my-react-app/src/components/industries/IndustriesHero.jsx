import heroImg from "../../assets/industries/industries home.jpg";

function IndustriesHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="Industries" style={styles.image} />
      <div style={styles.overlay}>
        <h1>INDUSTRY-FOCUSED SOLUTIONS FOR REAL BUSINESS CHALLENGES</h1>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    height: "500px",   // important
    width: "100%",
    overflow: "hidden",
  },
  image: {
    position: "absolute",  // important
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",    // VERY important
  },
  overlay: {
  position: "absolute",
  bottom: "60px",
  left: "80px",
  right: "80px",   // THIS makes it expand horizontally
  color: "#fff",
},
};

export default IndustriesHero;