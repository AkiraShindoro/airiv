import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Each One Empowers One</h2>

      <p style={styles.text}>
        Join us to collaborate, engineer and build self-reliant
        communities and businesses.
      </p>

      <Link to="/contact" style={styles.button}>
        CONTACT US
      </Link>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 80px",
    background: "#0b2a5c",
    textAlign: "center",
    color: "#ffffff",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "600px",
    margin: "0 auto 30px",
    lineHeight: "1.6",
    color: "rgba(255,255,255,0.85)",
  },
  button: {
    display: "inline-block",
    padding: "12px 30px",
    background: "#ffffff",
    color: "#0b2a5c",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default AboutCTA;