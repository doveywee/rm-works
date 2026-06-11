import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

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
    <section id="process" className="border-b border-rule bg-paper-2/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="04"
          label="Method"
          title="A process built for momentum."
        />

        <div className="mt-16 grid grid-cols-1 border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="group flex h-full flex-col border-b border-rule px-0 py-8 sm:min-h-[16rem] sm:border-b-0 sm:px-6 sm:py-10 lg:border-l lg:border-rule lg:first:border-l-0 lg:first:pl-0">
                <span className="font-display text-5xl italic text-rule transition-colors duration-300 group-hover:text-accent sm:text-6xl">
                  {s.no}
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-soot">
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
