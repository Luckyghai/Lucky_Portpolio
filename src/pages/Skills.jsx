import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  const badgeColors = [
    "bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-500/40",
    "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-500/40",
    "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-500/40",
    "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/40",
    "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40",
    "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:border-amber-500/40",
  ];

  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Core technical competencies, tools, and engineering practices from my resume.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="premium-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <h2 className="text-base font-bold text-white">
                {group.category}
              </h2>
              <span className="text-xs text-slate-500">
                {group.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border transition-colors duration-200 ${
                    badgeColors[idx % badgeColors.length]
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
