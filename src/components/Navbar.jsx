export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* NAME — hidden on mobile, visible on desktop */}
        <span className="hidden md:block text-lg font-semibold text-blue-400">
          Lucky Ghai
        </span>

        {/* NAV LINKS */}
        <div className="w-full md:w-auto flex justify-center md:justify-end space-x-5 text-sm text-gray-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/skills" className="hover:text-white transition">Skills</a>
          <a href="/research" className="hover:text-white transition">Research</a>
          <a href="/experience" className="hover:text-white transition">Experience</a>
          <a href="/achievements" className="hover:text-white transition">Achievements</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}
