import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, heading, subtext, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-violet-400">
        {`// ${eyebrow}`}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-ink-100">
        {heading}
      </h2>
      {subtext && <p className="text-ink-500 text-base sm:text-lg leading-relaxed">{subtext}</p>}
    </motion.div>
  );
}
