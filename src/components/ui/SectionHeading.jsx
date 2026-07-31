import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, heading, subtext, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 sm:gap-4 max-w-2xl ${alignment}`}
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-cyan-400">
        {`// ${eyebrow}`}
      </span>
      <h2 className="font-display text-[1.65rem] font-semibold leading-tight text-ink-100 sm:text-3xl md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtext && <p className="text-ink-500 text-sm sm:text-base md:text-lg leading-relaxed">{subtext}</p>}
    </motion.div>
  );
}
