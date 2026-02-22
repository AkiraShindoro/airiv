import whoImg from "../../assets/about/about1.jpg";

function WhoWeAre() {
  return (
    <>
      <section className="who-section">
        <div className="who-left">
          <h2 className="who-heading">WHO WE ARE</h2>

          <p className="who-lead">
            Airiv Infotech is an engineering-driven technology partner focused on
            building intelligent, scalable, and secure enterprise solutions.
          </p>

          <p className="who-text">
            We combine deep technical expertise with strategic business insight
            to solve complex operational challenges across industries. Our
            approach ensures technology investments deliver measurable,
            sustainable value.
          </p>

          <p className="who-text">
            From modernization initiatives to digital transformation programs,
            we architect solutions that empower organizations to innovate with
            confidence and grow with resilience.
          </p>
        </div>

        <div className="who-right">
          <img src={whoImg} alt="Who We Are" className="who-image" />
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;