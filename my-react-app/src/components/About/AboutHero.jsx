import heroImg from "../../assets/about/about home.jpg";

function AboutHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="About" style={styles.image} />

      <div style={styles.overlay}>
        <h1>ENGINEERING TECHNOLOGY WITH PURPOSE</h1>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    height: "500px",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: "60px",
    left: "80px",
    right: "80px",
    color: "#ffffff",
  },
};

export default AboutHero;