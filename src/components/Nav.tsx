"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  const [expanded, setExpanded] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
    if (v <= 24) setExpanded(false); // back at the top: restore the full bar
  });

  // full bar shows at the top of the page, or when the collapsed logo is clicked
  const showMenu = !scrolled || expanded;

  function onLogoClick(e: React.MouseEvent) {
    if (scrolled) {
      e.preventDefault(); // don't jump to top — just toggle the menu
      setExpanded((v) => !v);
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex px-4 pt-4 ${
        showMenu ? "justify-center" : "justify-start"
      }`}
    >
      <motion.nav
        layout
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-3 rounded-full px-5 py-3 transition-[background-color,box-shadow,border-color] duration-300 ${
          showMenu ? "w-full max-w-6xl justify-between" : "w-auto"
        } ${scrolled ? "glass shadow-glow" : "border border-transparent"}`}
      >
        <a
          href="#top"
          onClick={onLogoClick}
          aria-label={scrolled && !expanded ? "Open menu" : "RM Works, home"}
          className="flex items-center gap-2.5 group"
        >
          <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-white to-white/50">
            <span className="h-2.5 w-2.5 rounded-sm bg-ink transition-transform duration-300 group-hover:rotate-45" />
          </span>
          <AnimatePresence initial={false}>
            {showMenu && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden whitespace-nowrap font-display text-lg font-semibold tracking-tight text-chalk"
              >
                RM Works
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <AnimatePresence initial={false}>
          {showMenu && (
            <motion.div
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="hidden items-center gap-1 md:flex"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setExpanded(false)}
                  className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-chalk hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {showMenu && (
            <motion.a
              key="cta"
              href="#contact"
              onClick={() => setExpanded(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="whitespace-nowrap rounded-full bg-chalk px-5 py-2.5 text-sm font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Start a project
            </motion.a>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
