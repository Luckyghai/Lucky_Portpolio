import { useState } from "react";

export default function Achievements() {
  const [active, setActive] = useState(null);

  const achievements = [
    {
      title: "DevFest Nagpur 2025 – Buildathon",
      subtitle: "3rd Prize Winner · GDG Nagpur",
      description:
        "Secured 3rd place at DevFest Nagpur 2025 Buildathon organized by Google Developer Group (GDG) Nagpur. The competition focused on building impactful, scalable solutions. Our project demonstrated strong technical execution, innovation, and real-world applicability.",
    },
    {
      title: "Bharatiya Antariksh Hackathon – 2024",
      description:
        "Participated in a national-level hackathon organized under Bharatiya Antariksh initiative, focusing on problem statements related to space technology, data processing, and secure systems.",
    },
    {
      title: "NPTEL – Distributed Systems",
      description:
        "Completed NPTEL certification in Distributed Systems covering system design, fault tolerance, consistency models, and scalability.",
    },
    {
      title: "Python for Data Analysis",
      description:
        "Hands-on certification covering data manipulation, visualization, exploratory data analysis, and working with real-world datasets using Python.",
    },
    {
      title: "CDSS-4 – Cybersecurity Certification",
      description:
        "Cybersecurity certification covering network security, threat analysis, secure systems, and defensive strategies.",
    },
  ];

  return (
    <section className="section">
      <h1 className="section-title">Achievements & Certifications</h1>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="achievement-card clickable"
            onClick={() => setActive(item)}
          >
            <h3>{item.title}</h3>
            {item.subtitle && (
              <p className="subtitle">{item.subtitle}</p>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{active.title}</h2>
            {active.subtitle && (
              <p className="modal-subtitle">{active.subtitle}</p>
            )}
            <p className="modal-text">{active.description}</p>

            <button
              className="modal-close"
              onClick={() => setActive(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
