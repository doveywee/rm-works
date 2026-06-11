"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const links = [
  { label: "Lab", href: "#lab" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-rule shadow-[0_1px_0_rgba(26,22,17,0.04)]" : "border-transparent"
      }`}
    >
      {/* reading progress: a thin orange rule across the very top */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-[26px] leading-none tracking-tight text-ink">
            RM Works
          </span>
          <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rm-link font-mono text-[11px] uppercase tracking-[0.22em] text-soot"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 bg-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-accent sm:inline-flex"
          >
            Start a project <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center border border-rule text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-rule bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-rule py-4"
            >
              <span className="font-display text-2xl text-ink">{l.label}</span>
              <span className="font-mono text-[10px] text-faint">0{i + 1}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-ink px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper"
          >
            Start a project <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
