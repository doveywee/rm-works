"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const spring = { stiffness: 95, damping: 24, mass: 0.5 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // skip on touch devices / reduced motion
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    function move(e: MouseEvent) {
      setEnabled(true);
      x.set(e.clientX - 180);
      y.set(e.clientY - 180);
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(251,146,60,0.20) 0%, rgba(249,115,22,0.14) 25%, rgba(249,115,22,0.07) 45%, rgba(249,115,22,0.03) 62%, transparent 78%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[360px] w-[360px] rounded-full blur-[88px] will-change-transform"
    />
  );
}
