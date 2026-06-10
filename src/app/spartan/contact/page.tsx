"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  cx,
  head,
  mono,
  company,
  Reveal,
  Kicker,
  SectionHead,
  Btn,
  QuoteForm,
  FAQ,
  MapEmbed,
  PageHeader,
  PlateRow,
} from "../components";
import { FAQS } from "./faq";

const CONTACT = [
  { Icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
  { Icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { Icon: MapPin, label: "Location", value: company.city },
  {
    Icon: MapPin,
    label: "Service Area",
    value: "Riverside · Orange · San Diego County + nearby SoCal",
  },
];

export default function SpartanContact() {
  return (
    <>
      <PageHeader
        index="03"
        kicker="Contact / Quote"
        title="Request a Moving Quote"
        intro={
          <>
            Tell {company.name} about your move and get help planning the next step.
          </>
        }
      />

      {/* ===================== CONTACT REGISTER ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 border-l border-t border-[#0E2840]/15 px-0 sm:grid-cols-4">
          {CONTACT.map((c, i) => {
            const inner = (
              <div className="flex h-full flex-col gap-3 border-b border-r border-[#0E2840]/15 px-6 py-7">
                <c.Icon size={18} className="text-[#A87E33]" />
                <span className={cx(mono, "text-[10.5px] uppercase tracking-[0.18em] text-[#5A6675]")}>
                  {c.label}
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-[#1B2A38]">
                  {c.value}
                </span>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.05}>
                {c.href ? (
                  <a href={c.href} className="block h-full hover:bg-[#0E2840]/[0.03]">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===================== INTAKE FORM ===================== */}
      <section className="bg-[#F4EFE3]">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 sm:pb-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHead
                n="01"
                kicker="Request a Quote"
                title="Tell Us About Your Move"
              />
              <Reveal delay={0.12}>
                <p className="mt-6 text-[15.5px] leading-relaxed text-[#5A6675]">
                  The more details you share, the more accurate your moving plan can
                  be. Include stairs, elevators, parking, heavy items, fragile items,
                  and any special instructions.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 border border-[#0E2840]/15 bg-white p-6">
                  <span className={cx(mono, "text-[10.5px] uppercase tracking-[0.18em] text-[#A87E33]")}>
                    Need faster help?
                  </span>
                  <a
                    href={company.phoneHref}
                    className={cx(head, "mt-2 block text-[1.8rem] font-bold uppercase leading-none text-[#0E2840] hover:text-[#A87E33]")}
                  >
                    {company.phone}
                  </a>
                  <a
                    href={company.emailHref}
                    className={cx(mono, "mt-3 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-[#5A6675] hover:text-[#0E2840]")}
                  >
                    <Mail size={14} /> {company.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-6">
                  <PlateRow />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-7">
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== LOCATION & MAP ===================== */}
      <section className="relative overflow-hidden bg-[#0E2840]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Kicker n="02" light>
                  Location &amp; Service Area
                </Kicker>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className={cx(head, "mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-bold uppercase leading-[0.98] text-white")}>
                  Based in Murrieta, CA
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <ul className="mt-7 space-y-4 text-[15px] text-white/75">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                    {company.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                    <a href={company.phoneHref} className="hover:text-[#E4C77E]">
                      {company.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                    <a href={company.emailHref} className="break-all hover:text-[#E4C77E]">
                      {company.email}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-7">
                  <Btn href={company.yelp} external variant="outline-light" size="sm">
                    View on Yelp <ArrowUpRight size={14} />
                  </Btn>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-7">
              <div className="border border-white/15">
                <MapEmbed
                  query={company.address}
                  zoom={13}
                  title="Spartan Moving and Transport Inc, Murrieta, CA location"
                  className="aspect-[16/10]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="bg-[#EDE6D6]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
          <SectionHead
            n="03"
            kicker="FAQ"
            title="Moving Questions, Answered"
          />
          <div className="mt-12">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
