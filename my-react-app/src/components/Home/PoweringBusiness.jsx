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
    <section className="pb-section">
      <h2 className="pb-heading">POWERING BUSINESS WITH INTELLIGENT SOLUTIONS</h2>

      <div className="pb-grid">
        {items.map((item, index) => (
          <div key={index} className="pb-card">
            <img src={item.image} alt={item.title} className="pb-image" />

            <div className="pb-content">
              <h3 className="pb-title">{item.title}</h3>
              <p className="pb-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default PoweringBusiness;