import logoPic from "../assets/logo.svg";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={logoPic} alt="Airiv Infotech" style={styles.logoImage} />
      </div>

      <nav style={styles.nav}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    padding: "20px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    zIndex: 10,
  },
  logo: {
    fontWeight: "700",
    fontSize: "20px",
    height: "40px",
  },
  nav: {
    display: "flex",
    gap: "30px",
    fontSize: "14px",
  },
};

export default Header;
