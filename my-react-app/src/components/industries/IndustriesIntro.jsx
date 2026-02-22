import introImg from "../../assets/industries/industries serve.png";

function IndustriesIntro() {
  return (
    <>
      <section className="industries-intro">
        <div className="intro-left">
          <h2 className="intro-heading">INDUSTRIES WE SERVE</h2>

          <p className="intro-text">
            We provide industry-focused solutions that help organizations
            navigate complexity, modernize operations, and unlock long-term
            value.
          </p>

          <p className="intro-text">
            Our expertise spans infrastructure, utilities, manufacturing,
            and public-sector environments.
          </p>
        </div>

        <div className="intro-right">
          <img src={introImg} alt="Industries" className="intro-image" />
        </div>
      </section>
    </>
  );
}
export default IndustriesIntro;