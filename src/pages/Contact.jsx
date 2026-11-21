import { useState } from "react";
import { Download, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo, education } from "../data/portfolioData";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'fallback'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      } else {
        throw new Error(result.error || "Failed to send message via SMTP");
      }
    } catch {
      // Fallback: Opens email client with message pre-filled
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setStatus("fallback");
    }
  };

  return (
    <div className="relative min-h-screen py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Reach out for software engineering opportunities, collaborations, or inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="premium-card p-6 space-y-4 text-sm">
            <div>
              <div className="text-xs text-slate-400 font-medium">Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-sky-400 font-semibold transition"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Phone</div>
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-white hover:text-sky-400 font-semibold transition"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-medium">LinkedIn</div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-sky-400 font-semibold transition flex items-center justify-between"
              >
                <span>{personalInfo.linkedinDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-medium">GitHub</div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-sky-400 font-semibold transition flex items-center justify-between"
              >
                <span>{personalInfo.githubDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Location & University</div>
              <div className="text-white font-medium">{personalInfo.location}</div>
              <div className="text-xs text-slate-400">{education.institution}</div>
            </div>
          </div>

          <div className="premium-card p-5">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-semibold btn-vibrant text-white flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7 premium-card p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-white">Send a Direct Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Your Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white btn-vibrant flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{status === "submitting" ? "Sending via SMTP..." : "Send Message"}</span>
            </button>

            {status === "success" && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs text-center font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Message sent successfully via SMTP to luckyghai.wr@gmail.com!</span>
              </div>
            )}

            {status === "fallback" && (
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs text-center font-medium">
                Opened your email client addressed to luckyghai.wr@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
