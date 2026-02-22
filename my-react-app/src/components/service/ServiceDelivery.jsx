import img1 from "../../assets/services/pg2.png";
import img2 from "../../assets/services/pg1.png";

function ServiceDelivery() {
  const steps = [
    {
      image: img1,
      title: "Discover & Assess",
      desc: "Understand business objectives and evaluate the current technology landscape to identify transformation opportunities.",
    },
    {
      image: img2,
      title: "Design & Architect",
      desc: "Create scalable, secure, and future-ready solution blueprints tailored to enterprise needs.",
    },
    {
      image: img2,
      title: "Build & Implement",
      desc: "Develop and deploy solutions with strong governance, agile execution, and operational precision.",
    },
    {
      image: img2,
      title: "Optimize & Support",
      desc: "Continuously enhance performance, improve efficiency, and ensure long-term operational resilience.",
    },
  ];

  return (
    <>
      <section className="delivery-section">
        <h2 className="delivery-heading">SERVICE DELIVERY MODEL</h2>

        <p className="delivery-intro">
          Our structured methodology ensures predictable delivery,
          measurable business outcomes, and sustained long-term value creation.
        </p>

        <div className="delivery-grid">
          {steps.map((step, index) => (
            <div key={index} className="delivery-card">
              <img src={step.image} alt="" />
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


export default ServiceDelivery;