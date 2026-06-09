"use client";

import { ArrowRight, Phone, Check, AlertTriangle } from "lucide-react";
import {
  Home,
  Building2,
  MapPin,
  PackageOpen,
  Boxes,
  Sofa,
  ShieldCheck,
  ClipboardList,
  MessageSquare,
  CalendarCheck,
  PackageCheck,
  Truck,
  CheckCircle2,
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
} from "../components";

const SERVICES = [
  {
    Icon: Home,
    title: "Residential Moving",
    copy: "Moving to a new home, apartment, or condo requires planning, care, and the right crew. Spartan Moving and Transport Inc helps with local residential moves, including furniture, boxes, appliances, and household items.",
  },
  {
    Icon: Building2,
    title: "Commercial Moving",
    copy: "Business moves require efficiency and organization. Spartan Moving and Transport Inc helps offices and small businesses move equipment, furniture, and supplies while working to reduce stress and downtime.",
  },
  {
    Icon: MapPin,
    title: "Local Moving",
    copy: "Based in Murrieta, CA, Spartan Moving and Transport Inc serves customers throughout Riverside County, Orange County, San Diego County, and nearby Southern California communities.",
  },
  {
    Icon: PackageOpen,
    title: "Loading & Unloading",
    copy: "Need help loading or unloading a rental truck, trailer, storage unit, POD, or moving container? Spartan Moving and Transport Inc provides moving labor to help with the heavy lifting.",
  },
  {
    Icon: Boxes,
    title: "Packing & Furniture Protection",
    copy: "Proper protection helps prevent damage during a move. The team can help with furniture wrapping, careful loading, and safe handling of fragile or bulky items when requested.",
  },
  {
    Icon: Sofa,
    title: "Heavy Item Moving Assistance",
    copy: "Large or heavy items may require extra planning, proper equipment, and advance notice. Customers should mention safes, appliances, oversized furniture, or specialty items when requesting a quote.",
  },
];

const STEPS = [
  {
    Icon: ClipboardList,
    title: "Request a Quote",
    copy: "Start by calling or submitting a quote form with your moving details. Include your moving date, pickup and drop-off locations, property type, number of rooms, and any heavy or fragile items.",
  },
  {
    Icon: MessageSquare,
    title: "Share Move Details",
    copy: "The more information you provide, the more accurate the moving plan can be. Customers should mention stairs, elevators, long walking distances, parking limits, storage units, bulky furniture, appliances, and specialty items.",
  },
  {
    Icon: CalendarCheck,
    title: "Confirm Scheduling",
    copy: "After reviewing the details, the moving team can confirm availability, estimated labor needs, and scheduling. Same-day or urgent moves may depend on availability.",
  },
  {
    Icon: PackageCheck,
    title: "Prepare Before Moving Day",
    copy: "Customers should pack personal items, label boxes, separate fragile items, reserve parking if needed, clear walkways, and make sure important documents, medications, valuables, and essentials stay with them.",
  },
  {
    Icon: Truck,
    title: "Moving Day",
    copy: "The movers arrive, review the move, protect furniture as needed, load items carefully, transport belongings, unload at the destination, and place items where directed.",
  },
  {
    Icon: CheckCircle2,
    title: "Final Walkthrough",
    copy: "Before the move is complete, customers should check the pickup and drop-off areas, confirm all items have arrived, and communicate any concerns before the crew leaves.",
  },
];

const RESPONSIBILITIES = [
  "Be honest and detailed when requesting a quote",
  "Mention stairs, elevators, parking restrictions, gates, long carries, or difficult access",
  "Tell the movers about heavy, fragile, oversized, or high-value items before moving day",
  "Pack boxes securely before the crew arrives unless packing service is requested",
  "Keep valuables, cash, jewelry, important documents, medications, and personal items with you",
  "Empty drawers, appliances, and loose items when required",
  "Make sure pets and children are safely away from moving areas",
  "Reserve elevator or loading dock access if needed",
  "Confirm building rules with apartments, condos, HOAs, or offices",
  "Make sure someone authorized is present during pickup and delivery",
  "Do not request movers to transport illegal, hazardous, flammable, or unsafe materials",
  "Review the quote, service details, and any applicable policies before booking",
];

const LICENSE_POINTS = [
  "Licensing helps verify that the company is a legitimate moving business",
  "Insurance helps protect customers and the company",
  "DOT and MC numbers help identify transportation carriers",
  "California moving licenses/certifications may be required for certain moving services",
  "Customers should always verify license numbers before booking",
  "A professional mover should be clear about pricing, scheduling, service limits, and responsibilities",
];

const SERVICE_AREAS = [
  "Murrieta",
  "Temecula",
  "Menifee",
  "Wildomar",
  "Lake Elsinore",
  "Riverside",
  "Corona",
  "Orange County",
  "San Diego County",
  "Oceanside",
  "Carlsbad",
  "Escondido",
  "Irvine",
  "Anaheim",
  "Huntington Beach",
  "Rancho Cucamonga",
  "Long Beach",
  "Los Angeles",
  "Pasadena",
  "Nearby Southern California areas",
];

export default function SpartanServices() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-[#14171C] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("1601584115197-04ecc0da31d7", 1900)}
            alt=""
            className="h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101317]/85 via-[#14171C]/92 to-[#14171C]" />
          <div className="absolute inset-y-0 left-0 w-1.5 bg-[#9E2B24]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow light>Services &amp; Process</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className={cx(
                head,
                "mt-5 text-[2.5rem] font-bold uppercase leading-[1.04] tracking-[0.01em] text-white sm:text-[3.4rem]"
              )}
            >
              Moving Services &amp; How the Moving Process Works
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
              From planning to final placement, {company.name} helps make your move
              organized, careful, and easier to manage.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Button href="/spartan/contact" variant="crimson" size="lg">
                Request a Moving Quote <ArrowRight size={16} />
              </Button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-[14.5px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:border-white/50 hover:bg-white/5"
              >
                <Phone size={17} /> {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      {/* ================= SERVICES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            center
            eyebrow="Our Services"
            title="Moving Help, Tailored to Your Move"
            sub="Residential, commercial, and labor-only — our crew brings strength, care, and organization to every job."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col border border-[#14171C]/8 bg-[#FAF8F3] p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#14171C] text-[#CDA869]">
                    <s.Icon size={22} />
                  </span>
                  <h3 className={cx(head, "mt-5 text-[1.3rem] font-bold uppercase text-[#14171C]")}>
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#5b616a]">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOVING PROCESS ================= */}
      <section className="border-y border-[#14171C]/8 bg-[#F4F1EA]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            center
            eyebrow="Step by Step"
            title="The Moving Process"
            sub="A clear, organized path from your first call to the final walkthrough."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="relative flex h-full flex-col border border-[#14171C]/8 bg-white p-7">
                  <span
                    className={cx(
                      head,
                      "absolute right-5 top-4 text-[3rem] font-bold leading-none text-[#14171C]/[0.06]"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#9E2B24] text-white">
                    <s.Icon size={22} />
                  </span>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9E2B24]">
                    Step {i + 1}
                  </p>
                  <h3 className={cx(head, "mt-1 text-[1.2rem] font-bold uppercase text-[#14171C]")}>
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5b616a]">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RULES & RESPONSIBILITIES ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Customer Responsibilities"
                title="Important Moving Rules"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-[15px] leading-relaxed text-[#5b616a]">
                  A smooth move is a shared effort. Following these basic moving
                  rules and responsibilities helps the crew work safely, plan
                  accurately, and protect your belongings.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 flex items-start gap-3 border border-[#9E2B24]/20 bg-[#9E2B24]/[0.05] p-4">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#9E2B24]" />
                  <p className="text-[13.5px] leading-relaxed text-[#5b616a]">
                    Never ask movers to transport illegal, hazardous, flammable, or
                    unsafe materials. Always review the quote and service details
                    before booking.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {RESPONSIBILITIES.map((r, i) => (
                  <Reveal key={r} delay={(i % 2) * 0.05}>
                    <div className="flex items-start gap-3 border border-[#14171C]/8 bg-[#FAF8F3] p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#14171C] text-[#CDA869]">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-[14px] leading-relaxed text-[#3a4049]">
                        {r}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LICENSE EDUCATION ================= */}
      <section className="relative overflow-hidden bg-[#14171C]">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-[#9E2B24]" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                light
                eyebrow="Licensing Education"
                title="The Importance of Hiring Licensed Movers"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-white/70">
                  Hiring licensed movers matters because moving companies handle
                  valuable personal property, furniture, business equipment, and
                  household belongings. A properly licensed moving company is easier
                  to verify, more accountable, and expected to follow applicable
                  moving regulations. Licensing also helps customers avoid
                  unqualified or unsafe moving operators.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-7 border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-[15px] leading-relaxed text-white/75">
                    {company.name} publicly lists {company.dot}, {company.mc}, and{" "}
                    {company.cal}. Customers should verify all licensing and
                    insurance information before booking.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[company.dot, company.mc, company.cal].map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-2 border border-[#B68A4E]/40 bg-[#9E2B24]/10 px-3 py-2 text-[12.5px] font-bold uppercase tracking-[0.06em] text-[#CDA869]"
                      >
                        <ShieldCheck size={15} /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-3">
                {LICENSE_POINTS.map((p, i) => (
                  <Reveal key={p} delay={i * 0.05}>
                    <div className="flex items-start gap-3 border border-white/10 bg-white/[0.04] p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#9E2B24] text-white">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-[14.5px] leading-relaxed text-white/85">
                        {p}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            center
            eyebrow="Where We Work"
            title="Service Areas"
            sub={`${company.name} is based in Murrieta, CA and serves customers throughout Southern California.`}
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {SERVICE_AREAS.map((a, i) => (
              <Reveal key={a} delay={(i % 6) * 0.03}>
                <span className="inline-flex items-center gap-2 border border-[#14171C]/10 bg-[#FAF8F3] px-4 py-2.5 text-[13.5px] font-semibold text-[#3a4049]">
                  <MapPin size={14} className="text-[#9E2B24]" /> {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Plan Your Move"
        sub="Tell us your move details and our crew will help you plan the next step."
      />
    </>
  );
}
