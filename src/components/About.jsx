import { motion } from "framer-motion";
import { Zap, Layers, Ruler } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import StatCounter from "./ui/StatCounter";

const features = [
  {
    icon: Zap,
    title: "Ship fast, ship polished",
    desc: "I move quickly without cutting corners on UX, performance, or detail.",
  },
  {
    icon: Layers,
    title: "Full stack, cross-platform",
    desc: "From React Native apps to Node APIs and Supabase schemas, I own the whole stack.",
  },
  {
    icon: Ruler,
    title: "Design as a discipline",
    desc: "Typography, motion, hierarchy — every pixel earns its place.",
  },
];

const stats = [
  { target: 12, suffix: "+", label: "Projects shipped" },
  { target: 5, suffix: "+", label: "Featured products" },
  { target: 3, suffix: "y", label: "Building experience" },
  { target: 100, suffix: "%", label: "Craft commitment" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        <SectionHeading
          eyebrow="About"
          heading="A product-minded engineer who treats craft like a feature."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-violet-400">
                <f.icon size={18} />
              </div>
              <h3 className="font-display text-lg font-medium text-ink-100">{f.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-2xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
