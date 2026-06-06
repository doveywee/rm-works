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
    <section id="process" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
            A process built for momentum.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting rail behind the step nodes (desktop only) */}
          <div
            aria-hidden
            className="absolute inset-x-6 top-5 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.08}>
                <div className="group relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-ink font-display text-sm font-medium text-mist transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent">
                      {s.no}
                    </span>
                    <h3 className="font-display text-xl font-medium text-chalk lg:mt-6">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist lg:max-w-[15rem]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
