import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Pill from "./ui/Pill";
import { GithubIcon } from "./ui/BrandIcons";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="glass glass-hover rounded-2xl p-4 sm:p-6 flex flex-col gap-4"
    >
      <Pill className="w-fit text-xs">{project.tag}</Pill>
      <h3 className="font-display text-lg sm:text-xl font-medium text-ink-100">{project.title}</h3>
      <p className="text-xs sm:text-sm text-ink-500 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Pill key={t} className="text-[10px] sm:text-[11px]">{t}</Pill>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-3 border-t border-white/[0.06]">
        <span className="text-xs font-mono text-ink-700 uppercase tracking-wider">Case study</span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-ink-300 hover:text-cyan-400 transition-colors"
          >
            Read <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-ink-300 hover:text-cyan-400 transition-colors"
            >
              Live <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-ink-300 hover:text-cyan-400 transition-colors"
            >
              Code <GithubIcon size={12} className="sm:w-3.5 sm:h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
