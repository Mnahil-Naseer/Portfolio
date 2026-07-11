const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-grad-primary text-white shadow-glow hover:shadow-[0_0_50px_-6px_rgba(139,92,246,0.75)] hover:-translate-y-0.5",
  secondary:
    "glass text-ink-100 hover:border-cyan-400/40 hover:-translate-y-0.5",
  ghost: "text-ink-300 hover:text-ink-100",
};

export default function Button({ as = "button", href, variant = "primary", children, className = "", ...props }) {
  const Comp = typeof as === "string" ? as : as;
  const passThroughProps = {
    className: `${base} ${variants[variant]} ${className}`,
    ...props,
  };

  if (Comp === "a") {
    passThroughProps.href = href;
  } else if (Comp !== "button") {
    passThroughProps.to = href;
  }

  return <Comp {...passThroughProps}>{children}</Comp>;
}
