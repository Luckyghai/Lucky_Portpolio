import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import profileImg from "../assets/profile.jpg";
import { personalInfo, education, experience, projects } from "../data/portfolioData";

export default function Home() {
  const currentRole = experience[0];
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient Top Glow for lighting & depth */}
      <div className="ambient-top-glow" />

      {/* HERO SECTION */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-5xl mx-auto animate-fade-in-up">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="space-y-6 text-center md:text-left max-w-2xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Software & AI Engineering Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-text-accent">Lucky Ghai</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                Software & AI Engineer
              </p>
              <p className="text-sm text-sky-400 font-medium">
                {education.degree}
              </p>
              <p className="text-xs text-slate-400">
                {education.institution}
              </p>
            </div>

            {/* Resume Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Education Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="font-semibold text-emerald-400">CGPA: {education.cgpa}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{education.graduation}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white btn-vibrant flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume (PDF)</span>
              </a>

              <Link
                to="/contact"
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center md:justify-start gap-4 text-slate-400 text-sm">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-105 transition flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-105 transition flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white hover:scale-105 transition flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="hover:text-white hover:scale-105 transition flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Phone</span>
              </a>
            </div>
          </div>

          {/* Right Column (Profile Image with Gradient Ring) */}
          <div className="shrink-0 relative group">
            {/* Subtle glow backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-violet-600 opacity-60 blur-lg group-hover:opacity-90 transition duration-500"></div>

            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT ROLE HIGHLIGHT */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto border-t border-slate-800/60">
        <div className="premium-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Current Role
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentRole.role}
              </h2>
              <p className="text-sm font-medium text-indigo-300">{currentRole.company}</p>
            </div>
            <span className="text-xs text-slate-400 font-medium bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
              {currentRole.period}
            </span>
          </div>

          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentRole.points.slice(0, 3).map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold mt-0.5">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              to="/experience"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition inline-flex items-center gap-1"
            >
              <span>View full experience timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS OVERVIEW */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto border-t border-slate-800/60 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Real-world engineering applications directly from my resume.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition"
          >
            View all 6 projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((p, idx) => (
            <div key={idx} className="premium-card p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-sky-300 transition">
                  {p.title}
                </h3>
                {p.period && <p className="text-xs text-indigo-400 font-medium">{p.period}</p>}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.points[0]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition inline-flex items-center gap-1"
                >
                  <span>Project details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
