import Herosection from "../../assets/Hero Section.svg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Technology with Intelligence.<br />
          Solutions with Purpose.
        </h1>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    background: `linear-gradient(
  rgba(0,0,0,0.55),
  rgba(0,0,0,0.55)
), url(${Herosection}) center/cover no-repeat`,
    display: "flex",
    alignItems: "center",
    paddingLeft: "60px",
    color: "#fff",
  },
  overlay: {
    maxWidth: "600px",
    background: "rgba(0, 70, 140, 0.6)",
    padding: "40px",
  },
  title: {
    fontSize: "36px",
    lineHeight: "1.3",
  },
};

export default Hero;
