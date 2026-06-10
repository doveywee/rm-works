"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  Star,
} from "lucide-react";

/* ===========================================================================
   Spartan Moving and Transport Inc — Murrieta, CA
   ----------------------------------------------------------------------------
   Design language: a "field dossier / logistics manifest" — monospaced spec
   labels, ruled register lines, numbered manifest rows, a vertical process
   ledger, stamped license plates. Square corners, hairline rules, no cards.

   Palette: navy-deep #0A2036 · navy #0E2840 · navy-mid #163C5E
            gold #C9A24B · gold-hi #D4B063 · gold-lt #E4C77E · gold-ink #A87E33
            paper #F4EFE3 · paper-2 #EDE6D6 · body #1B2A38 · muted #5A6675
   ========================================================================= */

export const cx = (...c: (string | false | undefined | null)[]) =>
  c.filter(Boolean).join(" ");

export const head = "[font-family:var(--font-spartan-head)]";
export const mono = "[font-family:var(--font-spartan-mono)]";

export const company = {
  name: "Spartan Moving and Transport Inc",
  short: "Spartan Moving",
  phone: "(951) 326-5763",
  phoneHref: "tel:+19513265763",
  email: "angelatsambasis@yahoo.com",
  emailHref: "mailto:angelatsambasis@yahoo.com",
  yelp: "https://www.yelp.com/biz/spartan-moving-and-transport-murrieta-3",
  address: "29577 Hubble Way, Murrieta, CA 92563",
  city: "Murrieta, CA",
  dot: "3480106",
  mc: "0602297",
  cal: "T0192705",
  years: "11+",
  moves: "6,000+",
  reviewCount: "242",
  rating: "4.7",
};

export const NAV_LINKS = [
  { label: "Home", href: "/spartan", index: "01" },
  { label: "Services & Process", href: "/spartan/services", index: "02" },
  { label: "Contact / Quote", href: "/spartan/contact", index: "03" },
];

/* ===========================================================================
   Greek key (meander) strip
   ========================================================================= */
export function GreekKey({
  className,
  color = "#C9A24B",
}: {
  className?: string;
  color?: string;
}) {
  const id = useId();
  return (
    <svg
      aria-hidden
      preserveAspectRatio="none"
      className={cx("block h-3 w-full", className)}
    >
      <defs>
        <pattern id={id} width="28" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M0 11 H28 M4 11 V3 H20 V9 H10 V6 H15"
            fill="none"
            stroke={color}
            strokeWidth="1.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
}

/* ===========================================================================
   Map embed (keyless Google Maps iframe)
   ========================================================================= */
export function MapEmbed({
  query,
  zoom = 11,
  title,
  className,
}: {
  query: string;
  zoom?: number;
  title: string;
  className?: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=${zoom}&output=embed`;
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cx("block h-full w-full border-0 grayscale-[0.2]", className)}
    />
  );
}

/* ===========================================================================
   Motion helpers
   ========================================================================= */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Animated hairline rule — draws in from the left. */
export function Rule({
  light,
  gold,
  className,
}: {
  light?: boolean;
  gold?: boolean;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={cx(
        "h-px origin-left",
        gold ? "bg-[#C9A24B]" : light ? "bg-white/18" : "bg-[#0E2840]/15",
        className
      )}
      initial={reduce ? false : { scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* Monospaced kicker: "01 — SERVICES" */
export function Kicker({
  n,
  children,
  light,
}: {
  n?: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cx(
        mono,
        "inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em]",
        light ? "text-[#E4C77E]" : "text-[#A87E33]"
      )}
    >
      {n && <span className="text-[#C9A24B]">{n}</span>}
      {n && <span className="h-px w-7 bg-current opacity-50" />}
      {children}
    </span>
  );
}

/* Editorial section header: rule + (number/kicker + big title) | (dek + action) */
export function SectionHead({
  n,
  kicker,
  title,
  intro,
  action,
  light,
  className,
}: {
  n?: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Rule light={light} />
      <div className="mt-7 grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <Kicker n={n} light={light}>
              {kicker}
            </Kicker>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className={cx(
                head,
                "mt-4 text-[clamp(2rem,5vw,3.3rem)] font-bold uppercase leading-[0.98] tracking-[0.005em]",
                light ? "text-white" : "text-[#0E2840]"
              )}
            >
              {title}
            </h2>
          </Reveal>
        </div>
        {(intro || action) && (
          <div className="flex flex-col justify-end gap-5 md:col-span-5 md:items-start md:pb-1.5">
            {intro && (
              <Reveal delay={0.12}>
                <p
                  className={cx(
                    "text-[15.5px] leading-relaxed",
                    light ? "text-white/65" : "text-[#5A6675]"
                  )}
                >
                  {intro}
                </p>
              </Reveal>
            )}
            {action && <Reveal delay={0.16}>{action}</Reveal>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ===========================================================================
   Buttons
   ========================================================================= */
type BtnProps = {
  href?: string;
  external?: boolean;
  onClick?: () => void;
  children: ReactNode;
  variant?: "gold" | "navy" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
};

export function Btn({
  href,
  external,
  onClick,
  children,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  full,
}: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 font-medium uppercase tracking-[0.16em] transition-all duration-200 active:translate-y-px " +
    mono;
  const sizes = {
    sm: "text-[11px] px-5 py-3",
    md: "text-[12px] px-7 py-4",
    lg: "text-[12.5px] px-8 py-4.5",
  }[size];
  const variants = {
    gold: "bg-[#C9A24B] text-[#0E2840] hover:bg-[#D4B063]",
    navy: "bg-[#0E2840] text-white hover:bg-[#163C5E]",
    outline:
      "border border-[#0E2840]/30 text-[#0E2840] hover:bg-[#0E2840] hover:text-white",
    "outline-light":
      "border border-white/30 text-white hover:bg-white hover:text-[#0E2840]",
  }[variant];
  const cls = cx(base, sizes, variants, full && "w-full", className);
  if (href)
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Stars({ n = 5, size = 14 }: { n?: number; size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < n ? "fill-[#C9A24B] text-[#C9A24B]" : "text-[#C9A24B]/30"}
        />
      ))}
    </span>
  );
}

/* ===========================================================================
   License plate (stamped credential)
   ========================================================================= */
export function LicensePlate({
  label,
  value,
  light,
}: {
  label: string;
  value: string;
  light?: boolean;
}) {
  return (
    <div
      className={cx(
        "flex flex-col border px-5 py-3.5",
        light
          ? "border-white/20 bg-white/[0.04]"
          : "border-[#0E2840]/20 bg-[#0E2840]/[0.03]"
      )}
    >
      <span
        className={cx(
          mono,
          "text-[10px] font-medium uppercase tracking-[0.22em]",
          light ? "text-[#E4C77E]" : "text-[#A87E33]"
        )}
      >
        {label}
      </span>
      <span
        className={cx(
          head,
          "mt-1 text-[1.4rem] font-bold uppercase leading-none tracking-[0.04em]",
          light ? "text-white" : "text-[#0E2840]"
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function PlateRow({ light }: { light?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      <LicensePlate light={light} label="U.S. DOT" value={`#${company.dot}`} />
      <LicensePlate light={light} label="MC No." value={`#${company.mc}`} />
      <LicensePlate light={light} label="CAL-T" value={company.cal} />
    </div>
  );
}

/* ===========================================================================
   Manifest row (services list) — the signature layout element
   ========================================================================= */
export function ManifestRow({
  n,
  title,
  copy,
  href,
  last,
}: {
  n: string;
  title: string;
  copy: string;
  href?: string;
  last?: boolean;
}) {
  const inner = (
    <div
      className={cx(
        "group relative grid grid-cols-[2.6rem_1fr_auto] items-start gap-x-4 gap-y-3 border-t border-[#0E2840]/15 py-7 transition-colors sm:grid-cols-[3.5rem_18rem_1fr_auto] sm:items-center sm:gap-x-8",
        last && "border-b",
        href && "hover:bg-[#0E2840]/[0.03]"
      )}
    >
      <span
        className={cx(
          mono,
          "col-start-1 row-start-1 text-[14px] font-medium text-[#A87E33] transition-colors group-hover:text-[#C9A24B] sm:text-[15px]"
        )}
      >
        {n}
      </span>
      <h3
        className={cx(
          head,
          "col-start-2 row-start-1 self-center text-[1.5rem] font-bold uppercase leading-none text-[#0E2840] sm:col-start-2 sm:text-[1.7rem]"
        )}
      >
        {title}
      </h3>
      <p className="col-span-3 col-start-1 row-start-2 text-[14.5px] leading-relaxed text-[#5A6675] sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:max-w-2xl">
        {copy}
      </p>
      {href && (
        <ArrowUpRight
          size={22}
          className="col-start-3 row-start-1 self-start text-[#0E2840]/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C9A24B] sm:col-start-4 sm:self-auto"
        />
      )}
    </div>
  );
  return href ? (
    <Reveal>
      <Link href={href} className="block">
        {inner}
      </Link>
    </Reveal>
  ) : (
    <Reveal>{inner}</Reveal>
  );
}

/* ===========================================================================
   Navbar — solid navy command bar with a dossier utility strip
   ========================================================================= */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* utility strip */}
      <div className="hidden bg-[#0A2036] lg:block">
        <div
          className={cx(
            mono,
            "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[10.5px] uppercase tracking-[0.18em] text-white/55"
          )}
        >
          <span className="flex items-center gap-5">
            <span className="text-[#E4C77E]">Licensed &amp; Insured</span>
            <span>DOT #{company.dot}</span>
            <span>MC #{company.mc}</span>
            <span>CAL {company.cal}</span>
          </span>
          <span className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-[#E4C77E]">
              ★ {company.rating} · {company.reviewCount} reviews
            </span>
            <a href={company.phoneHref} className="text-white hover:text-[#E4C77E]">
              {company.phone}
            </a>
          </span>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b border-white/10 bg-[#0E2840]">
        <div className="mx-auto flex max-w-[1400px] items-stretch justify-between pl-5 sm:pl-6">
          <Link
            href="/spartan"
            className="flex items-center gap-3 py-3.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/spartan-assets/logo.png"
              alt="Spartan Moving and Transport Inc logo"
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="leading-none">
              <span
                className={cx(
                  head,
                  "block text-[18px] font-bold uppercase tracking-[0.18em] text-white"
                )}
              >
                Spartan
              </span>
              <span
                className={cx(
                  mono,
                  "mt-1 block text-[9px] font-medium uppercase tracking-[0.26em] text-[#E4C77E]"
                )}
              >
                Moving &amp; Transport
              </span>
            </span>
          </Link>

          <div className="flex items-stretch">
            <nav className="hidden items-stretch lg:flex">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cx(
                      mono,
                      "relative flex items-center px-6 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors",
                      active
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    )}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute inset-x-6 bottom-3 h-px bg-[#C9A24B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/spartan/contact"
              className={cx(
                mono,
                "hidden items-center gap-2.5 bg-[#C9A24B] px-7 text-[11.5px] font-medium uppercase tracking-[0.16em] text-[#0E2840] transition-colors hover:bg-[#D4B063] lg:flex"
              )}
            >
              Request Quote <ArrowRight size={15} />
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid w-14 place-items-center text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/10 bg-[#0E2840] lg:hidden"
          >
            <nav className="mx-auto max-w-[1400px] px-5 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cx(
                    "flex items-center gap-4 border-b border-white/8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-white last:border-0"
                  )}
                >
                  <span className={cx(mono, "text-[12px] text-[#C9A24B]")}>
                    {l.index}
                  </span>
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 py-4">
                <Btn href="/spartan/contact" variant="gold" full>
                  Request Quote <ArrowRight size={15} />
                </Btn>
                <a
                  href={company.phoneHref}
                  className={cx(
                    mono,
                    "flex items-center justify-center gap-2 border border-white/25 py-3.5 text-[12px] uppercase tracking-[0.16em] text-white"
                  )}
                >
                  <Phone size={14} /> {company.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===========================================================================
   Page header band (interior pages)
   ========================================================================= */
export function PageHeader({
  index,
  kicker,
  title,
  intro,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  intro: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0E2840]">
      <BlueprintBg />
      <GreekKey className="absolute inset-x-0 bottom-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Reveal>
          <Kicker n={index} light>
            {kicker}
          </Kicker>
        </Reveal>
        <div className="mt-5 grid gap-6 md:grid-cols-12 md:gap-10">
          <Reveal delay={0.06} className="md:col-span-8">
            <h1
              className={cx(
                head,
                "text-[clamp(2.4rem,6vw,4.4rem)] font-bold uppercase leading-[0.95] tracking-[0.005em] text-white"
              )}
            >
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="flex items-end md:col-span-4">
            <p className="text-[15.5px] leading-relaxed text-white/65">{intro}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* faint blueprint backdrop: logo watermark + grid + glow */
export function BlueprintBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-[#163C5E]/40 blur-3xl" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/spartan-assets/logo.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 object-contain opacity-[0.06] md:block"
      />
    </div>
  );
}

/* ===========================================================================
   Quote intake form
   ========================================================================= */
const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Condo",
  "Office",
  "Storage Unit",
  "Commercial Space",
  "Other",
];
const SERVICES_NEEDED = [
  "Residential Move",
  "Commercial Move",
  "Local Move",
  "Loading Only",
  "Unloading Only",
  "Moving Labor",
  "Packing Help",
  "Heavy Item Moving",
  "Not Sure Yet",
];

const inputCls =
  "w-full border border-[#0E2840]/20 bg-[#F4EFE3] px-4 py-3 text-[15px] text-[#0E2840] outline-none transition-all placeholder:text-[#9aa1a9] focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]";

function Field({
  label,
  name,
  required,
  children,
  full,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label htmlFor={name} className={cx("block", full && "sm:col-span-2")}>
      <span
        className={cx(
          mono,
          "mb-2 block text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#5A6675]"
        )}
      >
        {label}
        {required && <span className="text-[#C9A24B]"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="relative">
      <select name={name} className={cx(inputCls, "appearance-none pr-10")}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <Plus
        size={14}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rotate-45 text-[#5A6675]"
      />
    </div>
  );
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center border border-[#0E2840]/15 bg-white p-10 py-20 text-center">
        <span className="grid h-16 w-16 place-items-center border border-[#C9A24B] bg-[#C9A24B]/10 text-[#A87E33]">
          <Check size={30} strokeWidth={2.5} />
        </span>
        <h3 className={cx(head, "mt-5 text-[1.6rem] font-bold uppercase text-[#0E2840]")}>
          Request Logged
        </h3>
        <p className="mt-2 max-w-sm text-[15px] text-[#5A6675]">
          Thank you. {company.name} will review your move details and follow up.
          Need faster help? Call{" "}
          <a href={company.phoneHref} className="font-bold text-[#A87E33]">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="border border-[#0E2840]/15 bg-white"
    >
      <div
        className={cx(
          mono,
          "flex items-center justify-between border-b border-[#0E2840]/15 bg-[#0E2840] px-5 py-3 text-[10.5px] uppercase tracking-[0.2em] text-[#E4C77E]"
        )}
      >
        <span>Move Intake Form</span>
        <span className="text-white/50">No. SP-QT</span>
      </div>
      <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
        <Field label="Full Name" name="name" required>
          <input type="text" name="name" required className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Phone Number" name="phone" required>
          <input type="tel" name="phone" required className={inputCls} placeholder="(951) 000-0000" />
        </Field>
        <Field label="Email Address" name="email">
          <input type="email" name="email" className={inputCls} placeholder="jane@email.com" />
        </Field>
        <Field label="Moving Date" name="date">
          <input type="date" name="date" className={inputCls} />
        </Field>
        <Field label="Moving From City" name="fromCity">
          <input type="text" name="fromCity" className={inputCls} placeholder="Murrieta" />
        </Field>
        <Field label="Moving To City" name="toCity">
          <input type="text" name="toCity" className={inputCls} placeholder="Temecula" />
        </Field>
        <Field label="Pickup Address / ZIP" name="fromZip">
          <input type="text" name="fromZip" className={inputCls} placeholder="92563" />
        </Field>
        <Field label="Drop-Off Address / ZIP" name="toZip">
          <input type="text" name="toZip" className={inputCls} placeholder="92591" />
        </Field>
        <Field label="Property Type" name="property">
          <Select name="property" options={PROPERTY_TYPES} />
        </Field>
        <Field label="Bedrooms / Office Size" name="size">
          <input type="text" name="size" className={inputCls} placeholder="e.g. 3 bedrooms" />
        </Field>
        <Field label="Service Needed" name="service">
          <Select name="service" options={SERVICES_NEEDED} />
        </Field>
        <Field label="Need Packing Help?" name="packing">
          <Select name="packing" options={["No", "Yes", "Not Sure"]} />
        </Field>
        <Field label="Stairs / Elevators / Parking Limits?" name="access" full>
          <input
            type="text"
            name="access"
            className={inputCls}
            placeholder="e.g. 2nd floor, no elevator, street parking only"
          />
        </Field>
        <Field label="Heavy / Fragile / Specialty Items?" name="specialty" full>
          <input
            type="text"
            name="specialty"
            className={inputCls}
            placeholder="e.g. safe, piano, appliances, glass cabinet"
          />
        </Field>
        <Field label="Message / Move Details" name="message" full>
          <textarea
            name="message"
            rows={4}
            className={cx(inputCls, "resize-none")}
            placeholder="Tell us about your move. Anything that helps us plan."
          />
        </Field>
        <div className="sm:col-span-2">
          <p className="mb-4 text-[13px] leading-relaxed text-[#5A6675]">
            To help us understand your move, please include details about stairs,
            elevators, parking, heavy items, fragile items, and any special
            instructions.
          </p>
          <Btn type="submit" variant="gold" size="lg" full className="sm:w-auto">
            Submit Quote Request <ArrowRight size={15} />
          </Btn>
        </div>
      </div>
    </form>
  );
}

/* ===========================================================================
   FAQ — numbered ruled register
   ========================================================================= */
export function FAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-[#0E2840]/15">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#0E2840]/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center gap-5 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className={cx(mono, "text-[13px] text-[#A87E33]")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cx(
                  head,
                  "flex-1 text-[1.15rem] font-bold uppercase leading-tight text-[#0E2840]"
                )}
              >
                {f.q}
              </span>
              <span className="text-[#0E2840] transition-colors group-hover:text-[#C9A24B]">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pl-[2.6rem] text-[15px] leading-relaxed text-[#5A6675]">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================================
   CTA banner
   ========================================================================= */
export function CtaBand({ title, sub }: { title: ReactNode; sub?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-[#0A2036]">
      <BlueprintBg />
      <GreekKey className="absolute inset-x-0 top-0" />
      <GreekKey className="absolute inset-x-0 bottom-0" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-7 px-6 py-16 sm:py-20 md:flex-row md:items-center">
        <div>
          <h2
            className={cx(
              head,
              "max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)] font-bold uppercase leading-[0.98] text-white"
            )}
          >
            {title}
          </h2>
          {sub && <p className="mt-3 max-w-xl text-[15px] text-white/65">{sub}</p>}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Btn href="/spartan/contact" variant="gold" size="lg">
            Request a Quote <ArrowRight size={15} />
          </Btn>
          <Btn href={company.phoneHref} variant="outline-light" size="lg">
            <Phone size={15} /> {company.phone}
          </Btn>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Reviews — featured pull-quote + ruled register of shorter reviews
   ========================================================================= */
const REVIEWS: { name: string; loc: string; text: string }[] = [
  {
    name: "Jason B.",
    loc: "Verified customer",
    text: "My experience from contacting them to finishing the move was great. They carefully carried everything and also wrapped the furniture before moving.",
  },
  {
    name: "Neilson V.",
    loc: "Verified customer",
    text: "These guys were prompt, professional and very efficient. They take care of your belongings as if it's their own.",
  },
  {
    name: "Stephanie S.",
    loc: "Verified customer",
    text: "Everything from start to finish was incredibly smooth. They were very efficient but also careful with our belongings.",
  },
  {
    name: "Ram N.",
    loc: "Verified customer",
    text: "The movers were very professional and efficient. They were also flexible and accommodating.",
  },
];

export function Reviews() {
  return (
    <section className="bg-[#EDE6D6]">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28">
        <SectionHead
          n="★"
          kicker="Customer Reviews"
          title={<>Trusted by SoCal Movers</>}
          intro={
            <>
              {company.rating}/5 across {company.reviewCount}+ reviews and{" "}
              {company.moves} completed moves. Verbatim words from real customers.
            </>
          }
          action={
            <Btn href={company.yelp} external variant="outline" size="sm">
              Read more on Yelp <ArrowUpRight size={14} />
            </Btn>
          }
        />

        {/* featured */}
        <Reveal className="mt-12">
          <figure className="border border-[#0E2840]/15 bg-white p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <Stars n={5} size={18} />
              <span className={cx(mono, "text-[11px] uppercase tracking-[0.18em] text-[#A87E33]")}>
                Featured Review
              </span>
            </div>
            <blockquote
              className={cx(
                head,
                "mt-5 text-[clamp(1.4rem,3vw,2.1rem)] font-medium uppercase leading-[1.1] text-[#0E2840]"
              )}
            >
              “Amazing! Highly recommend — they were prompt, worked hard, respectful
              and polite. They did an amazing job getting everything moved with care
              and on time. Gladly would hire them for any move.”
            </blockquote>
            <figcaption className={cx(mono, "mt-6 text-[12px] uppercase tracking-[0.16em] text-[#5A6675]")}>
              <span className="text-[#0E2840]">Tabatha R.</span>, San Diego, CA
            </figcaption>
          </figure>
        </Reveal>

        {/* register */}
        <div className="mt-4 grid border border-[#0E2840]/15 bg-white sm:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.06}>
              <figure
                className={cx(
                  "flex h-full flex-col p-7",
                  "border-[#0E2840]/12",
                  i % 2 === 0 ? "sm:border-r" : "",
                  i < 2 ? "border-b" : "sm:border-b-0",
                  i === 2 ? "border-b sm:border-b-0" : ""
                )}
              >
                <Stars n={5} />
                <blockquote className="mt-3 flex-1 text-[14.5px] leading-relaxed text-[#3a4756]">
                  “{r.text}”
                </blockquote>
                <figcaption
                  className={cx(
                    mono,
                    "mt-4 text-[11px] uppercase tracking-[0.16em] text-[#5A6675]"
                  )}
                >
                  <span className="text-[#0E2840]">{r.name}</span>, {r.loc}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Footer — ledger
   ========================================================================= */
export function Footer() {
  return (
    <footer className="bg-[#0A2036] text-white/65">
      <GreekKey className="opacity-60" />
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/spartan-assets/logo.png"
                alt="Spartan Moving and Transport Inc logo"
                className="h-12 w-12 object-contain"
              />
              <span className="leading-none">
                <span className={cx(head, "block text-[20px] font-bold uppercase tracking-[0.18em] text-white")}>
                  Spartan
                </span>
                <span className={cx(mono, "mt-1 block text-[9px] uppercase tracking-[0.26em] text-[#E4C77E]")}>
                  Moving &amp; Transport
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/50">
              Murrieta-based movers with {company.years} years and {company.moves}{" "}
              completed moves, reliable, careful, professional residential and
              commercial moving across Southern California.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn href="/spartan/contact" variant="gold" size="sm">
                Request Quote <ArrowRight size={14} />
              </Btn>
              <Btn href={company.phoneHref} variant="outline-light" size="sm">
                <Phone size={14} /> {company.phone}
              </Btn>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className={cx(mono, "text-[10.5px] uppercase tracking-[0.2em] text-white/35")}>
              [ Index ]
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href} className="flex items-center gap-3">
                  <span className={cx(mono, "text-[11px] text-[#C9A24B]")}>{l.index}</span>
                  <Link href={l.href} className="hover:text-[#E4C77E]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className={cx(mono, "text-[10.5px] uppercase tracking-[0.2em] text-white/35")}>
              [ Contact ]
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                {company.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                <a href={company.phoneHref} className="hover:text-[#E4C77E]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#E4C77E]" />
                <a href={company.emailHref} className="break-all hover:text-[#E4C77E]">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Rule light />
          <div className="mt-6">
            <PlateRow light />
          </div>
        </div>

        <p className="mt-8 text-[12px] leading-relaxed text-white/40">
          License, insurance, pricing, availability, and service details should be
          verified directly with {company.name} before booking. This website provides
          general moving information and does not guarantee availability, pricing, or
          legal coverage. Customers should always verify all licensing and insurance
          information before booking any move.
        </p>

        <div
          className={cx(
            mono,
            "mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center"
          )}
        >
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E4C77E]">Privacy</a>
            <a href="#" className="hover:text-[#E4C77E]">Terms</a>
            <span>{company.city}</span>
            <a
              href="https://rmworks.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4C77E]"
            >
              Web Design by RMWorks
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
