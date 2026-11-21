import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Projects
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Software and AI engineering projects directly from my resume.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((p, idx) => (
          <div key={idx} className="premium-card p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-3">
              <h2 className="text-xl font-bold text-white">
                {p.title}
              </h2>
              {p.period && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium self-start sm:self-auto">
                  {p.period}
                </span>
              )}
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {p.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
