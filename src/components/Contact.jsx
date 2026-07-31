import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Let's build something — from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:mnahilnaseerofficial@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Contact"
          heading="Let's build something amazing together."
          subtext="Have a product idea, internship, or freelance project in mind? I reply within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <a
              href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
              className="glass glass-hover rounded-2xl p-4 sm:p-5 flex items-center gap-3 text-ink-100"
            >
              <span className="h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Mail size={16} className="sm:w-4 sm:h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-ink-500">Email</p>
                <p className="text-xs sm:text-sm text-ink-100 truncate">mnahilnaseerofficial@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mnahil-naseer/"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-2xl p-4 sm:p-5 flex items-center gap-3 text-ink-100"
            >
              <span className="h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <LinkedinIcon size={16} className="sm:w-4 sm:h-4" />
              </span>
              <p className="text-xs sm:text-sm">LinkedIn</p>
            </a>
            <a
              href="https://github.com/Mnahil-Naseer"
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-2xl p-4 sm:p-5 flex items-center gap-3 text-ink-100"
            >
              <span className="h-9 sm:h-10 w-9 sm:w-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <GithubIcon size={16} className="sm:w-4 sm:h-4" />
              </span>
              <p className="text-xs sm:text-sm">GitHub</p>
            </a>
            <p className="text-xs text-ink-700 font-mono mt-2">
              Based remotely · Open to collaborations worldwide
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-mono text-ink-500">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-lg sm:rounded-xl bg-base-950/60 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 text-sm text-ink-100 outline-none focus:border-cyan-400/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-mono text-ink-500">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-lg sm:rounded-xl bg-base-950/60 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 text-sm text-ink-100 outline-none focus:border-cyan-400/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-mono text-ink-500">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="rounded-lg sm:rounded-xl bg-base-950/60 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 text-sm text-ink-100 outline-none focus:border-cyan-400/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" variant="primary" className="w-full mt-1">
              Send message <Send size={15} />
            </Button>
            {sent && (
              <p className="text-xs text-emerald-400 font-mono text-center">
                Your email client should be opening now — thanks for reaching out!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
