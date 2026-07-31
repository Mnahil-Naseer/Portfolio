import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import resumePdf from "../assets/Mnahil_Naseer.pdf";

const infoCards = [
  {
    title: "Education",
    lines: ["BS Computer Science · Final Year", "Coursework: DSA, Databases, SE, Mobile"],
  },
  {
    title: "Certifications",
    lines: ["Full Stack Web Dev", "Mobile App Development"],
  },
  {
    title: "Strengths",
    lines: ["Product thinking · Clean architecture · UI craft"],
  },
  {
    title: "Top Stack",
    lines: ["React · React Native · Node.js · Supabase"],
  },
];

const strengths = [
  "Architecting full-stack web apps from schema to UI",
  "Building React Native + Expo mobile apps with native polish",
  "Designing systems that scale — auth, payments, realtime",
  "Crafting accessible, performant, motion-aware interfaces",
  "Owning product details: copy, type, motion, edge cases",
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-16 sm:py-28 md:py-36 bg-base-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Resume & Experience"
          heading="The short version, downloadable."
          subtext="Computer Science student with a focus on full-stack web and mobile development. I love taking ambiguous problems and turning them into clean, fast, delightful products — from architecture decisions down to motion details."
        />

        <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
          <Button as="a" href={resumePdf} variant="primary" download>
            Download Resume (PDF)
          </Button>
          <Button
            as="a"
            href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
            variant="secondary"
          >
            Request CV
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex flex-col gap-2"
            >
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400">{card.title}</h4>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-ink-300 leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-5 sm:p-8"
        >
          <h4 className="font-display text-lg font-medium text-ink-100 mb-5">Technical strengths</h4>
          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-x-8">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-ink-300">
                <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
