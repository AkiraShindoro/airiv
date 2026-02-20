import heroImg from "../../assets/contact/contact1.jpg";

function ContactHero() {
  return (
    <section style={styles.section}>
      <img src={heroImg} alt="Contact" style={styles.image} />
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    height: "300px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default ContactHero;