"use client";

import { Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";

const tiers = [
  {
    name: "Website Design",
    price: "$1,000+",
    cadence: "one-time",
    blurb: "A custom website design, delivered ready to launch.",
    features: [
      "Custom website design",
      "Requires self-hosting",
    ],
    featured: false,
  },
  {
    name: "Management Package",
    price: "$750",
    cadence: "+ hosting",
    blurb: "Design plus ongoing support and revisions.",
    features: [
      "Includes web support",
      "10 revisions",
    ],
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
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
            Three ways to work together.
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                t.featured
                  ? "border-white/25 bg-gradient-to-b from-surface to-ink shadow-glow"
                  : "border-line bg-surface/50"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-medium text-chalk">
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-chalk">
                  {t.price}
                </span>
                <span className="text-sm text-fog">{t.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-mist">{t.blurb}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="mt-0.5 text-chalk" />
                    <span className="text-mist">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <MagneticButton
                  href="#contact"
                  variant={t.featured ? "primary" : "ghost"}
                  className="w-full"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("select-package", { detail: t.name })
                    )
                  }
                >
                  Choose {t.name}
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-center text-sm text-fog">
          Prices are subject to change depending on client specifications.
        </p>
      </Reveal>
    </section>
  );
}
