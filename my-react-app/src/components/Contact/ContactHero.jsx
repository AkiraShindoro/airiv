import heroImg from "../../assets/contact/contact1.jpg";

function ContactHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="Contact" style={styles.image} />

      <div style={styles.overlay}>
        <h1 style={styles.title}>
          LET’S START A CONVERSATION
        </h1>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    width: "100vw",
    height: "55vh",
    minHeight: "350px",
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
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    textAlign: "center",
    color: "#fff",
  },

  title: {
    fontSize: "36px",
    fontWeight: "600",
    maxWidth: "800px",
  },
};

export default ContactHero;