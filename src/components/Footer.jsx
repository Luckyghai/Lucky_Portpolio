import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo, education } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] text-slate-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                Lucky Ghai
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                Software & AI Engineer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Software engineering, AI-driven applications, real-time computer vision, and scalable systems.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{education.institution} · {personalInfo.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-sky-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-sky-300 transition">
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-sky-300 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-sky-300 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-sky-300 transition">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-sky-300 transition">
                  Awards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-sky-300 transition truncate"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 hover:text-sky-300 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Lucky Ghai. All information from verified resume.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
