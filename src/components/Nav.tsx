"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Templates", href: "#templates" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-glow" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-white to-white/50">
            <span className="h-2.5 w-2.5 rounded-sm bg-ink transition-transform duration-300 group-hover:rotate-45" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-chalk">
            AETHER
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-chalk hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-chalk px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95"
        >
          Start a project
        </a>
      </nav>
    </motion.header>
  );
}
