import { experience, education } from "../data/portfolioData";

export default function Experience() {
  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Experience & Education
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Professional engineering positions, research internships, and university education.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {experience.map((item, idx) => (
          <div key={idx} className="premium-card p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-white">
                    {item.role}
                  </h2>
                  {item.current && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-sky-400 mt-1">{item.company}</p>
              </div>
              <span className="text-xs text-slate-400 font-medium bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
                {item.period}
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-4 pt-6 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold text-white">Education</h2>

        <div className="premium-card p-6 sm:p-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{education.degree}</h3>
            <span className="text-xs text-slate-400">{education.graduation}</span>
          </div>

          <p className="text-sm text-slate-300">{education.faculty}</p>
          <p className="text-sm text-sky-400 font-medium">{education.institution}</p>

          <div className="pt-2 text-sm text-emerald-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>CGPA: {education.cgpa}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
