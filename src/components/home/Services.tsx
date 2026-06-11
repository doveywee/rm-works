"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const services = [
  {
    title: "Brand & Art Direction",
    body: "Identity systems, motion language, and a visual world your competitors can't copy.",
    overview:
      "We build identity from the ground up: a coherent system of color, type, motion, and art direction that makes your product instantly recognizable and impossible to confuse with anyone else.",
    points: [
      "Logo & wordmark systems",
      "Color & type foundations",
      "Motion & art direction",
      "Brand guidelines",
    ],
  },
  {
    title: "Immersive 3D",
    body: "Shaders, real-time scenes, and interactive product moments that stop the scroll.",
    overview:
      "Real-time 3D and custom shaders, rendered right in the browser. We build interactive scenes and generative visuals that turn a flat page into a moment people remember, without tanking performance.",
    points: [
      "Custom GLSL shaders",
      "Interactive product scenes",
      "Particle & generative art",
      "Tuned for a smooth 60fps",
    ],
  },
  {
    title: "Design Engineering",
    body: "Modern frameworks and component systems, built to scale and ship every week.",
    overview:
      "We design in code. That means type-safe, tested component systems that match the design exactly, scale cleanly, and let us ship improvements every single week instead of every quarter.",
    points: [
      "Reusable component systems",
      "Type-safe, tested code",
      "CMS & API integration",
      "Weekly shipping cadence",
    ],
  },
  {
    title: "Performance",
    body: "Sub-second loads, 95+ Lighthouse, Core Web Vitals in the green. Fast is a feature.",
    overview:
      "Speed is a feature, and a ranking factor. We obsess over load times, bundle size, and Core Web Vitals so your site feels instant on every device and network.",
    points: [
      "Sub-second load times",
      "95+ Lighthouse scores",
      "Core Web Vitals in the green",
      "Edge delivery & caching",
    ],
  },
  {
    title: "SEO & Analytics",
    body: "Technical SEO, structured data, and measurement wired in from day one.",
    overview:
      "Beautiful is worthless if no one finds it. We wire in technical SEO, structured data, and analytics from day one so you climb the rankings and actually understand what's working.",
    points: [
      "Technical SEO & schema",
      "Structured data markup",
      "Analytics & event tracking",
      "Metadata & content strategy",
    ],
  },
  {
    title: "Conversion Design",
    body: "Narrative, hierarchy, and micro-interactions tuned to turn visitors into revenue.",
    overview:
      "Every section earns its place. We design the narrative, hierarchy, and micro-interactions that guide visitors down the funnel, then test relentlessly to push conversion higher.",
    points: [
      "Narrative & hierarchy",
      "Funnel & CTA design",
      "A/B testing & iteration",
      "Micro-interactions that convert",
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="services" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="02"
          label="Capabilities"
          title="A full studio, not a freelancer marketplace."
        />

        <Reveal>
          <ul className="mt-16">
            {services.map((s, i) => {
              const isOpen = open === i;
              return (
                <li key={s.title} className="border-t border-rule last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[3rem_1fr_auto] items-baseline gap-3 py-6 text-left sm:grid-cols-[5rem_1fr_auto] sm:gap-6"
                  >
                    <span
                      className={`font-display text-lg italic transition-colors duration-300 ${
                        isOpen ? "text-accent" : "text-faint"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-3xl leading-tight tracking-tight transition-colors duration-300 sm:text-5xl ${
                        isOpen ? "text-accent" : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      aria-hidden
                      className={`justify-self-end font-mono text-xl text-faint transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-accent" : "group-hover:text-accent"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={
                          reduce
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-10 sm:grid-cols-[5rem_1fr] sm:gap-6">
                          <span aria-hidden />
                          <div className="grid max-w-4xl gap-8 md:grid-cols-2">
                            <p className="leading-relaxed text-soot">
                              {s.overview}
                            </p>
                            <ul className="space-y-2.5">
                              {s.points.map((p) => (
                                <li
                                  key={p}
                                  className="flex items-baseline gap-3 border-b border-rule pb-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-soot"
                                >
                                  <span className="text-accent">✦</span> {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
