function WhyAiriv() {
  const points = [
    "Deep domain expertise across critical industries.",
    "Enterprise-grade governance and delivery models.",
    "Proven track record of scalable transformations.",
    "Commitment to security, compliance, and resilience.",
  ];

  return (
    <section className="why-section">
      <h2 className="why-heading">WHY AIRIV INFOTECH</h2>

      <div className="why-grid">
        {points.map((point, index) => (
          <div key={index} className="why-card">
            <p className="why-text">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhyAiriv;