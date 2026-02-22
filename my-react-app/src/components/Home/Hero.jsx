import Herosection from "../../assets/Hero Section.svg";

function Hero() {
  const bg = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${Herosection})`;

  return (
    <section id="home" className="hero" style={{ background: `${bg} center/cover no-repeat` }}>
      <div className="hero-overlay bottom-left">
        <h1 className="hero-title">
          Technology with Intelligence.<br />
          Solutions with Purpose.
        </h1>
      </div>
    </section>
  );
}

export default Hero;