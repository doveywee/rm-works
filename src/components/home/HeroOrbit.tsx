"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

// rings: inset within the stage, plane tilt, spin duration, direction
const rings = [
  { inset: "0%", z: 0, duration: "19s", rev: false },
  { inset: "13%", z: 55, duration: "13s", rev: true },
  { inset: "27%", z: -40, duration: "9s", rev: false },
];

/** The hero's gravitational model: CSS 3D orbits + cursor parallax. */
export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), {
    stiffness: 70,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), {
    stiffness: 70,
    damping: 18,
  });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-fit [perspective:950px]"
    >
      {/* drafting hairlines through the model */}
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-rule"
      />
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-rule"
      />

      <motion.div
        style={reduce ? undefined : { rotateX, rotateY }}
        className="relative h-72 w-72 [transform-style:preserve-3d] sm:h-[22rem] sm:w-[22rem]"
      >
        {/* static dashed survey circle */}
        <span
          aria-hidden
          className="absolute inset-[-7%] rounded-full border border-dashed border-rule"
        />

        {/* the mass */}
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_26%,#4a4133,#1a1611_60%)] shadow-[0_30px_60px_-20px_rgba(26,22,17,0.55)] sm:h-28 sm:w-28" />
        <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_26%,rgba(246,242,233,0.35),transparent_42%)] sm:h-28 sm:w-28" />

        {/* spinning orbits, each on its own tilted plane */}
        {rings.map((ring, i) => (
          <span
            key={i}
            aria-hidden
            className="rm-ring"
            style={{
              inset: ring.inset,
              transform: `rotateX(72deg) rotateZ(${ring.z}deg)`,
            }}
          >
            <span
              className={`rm-ring-spin ${ring.rev ? "rm-ring-spin--rev" : ""}`}
              style={{ animationDuration: ring.duration }}
            >
              <span className="rm-sat" style={{ scale: 1 - i * 0.18 }} />
            </span>
          </span>
        ))}
      </motion.div>

      {/* spinning specimen stamp */}
      <div
        aria-hidden
        className="rm-spin-slow absolute -bottom-4 -left-6 h-24 w-24 text-ink sm:-left-10"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path
              id="rm-badge-circ"
              d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"
            />
          </defs>
          <text
            fontSize="9.2"
            letterSpacing="2.6"
            fill="currentColor"
            fontFamily="var(--font-mono)"
          >
            <textPath href="#rm-badge-circ">
              RM WORKS · EST 2025 · MOTION · CRAFT ·
            </textPath>
          </text>
          <circle cx="50" cy="50" r="3.5" fill="var(--color-accent)" />
        </svg>
      </div>

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        fig. 01 — gravitational system · CSS 3D · no WebGL
      </p>
    </div>
  );
}
