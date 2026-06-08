"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 28, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // skip on touch devices / reduced motion
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    function move(e: MouseEvent) {
      setEnabled(true);
      x.set(e.clientX - 160);
      y.set(e.clientY - 160);
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[320px] w-[320px] rounded-full bg-accent/[0.07] blur-[72px] will-change-transform"
    />
  );
}
