"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const stack = [
  "Strategy",
  "Art Direction",
  "Design",
  "Motion",
  "Engineering",
  "Brand",
  "3D",
  "Launch",
];

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export function LogoMarquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smooth = useSpring(scrollVelocity, { damping: 90, stiffness: 200 });
  const velocityFactor = useTransform(smooth, [0, 1000], [0, 1.8], {
    clamp: false,
  });
  const skew = useTransform(smooth, [-3000, 0, 3000], [-2.5, 0, 2.5], {
    clamp: true,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const dt = Math.min(delta, 50) / 1000; // clamp dt to avoid jumps on tab refocus
    let moveBy = directionFactor.current * 1.1 * dt;
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative overflow-hidden py-16">
      <motion.div
        className="flex whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        <motion.div
          style={{ x }}
          className="flex shrink-0 items-center gap-12 pr-12"
        >
          {[...stack, ...stack, ...stack, ...stack].map((name, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-2xl font-medium tracking-tight text-fog/70 transition-colors hover:text-chalk"
            >
              {name}
              <span className="text-fog/40">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
