export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-700 font-mono">
        <p>© 2026 Mnahil Naseer · Built differently.</p>
        <a
          href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
          className="hover:text-ink-300 transition-colors"
        >
          mnahilnaseerofficial@gmail.com
        </a>
      </div>
    </footer>
  );
}
