export default function Experience() {
  return (
    <section className="section experience-section">
      <h1 className="section-title">Experience</h1>

      <div className="experience-timeline">

        {/* Experience 1 */}
        <div className="experience-card">
          <div className="experience-header">
            <h2>AI Research Intern</h2>
            <span className="company">Security Intelligence & Operations Center (SIOC), DMIHER</span>
            <span className="duration">2024 – 2025</span>
          </div>

          <p className="experience-desc">
            Worked on AI-powered surveillance and security analytics systems,
            focusing on real-time video intelligence and red-flag detection
            for public safety use cases.
          </p>

          <ul>
            <li>Developed AI pipelines for CCTV-based surveillance systems</li>
            <li>Worked on real-time activity and anomaly detection concepts</li>
            <li>Assisted in integrating computer vision models into backend systems</li>
            <li>Contributed to centralized monitoring and alert workflows</li>
          </ul>

          <div className="tech-stack">
            <span>Computer Vision</span>
            <span>AI Systems</span>
            <span>Python</span>
            <span>Video Analytics</span>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience-card secondary">
          <div className="experience-header">
            <h2>Python Programming Intern</h2>
            <span className="company">CodSoft</span>
            <span className="duration">2023</span>
          </div>

          <p className="experience-desc">
            Completed a Python programming internship focused on strengthening
            fundamentals and implementing small-scale applications.
          </p>

          <ul>
            <li>Worked on basic Python scripts and logic building</li>
            <li>Practiced problem-solving and modular coding</li>
            <li>Gained hands-on exposure to real-world coding tasks</li>
          </ul>

          <div className="tech-stack">
            <span>Python</span>
            <span>Programming Basics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
