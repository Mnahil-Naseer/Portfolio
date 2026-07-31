import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import Pill from "./ui/Pill";
import CodeCard from "./CodeCard";
import ThreeBackground from "./ThreeBackground";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import resumePdf from "../assets/Mnahil_Naseer.pdf";

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
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pb-12 pt-24 sm:pb-20 sm:pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grad-radial" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <ThreeBackground />
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-mono text-ink-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="font-display text-3xl font-semibold leading-[1.05] text-ink-100 sm:text-4xl md:text-5xl lg:text-6xl">
            Mnahil Naseer
            <br />
            <span className="bg-[linear-gradient(135deg,#0654B0_0%,#010F55_100%)] bg-clip-text text-transparent">Full Stack & Mobile Developer</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-ink-500">
            Computer Science Student · Full Stack Developer · Mobile App Developer
          </p>

          <p className="text-ink-300 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Building modern web and mobile experiences that solve real-world problems.
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:gap-4">
            <Button as={Link} href="/projects" variant="primary" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button as="a" href={resumePdf} variant="secondary" download className="w-full sm:w-auto">
              Download Resume
            </Button>
            <Button
              as="a"
              href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm text-ink-500 font-mono">
            <a
              href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
              className="flex items-center gap-1 hover:text-ink-100 transition-colors truncate"
              title="mnahilnaseerofficial@gmail.com"
            >
              <Mail size={12} className="sm:w-3.5 sm:h-3.5" /> 
              <span className="hidden sm:inline">mnahilnaseerofficial@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="text-ink-700 hidden sm:inline">|</span>
            <a
              href="https://github.com/Mnahil-Naseer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-ink-100 transition-colors"
            >
              <GithubIcon size={12} className="sm:w-3.5 sm:h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mnahil-naseer/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-ink-100 transition-colors"
            >
              <LinkedinIcon size={12} className="sm:w-3.5 sm:h-3.5" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-grad-primary opacity-20 blur-3xl" />
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
