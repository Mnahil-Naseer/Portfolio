import { useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";

const codeLines = [
  "import { createApp } from 'react';",
  "import { build } from 'vite';",
  "import App from './App';",
  "",
  "const developer = {",
  "  name: 'Mnahil Naseer',",
  "  role: 'Full Stack & Mobile Developer',",
  "  focus: 'Product-quality experiences',",
  "};",
  "",
  "export default developer;",
];

export default function CodeCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { damping: 20, stiffness: 110 });
  const rotateY = useSpring(mouseX, { damping: 20, stiffness: 110 });

  const lines = useMemo(
    () => codeLines.map((line, index) => ({ line, index })),
    []
  );

  return (
    <motion.div
      className="relative rounded-[2rem] border border-white/10 bg-[#060b18]/90 shadow-glow backdrop-blur-xl px-6 py-6 overflow-hidden"
      style={{ rotateX, rotateY, perspective: 1200 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set((x / rect.width) * 20);
        mouseY.set((y / rect.height) * -20);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.24),_transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.16),_transparent_20%)] pointer-events-none" />
      <div className="relative flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-ink-500">Hero code</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink-100">Interactive code preview</h3>
          </div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-300">
            Hover to move
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#020617]/80 p-5 font-mono text-sm text-ink-300 overflow-x-auto">
          {lines.map(({ line, index }) => (
            <div key={index} className="flex gap-3 items-start">
              <span className="w-6 text-right text-ink-500 select-none">{index + 1}</span>
              <span className="whitespace-pre">{line}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-ink-400">Built for modern product quality.</p>
            <p className="text-sm text-ink-400">Smooth motion, clean code, polished delivery.</p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-400"
          >
            Explore projects
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
