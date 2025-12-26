import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-white">
          Lucky <span className="text-white">Ghai</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <Link to="/skills" className="hover:text-white">Skills</Link>
          <Link to="/research" className="hover:text-white">Research</Link>
          <Link to="/experience" className="hover:text-white">Experience</Link>
          <Link to="/achievements" className="hover:text-white">Achievements</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#020617] border-t border-[#1f2937] px-6 py-4">
          <div className="flex flex-col space-y-4 text-gray-300 text-base">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
            <Link onClick={() => setOpen(false)} to="/skills">Skills</Link>
            <Link onClick={() => setOpen(false)} to="/research">Research</Link>
            <Link onClick={() => setOpen(false)} to="/experience">Experience</Link>
            <Link onClick={() => setOpen(false)} to="/achievements">Achievements</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
