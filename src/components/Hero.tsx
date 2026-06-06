"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";

// R3F must only run on the client — load the Canvas with SSR disabled.
const Scene = dynamic(() => import("./three/Scene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-white/10 blur-3xl" />
    </div>
  ),
});

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // content drifts up + fades as you scroll past; the canvas/orb stays put and
  // just fades out (no positional drift)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-28"
    >
      {/* 3D shader canvas — fixed in place, fades on scroll */}
      <motion.div
        style={reduce ? undefined : { opacity: canvasOpacity }}
        className="absolute inset-0 -z-0"
      >
        <Scene />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-mist"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
          Taking on 3 new partners for Q3
        </motion.div>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-chalk sm:text-7xl md:text-8xl text-balance">
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="block"
          >
            Websites with
          </motion.span>
          <motion.span
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="block gradient-text"
          >
            gravity.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg text-balance"
        >
          Vantage Systems is a design &amp; engineering studio building immersive,
          high-converting websites. Motion, 3D, and obsessive craft — shipped fast.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#contact" variant="primary">
            Start a project
            <span aria-hidden>↗</span>
          </MagneticButton>
          <MagneticButton href="#templates" variant="ghost">
            Browse templates
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-mist"
          />
        </div>
      </motion.div>
    </section>
  );
}
