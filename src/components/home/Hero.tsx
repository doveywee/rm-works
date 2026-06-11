import { HeroOrbit } from "./HeroOrbit";
import { Magnetic } from "./Magnetic";
import { CountUp } from "./CountUp";

const stats = [
  { to: 6, suffix: "", label: "Disciplines under one roof" },
  { to: 95, suffix: "+", label: "Lighthouse scores, every build" },
  { to: 1, suffix: " day", label: "Reply time, every inquiry" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      {/* drafting-sheet crop marks */}
      <span aria-hidden className="absolute left-4 top-4 font-mono text-xs text-faint">+</span>
      <span aria-hidden className="absolute right-4 top-4 font-mono text-xs text-faint">+</span>

      <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pt-20">
        {/* dossier meta line */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
          <span>Design &amp; engineering studio</span>
          <span className="hidden sm:inline">Remote first · Worldwide</span>
          <span>
            Doc. <span className="text-accent">RMW-01</span>
          </span>
        </div>

        {/* headline: lines rise out of clipped slots on load (CSS .rm-line) */}
        <h1 className="mt-10 font-display text-[17vw] leading-[0.92] tracking-tight text-ink sm:mt-14 sm:text-[12.5vw] lg:text-[10.5rem]">
          <span className="rm-line">
            <span>Websites</span>
          </span>
          <span className="rm-line">
            <span>
              with <em className="text-accent">gravity.</em>
              <span
                aria-hidden
                className="ml-[0.1em] hidden align-top font-mono text-[0.14em] tracking-normal text-faint min-[1200px]:inline-block"
              >
                (n.) the pull that keeps
                <br />
                visitors in orbit
              </span>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid items-center gap-14 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-soot">
              RM Works is a design and engineering studio building immersive,
              high-converting websites. Motion, craft, and measurable results,
              shipped fast.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Magnetic
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-accent"
              >
                Start a project <span aria-hidden>↗</span>
              </Magnetic>
              <Magnetic
                href="#lab"
                className="inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Enter the lab
              </Magnetic>
            </div>
          </div>

          {/* the gravitational model */}
          <div className="lg:col-span-7 lg:justify-self-end lg:pr-6">
            <HeroOrbit />
          </div>
        </div>

        {/* ruled stat strip with counters */}
        <div className="mt-14 grid grid-cols-1 border-t border-ink sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-baseline gap-4 border-b border-rule py-5 sm:border-b-0 sm:py-6 ${
                i > 0 ? "sm:border-l sm:border-rule sm:pl-8" : ""
              }`}
            >
              <span className="font-display text-4xl text-ink sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </span>
              <span className="max-w-[12rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-faint">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
