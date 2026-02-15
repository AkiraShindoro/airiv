import { useEffect, useRef, useState } from "react";
import "./coreCapabilities.css";

const capabilities = [
  {
    title: "Digital Transformation",
    desc: "Modernizing enterprise ecosystems with scalable architecture.",
  },
  {
    title: "Enterprise Systems",
    desc: "Robust asset and infrastructure management solutions.",
  },
  {
    title: "AI & Intelligent Automation",
    desc: "Data-driven insights powering operational excellence.",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Secure, scalable, and resilient cloud environments.",
  },
];

function CoreCapabilities() {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cap-section">
      <h2 className="cap-heading">Core Capabilities</h2>

      <div className="cap-grid">
        {capabilities.map((item, index) => (
          <div
            key={index}
            className={`cap-card ${visible ? "reveal" : ""}`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <div className="cap-inner">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreCapabilities;
