"use client";

import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import {
  cx,
  head,
  company,
  img,
  Reveal,
  Eyebrow,
  SectionHeading,
  QuoteForm,
  FAQ,
} from "../components";

const FAQS = [
  {
    q: "How do I get the most accurate quote?",
    a: "Provide your moving date, pickup and drop-off locations, number of rooms, stairs or elevators, parking details, heavy items, and any packing needs.",
  },
  {
    q: "Why do I need to mention stairs, elevators, or parking?",
    a: "These details affect the time, equipment, and planning needed for the move.",
  },
  {
    q: "Are you licensed and insured?",
    a: `${company.name} publicly lists ${company.dot}, ${company.mc}, and ${company.cal}. Customers should verify all licensing and insurance information before booking.`,
  },
  {
    q: "What should I do before movers arrive?",
    a: "Pack and label boxes, clear walkways, reserve parking if needed, separate valuables, and keep important personal items with you.",
  },
  {
    q: "What items should I not put on the moving truck?",
    a: "Customers should personally transport cash, jewelry, important documents, medications, hazardous materials, flammable items, and anything extremely personal or irreplaceable.",
  },
];

const CONTACT_CARDS = [
  { Icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
  { Icon: Mail, label: "Email", value: company.email, href: company.emailHref },
  { Icon: MapPin, label: "Location", value: company.city },
  {
    Icon: Clock,
    label: "Service Area",
    value: "Riverside, Orange & San Diego County + nearby SoCal",
  },
];

export default function SpartanContact() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-[#0E2840] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img("1558642452-9d2a7deb7f62", 1900)}
            alt=""
            className="h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2036]/85 via-[#0E2840]/92 to-[#0E2840]" />
          <div className="absolute inset-y-0 left-0 w-1.5 bg-[#C9A24B]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow light>Contact / Quote</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className={cx(
                head,
                "mt-5 text-[2.6rem] font-bold uppercase leading-[1.03] tracking-[0.01em] text-white sm:text-[3.6rem]"
              )}
            >
              Request a Moving Quote
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
              Tell {company.name} about your move and get help planning the next
              step.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 bg-[#C9A24B] px-7 py-4 text-[14.5px] font-bold uppercase tracking-[0.06em] text-[#0E2840] transition-all hover:bg-[#D4B063]"
              >
                <Phone size={17} /> Call {company.phone}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-[14.5px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:border-white/50 hover:bg-white/5"
              >
                Jump to Quote Form
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT INFO STRIP ================= */}
      <section className="border-b border-[#0E2840]/8 bg-[#FAF6EC]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {CONTACT_CARDS.map((c, i) => {
            const inner = (
              <div className="flex h-full items-start gap-3.5 border border-[#0E2840]/8 bg-white p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#0E2840] text-[#E4C77E]">
                  <c.Icon size={18} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#163C5E]">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-[14.5px] font-semibold text-[#1B2A38]">
                    {c.value}
                  </span>
                </span>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.05}>
                {c.href ? (
                  <a href={c.href} className="block h-full">
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

      {/* ================= QUOTE FORM ================= */}
      <section id="quote" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Request a Quote"
                title="Tell Us About Your Move"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-[16px] leading-relaxed text-[#566776]">
                  The more details you share, the more accurate your moving plan can
                  be. Include stairs, elevators, parking, heavy items, fragile
                  items, and any special instructions.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 space-y-3">
                  {[
                    { Icon: Clock, t: "Fast, friendly response" },
                    { Icon: ShieldCheck, t: "Licensed & insured business" },
                    { Icon: MapPin, t: "Serving Murrieta & Southern California" },
                  ].map(({ Icon, t }) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-md bg-[#FAF6EC] text-[#163C5E] ring-1 ring-[#0E2840]/8">
                        <Icon size={17} />
                      </span>
                      <span className="text-[15px] text-[#2c3e4f]">{t}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 border border-[#163C5E]/20 bg-[#163C5E]/[0.05] p-6">
                  <p className="text-[15px] font-bold text-[#0E2840]">
                    Need faster help?
                  </p>
                  <p className="mt-1.5 text-[14px] text-[#566776]">
                    Call {company.name} directly and we&rsquo;ll talk through your
                    move.
                  </p>
                  <a
                    href={company.phoneHref}
                    className="mt-4 inline-flex items-center gap-2 text-[16px] font-bold text-[#163C5E]"
                  >
                    <Phone size={17} /> {company.phone}
                  </a>
                  <a
                    href={company.emailHref}
                    className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-[#566776] hover:text-[#163C5E]"
                  >
                    <Mail size={15} /> {company.email}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-7">
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-[#0E2840]/8 bg-[#F1EADB]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <FAQ eyebrow="FAQ" title="Moving Questions, Answered" items={FAQS} />

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 bg-[#0E2840] px-8 py-8 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className={cx(head, "text-[1.4rem] font-bold uppercase text-white")}>
                  Still Have Questions?
                </h3>
                <p className="mt-1.5 text-[15px] text-white/70">
                  Our crew is happy to help you plan a safer, more organized move.
                </p>
              </div>
              <a
                href={company.phoneHref}
                className="inline-flex shrink-0 items-center gap-2 bg-[#C9A24B] px-8 py-4 text-[14.5px] font-bold uppercase tracking-[0.06em] text-[#0E2840] transition-all hover:bg-[#D4B063]"
              >
                <Phone size={16} /> Call {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
