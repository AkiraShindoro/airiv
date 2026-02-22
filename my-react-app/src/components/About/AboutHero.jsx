import heroImg from "../../assets/about/about home.jpg";

function AboutHero() {
  return (
    <section className="about-hero">
      <img src={heroImg} alt="About" className="img-fluid" />

      <div className="about-overlay bottom-left">
        <h1 className="about-title">ENGINEERING TECHNOLOGY WITH PURPOSE</h1>
      </div>
    </section>
  );
}

export default AboutHero;