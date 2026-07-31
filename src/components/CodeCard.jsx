import { useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";

const codeLines = [
  "import { StrictMode } from 'react';",
  "import { createRoot } from 'react-dom/client';",
  "import App from './App';",
  "",
  "const developer = {",
  "  name: 'Mnahil Naseer',",
  "  role: 'Full Stack & Mobile Developer',",
  "  stack: ['React', 'Node.js', 'Supabase', 'React Native'],",
  "  focus: 'Product-quality experiences',",
  "};",
  "",
  "createRoot(document.getElementById('root')).render(",
  "  <StrictMode>",
  "    <App />",
  "  </StrictMode>",
  ");",
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
      className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-base-900/90 px-3 py-3 shadow-glow backdrop-blur-xl sm:max-w-[520px] sm:px-5 sm:py-5"
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,84,176,0.24),_transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(149,152,161,0.16),_transparent_20%)]" />
      <div className="relative flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-ink-500 sm:text-xs">~/portfolio/src</p>
            <h3 className="mt-1 text-lg font-semibold text-ink-100 sm:mt-2 sm:text-xl">$ npm run dev</h3>
          </div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-ink-300 sm:px-3 sm:text-xs">
            Interactive
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-base-950/80 p-3 font-mono text-[11px] text-ink-300 sm:p-4 sm:text-sm">
          {lines.map(({ line, index }) => (
            <div key={index} className="flex gap-3 items-start">
              <span className="w-6 text-right text-ink-500 select-none">{index + 1}</span>
              <span className="whitespace-pre">{line}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs text-ink-400 sm:text-sm">React · Node.js · Supabase; the stack behind every project here.</p>
            <p className="text-xs text-ink-400 sm:text-sm">Shipped and deployed, not just designed.</p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0654B0_0%,#010F55_100%)] px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_0_30px_-8px_rgba(6,84,176,0.5)] transition hover:bg-[linear-gradient(135deg,#010F55_0%,#0654B0_100%)] sm:px-4 sm:py-2.5 sm:text-xs"
          >
            Explore projects
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}