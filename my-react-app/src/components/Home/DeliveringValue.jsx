import img1 from "../../assets/delivering value.png";

function DeliveringValue() {
  return (
    <section className="dv-section">
      <div className="dv-left">
        <h2 className="dv-heading">DELIVERING VALUE BEYOND TECHNOLOGY</h2>

        <p className="dv-text">
          We deliver measurable business outcomes by aligning innovation
          with operational excellence and long-term strategic goals.
        </p>
      </div>

      <div className="dv-right">
        <img src={img1} alt="Delivering Value" className="dv-image" />
      </div>
    </section>
  );
}


export default DeliveringValue;