import missionImg from "../../assets/about/about2.jpg";
import visionImg from "../../assets/about/about3.jpg";

function MissionVision() {
  return (
    <>
      <section className="mv-section">
        <h2 className="mv-heading">OUR MISSION & VISION</h2>

        {/* Mission */}
        <div className="mv-card">
          <div className="mv-image-wrapper">
            <img src={missionImg} alt="Mission" className="mv-image" />
          </div>

          <div className="mv-content">
            <h3 className="mv-subHeading">Our Mission</h3>
            <p className="mv-text">
              To deliver intelligent, secure, and scalable technology solutions
              that empower organizations to innovate with confidence and build
              resilient digital ecosystems for sustained growth.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mv-card reverse">
          <div className="mv-image-wrapper">
            <img src={visionImg} alt="Vision" className="mv-image" />
          </div>

          <div className="mv-content">
            <h3 className="mv-subHeading">Our Vision</h3>
            <p className="mv-text">
              To be a trusted global technology partner recognized for
              engineering excellence, forward-thinking innovation, and
              long-term value creation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;