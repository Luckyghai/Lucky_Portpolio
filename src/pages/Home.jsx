import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-[85vh] flex items-center px-4 sm:px-6 bg-[#020617]">
      <div className="
        max-w-6xl mx-auto w-full
        grid grid-cols-1 md:grid-cols-2
        items-center gap-10
      ">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lucky Ghai
          </h1>

          <h2 className="text-lg sm:text-xl text-gray-400 mb-6">
            Software & AI Engineer (B.Tech, 3rd Year)
          </h2>

          <p className="max-w-xl mx-auto md:mx-0 text-gray-300 leading-relaxed">
            I build secure, data-driven, and intelligent software systems across
            application security, artificial intelligence, data analysis, and
            IoT-based automation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-2 border border-gray-500 text-gray-200 rounded-md hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="
            w-40 h-40
            sm:w-48 sm:h-48
            md:w-64 md:h-64
            rounded-full
            overflow-hidden
            border border-gray-700
            shadow-xl
          ">
            <img
              src={profileImg}
              alt="Lucky Ghai"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
