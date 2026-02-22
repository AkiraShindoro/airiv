import valueImg from "../../assets/services/value1.png";

function ValueCreated() {
  return (
    <section className="value-created">
      <div className="value-left">
        <h2 className="value-heading">VALUE CREATED THROUGH SERVICES</h2>

        <p className="value-lead">
          Our service portfolio is designed to generate measurable impact
          across operational efficiency, innovation velocity, and long-term
          enterprise scalability.
        </p>

        <p className="value-text">
          By aligning technology execution with business strategy, we enable
          organizations to achieve sustainable competitive advantage and
          accelerate digital transformation with confidence.
        </p>
      </div>

      <div className="value-right">
        <img src={valueImg} alt="Value Created" className="value-image" />
      </div>
    </section>
  );
}

export default ValueCreated;