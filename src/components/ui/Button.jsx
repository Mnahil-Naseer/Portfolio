const base =
  "inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#010F55_0%,#0654B0_45%,#00022A_100%)] text-white shadow-[0_0_40px_-8px_rgba(6,84,176,0.55)] hover:shadow-[0_0_50px_-6px_rgba(6,84,176,0.75)] hover:-translate-y-0.5",
  secondary:
    "border border-white/10 bg-white/[0.04] text-ink-100 shadow-[0_0_25px_-10px_rgba(6,84,176,0.25)] hover:border-cyan-400/40 hover:bg-[linear-gradient(135deg,rgba(1,15,85,0.7),rgba(6,84,176,0.45))] hover:-translate-y-0.5",
  ghost:
    "text-ink-300 hover:text-ink-100 hover:bg-white/[0.05] hover:shadow-[0_0_20px_-12px_rgba(6,84,176,0.35)]",
};

export default function Button({ as = "button", href, variant = "primary", children, className = "", ...props }) {
  const Comp = typeof as === "string" ? as : as;
  const passThroughProps = {
    className: `${base} ${variants[variant]} ${className}`,
    ...props,
  };

  if (Comp === "a") {
    passThroughProps.href = href ?? props.href;
  } else if (Comp !== "button") {
    passThroughProps.to = props.to ?? href;
  }

  return <Comp {...passThroughProps}>{children}</Comp>;
}
