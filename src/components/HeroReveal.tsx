"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";

const HOLE_BG =
  "radial-gradient(circle, #000 0%, #000 56%, rgba(10,10,10,0.95) 70%, rgba(249,115,22,0.75) 82%, rgba(255,224,190,1) 89%, rgba(249,115,22,0) 100%)";

/** A single headline word that gets torn off and spiralled into the hole. */
function WarpWord({
  progress,
  index,
  gradient = false,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  gradient?: boolean;
  children: ReactNode;
}) {
  const s = index * 0.05; // stagger so words are pulled in one after another
  const e = 0.32 + index * 0.04;
  const dir = index % 2 === 0 ? 1 : -1;

  const scale = useTransform(progress, [s, e], [1, 0.2]);
  const opacity = useTransform(progress, [s + 0.1, e], [1, 0]);
  const rotate = useTransform(progress, [s, e], [0, dir * 112]);
  const skewX = useTransform(progress, [s, e], [0, dir * 13]);
  const y = useTransform(progress, [s, e], [0, dir * 48]);

  return (
    <motion.span
      style={{ scale, opacity, rotate, skewX, y }}
      className={`inline-block will-change-transform ${
        gradient ? "gradient-text" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

export function HeroReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  // progress 0 -> 1 as the content rises from just below the fold to fully
  // covering the pinned hero (i.e. over the first viewport of scroll)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start start"],
  });
  // once the hole has consumed the screen, latch the reveal so the site's tiles
  // light up one by one (a one-shot sequence, not tied to scrub position)
  const [revealed, setRevealed] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
    if (v > 0.46) setRevealed(true);
  });
  useEffect(() => {
    if (scrollYProgress.get() > 0.46) setRevealed(true);
  }, [scrollYProgress]);

  // black hole: hidden at rest, fades in on first scroll, grows to engulf, then fades
  const holeScale = useTransform(scrollYProgress, [0, 0.45], [0.04, 1]);
  const holeOpacity = useTransform(scrollYProgress, [0, 0.06, 0.45, 0.82], [0, 1, 1, 0]);

  // whole headline converges toward the hole's centre while words warp in
  const hlScale = useTransform(scrollYProgress, [0, 0.42], [1, 0.25]);
  const hlRotate = useTransform(scrollYProgress, [0, 0.42], [0, 18]);

  const domOpacity = useTransform(scrollYProgress, [0.02, 0.3], [1, 0]);
  const domScale = useTransform(scrollYProgress, [0, 0.34], [1, 0.55]);

  const lower = (
    <>
      <p className="mx-auto max-w-xl text-base leading-relaxed text-mist sm:text-lg text-balance">
        A design &amp; engineering studio building immersive, high-converting
        websites. Motion, 3D, and obsessive craft, shipped fast.
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

  // ---- reduced-motion: static headline, content flows normally -------
  if (reduce) {
    return (
      <>
        <section
          id="top"
          className="relative flex min-h-dvh flex-col items-center justify-center gap-7 overflow-hidden px-6 pt-28 text-center"
        >
          <h1 className="font-headline text-5xl font-extrabold leading-[1.02] tracking-tight text-chalk sm:text-7xl text-balance">
            Websites with <span className="gradient-text">gravity.</span>
          </h1>
          <div className="max-w-3xl">{lower}</div>
        </section>
        {children}
      </>
    );
  }

  return (
    <div className="relative">
      {/* pinned hero — stays put while the site rises over it */}
      <div
        id="top"
        className="sticky top-0 z-0 flex h-dvh items-center justify-center overflow-hidden"
      >
        {/* black hole disc */}
        <motion.div
          aria-hidden
          style={{ scale: holeScale, opacity: holeOpacity, background: HOLE_BG }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[170vmax] w-[170vmax] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        />

        {/* headline — real type, each word warped into the hole */}
        <motion.h1
          style={{ scale: hlScale, rotate: hlRotate }}
          className="absolute left-1/2 top-1/2 z-30 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-6 text-center font-headline text-5xl font-extrabold leading-[1.04] tracking-tight text-chalk sm:text-7xl md:text-8xl"
        >
          <span className="flex flex-wrap items-baseline justify-center gap-x-[0.28em]">
            <WarpWord progress={scrollYProgress} index={0}>
              Websites
            </WarpWord>
            <WarpWord progress={scrollYProgress} index={1}>
              with
            </WarpWord>
          </span>
          <span className="mt-1 block">
            <WarpWord progress={scrollYProgress} index={2} gradient>
              gravity.
            </WarpWord>
          </span>
        </motion.h1>

        {/* subtitle + CTAs */}
        <motion.div
          style={{ opacity: domOpacity, scale: domScale }}
          className="absolute left-1/2 top-[66%] z-30 w-full max-w-3xl -translate-x-1/2 px-6 text-center"
        >
          {lower}
        </motion.div>
      </div>

      {/* the real site — appears in place where the hole was; once the hole has
          consumed the screen, each tile lights up in turn (dim -> bright) */}
      <div ref={contentRef} className="relative z-10">
        <div className={`site-reveal ${revealed ? "is-revealed" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
