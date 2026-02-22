import careersImg from "../assets/career.png";

function Careers() {
  return (
    <>
      <section className="careers-section">
        <div>
          <img src={careersImg} alt="Careers" className="career-image" />
        </div>

        <div className="career-content">
          <h2 className="career-heading">Careers</h2>

          <h3 className="career-subheading">Grow Your Career At The Heart Of Change</h3>

          <p className="career-text">
            It’s your time to shine. Bring your ingenuity, curiosity, and bold
            ideas to a team that values innovation, collaboration, and impact.
          </p>

          <button className="career-btn">Join Us</button>
        </div>
      </section>
    </>
  );
}


export default Careers;