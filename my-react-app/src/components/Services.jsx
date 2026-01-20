import s1 from "../assets/service.svg";
import s2 from "../assets/service-2.svg";
import s3 from "../assets/service-3.svg";
import s4 from "../assets/service-4.svg";
import s5 from "../assets/service-5.svg";

function Services() {
  const items = [
  { title: "Custom Application Development", img: s1 },
  { title: "IT Consulting & Digital Transformation", img: s2 },
  { title: "Enterprise Systems & Asset Solutions", img: s3 },
  { title: "AI, Analytics, IoT & Cloud", img: s4 },
  { title: "Workforce Solutions & Mobility", img: s5 },
];

  return (
    <section id="services">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        OUR SERVICES
      </h2>

      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item.title} style={styles.card}>
            <img src={item.img} style={styles.img} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}




const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  card: {
    background: "#203a60",
    color: "#fff",
    padding: "30px",
    minHeight: "260px",
  },
  img: {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  marginBottom: "16px",
},
};

export default Services;
