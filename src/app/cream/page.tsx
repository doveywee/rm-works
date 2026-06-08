"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Baloo_2, Outfit } from "next/font/google";
import {
  Leaf,
  Snowflake,
  HandPlatter,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Star,
  AtSign,
} from "lucide-react";

/* Playful rounded display + clean geometric body. Loaded via next/font. */
const display = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});
const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ---- palette (locked) ------------------------------------------------- *
 *  brand accent  : berry pink  #EC4A77  (the ONLY UI accent)
 *  ink / text    : cocoa       #3A271E
 *  muted         : #8A6D5E
 *  page bg       : cream       #FFFBF4
 *  Flavor gradients below are illustration content, not UI accents.
 * ----------------------------------------------------------------------- */

const flavors = [
  {
    name: "Strawberry Fields",
    note: "Macerated berries, sweet cream",
    scoop: "radial-gradient(circle at 38% 30%, #FFD9E4, #EC4A77)",
    cone: "#E3A85B",
    tagBg: "#FFE7EE",
    tagText: "#EC4A77",
    tag: "Bestseller",
  },
  {
    name: "Pistachio Grove",
    note: "Sicilian pistachios, sea salt",
    scoop: "radial-gradient(circle at 38% 30%, #E2F0CF, #7FB069)",
    cone: "#E3A85B",
    tagBg: "#EAF4DE",
    tagText: "#5E8A3E",
    tag: "Nutty",
  },
  {
    name: "Dark Cocoa",
    note: "72% single-origin chocolate",
    scoop: "radial-gradient(circle at 38% 30%, #B5743F, #5B3A29)",
    cone: "#C98A45",
    tagBg: "#F3E9E2",
    tagText: "#7B4A2E",
    tag: "Rich",
  },
  {
    name: "Wild Blueberry",
    note: "Maine berries, lemon zest",
    scoop: "radial-gradient(circle at 38% 30%, #CBD3F7, #6B7FD7)",
    cone: "#E3A85B",
    tagBg: "#E6EAFB",
    tagText: "#5566C4",
    tag: "Tangy",
  },
  {
    name: "Mango Sticky Rice",
    note: "Alphonso mango, coconut",
    scoop: "radial-gradient(circle at 38% 30%, #FFE6B0, #F2A65A)",
    cone: "#E3A85B",
    tagBg: "#FFF1DC",
    tagText: "#C77A2A",
    tag: "New",
  },
  {
    name: "Vanilla Bean",
    note: "Madagascar pods, real cream",
    scoop: "radial-gradient(circle at 38% 30%, #FFF6E1, #E8C77D)",
    cone: "#C98A45",
    tagBg: "#FBF2DC",
    tagText: "#A8842F",
    tag: "Classic",
  },
];

const features = [
  { icon: Leaf, title: "Real ingredients", body: "No gums, no shortcuts. Fruit, dairy, and a little patience." },
  { icon: Snowflake, title: "Churned daily", body: "Every batch is spun fresh in-house each morning." },
  { icon: HandPlatter, title: "Small batches", body: "Five gallons at a time, so the flavor stays bright." },
  { icon: Sparkles, title: "Rotating menu", body: "A new seasonal flavor drops every other Friday." },
];

const marquee = [
  "Strawberry Fields",
  "Pistachio Grove",
  "Dark Cocoa",
  "Wild Blueberry",
  "Mango Sticky Rice",
  "Vanilla Bean",
  "Brown Butter Pecan",
  "Honey Lavender",
  "Espresso Chip",
  "Toasted Coconut",
];

export default function CreamPage() {
  const reduce = useReducedMotion();

  return (
    <div
      className={`${sans.className} relative min-h-screen overflow-x-hidden bg-[#FFFBF4] text-[#3A271E] antialiased`}
    >
      <Nav />
      <Hero reduce={!!reduce} display={display.className} />
      <FeatureBand />
      <Flavors display={display.className} />
      <Marquee reduce={!!reduce} />
      <Story display={display.className} />
      <Treats display={display.className} />
      <VisitCTA display={display.className} />
      <SiteFooter display={display.className} />
    </div>
  );
}

/* ===================================================================== */
/* NAV                                                                    */
/* ===================================================================== */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Flavors", href: "#flavors" },
    { label: "Our Story", href: "#story" },
    { label: "Treats", href: "#treats" },
    { label: "Visit", href: "#visit" },
  ];

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#EC4A77]/10 bg-[#FFFBF4]/85 backdrop-blur-xl backdrop-saturate-150"
    >
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <ScoopMark />
          <span className={`${display.className} text-[19px] font-extrabold tracking-tight text-[#3A271E]`}>
            Dollop
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[15px] font-medium text-[#5C463B] transition-colors hover:text-[#EC4A77]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#visit"
            className="hidden rounded-full bg-[#EC4A77] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(236,74,119,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#d83c67] sm:inline-flex"
          >
            Order Pickup
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full text-[#3A271E] md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#EC4A77]/10 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-[#5C463B] hover:bg-[#FFF1F5]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[#EC4A77] px-4 py-2.5 text-center text-[15px] font-semibold text-white"
              >
                Order Pickup
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}

function ScoopMark() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EC4A77]">
      <span
        className="h-4 w-4 rounded-full"
        style={{ background: "radial-gradient(circle at 35% 30%, #fff, #FFD9E4)" }}
      />
    </span>
  );
}

/* ===================================================================== */
/* HERO                                                                   */
/* ===================================================================== */
function Hero({ reduce, display }: { reduce: boolean; display: string }) {
  return (
    <section id="top" className="relative grid min-h-[100dvh] items-center pt-[68px] md:grid-cols-[1.05fr_0.95fr]">
      {/* content */}
      <div className="px-5 py-12 sm:px-10 md:py-0 md:pl-[clamp(2rem,6vw,5rem)] md:pr-10">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full bg-[#FFE7EE] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#EC4A77]"
        >
          <Star className="h-3 w-3 fill-current" strokeWidth={0} />
          Small-batch since 2014
        </motion.span>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`${display} mt-6 text-[clamp(3rem,6vw,5.25rem)] font-extrabold leading-[0.98] tracking-tight text-[#3A271E]`}
        >
          Churned fresh.
          <br />
          <span className="text-[#EC4A77]">Eaten happy.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-[#7A6053]"
        >
          A tiny creamery making real ice cream from real ingredients. New flavors every other Friday, scooped with a smile.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#flavors"
            className="inline-flex items-center gap-2 rounded-full bg-[#EC4A77] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_22px_rgba(236,74,119,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#d83c67] hover:shadow-[0_10px_28px_rgba(236,74,119,0.42)]"
          >
            See the flavors
          </a>
          <a
            href="#visit"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#3A271E] transition-colors hover:text-[#EC4A77]"
          >
            Find the shop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
          </a>
        </motion.div>
      </div>

      {/* visual */}
      <div className="relative flex min-h-[55vw] items-center justify-center overflow-hidden bg-[#FFEFF4] md:min-h-[calc(100dvh-68px)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 28% 22%, rgba(255,255,255,0.55), transparent), radial-gradient(ellipse 50% 50% at 82% 82%, rgba(236,74,119,0.12), transparent)",
          }}
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <TripleCone reduce={reduce} />
        </motion.div>

        {/* floating labels */}
        <FloatChip reduce={reduce} className="left-[6%] top-[16%]" delay={0}>
          <span className="h-2 w-2 rounded-full bg-[#EC4A77]" />
          New: Mango Sticky Rice
        </FloatChip>
        <FloatChip reduce={reduce} className="bottom-[14%] right-[7%]" delay={1.4}>
          <Star className="h-3.5 w-3.5 fill-[#EC4A77] text-[#EC4A77]" strokeWidth={0} />
          4.9 on 1,200 reviews
        </FloatChip>
      </div>
    </section>
  );
}

function FloatChip({
  children,
  className,
  delay,
  reduce,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute hidden items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-[13px] font-bold text-[#3A271E] shadow-[0_8px_28px_rgba(58,39,30,0.12)] sm:flex ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* a three-scoop cone built from CSS */
function TripleCone({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative h-[440px] w-[300px]">
      {/* sprinkles */}
      {(
        [
          { c: "#EC4A77", top: 150, left: 52, rot: -22 },
          { c: "#6B7FD7", top: 128, right: 56, rot: 30 },
          { c: "#F2A65A", top: 176, right: 44, rot: -12 },
          { c: "#7FB069", top: 146, left: 40, rot: 44 },
          { c: "#EC4A77", top: 138, right: 62, rot: -40 },
        ] as const
      ).map((s, i) => (
        <span
          key={i}
          className="absolute z-20 h-1.5 w-5 rounded-full"
          style={{
            background: s.c,
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
            transform: `rotate(${s.rot}deg)`,
          }}
        />
      ))}

      {/* scoops, back to front */}
      <Scoop bg="radial-gradient(circle at 38% 30%, #B5743F, #5B3A29)" size={130} bottom={336} left={16} />
      <Scoop bg="radial-gradient(circle at 38% 30%, #E2F0CF, #7FB069)" size={140} bottom={252} left={-18} chips />
      <Scoop bg="radial-gradient(circle at 38% 30%, #FFD9E4, #EC4A77)" size={150} bottom={166} left={0} />

      {/* waffle cone */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: "78px solid transparent",
          borderRight: "78px solid transparent",
          borderTop: "184px solid #D99A4E",
          filter: "drop-shadow(0 6px 14px rgba(58,39,30,0.18))",
        }}
      />
      {/* waffle crosshatch */}
      <div
        className="absolute bottom-0 left-1/2 h-[170px] w-[156px] -translate-x-1/2 opacity-30"
        style={{
          clipPath: "polygon(50% 100%, 2% 8%, 98% 8%)",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(91,58,41,0.5) 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, rgba(91,58,41,0.5) 0 1px, transparent 1px 14px)",
        }}
      />
    </div>
  );
}

function Scoop({
  bg,
  size,
  bottom,
  left,
  chips,
}: {
  bg: string;
  size: number;
  bottom: number;
  left: number;
  chips?: boolean;
}) {
  return (
    <div
      className="absolute left-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        bottom,
        background: bg,
        transform: `translateX(calc(-50% + ${left}px))`,
        boxShadow: "inset -7px -9px 20px rgba(0,0,0,0.13), 0 5px 18px rgba(0,0,0,0.1)",
      }}
    >
      {chips && (
        <>
          <span className="absolute left-[26%] top-[28%] h-2 w-2 rounded-full bg-[#1B5E20]" />
          <span className="absolute right-[24%] top-[48%] h-1.5 w-1.5 rounded-full bg-[#1B5E20]" />
          <span className="absolute left-[42%] top-[64%] h-1.5 w-1.5 rounded-full bg-[#1B5E20]" />
        </>
      )}
    </div>
  );
}

/* ===================================================================== */
/* FEATURE BAND                                                           */
/* ===================================================================== */
function FeatureBand() {
  return (
    <section className="border-y border-[#EC4A77]/8 bg-white">
      <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={i * 0.06}
            className="px-7 py-10 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#3A271E]/6 lg:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-r"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF1F5] text-[#EC4A77]">
              <f.icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-4 text-[1.0625rem] font-bold text-[#3A271E]">{f.title}</h3>
            <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#8A6D5E]">{f.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ===================================================================== */
/* FLAVORS                                                                */
/* ===================================================================== */
function Flavors({ display }: { display: string }) {
  return (
    <section id="flavors" className="bg-[#FFF6EE] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-xl">
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#EC4A77]">
            On the board today
          </span>
          <h2 className={`${display} mt-3 text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-tight tracking-tight text-[#3A271E]`}>
            Twelve flavors, rotating always
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-[#8A6D5E]">
            Here are six regulars. The other six change with whatever is ripe and good.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flavors.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 0.06}>
              <article className="group overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(58,39,30,0.12)]">
                <div className="relative flex aspect-[16/10] items-end justify-center overflow-hidden">
                  <div className="absolute inset-0" style={{ background: f.scoop, opacity: 0.16 }} />
                  <CardCone scoop={f.scoop} cone={f.cone} />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.125rem] font-bold text-[#3A271E]">{f.name}</h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide"
                      style={{ background: f.tagBg, color: f.tagText }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.9rem] text-[#8A6D5E]">{f.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardCone({ scoop, cone }: { scoop: string; cone: string }) {
  return (
    <div className="relative z-10 h-[150px] w-[110px]">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderTop: `88px solid ${cone}`,
          filter: "drop-shadow(0 3px 8px rgba(58,39,30,0.16))",
        }}
      />
      <div
        className="absolute bottom-[78px] left-1/2 h-[92px] w-[92px] -translate-x-1/2 rounded-full"
        style={{
          background: scoop,
          boxShadow: "inset -5px -6px 16px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}

/* ===================================================================== */
/* MARQUEE                                                                */
/* ===================================================================== */
function Marquee({ reduce }: { reduce: boolean }) {
  const row = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden bg-[#3A271E] py-5">
      <motion.div
        className="flex w-max"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {row.map((name, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-8 text-[0.95rem] font-semibold text-[#FFF6EE]/75">
            {name}
            <span className="ml-8 h-1.5 w-1.5 rounded-full bg-[#EC4A77]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ===================================================================== */
/* STORY (image + text split)                                            */
/* ===================================================================== */
function Story({ display }: { display: string }) {
  return (
    <section id="story" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* visual */}
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-[#FFEFF4]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6), transparent 55%), radial-gradient(circle at 80% 80%, rgba(236,74,119,0.14), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-end gap-3">
                <MiniCone scoop="radial-gradient(circle at 38% 30%, #FFD9E4, #EC4A77)" h={150} />
                <MiniCone scoop="radial-gradient(circle at 38% 30%, #E2F0CF, #7FB069)" h={190} />
                <MiniCone scoop="radial-gradient(circle at 38% 30%, #CBD3F7, #6B7FD7)" h={130} />
              </div>
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[12px] font-bold text-[#3A271E] backdrop-blur">
              Est. 2014, Maple Street
            </span>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={0.1}>
          <h2 className={`${display} text-[clamp(2rem,3.4vw,2.9rem)] font-extrabold leading-tight tracking-tight text-[#3A271E]`}>
            It started with one broken freezer and a lot of stubbornness
          </h2>
          <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-[#7A6053]">
            We opened Dollop in a 400-square-foot shop with a secondhand churn and a notebook of recipes. Ten years later the notebook is full and the churn is still running.
          </p>
          <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-[#7A6053]">
            Everything is still made by hand, in the back, in batches small enough to taste every one.
          </p>
          <div className="mt-9 flex flex-wrap gap-10">
            <Stat n="10 yrs" l="Scooping" />
            <Stat n="60+" l="Flavors a year" />
            <Stat n="100%" l="Made in-house" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-[2rem] font-extrabold leading-none text-[#EC4A77]">{n}</div>
      <div className="mt-1.5 text-[0.85rem] font-medium text-[#8A6D5E]">{l}</div>
    </div>
  );
}

function MiniCone({ scoop, h }: { scoop: string; h: number }) {
  return (
    <div className="relative" style={{ width: 76, height: h }}>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: "28px solid transparent",
          borderRight: "28px solid transparent",
          borderTop: "70px solid #D99A4E",
          filter: "drop-shadow(0 4px 10px rgba(58,39,30,0.16))",
        }}
      />
      <div
        className="absolute bottom-[60px] left-1/2 h-[68px] w-[68px] -translate-x-1/2 rounded-full"
        style={{ background: scoop, boxShadow: "inset -4px -5px 12px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}

/* ===================================================================== */
/* TREATS (bento)                                                         */
/* ===================================================================== */
function Treats({ display }: { display: string }) {
  return (
    <section id="treats" className="bg-[#FFF6EE] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-xl">
          <h2 className={`${display} text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-tight tracking-tight text-[#3A271E]`}>
            Beyond the scoop
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-[#8A6D5E]">
            Cones are just the beginning. Here is the rest of the menu.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {/* big feature tile */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl bg-[#EC4A77] p-8 text-white">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 78% 20%, rgba(255,255,255,0.22), transparent 45%)",
                }}
              />
              <span className="relative text-[12px] font-bold uppercase tracking-[0.14em] text-white/80">
                House favorite
              </span>
              <h3 className={`${display} relative mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-tight`}>
                The Triple-Stack Sundae
              </h3>
              <p className="relative mt-2 max-w-sm text-[0.95rem] leading-relaxed text-white/85">
                Three scoops, warm fudge, candied pecans, fresh whip, and a cherry. Built to share, finished alone.
              </p>
              <span className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#EC4A77]">
                $9.50
              </span>
            </div>
          </Reveal>

          <TreatTile title="Hand-rolled cones" body="Pressed and rolled every morning. Gluten-free option daily." chip="From $5" tint="#FFF1DC" />
          <TreatTile title="Pint to go" body="Any flavor on the board, packed cold for the trip home." chip="$12 / pint" tint="#EAF4DE" />
        </div>
      </div>
    </section>
  );
}

function TreatTile({ title, body, chip, tint }: { title: string; body: string; chip: string; tint: string }) {
  return (
    <Reveal>
      <div className="flex h-full min-h-[130px] flex-col justify-between rounded-3xl bg-white p-7">
        <div>
          <h3 className="text-[1.125rem] font-bold text-[#3A271E]">{title}</h3>
          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#8A6D5E]">{body}</p>
        </div>
        <span
          className="mt-4 inline-flex w-fit rounded-full px-3 py-1.5 text-[12px] font-bold text-[#3A271E]"
          style={{ background: tint }}
        >
          {chip}
        </span>
      </div>
    </Reveal>
  );
}

/* ===================================================================== */
/* VISIT CTA                                                              */
/* ===================================================================== */
function VisitCTA({ display }: { display: string }) {
  return (
    <section id="visit" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#3A271E] px-7 py-16 text-center sm:px-12">
        <Reveal>
          <h2 className={`${display} mx-auto max-w-xl text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight text-[#FFF6EE]`}>
            Come say hi. We saved you a scoop.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.0625rem] leading-relaxed text-[#FFF6EE]/65">
            Open seven days a week on Maple Street. Walk in, or order ahead for pickup.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <InfoCard icon={MapPin} title="Where" lines={["128 Maple Street", "Burlington, VT"]} />
            <InfoCard icon={Clock} title="Hours" lines={["Mon-Sun", "11am - 10pm"]} />
            <InfoCard icon={Phone} title="Call ahead" lines={["(802) 555-0148", "for big orders"]} />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#EC4A77] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_22px_rgba(236,74,119,0.4)] transition-all hover:-translate-y-0.5 hover:bg-[#d83c67]"
            >
              Order Pickup
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFF6EE]/30 px-7 py-3.5 text-[15px] font-semibold text-[#FFF6EE] transition-all hover:-translate-y-0.5 hover:border-[#FFF6EE]/70"
            >
              Get directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#FFF6EE]/10 bg-[#FFF6EE]/5 p-5 text-left">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#EC4A77]/20 text-[#EC4A77]">
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFF6EE]/50">{title}</div>
      {lines.map((l) => (
        <div key={l} className="text-[0.95rem] font-medium text-[#FFF6EE]">
          {l}
        </div>
      ))}
    </div>
  );
}

/* ===================================================================== */
/* FOOTER                                                                 */
/* ===================================================================== */
function SiteFooter({ display }: { display: string }) {
  return (
    <footer className="border-t border-[#3A271E]/8 bg-[#FFFBF4] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <ScoopMark />
          <span className={`${display} text-[18px] font-extrabold tracking-tight text-[#3A271E]`}>Dollop</span>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-7">
          {["Flavors", "Our Story", "Treats", "Visit", "Catering"].map((l) => (
            <li key={l}>
              <a href="#" className="text-[14px] font-medium text-[#8A6D5E] transition-colors hover:text-[#EC4A77]">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          aria-label="Follow us"
          className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF1F5] text-[#EC4A77] transition-colors hover:bg-[#EC4A77] hover:text-white"
        >
          <AtSign className="h-[18px] w-[18px]" strokeWidth={2} />
        </a>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-[#3A271E]/8 pt-6 text-[0.8125rem] text-[#A08877] sm:flex-row">
        <span>2026 Dollop Creamery. Made by hand in Burlington, VT.</span>
        <span>Demo site by RM Works.</span>
      </div>
    </footer>
  );
}

/* shared scroll-reveal wrapper (local copy so the page is self-contained) */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
