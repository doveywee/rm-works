"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

/* ---- fig. A — CSS 3D hypercube ----------------------------------------- */

const faceTransforms = (z: number) => [
  `translateZ(${z}px)`,
  `rotateY(180deg) translateZ(${z}px)`,
  `rotateY(90deg) translateZ(${z}px)`,
  `rotateY(-90deg) translateZ(${z}px)`,
  `rotateX(90deg) translateZ(${z}px)`,
  `rotateX(-90deg) translateZ(${z}px)`,
];

function Hypercube() {
  return (
    <div className="rm-scene grid place-items-center">
      <div className="rm-cube h-24 w-24">
        {faceTransforms(48).map((t, i) => (
          <span key={i} className="rm-cube__face" style={{ transform: t }} />
        ))}
        <span className="rm-cube--inner block">
          {faceTransforms(24).map((t, i) => (
            <span
              key={i}
              className="rm-cube__face"
              style={{ transform: t, borderColor: "rgba(26,22,17,0.55)" }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

/* ---- fig. B — cursor-tilt specimen ------------------------------------- */

function TiltSpecimen() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), {
    stiffness: 120,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), {
    stiffness: 120,
    damping: 16,
  });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="grid place-items-center [perspective:700px]"
    >
      <motion.div
        style={reduce ? undefined : { rotateX, rotateY }}
        className="relative h-36 w-32 border border-ink bg-paper p-3 shadow-[0_24px_40px_-24px_rgba(26,22,17,0.5)] [transform-style:preserve-3d]"
      >
        <span
          className="absolute right-3 top-3 h-3 w-3 bg-accent"
          style={{ transform: "translateZ(46px)" }}
        />
        <span
          className="block font-display text-6xl leading-none text-ink"
          style={{ transform: "translateZ(34px)" }}
        >
          Aa
        </span>
        <span
          className="absolute bottom-8 left-3 right-6 block h-px bg-ink/30"
          style={{ transform: "translateZ(20px)" }}
        />
        <span
          className="absolute bottom-5 left-3 right-10 block h-px bg-ink/20"
          style={{ transform: "translateZ(14px)" }}
        />
        <span
          className="absolute bottom-2.5 left-3 font-mono text-[8px] uppercase tracking-[0.2em] text-faint"
          style={{ transform: "translateZ(26px)" }}
        >
          36 pt
        </span>
      </motion.div>
    </div>
  );
}

/* ---- fig. C — kinetic type ---------------------------------------------- */

function KineticType() {
  const word = "gravity.";
  return (
    <div className="flex items-center justify-center" aria-label={word}>
      {word.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className={`rm-bob font-display text-6xl italic leading-none ${
            ch === "." ? "text-accent" : "text-ink"
          }`}
          style={{ animationDelay: `${i * 0.09}s` }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}

/* ---- fig. D — frame-budget equalizer ------------------------------------ */

const eqBars = [0.0, 0.35, 0.12, 0.5, 0.22, 0.62, 0.08, 0.42, 0.3, 0.55, 0.18, 0.46];

function Equalizer() {
  return (
    <div className="flex h-24 items-end justify-center gap-1.5">
      {eqBars.map((delay, i) => (
        <span
          key={i}
          className={`rm-eq h-full w-2 ${
            i % 4 === 2 ? "bg-accent" : "bg-ink"
          }`}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const studies: {
  fig: string;
  name: string;
  spec: string;
  stage: ReactNode;
}[] = [
  {
    fig: "fig. A",
    name: "Hypercube",
    spec: "Pure CSS 3D · no WebGL",
    stage: <Hypercube />,
  },
  {
    fig: "fig. B",
    name: "Specimen tilt",
    spec: "Spring physics · cursor parallax",
    stage: <TiltSpecimen />,
  },
  {
    fig: "fig. C",
    name: "Kinetic type",
    spec: "Staggered loops · live text",
    stage: <KineticType />,
  },
  {
    fig: "fig. D",
    name: "Frame budget",
    spec: "Transform-only · steady 60fps",
    stage: <Equalizer />,
  },
];

export function Lab() {
  return (
    <section id="lab" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="01"
          label="The lab"
          title="Proof of craft, rendered live."
          intro="No videos, no mockups. Every study below is real code running in your browser right now, built with the same motion system we ship to clients."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studies.map((s, i) => (
            <Reveal key={s.fig} delay={i * 0.08} className="h-full">
              <figure className="group flex h-full flex-col border border-rule bg-paper transition-colors duration-300 hover:border-ink">
                <div className="grid h-52 place-items-center overflow-hidden border-b border-rule bg-paper-2/50 px-4">
                  {s.stage}
                </div>
                <figcaption className="flex flex-1 flex-col gap-1.5 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {s.fig}
                  </span>
                  <span className="font-display text-2xl tracking-tight text-ink">
                    {s.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    {s.spec}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
