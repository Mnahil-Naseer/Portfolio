import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import Pill from "./ui/Pill";
import CodeCard from "./CodeCard";
import ThreeBackground from "./ThreeBackground";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const codeLines = [
  { indent: 0, text: "// developer.ts" },
  { indent: 0, text: "const me = {" },
  { indent: 1, text: 'role: "builder",' },
  { indent: 1, text: 'stack: ["react", "react-native", "node", "supabase"],' },
  { indent: 1, text: 'focus: "premium UX",' },
  { indent: 0, text: "};" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-20 sm:pt-32"
    >
      <div className="absolute inset-0 bg-grad-radial pointer-events-none" />
      <div className="max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
        <ThreeBackground />
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-mono text-ink-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-ink-100">
            Mnahil Naseer
            <br />
            <span className="text-gradient">Full Stack & Mobile Developer</span>
          </h1>

          <p className="font-mono text-sm sm:text-base text-ink-500">
            Computer Science Student · Full Stack Developer · Mobile App Developer
          </p>

          <p className="text-ink-300 text-base sm:text-lg max-w-lg leading-relaxed">
            Building modern web and mobile experiences that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Button as={Link} href="/projects" variant="primary">
              View Projects
            </Button>
            <Button
              as="a"
              href="/Mnahil_Naseer_Resume.pdf"
              variant="secondary"
              download
            >
              Download Resume
            </Button>
            <Button
              as="a"
              href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
              variant="ghost"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4 text-sm text-ink-500 font-mono">
            <a
              href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
              className="flex items-center gap-1.5 hover:text-ink-100 transition-colors"
            >
              <Mail size={14} /> mnahilnaseerofficial@gmail.com
            </a>
            <span className="text-ink-700">|</span>
            <a
              href="https://github.com/Mnahil-Naseer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-ink-100 transition-colors"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mnahil-naseer/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-ink-100 transition-colors"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -inset-6 bg-grad-primary opacity-20 blur-3xl rounded-full" />
          <CodeCard />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-500 text-xs font-mono"
      >
        scroll
        <ChevronDown size={16} className="animate-bounce-slow" />
      </motion.a>
    </section>
  );
}
