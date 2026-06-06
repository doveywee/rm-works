"use client";

import { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { Modal } from "./ui/Modal";
import {
  Boxes,
  Gauge,
  Palette,
  Code2,
  Search,
  Sparkles,
  Check,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Id = "brand" | "threeD" | "eng" | "perf" | "seo" | "conv";

type Service = {
  id: Id;
  icon: LucideIcon;
  title: string;
  body: string;
  span: string;
  accent: boolean;
  overview: string;
  points: string[];
};

const services: Service[] = [
  {
    id: "brand",
    icon: Palette,
    title: "Brand & Art Direction",
    body: "Identity systems, motion language, and a visual world your competitors can't copy.",
    span: "md:col-span-2",
    accent: true,
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
    id: "threeD",
    icon: Boxes,
    title: "Immersive 3D",
    body: "Shaders, real-time scenes, and interactive product moments that stop the scroll.",
    span: "",
    accent: false,
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
    id: "eng",
    icon: Code2,
    title: "Design Engineering",
    body: "Modern frameworks and component systems, built to scale and ship every week.",
    span: "",
    accent: false,
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
    id: "perf",
    icon: Gauge,
    title: "Performance",
    body: "Sub-second loads, 95+ Lighthouse, Core Web Vitals in the green. Fast is a feature.",
    span: "",
    accent: false,
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
    id: "seo",
    icon: Search,
    title: "SEO & Analytics",
    body: "Technical SEO, structured data, and measurement wired in from day one.",
    span: "",
    accent: false,
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
    id: "conv",
    icon: Sparkles,
    title: "Conversion Design",
    body: "Narrative, hierarchy, and micro-interactions tuned to turn visitors into revenue.",
    span: "md:col-span-2",
    accent: true,
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

/* ---- unique, section-specific visuals --------------------------------- */

function Ring({ value, label }: { value: number; label: string }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-14 w-14">
        <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
          <circle
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3.5"
          />
          <circle
            cx="28"
            cy="28"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={off}
            className="text-accent"
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold text-chalk">
          {value}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wide text-fog">
        {label}
      </span>
    </div>
  );
}

function ServiceVisual({ id }: { id: Id }) {
  switch (id) {
    case "brand":
      return (
        <div className="flex items-center justify-between gap-6">
          <div className="font-display text-6xl font-semibold gradient-text">
            Aa
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex gap-2">
              {["#7c6bff", "#22d3ee", "#f4f4f7", "#6f6f80", "#131318"].map(
                (c) => (
                  <span
                    key={c}
                    className="h-8 flex-1 rounded-md ring-1 ring-white/10"
                    style={{ background: c }}
                  />
                )
              )}
            </div>
            <span className="h-2 w-2/3 rounded-full bg-white/15" />
            <span className="h-2 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      );
    case "threeD":
      return (
        <div className="scene3d grid place-items-center py-2">
          <div className="cube3d">
            {[
              "translateZ(44px)",
              "rotateY(180deg) translateZ(44px)",
              "rotateY(90deg) translateZ(44px)",
              "rotateY(-90deg) translateZ(44px)",
              "rotateX(90deg) translateZ(44px)",
              "rotateX(-90deg) translateZ(44px)",
            ].map((t, i) => (
              <span
                key={i}
                className="cube3d__face"
                style={{ transform: t }}
              />
            ))}
          </div>
        </div>
      );
    case "eng":
      return (
        <pre className="overflow-x-auto rounded-xl border border-line bg-ink p-4 text-[11px] leading-relaxed">
          <code className="font-mono">
            <span className="text-fog">{"// type-safe by default"}</span>
            {"\n"}
            <span className="text-[#b6a8ff]">export function</span>{" "}
            <span className="text-[#8fe6ff]">Hero</span>
            <span className="text-mist">{"({ title }: Props) {"}</span>
            {"\n  "}
            <span className="text-[#b6a8ff]">return</span>{" "}
            <span className="text-mist">{"<h1>{title}</h1>;"}</span>
            {"\n"}
            <span className="text-mist">{"}"}</span>
          </code>
        </pre>
      );
    case "perf":
      return (
        <div className="flex items-center justify-around gap-3">
          <Ring value={99} label="Perf" />
          <Ring value={100} label="A11y" />
          <Ring value={100} label="Best" />
          <Ring value={100} label="SEO" />
        </div>
      );
    case "seo":
      return (
        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-ink p-4">
            <div className="text-xs text-fog">vantagesystems.com › services</div>
            <div className="mt-1 font-display text-base text-[#8fe6ff]">
              Premium Web Design Studio · Vantage Systems
            </div>
            <div className="mt-1 space-y-1">
              <span className="block h-1.5 w-full rounded-full bg-white/12" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-accent">
            <TrendingUp size={14} /> Organic traffic, last 90 days
          </div>
        </div>
      );
    case "conv":
      return (
        <div className="space-y-2">
          {[
            { w: "100%", l: "Visitors", v: "100%" },
            { w: "62%", l: "Engaged", v: "62%" },
            { w: "28%", l: "Leads", v: "28%" },
            { w: "11%", l: "Customers", v: "11%" },
          ].map((row, i) => (
            <div key={row.l} className="flex items-center gap-3">
              <span className="w-20 text-xs text-fog">{row.l}</span>
              <div className="h-7 flex-1 rounded-md bg-white/[0.04]">
                <div
                  className="flex h-full items-center justify-end rounded-md bg-gradient-to-r from-accent/40 to-accent/80 pr-2 text-[10px] font-medium text-white"
                  style={{ width: row.w, opacity: 1 - i * 0.12 }}
                >
                  {row.v}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          What we do
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
          A full studio, not a freelancer marketplace.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.05} className={s.span}>
            <button
              type="button"
              onClick={() => setSelected(s)}
              className={`group relative h-full w-full overflow-hidden rounded-2xl border border-line p-7 text-left transition-colors duration-300 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                s.accent
                  ? "bg-gradient-to-br from-surface to-ink"
                  : "bg-surface/60"
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-ink text-chalk transition-colors group-hover:border-white/20 group-hover:text-accent">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-chalk">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                  {s.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.title} details` : "Service"}
      >
        {selected && (
          <div className="p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-ink text-accent">
              <selected.icon size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-chalk">
              {selected.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              {selected.overview}
            </p>

            {/* unique, section-specific visual */}
            <div className="mt-6 rounded-2xl border border-line bg-ink/50 p-5">
              <ServiceVisual id={selected.id} />
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {selected.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check size={16} className="mt-0.5 text-accent" />
                  <span className="text-mist">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-chalk px-6 text-sm font-medium text-ink transition-[transform,background-color] duration-200 hover:bg-white active:scale-[0.98]"
              >
                Talk to us about this →
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
