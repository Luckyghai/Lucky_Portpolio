import { awards, leadership } from "../data/portfolioData";
import { Award, Users } from "lucide-react";

export default function Achievements() {
  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Awards & Leadership
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Competitive hackathon honors, certifications, and developer community leadership.
        </p>
      </div>

      {/* Section 1: Awards & Certifications */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sky-400">
          <Award className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">Awards & Certifications</h2>
        </div>

        <div className="premium-card p-6 sm:p-7 space-y-3">
          <ul className="space-y-3 text-sm text-slate-300">
            {awards.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Achievements & Leadership */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <Users className="w-5 h-5" />
          <h2 className="text-xl font-bold text-white">Achievements & Leadership</h2>
        </div>

        <div className="premium-card p-6 sm:p-7 space-y-3">
          <ul className="space-y-3 text-sm text-slate-300">
            {leadership.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
