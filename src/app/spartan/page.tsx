"use client";

import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import {
  Home,
  Building2,
  MapPin,
  PackageOpen,
  Dumbbell,
  Boxes,
  Sofa,
  ShieldCheck,
  Truck,
  Users,
  ClipboardCheck,
  Handshake,
} from "lucide-react";
import {
  cx,
  head,
  company,
  img,
  Reveal,
  Eyebrow,
  Button,
  SectionHeading,
  TrustBar,
  CtaBand,
} from "./components";

/* ---- Service preview cards ---- */
const SERVICES = [
  {
    Icon: Home,
    title: "Residential Moving",
    copy: "Careful, organized moves for homes, apartments, and condos.",
  },
  {
    Icon: Building2,
    title: "Commercial Moving",
    copy: "Efficient office and business moves with less downtime.",
  },
  {
    Icon: MapPin,
    title: "Local Moving",
    copy: "Local moves throughout Murrieta and Southern California.",
  },
  {
    Icon: PackageOpen,
    title: "Loading & Unloading",
    copy: "Moving labor for trucks, trailers, PODs, and storage units.",
  },
  {
    Icon: Dumbbell,
    title: "Moving Labor",
    copy: "Strong, professional help for the heavy lifting.",
  },
  {
    Icon: Sofa,
    title: "Heavy Item Assistance",
    copy: "Extra planning and care for large or bulky items.",
  },
  {
    Icon: Boxes,
    title: "Packing & Protection",
    copy: "Furniture wrapping and safe handling on request.",
  },
];

const WHY = [
  "Professional and respectful movers",
  "Careful handling of furniture and belongings",
  "A clear, easy-to-follow moving process",
  "Licensed and insured business",
  "Local knowledge of Murrieta and surrounding areas",
  "A simple quote request process",
  "Reliable help for homes, apartments, offices & businesses",
];

const ABOUT_POINTS = [
  { Icon: MapPin, t: "Local Murrieta moving company" },
  { Icon: Users, t: "Residential & commercial moving" },
  { Icon: ShieldCheck, t: "Careful handling of belongings" },
  { Icon: Handshake, t: "Clear, professional communication" },
];

export default function SpartanHome() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#14171C] pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("1600518464441-9154a4dea21b", 1900)}
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.20]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101317]/85 via-[#14171C]/90 to-[#14171C]" />
          <div className="absolute inset-y-0 left-0 w-1.5 bg-[#9E2B24]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-x-12 gap-y-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[#CDA869]">
                <span className="h-px w-8 bg-[#B68A4E]/70" />
                Murrieta · Riverside · Orange · San Diego County
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1
                className={cx(
                  head,
                  "mt-6 text-[2.7rem] font-bold uppercase leading-[1.02] tracking-[0.01em] text-white sm:text-[4rem]"
                )}
              >
                Reliable Moving Services in Murrieta &amp;{" "}
                <span className="text-[#C1392F]">Southern California.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                {company.name} provides residential and commercial moving services
                across Murrieta, Riverside County, Orange County, San Diego County,
                and surrounding Southern California areas — strong, careful, and
                professional moving help you can trust.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Button href="/spartan/contact" variant="crimson" size="lg">
                  Request a Moving Quote <ArrowRight size={17} />
                </Button>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-[14.5px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  <Phone size={17} /> {company.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-6 text-[13px] text-white/55">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#CDA869]" /> Licensed &amp;
                  Insured
                </span>
                <span className="inline-flex items-center gap-2">
                  <Truck size={16} className="text-[#CDA869]" /> {company.dot}
                </span>
                <span className="inline-flex items-center gap-2">
                  <ClipboardCheck size={16} className="text-[#CDA869]" />{" "}
                  {company.cal}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 -z-0 border border-[#B68A4E]/30" />
              <div className="relative overflow-hidden shadow-2xl ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("1530124566582-a618bc2615dc", 1000)}
                  alt="Professional movers carrying boxes and furniture"
                  className="aspect-[4/5] w-full bg-[#20242C] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101317] via-[#101317]/70 to-transparent p-6 pt-20">
                  <p className="text-[15px] font-medium leading-snug text-white">
                    Strong, careful, and professional moving help — handled with
                    Spartan discipline from start to finish.
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CDA869]">
                    {company.name}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      {/* ================= ABOUT ================= */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden shadow-xl ring-1 ring-[#14171C]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("1600585154340-be6161a56a0c", 1100)}
                  alt="A Southern California home ready for moving day"
                  className="aspect-[5/4] w-full bg-[#20242C] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 hidden bg-[#9E2B24] px-6 py-5 text-white shadow-xl sm:block">
                <p className={cx(head, "text-[2rem] font-bold uppercase leading-none")}>
                  Murrieta
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                  Based &amp; Operated Locally
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About the Company"
              title={<>About Spartan Moving and Transport Inc</>}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] leading-relaxed text-[#5b616a]">
                {company.name} is a Murrieta-based moving company serving families,
                individuals, and businesses throughout Southern California. The
                company focuses on reliable service, careful handling, clear
                communication, and a smoother moving experience from start to
                finish.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ABOUT_POINTS.map((p, i) => (
                <Reveal key={p.t} delay={0.12 + i * 0.05}>
                  <div className="flex items-center gap-3 border border-[#14171C]/8 bg-[#FAF8F3] px-4 py-3.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#14171C] text-[#CDA869]">
                      <p.Icon size={17} />
                    </span>
                    <span className="text-[14px] font-semibold text-[#20242C]">
                      {p.t}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <p className="mt-6 text-[15px] leading-relaxed text-[#5b616a]">
                From stress-free moving support to licensed and insured service,
                our crew is built to make your move easier, safer, and more
                organized.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="border-y border-[#14171C]/8 bg-[#F4F1EA]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            center
            eyebrow="What We Do"
            title="Our Moving Services"
            sub="From a single heavy item to a full residential or commercial move, our crew is ready to help."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col border border-[#14171C]/8 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[#9E2B24]/40 hover:shadow-[0_18px_50px_-26px_rgba(0,0,0,0.45)]">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#14171C] text-[#CDA869] transition-colors group-hover:bg-[#9E2B24] group-hover:text-white">
                    <s.Icon size={22} />
                  </span>
                  <h3 className={cx(head, "mt-5 text-[1.25rem] font-bold uppercase text-[#14171C]")}>
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-[#5b616a]">
                    {s.copy}
                  </p>
                  <Link
                    href="/spartan/services"
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-[13px] font-bold uppercase tracking-[0.06em] text-[#9E2B24] transition-colors hover:text-[#14171C]"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <Link
                href="/spartan/services"
                className="flex h-full flex-col justify-center border border-dashed border-[#9E2B24]/40 bg-[#9E2B24]/[0.04] p-7 transition-colors hover:bg-[#9E2B24]/[0.08]"
              >
                <span className={cx(head, "text-[1.25rem] font-bold uppercase text-[#9E2B24]")}>
                  See the Full Process
                </span>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#5b616a]">
                  Learn how the moving process works, step by step, and what to
                  expect on moving day.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#9E2B24]">
                  Services &amp; Process <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="relative overflow-hidden bg-[#14171C]">
        <div className="absolute inset-0 opacity-[0.10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("1581578017093-cd30fce4eeb7", 1800)}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Why Spartan"
              title="Why Choose Spartan Moving"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] leading-relaxed text-white/70">
                Moving can be stressful, but the right team makes a difference.
                {" "}
                {company.name} helps customers plan their move, understand what to
                expect, and get the moving help they need with care, strength, and
                professionalism.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <Button href="/spartan/contact" variant="bronze" size="lg">
                  Request a Quote <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {WHY.map((w, i) => (
                <Reveal key={w} delay={i * 0.04}>
                  <div className="flex items-start gap-3 border border-white/10 bg-white/[0.04] p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#9E2B24] text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] font-medium text-white/90">
                      {w}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LICENSE TRUST ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Trust & Licensing"
                title="Why Moving Licenses Matter"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-[#5b616a]">
                  When hiring a moving company, licensing is important because it
                  helps customers know they are working with a legitimate moving
                  business. Licensed movers are expected to follow moving
                  regulations, operate responsibly, and provide a safer, more
                  professional moving experience.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5b616a]">
                  {company.name} publicly lists {company.dot}, {company.mc}, and{" "}
                  {company.cal}. Customers should always verify licensing and
                  insurance before booking any move.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-[#9E2B24]"
                  >
                    <Phone size={17} /> Have questions about your move? Call{" "}
                    {company.phone}.
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[company.dot, company.mc, company.cal].map((c) => (
                  <div
                    key={c}
                    className="flex flex-col items-center border border-[#14171C]/8 bg-[#FAF8F3] px-4 py-7 text-center"
                  >
                    <ShieldCheck size={26} className="text-[#9E2B24]" />
                    <p className={cx(head, "mt-3 text-[1.05rem] font-bold uppercase leading-tight text-[#14171C]")}>
                      {c}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border border-[#14171C]/8 bg-[#14171C] px-6 py-6 text-center">
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#CDA869]">
                  Licensed &amp; Insured Business
                </p>
                <p className="mt-2 text-[14px] text-white/65">
                  Verify all licensing and insurance directly with {company.short}{" "}
                  before booking.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Plan Your Move?"
        sub="Request a moving quote or call our crew — we'll help you move easier, safer, and more organized."
      />
    </>
  );
}
