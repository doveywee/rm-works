"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
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
  Check,
  ChevronDown,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

/* ===========================================================================
   Spartan Moving and Transport Inc — Murrieta, CA
   ----------------------------------------------------------------------------
   Palette: ink #14171C · charcoal #20242C · steel #2A2F38
            crimson #9E2B24 · crimson-lt #C1392F · bronze #B68A4E
            bronze-lt #CDA869 · bone #F4F1EA · sand #FAF8F3 · muted #6A7079
   ========================================================================= */

export const cx = (...c: (string | false | undefined | null)[]) =>
  c.filter(Boolean).join(" ");

export const head = "[font-family:var(--font-spartan-head)]";

export const company = {
  name: "Spartan Moving and Transport Inc",
  short: "Spartan Moving",
  phone: "(951) 326-5763",
  phoneHref: "tel:+19513265763",
  address: "29577 Hubble Way, Murrieta, CA 92563",
  city: "Murrieta, CA",
  dot: "DOT #3480106",
  mc: "MC #0602297",
  cal: "CAL T0192705",
};

export const NAV_LINKS = [
  { label: "Home", href: "/spartan" },
  { label: "Services & Process", href: "/spartan/services" },
  { label: "Contact / Quote", href: "/spartan/contact" },
];

/* Unsplash helper — moving, boxes, trucks, homes & crews. */
export const img = (id: string, w = 1500) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ===========================================================================
   Spartan helmet mark
   ========================================================================= */
export function SpartanMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* helmet silhouette */}
      <path
        d="M16 2c6 0 9 3.6 9 9v6c0 5.4-3.4 9-9 13-5.6-4-9-7.6-9-13v-6c0-5.4 3-9 9-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* crest */}
      <path
        d="M9 8c4-3 10-3 14 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* nose guard */}
      <path d="M16 11.5v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* eye slits */}
      <path d="M11.5 14.5h2.4M18.1 14.5h2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/spartan" className="group flex items-center gap-2.5">
      <span
        className={cx(
          "grid h-10 w-10 place-items-center rounded-md ring-1 transition-colors",
          light
            ? "bg-white/5 text-[#CDA869] ring-white/15"
            : "bg-[#14171C] text-[#CDA869] ring-[#B68A4E]/40"
        )}
      >
        <SpartanMark size={22} />
      </span>
      <span className="leading-none">
        <span
          className={cx(
            head,
            "block text-[18px] font-bold uppercase tracking-[0.12em]",
            light ? "text-white" : "text-[#14171C]"
          )}
        >
          Spartan
        </span>
        <span
          className={cx(
            "mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.3em]",
            light ? "text-white/55" : "text-[#9097a0]"
          )}
        >
          Moving &amp; Transport
        </span>
      </span>
    </Link>
  );
}

/* ===========================================================================
   Primitives
   ========================================================================= */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em]",
        light ? "text-[#CDA869]" : "text-[#9E2B24]"
      )}
    >
      <span className="h-px w-7 bg-current opacity-60" />
      {children}
    </span>
  );
}

type BtnProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "crimson" | "bronze" | "ink" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
};

export function Button({
  href,
  onClick,
  children,
  variant = "crimson",
  size = "md",
  className,
  type = "button",
  full,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.06em] transition-all duration-200 active:scale-[0.98] whitespace-nowrap";
  const sizes = {
    sm: "text-[12.5px] px-4 py-2.5",
    md: "text-[13.5px] px-6 py-3.5",
    lg: "text-[14.5px] px-8 py-4",
  }[size];
  const variants = {
    crimson: "bg-[#9E2B24] text-white hover:bg-[#86241e] shadow-sm",
    bronze: "bg-[#B68A4E] text-[#14171C] hover:bg-[#c79b5e] shadow-sm",
    ink: "bg-[#14171C] text-white hover:bg-[#20242C]",
    outline:
      "border border-[#14171C]/25 text-[#14171C] hover:border-[#9E2B24] hover:text-[#9E2B24]",
    "outline-light":
      "border border-white/25 text-white hover:border-white/55 hover:bg-white/5",
  }[variant];
  const cls = cx(base, sizes, variants, full && "w-full", className);
  if (href)
    return (
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

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center,
  light,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cx(center && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cx(
            head,
            "mt-4 text-[clamp(1.9rem,4vw,2.9rem)] font-bold uppercase leading-[1.05] tracking-[0.01em]",
            light ? "text-white" : "text-[#14171C]"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className={cx(
              "mt-4 text-[16px] leading-relaxed",
              light ? "text-white/70" : "text-[#5b616a]"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ===========================================================================
   Trust badge bar
   ========================================================================= */
const BADGES = [
  "Licensed & Insured",
  "Residential & Commercial",
  "Local SoCal Movers",
  "Careful Furniture Handling",
  "Professional Crew",
  company.dot,
  company.cal,
];

export function TrustBar() {
  return (
    <div className="border-y border-[#14171C]/8 bg-[#FAF8F3]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
        {BADGES.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#3a4049]"
          >
            <BadgeCheck size={15} className="text-[#9E2B24]" />
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===========================================================================
   Navbar
   ========================================================================= */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/spartan";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The bar overlays the dark hero only on the home page top.
  const overlay = isHome && !scrolled && !open;

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overlay
          ? "bg-transparent"
          : "border-b border-[#14171C]/8 bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-14px_rgba(0,0,0,0.5)]"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8">
        <Logo light={overlay} />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors",
                  overlay
                    ? "text-white/80 hover:text-white"
                    : "text-[#3a4049] hover:text-[#9E2B24]",
                  active && (overlay ? "text-white" : "text-[#9E2B24]")
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className={cx(
              "inline-flex items-center gap-2 text-[14px] font-bold transition-colors",
              overlay
                ? "text-white hover:text-[#CDA869]"
                : "text-[#14171C] hover:text-[#9E2B24]"
            )}
          >
            <Phone size={15} />
            {company.phone}
          </a>
          <Button href="/spartan/contact" size="sm" variant="crimson">
            Request a Quote
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cx(
            "grid h-10 w-10 place-items-center rounded-md transition-colors lg:hidden",
            overlay ? "text-white" : "text-[#14171C]"
          )}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#14171C]/8 bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#3a4049] hover:bg-[#F4F1EA]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="rounded-md px-3 py-2.5 text-[14px] font-bold text-[#9E2B24]"
              >
                Call {company.phone}
              </a>
              <Button
                href="/spartan/contact"
                variant="crimson"
                className="mt-2"
                full
              >
                Request a Quote <ArrowRight size={16} />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===========================================================================
   Call-to-action band (reused across pages)
   ========================================================================= */
export function CtaBand({
  title,
  sub,
}: {
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#9E2B24]">
      <div className="absolute inset-0 opacity-[0.12]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("1600880292203-757bb62b4baf", 1700)}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <h2 className={cx(head, "text-[1.7rem] font-bold uppercase leading-tight text-white sm:text-[2.1rem]")}>
            {title}
          </h2>
          {sub && <p className="mt-2 max-w-xl text-[15px] text-white/85">{sub}</p>}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button href="/spartan/contact" variant="bronze" size="lg">
            Request a Moving Quote
          </Button>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-none border border-white/40 px-7 py-4 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:bg-white/10"
          >
            <Phone size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Quote form (Contact page)
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
  "w-full rounded-md border border-[#14171C]/15 bg-[#FBFAF6] px-4 py-3 text-[15px] text-[#14171C] outline-none transition-all placeholder:text-[#9aa1a9] focus:border-[#9E2B24] focus:ring-2 focus:ring-[#9E2B24]/15";

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
      <span className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-[0.05em] text-[#14171C]">
        {label}
        {required && <span className="text-[#9E2B24]"> *</span>}
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
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6A7079]"
      />
    </div>
  );
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-[#14171C]/8 bg-white p-10 py-20 text-center shadow-[0_24px_70px_-44px_rgba(0,0,0,0.5)]">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#9E2B24]/10 text-[#9E2B24]">
          <Check size={30} strokeWidth={2.5} />
        </span>
        <h3 className={cx(head, "mt-5 text-[1.6rem] font-bold uppercase text-[#14171C]")}>
          Request Received
        </h3>
        <p className="mt-2 max-w-sm text-[15px] text-[#5b616a]">
          Thank you. {company.name} will review your move details and follow up.
          Need faster help? Call{" "}
          <a href={company.phoneHref} className="font-bold text-[#9E2B24]">
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
      className="rounded-xl border border-[#14171C]/8 bg-white p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field label="Pickup Address or ZIP" name="fromZip">
          <input type="text" name="fromZip" className={inputCls} placeholder="92563" />
        </Field>
        <Field label="Drop-Off Address or ZIP" name="toZip">
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
        <Field label="Stairs, Elevators, or Parking Restrictions?" name="access" full>
          <input
            type="text"
            name="access"
            className={inputCls}
            placeholder="e.g. 2nd floor, no elevator, street parking only"
          />
        </Field>
        <Field label="Heavy, Fragile, or Specialty Items?" name="specialty" full>
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
            placeholder="Tell us about your move — anything that helps us plan."
          />
        </Field>
        <div className="sm:col-span-2">
          <p className="mb-4 text-[13px] leading-relaxed text-[#6A7079]">
            To help us understand your move, please include details about stairs,
            elevators, parking, heavy items, fragile items, and any special
            instructions.
          </p>
          <Button type="submit" variant="crimson" size="lg" full className="sm:w-auto">
            Submit Quote Request <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </form>
  );
}

/* ===========================================================================
   FAQ accordion
   ========================================================================= */
export function FAQ({
  items,
  title,
  eyebrow,
}: {
  items: { q: string; a: ReactNode }[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {(title || eyebrow) && (
        <SectionHeading center eyebrow={eyebrow} title={title} />
      )}
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#14171C]/8 rounded-xl border border-[#14171C]/8 bg-white">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-bold text-[#14171C]">{f.q}</span>
                <span
                  className={cx(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all",
                    isOpen
                      ? "rotate-180 bg-[#9E2B24] text-white"
                      : "bg-[#F4F1EA] text-[#14171C]"
                  )}
                >
                  <ChevronDown size={16} />
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
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#5b616a]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===========================================================================
   Footer
   ========================================================================= */
export function Footer() {
  return (
    <footer className="bg-[#101317] text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
              {company.name} is a Murrieta-based moving company serving families,
              individuals, and businesses with reliable, careful, and professional
              residential and commercial moving help across Southern California.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/spartan/contact" variant="crimson" size="sm">
                Request a Quote
              </Button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/5"
              >
                <Phone size={15} /> {company.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#CDA869]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">
              Credentials
            </p>
            <ul className="mt-4 space-y-1.5 text-[13.5px] text-white/55">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#CDA869]" /> {company.dot}
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#CDA869]" /> {company.mc}
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#CDA869]" /> {company.cal}
              </li>
              <li>Licensed and insured business</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/40">
              Contact &amp; Service Area
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#CDA869]" />
                {company.city}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#CDA869]" />
                <a href={company.phoneHref} className="hover:text-[#CDA869]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#CDA869]" />
                Serving Riverside County, Orange County, San Diego County &amp;
                surrounding Southern California areas
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-xl border border-white/8 bg-white/[0.03] p-6 text-[12px] leading-relaxed text-white/45">
          <p className="font-bold uppercase tracking-[0.08em] text-white/55">
            License Verification Disclaimer
          </p>
          <p className="mt-2">
            License, insurance, pricing, availability, and service details should be
            verified directly with {company.name} before booking. This website
            provides general moving information and does not guarantee availability,
            pricing, or legal coverage. Customers should always verify all licensing
            and insurance information before booking any move.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-[13px] text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} · {company.city}
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#CDA869]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#CDA869]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
