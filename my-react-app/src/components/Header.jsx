
import { Link } from "react-router-dom";
import { useState } from "react";
import logoPic from "../assets/logo.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logoPic} alt="Logo" className="logo img-fluid" />
      </Link>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>

      <nav className={`site-nav ${open ? "mobile open" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/industries">INDUSTRIES</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;