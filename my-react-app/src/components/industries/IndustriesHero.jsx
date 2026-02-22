import heroImg from "../../assets/industries/industries home.jpg";

function IndustriesHero() {
  return (
    <section className="industries-hero">
      <img src={heroImg} alt="Industries" className="img-fluid" />
      <div className="industries-overlay">
        <h1 className="industries-title">INDUSTRY-FOCUSED SOLUTIONS FOR REAL BUSINESS CHALLENGES</h1>
      </div>
    </section>
  );
}

export default IndustriesHero;