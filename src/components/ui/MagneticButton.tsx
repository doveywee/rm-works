"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.12, y: y * 0.12 });
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "bg-chalk text-ink hover:bg-white shadow-glow"
      : "glass text-chalk hover:bg-white/5";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.5 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
