import heroImg from "../../assets/services/service-hero.jpg";
function ServicesHero() {
  return (
    <section className="service-hero">
      <img src={heroImg} alt="Services" className="img-fluid" />

      <div className="service-overlay">
        <h1 className="service-title">TECHNOLOGY SERVICES DESIGNED FOR BUSINESS IMPACT</h1>
      </div>
    </section>
  );
}

export default ServicesHero;