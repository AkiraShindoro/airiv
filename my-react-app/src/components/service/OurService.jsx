import serviceImg from "../../assets/services/our-service.png";

function OurService() {
  return (
    <section className="our-service">
      <div className="service-left">
        <h2 className="service-heading">OUR SERVICE</h2>

        <p className="service-lead">
          Delivering technology-enabled solutions that combine innovation,
          operational excellence, and long-term value creation.
        </p>

        <ul className="service-list">
          <li>Business-aligned digital transformation.</li>
          <li>Secure and scalable enterprise solutions.</li>
          <li>Cloud modernization strategies.</li>
          <li>Intelligent automation and analytics.</li>
        </ul>
      </div>

      <div className="service-right">
        <img src={serviceImg} alt="Our Service" className="service-image" />
      </div>
    </section>
  );
}


export default OurService;