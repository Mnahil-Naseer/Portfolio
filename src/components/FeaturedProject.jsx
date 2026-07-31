import { motion } from "framer-motion";
import Pill from "./ui/Pill";
import { projects } from "../data/projects";

const p = projects.find((project) => project.slug === "smart-ride-sharing-system");

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-10"
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <Pill className="w-fit border-cyan-400/40 bg-cyan-400/10 text-cyan-300">{p.tag}</Pill>
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-ink-100">{p.title}</h3>
        <p className="text-sm sm:text-base text-ink-500 leading-relaxed">{p.description}</p>

        <ul className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-ink-300">
          {p.caseStudy.highlights.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Problem</h4>
            <p className="text-sm text-ink-500 leading-relaxed">{p.caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Solution</h4>
            <p className="text-sm text-ink-500 leading-relaxed">{p.caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Challenges</h4>
            <ul className="text-sm text-ink-500 space-y-1">
              {p.caseStudy.challenges.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Learnings</h4>
            <ul className="text-sm text-ink-500 space-y-1">
              {p.caseStudy.learnings.map((l) => (
                <li key={l}>· {l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {p.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>


    </motion.div>
  );
}
