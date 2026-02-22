function ValueDelivered() {
  const values = [
    "Improved operational efficiency.",
    "Faster time-to-market.",
    "Reduced technology risk.",
    "Enhanced system reliability.",
  ];

  return (
    <>
      <section className="value-section">
        <div className="value-container">
          <h2 className="value-heading">VALUE DELIVERED ACROSS INDUSTRIES</h2>

          <p className="value-subtext">Our industry solutions are designed to deliver measurable business value.</p>

          <div className="value-grid">
            {values.map((text, index) => (
              <div key={index} className="value-card">
                <div className="value-accent"></div>

                <div className="value-card-content">
                  <p className="value-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ValueDelivered;