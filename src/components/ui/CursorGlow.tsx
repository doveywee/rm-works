"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 22, mass: 0.6 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // skip on touch devices / reduced motion
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    function move(e: MouseEvent) {
      // enable on first real pointer move (avoids setState in the effect body)
      setEnabled(true);
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[500px] w-[500px] rounded-full bg-accent/[0.07] blur-[130px]"
    />
  );
}
