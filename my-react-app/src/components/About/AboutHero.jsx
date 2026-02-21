import heroImg from "../../assets/about/about home.jpg";

function AboutHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="About" style={styles.image} />

      <div style={styles.overlay}>
        <h1 style={styles.title}>
          ENGINEERING TECHNOLOGY WITH PURPOSE
        </h1>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    width: "100vw",
    height: "60vh",
    minHeight: "400px",
    overflow: "hidden",
  },

  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    textAlign: "center",
    color: "#fff",
  },

  title: {
    fontSize: "42px",
    fontWeight: "600",
    maxWidth: "900px",
    lineHeight: "1.2",
  },
};

export default AboutHero;