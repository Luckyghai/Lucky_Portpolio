import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  FileText,
  Home as HomeIcon,
  Briefcase,
  FolderGit2,
  Cpu,
  BookOpen,
  Trophy,
  Mail,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Skills", path: "/skills", icon: Cpu },
    { name: "Research", path: "/research", icon: BookOpen },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-indigo-950/60 shadow-lg shadow-black/40"
          : "bg-[#07090e]/60 backdrop-blur-sm border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-200">
            LG
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-sm sm:text-base group-hover:text-sky-300 transition-colors">
              Lucky Ghai
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Software & AI Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1 rounded-full shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600/90 to-indigo-600/90 shadow-sm shadow-indigo-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5 opacity-80" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA: Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold btn-vibrant text-white"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold btn-vibrant text-white"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-indigo-950/80 px-4 py-4 space-y-1.5 shadow-2xl animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-sky-300 border border-indigo-500/30"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                  }`
                }
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
