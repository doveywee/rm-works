"use client";

import { Reveal } from "./ui/Reveal";

const steps = [
  {
    no: "01",
    title: "Discovery",
    body: "We dig into your goals, audience, and metrics. You leave the kickoff with a sharper strategy than you came in with.",
  },
  {
    no: "02",
    title: "Design",
    body: "Art direction, prototypes, and motion studies. We design in the browser early so what you approve is what you ship.",
  },
  {
    no: "03",
    title: "Build",
    body: "Production engineering in Next.js with a component system, CMS, and analytics wired in. Weekly demos, no black box.",
  },
  {
    no: "04",
    title: "Launch & grow",
    body: "We ship, monitor, and iterate. Post-launch we run experiments to keep pushing conversion up.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-line/60 bg-ink-soft/40 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
            A process built for momentum.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="group h-full bg-ink p-7 transition-colors duration-300 hover:bg-surface">
                <span className="font-display text-sm font-medium text-fog">
                  {s.no}
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-chalk">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
