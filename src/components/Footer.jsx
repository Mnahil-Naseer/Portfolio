export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-ink-700 font-mono">
        <p>© 2026 Mnahil Naseer · Built differently.</p>
        <a
          href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
          className="hover:text-ink-300 transition-colors truncate text-center sm:text-right max-w-xs sm:max-w-none"
        >
          mnahilnaseerofficial@gmail.com
        </a>
      </div>
    </footer>
  );
}
