import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Each One Empowers One</h2>

        <p className="cta-text">
          Join us to collaborate, engineer and build self-reliant
          communities and future-ready businesses driven by innovation.
        </p>

        <Link to="/contact" className="cta-button">CONTACT US</Link>
      </div>
    </section>
  );
}

export default AboutCTA;