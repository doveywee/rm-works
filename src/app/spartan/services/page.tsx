"use client";

import { Check, AlertTriangle } from "lucide-react";
import {
  cx,
  head,
  mono,
  company,
  Reveal,
  SectionHead,
  ManifestRow,
  PlateRow,
  PageHeader,
  MapEmbed,
  CtaBand,
} from "../components";

const SERVICES = [
  {
    n: "01",
    title: "Residential",
    copy: "Moving to a new home, apartment, or condo takes planning, care, and the right crew. We handle local residential moves — furniture, boxes, appliances, and household items.",
  },
  {
    n: "02",
    title: "Commercial",
    copy: "Business moves need efficiency and organization. We help offices, schools, and small warehouses move equipment, furniture, and supplies while reducing stress and downtime.",
  },
  {
    n: "03",
    title: "Local Moving",
    copy: "Based in Murrieta, CA, we serve customers throughout Riverside County, Orange County, San Diego County, and nearby Southern California communities.",
  },
  {
    n: "04",
    title: "Load / Unload",
    copy: "Need help loading or unloading a rental truck, trailer, storage unit, POD, or moving container? We provide moving labor for the heavy lifting.",
  },
  {
    n: "05",
    title: "Packing & Protection",
    copy: "Proper protection prevents damage. We help with furniture wrapping, careful loading, and safe handling of fragile or bulky items when requested.",
  },
  {
    n: "06",
    title: "Heavy & Single-Item",
    copy: "From flat-rate single-item moves to safes, appliances, and oversized furniture, large items may need extra planning, gear, and advance notice. Mention specialty items when requesting a quote.",
  },
];

const STEPS = [
  {
    title: "Request a Quote",
    copy: "Call or submit the quote form with your moving details — date, pickup and drop-off locations, property type, number of rooms, and any heavy or fragile items.",
  },
  {
    title: "Share Move Details",
    copy: "The more you provide, the more accurate the plan. Mention stairs, elevators, long walks, parking limits, storage units, bulky furniture, appliances, and specialty items.",
  },
  {
    title: "Confirm Scheduling",
    copy: "After reviewing the details, the team confirms availability, estimated labor needs, and scheduling. Same-day or urgent moves may depend on availability.",
  },
  {
    title: "Prepare for Moving Day",
    copy: "Pack personal items, label boxes, separate fragile items, reserve parking if needed, clear walkways, and keep documents, medications, valuables, and essentials with you.",
  },
  {
    title: "Moving Day",
    copy: "The movers arrive, review the move, protect furniture as needed, load carefully, transport your belongings, unload at the destination, and place items where directed.",
  },
  {
    title: "Final Walkthrough",
    copy: "Before the move is complete, check the pickup and drop-off areas, confirm all items arrived, and raise any concerns before the crew leaves.",
  },
];

const RESPONSIBILITIES = [
  "Be honest and detailed when requesting a quote",
  "Mention stairs, elevators, parking limits, gates, long carries, or difficult access",
  "Tell the movers about heavy, fragile, oversized, or high-value items beforehand",
  "Pack boxes securely before the crew arrives unless packing service is requested",
  "Keep valuables, cash, jewelry, documents, medications, and personal items with you",
  "Empty drawers, appliances, and loose items when required",
  "Keep pets and children safely away from moving areas",
  "Reserve elevator or loading dock access if needed",
  "Confirm building rules with apartments, condos, HOAs, or offices",
  "Make sure someone authorized is present during pickup and delivery",
  "Never ask movers to transport illegal, hazardous, flammable, or unsafe materials",
  "Review the quote, service details, and any policies before booking",
];

const LICENSE_POINTS = [
  "Licensing helps verify the company is a legitimate moving business",
  "Insurance helps protect customers and the company",
  "DOT and MC numbers help identify transportation carriers",
  "California licenses/certifications may be required for certain services",
  "Customers should always verify license numbers before booking",
  "A professional mover is clear about pricing, scheduling, and responsibilities",
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
  "Nearby SoCal",
];

export default function SpartanServices() {
  return (
    <>
      <PageHeader
        index="02"
        kicker="Services & Process"
        title={
          <>
            Moving Services &amp; How
            <br className="hidden sm:block" /> the Process Works
          </>
        }
        intro={
          <>
            From planning to final placement, {company.name} makes your move
            organized, careful, and easier to manage.
          </>
        }
      />

      {/* ===================== SERVICES MANIFEST ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="A"
            kicker="Services"
            title="Moving Help, Tailored to Your Move"
            intro="Residential, commercial, and labor-only — strength, care, and organization on every job."
          />
          <div className="mt-12">
            {SERVICES.map((s, i) => (
              <ManifestRow
                key={s.n}
                n={s.n}
                title={s.title}
                copy={s.copy}
                last={i === SERVICES.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS LEDGER ===================== */}
      <section className="bg-[#EDE6D6]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="B"
            kicker="The Moving Process"
            title="Six Steps, Start to Finish"
            intro="A clear, organized path from your first call to the final walkthrough."
          />
          <ol className="mt-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.title}>
                <li className="grid gap-x-8 gap-y-1 border-t border-[#0E2840]/15 py-8 last:border-b sm:grid-cols-[6rem_1fr]">
                  <div className={cx(head, "text-[3rem] font-bold leading-[0.8] text-[#0E2840]/15")}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <span className={cx(mono, "text-[10.5px] uppercase tracking-[0.2em] text-[#A87E33]")}>
                      Step {i + 1}
                    </span>
                    <h3 className={cx(head, "mt-1 text-[1.5rem] font-bold uppercase leading-none text-[#0E2840]")}>
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[#5A6675]">
                      {s.copy}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== RULES ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="C"
            kicker="Customer Responsibilities"
            title="Important Moving Rules"
            intro="A smooth move is a shared effort. These responsibilities help the crew work safely, plan accurately, and protect your belongings."
          />
          <div className="mt-12 grid border-t border-[#0E2840]/15 sm:grid-cols-2">
            {RESPONSIBILITIES.map((r, i) => (
              <Reveal key={r} delay={(i % 2) * 0.04}>
                <div
                  className={cx(
                    "flex items-start gap-4 border-b border-[#0E2840]/12 py-5",
                    i % 2 === 0 && "sm:border-r sm:border-[#0E2840]/12 sm:pr-8"
                  )}
                >
                  <span className={cx(mono, "mt-0.5 text-[12px] text-[#A87E33]")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-[#1B2A38]">
                    {r}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex items-start gap-3 border border-[#C9A24B] bg-[#C9A24B]/10 p-5">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#A87E33]" />
              <p className="text-[13.5px] leading-relaxed text-[#5A6675]">
                Movers cannot transport illegal, hazardous, flammable, or unsafe
                materials. Always review the quote and service details before
                booking. This page is educational and does not make legal promises.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== LICENSE EDUCATION ===================== */}
      <section className="relative overflow-hidden bg-[#0E2840]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            light
            n="D"
            kicker="Licensing Education"
            title="The Importance of Hiring Licensed Movers"
            intro="Movers handle valuable property. A properly licensed company is easier to verify, more accountable, and expected to follow applicable regulations."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="border-t border-white/12">
                {LICENSE_POINTS.map((p, i) => (
                  <Reveal key={p} delay={i * 0.04}>
                    <div className="flex items-start gap-4 border-b border-white/12 py-5">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#C9A24B]" />
                      <span className="text-[14.5px] leading-relaxed text-white/80">
                        {p}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <PlateRow light />
              <p className="mt-5 text-[14px] leading-relaxed text-white/55">
                {company.name} publicly lists its DOT, MC, and CAL credentials.
                Customers should verify all licensing and insurance information
                before booking.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SERVICE AREAS ===================== */}
      <section className="bg-[#EDE6D6]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="E"
            kicker="Where We Work"
            title="Service Areas"
            intro={`${company.name} is based in Murrieta, CA and serves customers throughout Southern California.`}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 border-l border-t border-[#0E2840]/15 sm:grid-cols-3">
                {SERVICE_AREAS.map((a) => (
                  <span
                    key={a}
                    className={cx(
                      mono,
                      "border-b border-r border-[#0E2840]/15 px-4 py-3.5 text-[11.5px] uppercase tracking-[0.12em] text-[#1B2A38]"
                    )}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="border border-[#0E2840]/15">
                <MapEmbed
                  query="Murrieta, CA"
                  zoom={9}
                  title="Spartan Moving service area across Southern California"
                  className="aspect-[16/11]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's Plan Your Move"
        sub="Tell us your move details and the crew will help you plan the next step."
      />
    </>
  );
}
