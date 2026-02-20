
import { Link } from "react-router-dom";
import logoPic from "../assets/logo.svg";

function Header() {
  return (
    <header style={styles.header}>
      <Link to="/">
        <img src={logoPic} alt="Logo" style={styles.logo} />
      </Link>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>HOME</Link>
        <Link to="/industries" style={styles.link}>INDUSTRIES</Link>
        <Link to="/about" style={styles.link}>ABOUT</Link>
        <Link to="/services" style={styles.link}>SERVICES</Link>
        <Link to="/contact" style={styles.link}>CONTACT</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0b2a5c",
    zIndex: 1000,
  },
  logo: {
    height: "40px",
  },
  nav: {
    display: "flex",
    gap: "30px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default Header;