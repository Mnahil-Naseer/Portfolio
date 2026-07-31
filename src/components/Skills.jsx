import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Pill from "./ui/Pill";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-28 md:py-36 bg-base-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">
        <SectionHeading
          eyebrow="Skills"
          heading="A toolkit built for modern products."
          subtext="Languages, frameworks, and tools I reach for when shipping production-grade web and mobile software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <h3 className="font-display text-base font-medium text-ink-100">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Pill key={item} className="hover:border-cyan-400/40 hover:scale-105 transition-transform">
                    {item}
                  </Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
