"use client";

import { ArrowRight, ArrowUpRight, Phone, Check } from "lucide-react";
import {
  cx,
  head,
  mono,
  company,
  Reveal,
  Rule,
  Kicker,
  SectionHead,
  Btn,
  ManifestRow,
  PlateRow,
  Reviews,
  CtaBand,
  MapEmbed,
  GreekKey,
  BlueprintBg,
} from "./components";

const STATS = [
  { value: company.years, label: "Years Moving" },
  { value: company.moves, label: "Successful Moves" },
  { value: company.reviewCount, label: "Yelp Reviews" },
  { value: `${company.rating}★`, label: "Avg. Rating" },
];

const SERVICES = [
  {
    n: "01",
    title: "Residential",
    copy: "Homes, apartments, and condos — furniture, boxes, appliances, and household items, handled with care.",
  },
  {
    n: "02",
    title: "Commercial",
    copy: "Offices, schools, and small warehouses moved efficiently with less stress and downtime.",
  },
  {
    n: "03",
    title: "Local Moving",
    copy: "Murrieta-based moves across Riverside, Orange, and San Diego County and nearby SoCal.",
  },
  {
    n: "04",
    title: "Load / Unload",
    copy: "Moving labor for rental trucks, trailers, PODs, storage units, and containers.",
  },
  {
    n: "05",
    title: "Packing & Protection",
    copy: "Furniture wrapping, careful loading, and safe handling of fragile or bulky items on request.",
  },
  {
    n: "06",
    title: "Heavy & Single-Item",
    copy: "Flat-rate single-item moves plus safes, appliances, and oversized furniture with the right gear.",
  },
];

const SPECS = [
  "Local Murrieta moving company",
  "Residential & commercial moving",
  "Careful handling of belongings",
  "Clear, professional communication",
  "Stress-free moving support",
  "Licensed & insured service",
];

const WHY = [
  "Professional and respectful movers",
  "Careful handling of furniture and belongings",
  "A clear, easy-to-follow moving process",
  "Licensed and insured business",
  "Local knowledge of Murrieta and the area",
  "A simple quote request process",
  "Reliable help for homes, offices & businesses",
  "On-time crews that work hard",
];

export default function SpartanHome() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-[#0E2840]">
        <BlueprintBg />
        <GreekKey className="absolute inset-x-0 bottom-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-16 sm:pt-24">
          <Reveal>
            <Kicker n="EST. SOUTHERN CALIFORNIA" light>
              {company.years} Years · {company.moves} Moves
            </Kicker>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className={cx(
                head,
                "mt-6 max-w-5xl text-[clamp(2.6rem,7vw,5.2rem)] font-bold uppercase leading-[0.92] tracking-[0.005em] text-white"
              )}
            >
              Reliable Moving Services in Murrieta &amp;{" "}
              <span className="text-[#C9A24B]">Southern California</span>
            </h1>
          </Reveal>

          <div className="mt-9 grid gap-8 md:grid-cols-12 md:items-end">
            <Reveal delay={0.12} className="md:col-span-7">
              <p className="max-w-xl text-[16.5px] leading-relaxed text-white/70">
                {company.name} provides residential and commercial moving across
                Murrieta, Riverside County, Orange County, San Diego County, and
                surrounding Southern California — strong, careful, professional
                moving help you can trust.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <Btn href="/spartan/contact" variant="gold" size="lg">
                Request a Quote <ArrowRight size={15} />
              </Btn>
              <Btn href={company.phoneHref} variant="outline-light" size="lg">
                <Phone size={15} /> {company.phone}
              </Btn>
            </Reveal>
          </div>

          {/* stats ledger */}
          <div className="mt-14 grid grid-cols-2 border-t border-white/12 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.06}
                className={cx(
                  "px-1 py-8 sm:px-6",
                  i % 2 === 1 && "border-l border-white/12",
                  i > 0 && "sm:border-l"
                )}
              >
                <p className={cx(head, "text-[2.6rem] font-bold leading-none text-[#E4C77E] sm:text-[3.1rem]")}>
                  {s.value}
                </p>
                <p className={cx(mono, "mt-3 text-[10.5px] uppercase tracking-[0.18em] text-white/55")}>
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="01"
            kicker="The Company"
            title={
              <>
                A Murrieta company built
                <br className="hidden sm:block" /> on discipline &amp; care.
              </>
            }
            intro={
              <>
                {company.name} serves families, individuals, and businesses across
                Southern California — reliable service, careful handling, and clear
                communication from the first call to final placement.
              </>
            }
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* map */}
            <Reveal className="lg:col-span-7">
              <div className="relative border border-[#0E2840]/15">
                <MapEmbed
                  query="Murrieta, CA"
                  zoom={11}
                  title="Map of Murrieta, California"
                  className="aspect-[16/10]"
                />
                <div
                  className={cx(
                    mono,
                    "absolute left-0 top-0 bg-[#0E2840] px-4 py-2 text-[10.5px] uppercase tracking-[0.18em] text-[#E4C77E]"
                  )}
                >
                  Based in Murrieta, CA
                </div>
              </div>
            </Reveal>

            {/* spec register */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className={cx(mono, "text-[10.5px] uppercase tracking-[0.2em] text-[#A87E33]")}>
                  [ Field Notes ]
                </p>
              </Reveal>
              <div className="mt-2">
                {SPECS.map((s, i) => (
                  <Reveal key={s} delay={i * 0.05}>
                    <div className="flex items-center gap-4 border-t border-[#0E2840]/15 py-4 last:border-b">
                      <span className={cx(mono, "text-[12px] text-[#A87E33]")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[15px] font-medium text-[#1B2A38]">
                        {s}
                      </span>
                      <Check size={16} className="text-[#C9A24B]" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES MANIFEST ===================== */}
      <section className="bg-[#EDE6D6]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="02"
            kicker="Services"
            title="What We Move"
            intro="From a single heavy item to a full home or office, our crew brings strength, care, and organization to every job."
            action={
              <div className="flex flex-wrap gap-3">
                <Btn href="/spartan/services" variant="outline" size="sm">
                  Full services &amp; process <ArrowUpRight size={14} />
                </Btn>
                <Btn href="/spartan/services#rules" variant="outline" size="sm">
                  Important moving rules <ArrowUpRight size={14} />
                </Btn>
              </div>
            }
          />
          <div className="mt-12">
            {SERVICES.map((s, i) => (
              <ManifestRow
                key={s.n}
                n={s.n}
                title={s.title}
                copy={s.copy}
                href="/spartan/services"
                last={i === SERVICES.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY ===================== */}
      <section className="relative overflow-hidden bg-[#0E2840]">
        <BlueprintBg />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            light
            n="03"
            kicker="Why Spartan"
            title="The Right Team Makes the Difference"
            intro="We help customers plan their move, understand what to expect, and get the help they need — with care, strength, and professionalism."
            action={
              <Btn href="/spartan/contact" variant="gold" size="sm">
                Request a Quote <ArrowRight size={14} />
              </Btn>
            }
          />
          <div className="mt-12 grid border-t border-white/12 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w} delay={(i % 2) * 0.05}>
                <div
                  className={cx(
                    "flex items-center gap-4 border-b border-white/12 py-5",
                    i % 2 === 0 && "sm:border-r sm:border-white/10 sm:pr-8"
                  )}
                >
                  <Check size={17} className="shrink-0 text-[#C9A24B]" />
                  <span className="text-[15px] font-medium text-white/85">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <Reviews />

      {/* ===================== LICENSING ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <Rule />
          <div className="mt-7 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Kicker n="04">Trust &amp; Licensing</Kicker>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className={cx(head, "mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-bold uppercase leading-[0.98] text-[#0E2840]")}>
                  Why Moving Licenses Matter
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-[#5A6675]">
                  Licensing tells you you&rsquo;re working with a legitimate moving
                  business — one expected to follow regulations, operate
                  responsibly, and provide a safer, more professional move.{" "}
                  {company.name} publicly lists its DOT, MC, and CAL credentials.
                  Always verify licensing and insurance before booking any move.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <a
                  href={company.phoneHref}
                  className={cx(
                    mono,
                    "mt-7 inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#A87E33] hover:text-[#0E2840]"
                  )}
                >
                  <Phone size={14} /> Questions? Call {company.phone}
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-6">
              <PlateRow />
              <div className="mt-3 flex items-center justify-between border border-[#0E2840]/15 bg-[#0E2840] px-5 py-4">
                <span className={cx(mono, "text-[11px] uppercase tracking-[0.18em] text-[#E4C77E]")}>
                  Licensed &amp; Insured Business
                </span>
                <span className={cx(mono, "text-[10.5px] uppercase tracking-[0.16em] text-white/45")}>
                  Verify before booking
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Plan Your Move?"
        sub="Request a quote or call the crew — we'll help you move easier, safer, and more organized."
      />
    </>
  );
}
