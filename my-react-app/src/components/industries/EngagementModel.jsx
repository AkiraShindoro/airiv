function EngagementModel() {
  const items = [
    "Collaborative discovery with business and IT stakeholders.",
    "Flexible delivery models (project-based or long-term support).",
    "Agile execution with enterprise-grade governance.",
    "Continuous improvement post-deployment.",
  ];

  return (
    <>
      <section className="eng-section">
        <div className="eng-container">
          <h2 className="eng-heading">OUR INDUSTRY ENGAGEMENT MODEL</h2>

          <p className="eng-intro">
            We adapt our delivery model to align with each industry’s pace,
            risk profile, and transformation goals.
          </p>

          <div className="eng-grid">
            {items.map((text, index) => (
              <div key={index} className="eng-card">
                <div className="eng-accent"></div>

                <div className="eng-card-content">
                  <p className="eng-card-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default EngagementModel;