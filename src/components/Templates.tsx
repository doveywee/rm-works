"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Modal } from "./ui/Modal";

type Kind = "saas" | "portfolio" | "shop" | "agency" | "dashboard" | "editorial";

type Template = {
  name: string;
  category: string;
  blurb: string;
  overview: string;
  pages: string;
  features: string[];
  kind: Kind;
};

const templates: Template[] = [
  {
    name: "Nimbus",
    category: "SaaS · Product",
    blurb:
      "A conversion-first launch site: animated hero, feature grid, pricing table, and a changelog.",
    overview:
      "Nimbus is built for early-stage software that needs to look funded on day one. An animated hero sets the tone, the feature grid explains the product at a glance, and a clear three-tier pricing table pushes visitors toward a trial.",
    pages: "Home · Features · Pricing · Changelog",
    features: [
      "Animated, motion-driven hero",
      "Three-tier pricing table",
      "Feature & integration sections",
      "Changelog / product updates page",
      "Dark and light themes",
    ],
    kind: "saas",
  },
  {
    name: "Folio",
    category: "Portfolio · Studio",
    blurb:
      "A gallery-led portfolio for designers and studios with smooth lightbox transitions.",
    overview:
      "Folio puts the work first. A masonry gallery and image-led case studies let the projects speak, while subtle motion and a refined type system keep the focus where it belongs — on what you made.",
    pages: "Home · Work · Case study · About",
    features: [
      "Image-first case studies",
      "Masonry gallery + lightbox",
      "Filterable work grid",
      "About & contact pages",
      "CMS-ready content model",
    ],
    kind: "portfolio",
  },
  {
    name: "Mercer",
    category: "E-commerce · Retail",
    blurb:
      "A headless storefront with product grid, quick-add cart, search, and one-page checkout.",
    overview:
      "Mercer is a fast, headless storefront designed to convert. Shoppers can browse a clean product grid, quick-add to cart, search collections, and check out on a single streamlined page — no friction, no drop-off.",
    pages: "Shop · Product · Cart · Checkout",
    features: [
      "Product grid with quick add",
      "Cart & one-page checkout",
      "Search & collection filters",
      "Stripe payments ready",
      "Mobile-first performance",
    ],
    kind: "shop",
  },
  {
    name: "Beacon",
    category: "Agency · Creative",
    blurb:
      "A bold, typography-driven agency site with oversized headlines and a filtered work grid.",
    overview:
      "Beacon is made for studios that lead with confidence. Oversized headlines, a filtered work grid, and scroll-driven motion create a site that feels as considered as the work you do for clients.",
    pages: "Home · Services · Work · Contact",
    features: [
      "Oversized type system",
      "Filterable work grid",
      "Services breakdown",
      "Contact & booking flow",
      "Scroll-driven motion",
    ],
    kind: "agency",
  },
  {
    name: "Ledger",
    category: "Fintech · App",
    blurb:
      "Marketing site plus a dashboard UI kit — stat cards, charts, and tables for finance products.",
    overview:
      "Ledger pairs a trustworthy marketing site with a full dashboard UI kit. Stat cards, charts, and data tables come ready to wire into your app, so design and product stay perfectly in sync.",
    pages: "Home · Dashboard · Reports · Pricing",
    features: [
      "Marketing site + app UI kit",
      "Stat cards & charts",
      "Sortable data tables",
      "Auth-ready dashboard shell",
      "Reusable component library",
    ],
    kind: "dashboard",
  },
  {
    name: "Dispatch",
    category: "Editorial · Blog",
    blurb:
      "A typography-led publication with a featured story, archive, MDX support, and newsletter.",
    overview:
      "Dispatch is a publication template that takes reading seriously. A featured story anchors the homepage, MDX powers rich articles, and a newsletter capture turns readers into subscribers.",
    pages: "Home · Article · Archive · Newsletter",
    features: [
      "Featured story layout",
      "MDX-powered articles",
      "Tag & archive pages",
      "Newsletter capture",
      "Reading-time + RSS",
    ],
    kind: "editorial",
  },
];

/* ---- detailed, type-specific website mockups (monochrome) -------------- */

const Bar = ({ w, className = "" }: { w: string; className?: string }) => (
  <span
    className={`block h-1.5 rounded-full bg-white/12 ${className}`}
    style={{ width: w }}
  />
);

function Chrome({ children, search }: { children: ReactNode; search?: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span
          className={`ml-3 h-3 rounded-full bg-white/[0.06] ${
            search ? "w-32" : "w-20"
          }`}
        />
      </div>
      <div className="relative flex-1 p-4">{children}</div>
    </div>
  );
}

const tile = "rounded-md bg-white/[0.06] ring-1 ring-white/5";

function Mock({ kind }: { kind: Kind }) {
  switch (kind) {
    case "saas":
      return (
        <Chrome>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-2.5 rounded-sm bg-white/30" />
              <div className="flex items-center gap-2">
                <Bar w="14px" /> <Bar w="14px" /> <Bar w="14px" />
                <span className="h-3.5 w-10 rounded-full bg-accent/70" />
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center gap-2">
              <Bar w="55%" className="h-2.5 bg-white/25" />
              <Bar w="42%" className="h-2.5 bg-white/25" />
              <Bar w="30%" className="mt-1" />
              <span className="mt-2 h-4 w-16 rounded-full bg-white/85" />
            </div>
            <div className="mt-auto grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`${tile} h-9`} />
              ))}
            </div>
          </div>
        </Chrome>
      );
    case "portfolio":
      return (
        <Chrome>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Bar w="40px" className="h-2 bg-white/25" />
              <div className="flex gap-2">
                <Bar w="16px" /> <Bar w="16px" /> <Bar w="16px" />
              </div>
            </div>
            <div className="mt-3 grid flex-1 grid-cols-3 grid-rows-2 gap-2">
              <div className={`${tile} col-span-2 row-span-2`} />
              <div className={tile} />
              <div className={tile} />
            </div>
          </div>
        </Chrome>
      );
    case "shop":
      return (
        <Chrome search>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Bar w="36px" className="h-2 bg-white/25" />
              <div className="flex items-center gap-2">
                <span className="h-3 w-16 rounded-full bg-white/[0.06]" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
              </div>
            </div>
            <div className="mt-3 grid flex-1 grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className={`${tile} flex-1`} />
                  <Bar w="80%" className="h-1" />
                  <div className="flex items-center justify-between">
                    <Bar w="40%" className="h-1" />
                    <span className="h-2.5 w-5 rounded-full bg-accent/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Chrome>
      );
    case "agency":
      return (
        <Chrome>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-2.5 rounded-sm bg-white/30" />
              <div className="flex gap-2">
                <Bar w="16px" /> <Bar w="16px" />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <Bar w="85%" className="h-3.5 bg-white/30" />
              <Bar w="60%" className="h-3.5 bg-white/30" />
            </div>
            <div className="mt-auto grid grid-cols-2 gap-2">
              <div className={`${tile} h-10`} />
              <div className={`${tile} h-10`} />
            </div>
          </div>
        </Chrome>
      );
    case "dashboard":
      return (
        <Chrome>
          <div className="flex h-full gap-3">
            <div className="flex w-10 flex-col gap-2 border-r border-white/5 pr-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-white/30" />
              <Bar w="100%" /> <Bar w="80%" /> <Bar w="90%" /> <Bar w="70%" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`${tile} h-7`} />
                ))}
              </div>
              <div className={`${tile} flex flex-1 items-end gap-1.5 p-2`}>
                {[40, 65, 50, 80, 60, 90, 72].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-sm ${
                      i === 5 ? "bg-accent/70" : "bg-white/20"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Chrome>
      );
    case "editorial":
      return (
        <Chrome>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <Bar w="50px" className="h-2 bg-white/30" />
              <div className="flex gap-2">
                <Bar w="16px" /> <Bar w="16px" /> <Bar w="16px" />
              </div>
            </div>
            <div className="mt-3 flex gap-3">
              <div className={`${tile} h-14 w-1/2`} />
              <div className="flex flex-1 flex-col justify-center gap-1.5">
                <Bar w="90%" className="h-2 bg-white/25" />
                <Bar w="70%" className="h-2 bg-white/25" />
                <Bar w="100%" /> <Bar w="85%" />
              </div>
            </div>
            <div className="mt-auto space-y-2">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`${tile} h-5 w-8`} />
                  <Bar w="60%" />
                </div>
              ))}
            </div>
          </div>
        </Chrome>
      );
  }
}

function TiltCard({
  t,
  index,
  onOpen,
}: {
  t: Template;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 90,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 90,
    damping: 20,
  });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <Reveal delay={index * 0.06}>
      <motion.button
        ref={ref}
        type="button"
        onClick={onOpen}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="group relative block w-full overflow-hidden rounded-3xl border border-line bg-surface/50 text-left transition-colors duration-300 hover:border-white/20 [transform-style:preserve-3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-gradient-to-br from-white/[0.04] to-transparent">
          <Mock kind={t.kind} />
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div
            className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium text-chalk opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
            style={{ transform: "translateZ(50px)" }}
          >
            View details <ArrowUpRight size={13} />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-lg font-medium text-chalk">
              {t.name}
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-wider text-fog">
              {t.category}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-mist">{t.blurb}</p>
          <p className="mt-4 border-t border-line/70 pt-3 text-xs text-fog">
            {t.pages}
          </p>
        </div>
      </motion.button>
    </Reveal>
  );
}

export function Templates() {
  const [selected, setSelected] = useState<Template | null>(null);

  return (
    <section id="templates" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Templates
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
              Start from a template we crafted.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-mist">
            Production-ready templates we design and build — each one a complete,
            multi-page site. Click any to explore it in detail.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t, i) => (
          <TiltCard key={t.name} t={t} index={i} onOpen={() => setSelected(t)} />
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.name} template details` : "Template"}
      >
        {selected && (
          <div>
            {/* large preview */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl border-b border-line bg-gradient-to-br from-white/[0.05] to-transparent">
              <Mock kind={selected.kind} />
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-chalk">
                  {selected.name}
                </h3>
                <span className="rounded-full border border-line bg-ink px-3 py-1 text-xs uppercase tracking-wider text-fog">
                  {selected.category}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-mist">
                {selected.overview}
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-fog">
                  Pages included
                </p>
                <p className="mt-2 font-display text-sm text-chalk">
                  {selected.pages}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-fog">
                  What&apos;s included
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="mt-0.5 text-accent" />
                      <span className="text-mist">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-chalk px-6 text-sm font-medium text-ink transition-colors hover:bg-white"
                >
                  Start with {selected.name} <ArrowUpRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-medium text-chalk transition-colors hover:bg-white/5"
                >
                  Back to templates
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
