import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-semibold text-white">
          Lucky Ghai
        </span>

        <div className="space-x-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <Link to="/skills" className="hover:text-white">Skills</Link>
          <Link to="/research" className="hover:text-white">Research</Link>
          <Link to="/experience" className="hover:text-white">Experience</Link>
          <Link to="/achievements" className="hover:text-white">Achievements</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
