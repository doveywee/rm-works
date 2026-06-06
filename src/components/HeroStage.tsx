"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { BlackHoleCanvas } from "./three/BlackHoleCanvas";

const HEADLINE = ["Websites with", "gravity."];

export function HeroStage() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
  });

  // badge / subtitle / CTAs are pulled in + fade as the hole grows
  const domOpacity = useTransform(scrollYProgress, [0.04, 0.4], [1, 0]);
  const domScale = useTransform(scrollYProgress, [0, 0.42], [1, 0.55]);
  const flash = useTransform(scrollYProgress, [0.78, 0.9, 1], [0, 0.45, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const badge = (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-mist">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
      Taking on 3 new partners for Q3
    </span>
  );

  const lower = (
    <>
      <p className="mx-auto max-w-xl text-base leading-relaxed text-mist sm:text-lg text-balance">
        A design &amp; engineering studio building immersive, high-converting
        websites. Motion, 3D, and obsessive craft — shipped fast.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <MagneticButton href="#contact" variant="primary">
          Start a project <span aria-hidden>↗</span>
        </MagneticButton>
        <MagneticButton href="#templates" variant="ghost">
          Browse templates
        </MagneticButton>
      </div>
    </>
  );

  // ---- reduced-motion: static headline, no pin -----------------------
  if (reduce) {
    return (
      <section
        id="top"
        className="relative flex min-h-dvh flex-col items-center justify-center gap-7 overflow-hidden px-6 pt-28 text-center"
      >
        {badge}
        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-chalk sm:text-7xl text-balance">
          Websites with <span className="gradient-text">gravity.</span>
        </h1>
        <div className="max-w-3xl">{lower}</div>
      </section>
    );
  }

  return (
    <section ref={stageRef} id="top" className="relative h-[200vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* full-screen particle canvas: headline + black hole (not clipped) */}
        <BlackHoleCanvas
          progress={progressRef}
          lines={HEADLINE}
          className="pointer-events-none absolute inset-0 z-20"
        />

        {/* badge — above the centred headline */}
        <motion.div
          style={{ opacity: domOpacity, scale: domScale }}
          className="absolute left-1/2 top-[23%] z-10 -translate-x-1/2"
        >
          {badge}
        </motion.div>

        {/* subtitle + CTAs — below the centred headline */}
        <motion.div
          style={{ opacity: domOpacity, scale: domScale }}
          className="absolute left-1/2 top-[63%] z-10 w-full max-w-3xl -translate-x-1/2 px-6 text-center"
        >
          {lower}
        </motion.div>

        {/* collapse flash */}
        <motion.div
          style={{ opacity: flash }}
          className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,#ffffff_0%,rgba(168,140,255,0.4)_18%,transparent_50%)]"
        />

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-mist"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
