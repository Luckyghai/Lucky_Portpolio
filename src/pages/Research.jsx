import { publications } from "../data/portfolioData";
import { BookOpen } from "lucide-react";

export default function Research() {
  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Research Publications
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Peer-reviewed conference publications in healthcare security, 3D bioprinting, and spine surgery AI.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-5">
        {publications.map((pub, idx) => (
          <div key={idx} className="premium-card p-6 sm:p-7 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Paper #{idx + 1}
                </span>
              </div>
              <span className="text-xs px-3 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold self-start sm:self-auto">
                {pub.conference}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {pub.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
