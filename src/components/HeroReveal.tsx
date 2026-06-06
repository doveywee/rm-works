"use client";

import { useRef, type ReactNode } from "react";
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
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
  });

  const domOpacity = useTransform(scrollYProgress, [0.02, 0.3], [1, 0]);
  const domScale = useTransform(scrollYProgress, [0, 0.34], [1, 0.55]);
  const flash = useTransform(scrollYProgress, [0.38, 0.5, 0.64], [0, 0.5, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // the site is born out of the collapsed point: it grows from the centre and
  // fades in over the page background, then each section pops in on its own
  const siteScale = useTransform(scrollYProgress, [0.48, 0.96], [0.4, 1]);
  const siteOpacity = useTransform(scrollYProgress, [0.46, 0.66], [0, 1]);

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

  // ---- reduced-motion: static headline, content flows normally -------
  if (reduce) {
    return (
      <>
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
        {children}
      </>
    );
  }

  return (
    <div className="relative">
      {/* pinned black-hole hero — stays put while the site rises over it */}
      <div
        id="top"
        className="sticky top-0 z-0 flex h-dvh items-center justify-center overflow-hidden"
      >
        <BlackHoleCanvas
          progress={progressRef}
          lines={HEADLINE}
          consumeEnd={0.45}
          className="pointer-events-none absolute inset-0 z-20"
        />

        <motion.div
          style={{ opacity: domOpacity, scale: domScale }}
          className="absolute left-1/2 top-[23%] z-10 -translate-x-1/2"
        >
          {badge}
        </motion.div>

        <motion.div
          style={{ opacity: domOpacity, scale: domScale }}
          className="absolute left-1/2 top-[63%] z-10 w-full max-w-3xl -translate-x-1/2 px-6 text-center"
        >
          {lower}
        </motion.div>

        <motion.div
          style={{ opacity: flash }}
          className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,#ffffff_0%,rgba(168,140,255,0.4)_18%,transparent_50%)]"
        />

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-mist"
            />
          </div>
        </motion.div>
      </div>

      {/* the real site — grows out of the collapsed point over the page bg
          (transparent, so there's no box/border), each section then pops in.
          outer div is scroll-tracked; the transform lives on the inner one */}
      <div ref={contentRef} className="relative z-10">
        <motion.div
          style={{ scale: siteScale, opacity: siteOpacity }}
          className="origin-top"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
