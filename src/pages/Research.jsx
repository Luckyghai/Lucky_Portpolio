export default function Research() {
  return (
    <section className="section research-section">
      <h1 className="section-title">Research & Publications</h1>

      <div className="research-grid">

        {/* Publication 1 */}
        <div className="research-card">
          <h2>
            A Review of Blockchain for Secure Patient Data in Healthcare
            <span className="year">(2025)</span>
          </h2>

          <div className="tags">
            <span>Blockchain</span>
            <span>Healthcare Security</span>
            <span>Data Privacy</span>
          </div>

          <p className="abstract">
            This paper reviews blockchain-based architectures for secure storage,
            access control, and integrity of patient medical data, addressing
            privacy breaches and unauthorized access in modern healthcare systems.
          </p>

          <ul>
            <li>Analyzed blockchain frameworks for healthcare data protection</li>
            <li>Identified scalability and interoperability challenges</li>
            <li>Evaluated real-world healthcare adoption barriers</li>
          </ul>
        </div>

        {/* Publication 2 */}
        <div className="research-card">
          <h2>
            Advancements in 3D Bioprinting: Techniques and Applications
            <span className="year">(2025)</span>
          </h2>

          <div className="tags">
            <span>Biomedical Engineering</span>
            <span>3D Bioprinting</span>
            <span>AI in Healthcare</span>
          </div>

          <p className="abstract">
            This review explores modern 3D bioprinting techniques, materials,
            and clinical applications, highlighting their role in regenerative
            medicine and tissue engineering.
          </p>

          <ul>
            <li>Compared extrusion, inkjet, and laser-assisted bioprinting</li>
            <li>Reviewed clinical and experimental use cases</li>
            <li>Discussed limitations in scalability and cell viability</li>
          </ul>
        </div>

        {/* Publication 3 */}
        <div className="research-card">
          <h2>
            Enhancing Patient Outcomes in Spine Surgery: The Role of AI in Implant
            Design and Postoperative Care
            <span className="year">(2025)</span>
          </h2>

          <div className="tags">
            <span>Artificial Intelligence</span>
            <span>Computer Vision</span>
            <span>Healthcare Analytics</span>
          </div>

          <p className="abstract">
            This paper investigates how AI-driven techniques such as convolutional
            neural networks, predictive analytics, and wearable data analysis can
            improve spinal implant design and enable proactive postoperative care.
          </p>

          <ul>
            <li>AI-based vertebral segmentation and implant personalization</li>
            <li>Predictive models for postoperative complication detection</li>
            <li>Analysis of regulatory, ethical, and clinical integration challenges</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
