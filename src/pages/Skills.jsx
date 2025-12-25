const skills = [
  {
    category: "AI & Computer Vision",
    icon: "🧠",
    level: 90,
    projects: ["TriNetra"],
    items: [
      "YOLO-based object detection",
      "Real-time video analytics",
      "Violence & anomaly detection",
      "False-positive reduction",
      "Multi-camera CCTV pipelines",
      "OpenCV video processing",
    ],
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    level: 70,
    projects: ["TriNetra", "AppShield"],
    items: [
      "FastAPI & REST APIs",
      "AI inference pipelines",
      "Scalable system design",
      "Client–server architecture",
      "Async request handling",
    ],
  },
  {
    category: "Security & Privacy",
    icon: "🔐",
    level: 60,
    projects: ["AppShield"],
    items: [
      "Android permission analysis",
      "Tracker detection",
      "Privacy policy NLP analysis",
      "Network traffic analysis",
      "Data leakage detection",
    ],
  },
  {
    category: "Data Analytics",
    icon: "📊",
    level: 75,
    projects: ["AppShield"],
    items: [
      "Exploratory Data Analysis (EDA)",
      "Data cleaning & preprocessing",
      "Power BI dashboards",
      "Data visualization",
      "Trend & insight extraction",
    ],
  },
  {
    category: "Machine Learning",
    icon: "🤖",
    level: 78,
    projects: ["TriNetra"],
    items: [
      "Supervised & unsupervised learning",
      "Feature engineering",
      "Model evaluation",
      "Basic deep learning workflows",
    ],
  },
  {
    category: "IoT & Embedded",
    icon: "🔌",
    level: 75,
    projects: ["Smart Mat", "Remote Motor Pump"],
    items: [
      "Arduino & sensors",
      "Real-time automation",
      "Embedded logic",
      "Hardware–software integration",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section">
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.category}</h3>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="level-text">{skill.level}% proficiency</span>

            {/* Skill List */}
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            {/* Project Badges */}
            <div className="badge-container">
              {skill.projects.map((proj, i) => (
                <span key={i} className="badge">
                  {proj}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
