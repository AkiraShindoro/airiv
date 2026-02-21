import industriesImg from "../../assets/powering/img1.png";
import servicesImg from "../../assets/powering/img2.png";
import careersImg from "../../assets/powering/img3.png";

function PoweringBusiness() {
  const items = [
    {
      image: industriesImg,
      title: "INDUSTRIES",
      desc: "We support clients across insurance, utilities, healthcare, manufacturing, and technology-driven enterprises.",
    },
    {
      image: servicesImg,
      title: "SERVICES",
      desc: "AI & Data Analytics, Cloud & Application Development, Enterprise Asset Management, QA & Testing, and Talent Services. We deliver scalable, secure, and future-ready technology solutions.",
    },
    {
      image: careersImg,
      title: "CAREERS",
      desc: "Join a team of innovators, problem-solvers, and technologists shaping the future of digital solutions. Build meaningful impact while growing your expertise.",
    },
  ];

  return (
    <>
      <section style={styles.section} className="pb-section">
        <h2 style={styles.heading} className="pb-heading">
          POWERING BUSINESS WITH INTELLIGENT SOLUTIONS
        </h2>

        <div style={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className="pb-card">
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
                className="pb-image"
              />

              <div style={styles.content}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .pb-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          transition: all 0.35s ease;
        }

        .pb-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 35px 70px rgba(0,0,0,0.2);
        }

        .pb-image {
          transition: transform 0.4s ease;
        }

        .pb-card:hover .pb-image {
          transform: scale(1.05);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .pb-section {
            padding: 100px 50px !important;
          }

          .pb-heading {
            font-size: 24px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .pb-section {
            padding: 80px 25px !important;
          }

          .pb-heading {
            font-size: 22px !important;
            margin-bottom: 40px !important;
          }

          .pb-card {
            aspect-ratio: auto !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {
    padding: "150px 140px",
    background: "#0b2a5c",
    textAlign: "center",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "80px",
    fontSize: "32px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "50px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  image: {
    width: "100%",
    height: "55%",
    objectFit: "cover",
  },

  content: {
    padding: "30px",
    textAlign: "left",
  },

  title: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#0b2a5c",
    fontWeight: "600",
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555",
  },
};

export default PoweringBusiness;