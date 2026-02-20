import heroImg from "../../assets/services/service-hero.jpg";
function ServicesHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="Services" style={styles.image} />

      <div style={styles.overlay}>
        <h1>TECHNOLOGY SERVICES DESIGNED FOR BUSINESS IMPACT</h1>
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
    color: "#fff",
  },
};

export default ServicesHero;