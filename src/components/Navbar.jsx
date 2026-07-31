import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-950/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-ink-100 sm:text-base">
          MN<span className="text-cyan-400">.</span>
        </Link>

        <ul className="hidden items-center gap-6 font-body text-xs text-ink-300 sm:text-sm md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="relative whitespace-nowrap transition-colors hover:text-ink-100"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-grad-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-[linear-gradient(135deg,#010F55_0%,#0654B0_45%,#00022A_100%)] px-3 py-2 text-xs font-medium text-white shadow-[0_0_40px_-8px_rgba(6,84,176,0.55)] sm:inline-flex sm:px-4 sm:text-sm"
          >
            Hire me <span aria-hidden>→</span>
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-ink-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-base-950/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3 text-sm text-ink-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.05] hover:text-ink-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
