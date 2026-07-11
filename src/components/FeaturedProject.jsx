import { motion } from "framer-motion";
import { MapPin, Star, MessageCircle } from "lucide-react";
import Pill from "./ui/Pill";
import { featuredProject as p } from "../data/projects";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-6 sm:p-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10"
    >
      <div className="flex flex-col gap-5">
        <Pill className="w-fit border-violet-500/40 text-violet-300">{p.tag}</Pill>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink-100">{p.title}</h3>
        <p className="text-ink-500 leading-relaxed">{p.description}</p>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-300">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 mb-1.5">Problem</h4>
            <p className="text-sm text-ink-500 leading-relaxed">{p.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Solution</h4>
            <p className="text-sm text-ink-500 leading-relaxed">{p.solution}</p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 mb-1.5">Challenges</h4>
            <ul className="text-sm text-ink-500 space-y-1">
              {p.challenges.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5">Learnings</h4>
            <ul className="text-sm text-ink-500 space-y-1">
              {p.learnings.map((l) => (
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

      {/* Mock preview panel */}
      <div className="relative rounded-2xl bg-base-950/70 border border-white/[0.06] p-5 flex flex-col gap-4 h-fit lg:sticky lg:top-28">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live trip · on route
          </span>
          <MapPin size={14} className="text-ink-500" />
        </div>

        <div className="rounded-xl h-36 bg-grid bg-base-900 border border-white/[0.06] relative overflow-hidden">
          <div className="absolute inset-0 bg-grad-radial" />
          <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full">
            <path
              d="M10 80 C 60 20, 120 90, 190 20"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 5"
            />
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <circle cx="10" cy="80" r="4" fill="#22d3ee" />
            <circle cx="190" cy="20" r="4" fill="#8b5cf6" />
          </svg>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-ink-500 text-xs">Driver</p>
            <p className="text-ink-100 flex items-center gap-1">
              Ahmed <Star size={12} className="text-amber-400 fill-amber-400" /> 4.9
            </p>
          </div>
          <div>
            <p className="text-ink-500 text-xs">Distance</p>
            <p className="text-ink-100">2.4 km</p>
          </div>
          <div>
            <p className="text-ink-500 text-xs">Live ETA</p>
            <p className="text-ink-100">4 min</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex items-start gap-2">
          <MessageCircle size={14} className="text-violet-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs text-ink-500 mb-0.5">AI Support</p>
            <p className="text-sm text-ink-300">"Your driver is 200m away."</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
