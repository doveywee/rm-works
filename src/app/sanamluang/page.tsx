"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, ChevronRight, Utensils, Star } from "lucide-react";
import {
  slc,
  A,
  cx,
  Lotus,
  GoldRule,
  Eyebrow,
  Reveal,
  GoldButton,
  GhostButton,
  Nav,
  Footer,
  MapEmbed,
  Lightbox,
} from "./components";

/* --- real press blurbs the restaurant uses (verbatim) ------------------- */
const ACCOLADES = [
  { quote: "Best Thai Noodle", tag: "LA Weekly" },
  { quote: "Comfort Eating", tag: "Press" },
  {
    quote:
      "Noodles are the specialty at Sanamluang. Our panelists vote for best Thai restaurant in L.A.",
    tag: "Critics' Panel",
  },
];

const SLIDES = [1, 2, 3, 4, 5, 7].map((n) => `${A}/slides/slide_${n}.jpg`);

const MENU = [
  { key: "appetizers", label: "Appetizers" },
  { key: "salad", label: "Salads" },
  { key: "soup", label: "Soup" },
  { key: "noodles", label: "Noodles" },
  { key: "rice", label: "Rice" },
  { key: "vegetarians", label: "Vegetarians" },
  { key: "dishes", label: "Dishes" },
  { key: "special", label: "Special" },
  { key: "beverages", label: "Beverages" },
];

/* real signature dishes & descriptions from the noodle menu */
const SIGNATURE = [
  {
    name: "Sanamluang Noodle",
    desc: "Flat rice noodle soup with pork, ground pork, fish ball, shrimp and bean sprouts, topped with fried wonton.",
    house: true,
  },
  {
    name: "Rahd Nah",
    desc: "Flat rice noodle with Chinese broccoli, your choice of pork, chicken or beef in a special gravy sauce.",
  },
  {
    name: "Pad See Ewe",
    desc: "Flat rice noodle scrambled with egg, black soy sauce and Chinese broccoli.",
  },
  {
    name: "Pad Thai",
    desc: "Rice noodle stir-fried with egg, shrimp, chicken and bean sprouts, topped with crushed peanut and green onion.",
  },
  {
    name: "Roasted Duck Noodle Soup",
    desc: "Clear soup with flat noodle, roasted duck, green leaf and bean sprouts.",
  },
  {
    name: "Pad Kee Mow",
    desc: "Flat rice noodle with green chili, sweet basil leaves and bell pepper.",
  },
];

export default function SanamluangPage() {
  const [box, setBox] = useState<{ src: string; label: string } | null>(null);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Accolades />
        <Story />
        <Specialty />
        <Menu onOpen={(src, label) => setBox({ src, label })} />
        <Visit />
      </main>
      <Footer />
      <Lightbox
        src={box?.src ?? null}
        label={box?.label ?? ""}
        onClose={() => setBox(null)}
      />
    </>
  );
}

/* ===========================================================================
   Hero — crossfading food slideshow with serif headline
   ========================================================================= */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={i}
            src={SLIDES[i]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: 5 } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#14100B]/80 via-[#14100B]/55 to-[#14100B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14100B]/85 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Eyebrow>Claremont, California · Est. Thai Kitchen</Eyebrow>
          <h1 className="mt-5 text-[3.1rem] leading-[0.96] text-[#EFE6D4] [font-family:var(--font-slc-display)] sm:text-7xl">
            Noodles are the
            <span className="block text-[#E0BC6A] italic">specialty.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#EFE6D4]/75 sm:text-lg">
            Sanamluang Thai Cuisine has been serving the bowls Los Angeles
            critics call the best Thai noodle: comfort eating from lunch through
            dinner, in the heart of Claremont.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GoldButton href="#menu">
              <Utensils className="h-4 w-4" /> View the Menu
            </GoldButton>
            <GhostButton href={slc.telHref}>
              <Phone className="h-4 w-4" /> {slc.tel}
            </GhostButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#EFE6D4]/70">
            <a
              href={slc.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-[#C8A24C]"
            >
              <MapPin className="h-4 w-4 text-[#C8A24C]" />
              <span className="underline decoration-[#C8A24C]/40 decoration-1 underline-offset-4 group-hover:decoration-[#C8A24C]">
                {slc.addressShort}
              </span>
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#C8A24C]" /> Open daily ·{" "}
              {slc.hoursShort}
            </span>
          </div>
        </motion.div>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, n) => (
          <button
            key={n}
            onClick={() => setI(n)}
            aria-label={`Slide ${n + 1}`}
            className={cx(
              "h-1.5 rounded-full transition-all duration-300",
              n === i ? "w-7 bg-[#C8A24C]" : "w-1.5 bg-[#EFE6D4]/35"
            )}
          />
        ))}
      </div>
    </section>
  );
}

/* ===========================================================================
   Accolades — the three real press blurbs
   ========================================================================= */
function Accolades() {
  return (
    <section className="border-y border-[#C8A24C]/15 bg-[#0F0C08]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal className="mb-8 flex justify-center">
          <a
            href={slc.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#C8A24C]/25 bg-[#14100B] px-5 py-2.5 transition-colors hover:border-[#C8A24C]/55"
          >
            <span className="flex gap-0.5 text-[#E0BC6A]">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-sm text-[#EFE6D4]/85">
              Rated <span className="font-semibold text-[#E0BC6A]">{slc.rating}</span> on Google
            </span>
            <span className="text-xs text-[#C8A24C] transition-transform group-hover:translate-x-0.5">
              ›
            </span>
          </a>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#C8A24C]/15 bg-[#C8A24C]/15 md:grid-cols-3">
          {ACCOLADES.map((a, idx) => (
            <Reveal
              key={a.quote}
              delay={idx * 0.08}
              className="flex flex-col items-center justify-center gap-4 bg-[#14100B] px-6 py-10 text-center"
            >
              <div className="flex gap-1 text-[#E0BC6A]">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="max-w-xs text-lg leading-snug text-[#EFE6D4] [font-family:var(--font-slc-display)] italic sm:text-xl">
                “{a.quote}”
              </p>
              <span className="text-[0.66rem] uppercase tracking-[0.3em] text-[#C8A24C]/80 [font-family:var(--font-slc-caps)]">
                {a.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Story — meaning of the name
   ========================================================================= */
function Story() {
  return (
    <section id="story" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>The Name</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-[#EFE6D4] [font-family:var(--font-slc-display)] sm:text-5xl">
            A royal ground, a<span className="text-[#E0BC6A]"> gathering place</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#EFE6D4]/75">
            Sanamluang is an oval public ground in front of the Grand Palace in
            Bangkok. The enclave is used for various royal ceremonies, including
            the Royal Ploughing Ceremony, and is surrounded by several noteworthy
            institutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#EFE6D4]/75">
            We borrowed the name for the same spirit it carries at home — a place
            where everyone gathers and shares a meal. That is what we set out to
            bring to Claremont: honest Thai cooking, generous bowls, and a table
            that stays open late.
          </p>
          <div className="mt-8 max-w-xs">
            <GoldRule />
          </div>
        </Reveal>

        <Reveal y={28} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-[#C8A24C]/20" />
            <img
              src={`${A}/slides/slide_3.jpg`}
              alt="Thai dishes at Sanamluang"
              className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-2xl ring-1 ring-[#C8A24C]/20"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-[#C8A24C]/25 bg-[#14100B] px-5 py-4 shadow-xl sm:block">
              <Lotus className="mb-1 h-5 w-5 text-[#C8A24C]" />
              <p className="text-sm text-[#EFE6D4]/85">
                สนามหลวง
                <span className="block text-xs text-[#EFE6D4]/50">
                  /sà-nǎam lǔang/
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===========================================================================
   Specialty — noodles
   ========================================================================= */
function Specialty() {
  return (
    <section id="specialty" className="border-y border-[#C8A24C]/15 bg-[#0F0C08]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex justify-center">
            <GoldRule className="w-40" />
          </div>
          <Eyebrow>The House Specialty</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-[#EFE6D4] [font-family:var(--font-slc-display)] sm:text-5xl">
            Bowls worth the drive
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#EFE6D4]/70">
            Hand-built broths and flat rice noodles, from our namesake bowl to
            the classics. A taste of what is waiting on the noodle page.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.07}>
              <div
                className={cx(
                  "group h-full rounded-2xl border p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1",
                  d.house
                    ? "border-[#C8A24C]/45 bg-gradient-to-b from-[#C8A24C]/12 to-transparent"
                    : "border-[#C8A24C]/15 bg-[#14100B] hover:border-[#C8A24C]/35"
                )}
              >
                {d.house && (
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#C8A24C] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#14100B]">
                    <Lotus className="h-3 w-3" /> Signature
                  </span>
                )}
                <h3 className="text-2xl text-[#EFE6D4] [font-family:var(--font-slc-display)]">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#EFE6D4]/65">
                  {d.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <GoldButton href="#menu">
            See the full noodle menu <ChevronRight className="h-4 w-4" />
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Menu — gallery of real menu images (open in lightbox)
   ========================================================================= */
function Menu({ onOpen }: { onOpen: (src: string, label: string) => void }) {
  return (
    <section id="menu" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Menu</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-[#EFE6D4] [font-family:var(--font-slc-display)] sm:text-5xl">
            Nine pages, one kitchen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#EFE6D4]/70">
            From appetizers to special plates. Tap any page to view it full size.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {MENU.map((m, i) => {
            const src = `${A}/menu/${m.key}.jpg`;
            return (
              <Reveal key={m.key} delay={(i % 3) * 0.06}>
                <button
                  onClick={() => onOpen(src, m.label)}
                  className="group block w-full overflow-hidden rounded-xl border border-[#C8A24C]/20 bg-[#0F0C08] text-left transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[#C8A24C]/55"
                >
                  <div className="relative aspect-[73/99] overflow-hidden">
                    <img
                      src={src}
                      alt={`${m.label} menu`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0805]/85 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
                      <span className="text-lg text-[#EFE6D4] [font-family:var(--font-slc-display)]">
                        {m.label}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A24C]/40 text-[#C8A24C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Visit — location, hours, contact, map
   ========================================================================= */
function Visit() {
  return (
    <section id="visit" className="border-t border-[#C8A24C]/15 bg-[#0F0C08]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Find Us</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight text-[#EFE6D4] [font-family:var(--font-slc-display)] sm:text-5xl">
            Come for a bowl
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col gap-6">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location">
              <p className="text-[#EFE6D4]/80">{slc.address}</p>
              <a
                href={slc.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-[#C8A24C] hover:text-[#E0BC6A]"
              >
                Get directions <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </InfoCard>

            <InfoCard icon={<Clock className="h-5 w-5" />} title="Hours">
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-[#EFE6D4]/85">Open Daily</span>
                <span className="text-[#EFE6D4]/60">11:00 AM – 10:00 PM</span>
              </div>
            </InfoCard>

            <InfoCard icon={<Phone className="h-5 w-5" />} title="Contact">
              <a
                href={slc.telHref}
                className="block text-[#EFE6D4]/85 hover:text-[#C8A24C]"
              >
                Tel: {slc.tel}
              </a>
            </InfoCard>
          </Reveal>

          <Reveal y={28}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-[#C8A24C]/20 shadow-2xl">
              <MapEmbed className="min-h-[420px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#C8A24C]/15 bg-[#14100B] p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A24C]/12 text-[#C8A24C]">
          {icon}
        </span>
        <h3 className="text-[0.72rem] uppercase tracking-[0.28em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
