"use client";

import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const tiers = [
  {
    name: "Website Design",
    price: "$1,000+",
    cadence: "one-time",
    blurb: "A custom website design, delivered ready to launch.",
    features: ["Custom website design", "Requires self-hosting"],
    featured: false,
  },
  {
    name: "Management Package",
    price: "$750",
    cadence: "+ hosting",
    blurb: "Design plus ongoing support and revisions.",
    features: ["Includes web support", "10 revisions"],
    featured: true,
  },
  {
    name: "Creative Package",
    price: "TBD",
    cadence: "price to be determined",
    blurb: "Our most customizable tier for complex, bespoke builds.",
    features: [
      "Includes Management Package",
      "Unlimited revisions",
      "Complex, highly customizable designs",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="05"
          label="Rates"
          title="Three ways to work together."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col p-8 sm:p-10 ${
                  t.featured
                    ? "border border-ink bg-ink text-paper lg:-my-5"
                    : "border border-rule bg-paper lg:border-l-0 lg:first:border-l"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                    Most popular
                  </span>
                )}
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                    t.featured ? "text-paper/60" : "text-faint"
                  }`}
                >
                  Tier 0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-3xl tracking-tight">
                  {t.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-3 border-b pb-6 border-current/15">
                  <span className="font-display text-6xl tracking-tight">
                    {t.price}
                  </span>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
                      t.featured ? "text-paper/60" : "text-faint"
                    }`}
                  >
                    {t.cadence}
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    t.featured ? "text-paper/80" : "text-soot"
                  }`}
                >
                  {t.blurb}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-baseline gap-3 font-mono text-[12px] uppercase tracking-[0.1em] ${
                        t.featured ? "text-paper/85" : "text-soot"
                      }`}
                    >
                      <span className="text-accent">✦</span> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("select-package", { detail: t.name })
                    )
                  }
                  className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    t.featured
                      ? "bg-accent text-white hover:bg-accent-deep"
                      : "border border-ink text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  Choose {t.name} <span aria-hidden>↗</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Prices are subject to change depending on client specifications.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
