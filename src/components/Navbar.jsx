import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display font-semibold text-ink-100 tracking-tight">
          MN<span className="text-violet-400">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-300">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="hover:text-ink-100 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-grad-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:mnahilnaseerofficial@gmail.com?subject=Let%27s%20build%20something%20together"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-grad-primary px-4 py-2 text-sm font-medium text-white shadow-glow"
        >
          Hire me <span aria-hidden>→</span>
        </motion.a>
      </nav>
    </header>
  );
}
