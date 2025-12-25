import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Engineering Projects</h1>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 hover:border-blue-500/50 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>

              <p className="text-gray-300 mb-4 max-w-4xl">
                {p.description}
              </p>

              <span className="inline-block mb-4 px-3 py-1 text-xs rounded bg-blue-600/20 text-blue-400">
                {p.domain}
              </span>

              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
