"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { CountUp } from "./CountUp";

const skills = [
  { name: "Motion & interaction", level: 98 },
  { name: "Next.js engineering", level: 97 },
  { name: "Performance", level: 99 },
  { name: "Design systems", level: 95 },
  { name: "SEO & structured data", level: 96 },
  { name: "Brand & art direction", level: 92 },
];

const tools = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "CSS 3D",
  "WebGL / GLSL",
  "Schema.org",
  "Lighthouse",
  "Figma",
  "Static export",
  "Edge hosting",
];

function Meter({ name, level, index }: { name: string; level: number; index: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-rule py-5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
          {name}
        </span>
        <span className="font-mono text-[12px] tracking-[0.1em] text-soot">
          <CountUp to={level} suffix=" / 100" duration={1.2} />
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full bg-rule/60">
        <motion.div
          initial={{ scaleX: reduce ? level / 100 : 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full origin-left bg-accent"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="03"
          label="Stack & skills"
          title="Fluent across the whole build."
          intro="Strategy through shipped code, measured the way we measure everything else: honestly."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="border-b border-rule">
              {skills.map((s, i) => (
                <Meter key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Self-assessed, then stress-tested on every launch.
            </p>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
              Tools of the trade
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {tools.map((t, i) => (
                <Reveal key={t} delay={i * 0.04}>
                  <span className="inline-block cursor-default border border-rule px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-soot transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 border border-rule bg-paper-2/50 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Field note
              </p>
              <p className="mt-3 font-display text-2xl leading-snug tracking-tight text-ink">
                Every animation on this page runs on transforms only. That is
                why it never drops a frame.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
