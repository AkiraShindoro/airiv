function WhatDrivesUs() {
  const items = [
    {
      title: "Integrity in Delivery",
      desc: "We uphold transparency and accountability across every engagement.",
    },
    {
      title: "Engineering Excellence",
      desc: "High-quality solutions, built with precision and innovation.",
    },
    {
      title: "Business-First Thinking",
      desc: "Technology aligned with measurable business outcomes.",
    },
    {
      title: "Continuous Improvement",
      desc: "Committed to evolving with industry and client needs.",
    },
  ];

  return (
    <>
      <section style={styles.section}>
        <h2 style={styles.heading}>WHAT DRIVES US</h2>

        <div style={styles.container}>
          {items.map((item, index) => (
            <div key={index} className="drive-card">
              <div className="green-line"></div>

              <div>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hover Styles */}
      <style>{`
        .drive-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          background: #ffffff;
          padding: 35px 40px;
          margin-bottom: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .drive-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .green-line {
          position: absolute;
          left: 0;
          top: 0;
          width: 6px;
          height: 0%;
          background: #2ecc71;
          transition: height 0.4s ease;
        }

        .drive-card:hover .green-line {
          height: 100%;
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "160px 140px",
    background: "#f4f6f9",
  },

  heading: {
    fontSize: "40px",
    fontWeight: "600",
    marginBottom: "80px",
    color: "#0b2a5c",
  },

  container: {
    maxWidth: "1000px",
  },

  title: {
    fontSize: "22px",
    marginBottom: "12px",
    color: "#0b2a5c",
  },

  desc: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.8",
  },
};

export default WhatDrivesUs;