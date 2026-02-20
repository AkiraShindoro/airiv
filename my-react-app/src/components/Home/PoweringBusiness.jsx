import img1 from "../../assets/powering/img1.png";
import img2 from "../../assets/powering/img2.png";
import img3 from "../../assets/powering/img3.png";

function PoweringBusiness() {
  const items = [
    {
      title: "INDUSTRIES",
      image: img1,
      desc: "Delivering innovation across key global industries.",
    },
    {
      title: "SERVICES",
      image: img2,
      desc: "End-to-end enterprise technology solutions.",
    },
    {
      title: "CAREERS",
      image: img3,
      desc: "Join a team shaping the future of intelligent tech.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        POWERING BUSINESS WITH INTELLIGENT SOLUTIONS
      </h2>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} style={styles.image} />
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 80px",
    background: "#0b2a5c",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "60px",
    fontSize: "28px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "40px",
  },
  card: {
    background: "#ffffff",
    color: "#000",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  title: {
    padding: "20px 20px 10px",
  },
  desc: {
    padding: "0 20px 20px",
    fontSize: "14px",
    color: "#555",
  },
};

export default PoweringBusiness;