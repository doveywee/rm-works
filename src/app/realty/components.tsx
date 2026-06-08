"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Share2,
  Heart,
} from "lucide-react";
import {
  company,
  agents,
  formatPrice,
  type Listing,
  type Agent,
  type Neighborhood,
  type Post,
} from "./data";
import { cx, serifCls } from "./ui";

/* ===========================================================================
   Tokens & helpers
   ----------------------------------------------------------------------------
   Palette: white · charcoal #16181D · navy #0E1C30 · gold #B4924E · sand #F4EFE7
   ========================================================================= */
/* Brand social icons — this lucide build dropped brand glyphs, so inline them. */
type IconProps = { size?: number; className?: string };
const svgBase = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});
export const Instagram = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
export const Facebook = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
export const Linkedin = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
export const Youtube = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const NAV_LINKS = [
  { label: "Buy", href: "/realty/buy" },
  { label: "Sell", href: "/realty/sell" },
  { label: "Listings", href: "/realty/listings" },
  { label: "Neighborhoods", href: "/realty/neighborhoods" },
  { label: "Agents", href: "/realty/agents" },
  { label: "About", href: "/realty/about" },
  { label: "Resources", href: "/realty/resources" },
  { label: "Contact", href: "/realty/contact" },
];

/* ---- Logo ---------------------------------------------------------------- */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/realty" className="flex items-center gap-2.5 group">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 3 L29 14 L24 14 L24 28 L8 28 L8 14 L3 14 Z"
          stroke="#B4924E"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M16 9 L21 14 L11 14 Z" fill="#B4924E" />
      </svg>
      <span className="leading-none">
        <span
          className={cx(
            serifCls,
            "block text-[19px] font-semibold tracking-wide",
            light ? "text-white" : "text-[#16181D]",
          )}
        >
          CRESTLINE
        </span>
        <span
          className={cx(
            "block text-[9px] font-medium tracking-[0.34em]",
            light ? "text-white/60" : "text-[#9a8f7d]",
          )}
        >
          REALTY GROUP
        </span>
      </span>
    </Link>
  );
}

/* ---- Buttons ------------------------------------------------------------- */
type BtnProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "gold" | "navy" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
};

export function Button({
  href,
  onClick,
  children,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  full,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 active:scale-[0.98] whitespace-nowrap";
  const sizes = {
    sm: "text-[13px] px-4 py-2.5",
    md: "text-[14px] px-6 py-3",
    lg: "text-[15px] px-8 py-4",
  }[size];
  const variants = {
    gold: "bg-[#B4924E] text-white hover:bg-[#a07f3e] shadow-sm",
    navy: "bg-[#0E1C30] text-white hover:bg-[#16263E]",
    white: "bg-white text-[#16181D] hover:bg-[#F4EFE7]",
    outline:
      "border border-[#16181D]/25 text-[#16181D] hover:border-[#B4924E] hover:text-[#B4924E]",
    ghost: "text-[#16181D] hover:text-[#B4924E]",
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

/* ---- Reveal -------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---- Section heading ----------------------------------------------------- */
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
    <div
      className={cx(
        center && "text-center mx-auto",
        center && "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cx(
            "text-[12px] font-semibold tracking-[0.28em] uppercase mb-4",
            light ? "text-[#C9A96A]" : "text-[#B4924E]",
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cx(
          serifCls,
          "text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08]",
          light ? "text-white" : "text-[#16181D]",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cx(
            "mt-4 text-[15px] leading-relaxed",
            light ? "text-white/70" : "text-[#5b564d]",
            center && "mx-auto",
          )}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ---- Stars --------------------------------------------------------------- */
export function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <div className={cx("flex gap-0.5", className)} aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < n ? "fill-[#B4924E] text-[#B4924E]" : "text-[#d8cfbe]"}
        />
      ))}
    </div>
  );
}

/* ---- Status badge -------------------------------------------------------- */
export function StatusBadge({ status }: { status: Listing["status"] }) {
  const map: Record<Listing["status"], string> = {
    "For Sale": "bg-white text-[#16181D]",
    "Open House": "bg-[#B4924E] text-white",
    Pending: "bg-[#0E1C30] text-white",
    Sold: "bg-[#7c3030] text-white",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5 shadow-sm",
        map[status],
      )}
    >
      {status}
    </span>
  );
}

/* ===========================================================================
   Navbar
   ========================================================================= */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/realty";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = isHome && !scrolled;

  return (
    <>
      <header
        className={cx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          overlay
            ? "bg-transparent py-5"
            : "bg-white/95 backdrop-blur-md border-b border-[#E4DCCD] py-3 shadow-[0_1px_20px_rgba(0,0,0,0.04)]",
        )}
      >
        <div className="mx-auto max-w-7xl px-5 flex items-center justify-between gap-4">
          <Logo light={overlay} />

          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cx(
                    "text-[13.5px] font-medium tracking-wide transition-colors",
                    overlay
                      ? "text-white/85 hover:text-white"
                      : "text-[#3a3630] hover:text-[#B4924E]",
                    active && (overlay ? "text-white" : "text-[#B4924E]"),
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <a
              href={company.phoneHref}
              className={cx(
                "flex items-center gap-1.5 text-[13.5px] font-medium",
                overlay ? "text-white/90" : "text-[#16181D]",
              )}
            >
              <Phone size={15} />
              {company.phone}
            </a>
            <Button href="/realty/sell" size="sm" variant="gold">
              Get Valuation
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={cx("xl:hidden p-1.5", overlay ? "text-white" : "text-[#16181D]")}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cx(
          "fixed inset-0 z-[60] xl:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-[#0E1C30]/50"
          onClick={() => setOpen(false)}
        />
        <div
          onClick={(e) => {
            // Close on any navigation click inside the drawer (links / CTAs).
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
          className={cx(
            "absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E4DCCD]">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={26} className="text-[#16181D]" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-3 overflow-y-auto">
            <Link href="/realty" className="py-3 text-[16px] font-medium border-b border-[#F0EAdd]">
              Home
            </Link>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-[16px] font-medium border-b border-[#F0EADD]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-5 space-y-3">
            <Button href="/realty/sell" full variant="gold">
              Get a Free Home Valuation
            </Button>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 text-[15px] font-medium text-[#16181D]"
            >
              <Phone size={16} /> {company.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===========================================================================
   Property search bar
   ========================================================================= */
function SearchField({
  label,
  options,
  icon,
}: {
  label: string;
  options: string[];
  icon?: ReactNode;
}) {
  return (
    <label className="flex-1 min-w-0 px-4 py-3 text-left">
      <span className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#9a8f7d] mb-0.5">
        {label}
      </span>
      <div className="flex items-center gap-2">
        {icon}
        <select className="w-full bg-transparent text-[14.5px] font-medium text-[#16181D] outline-none appearance-none cursor-pointer">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={15} className="text-[#9a8f7d] shrink-0" />
      </div>
    </label>
  );
}

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const cities = [
    "Any location",
    "Chino Hills",
    "Irvine",
    "Claremont",
    "Rancho Cucamonga",
    "Diamond Bar",
    "Orange County",
  ];
  const prices = [
    "Any price",
    "Up to $750K",
    "$750K – $1M",
    "$1M – $1.5M",
    "$1.5M – $2.5M",
    "$2.5M+",
  ];
  const counts = ["Any", "1+", "2+", "3+", "4+", "5+"];

  return (
    <div
      className={cx(
        "bg-white shadow-xl border border-[#E4DCCD] flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-[#E4DCCD]",
        compact ? "rounded-lg" : "rounded-xl",
      )}
    >
      <SearchField
        label="Location"
        options={cities}
        icon={<MapPin size={15} className="text-[#B4924E] shrink-0" />}
      />
      <SearchField label="Price" options={prices} />
      <SearchField label="Beds" options={counts} />
      <SearchField label="Baths" options={counts} />
      <div className="p-2 md:p-2.5 flex">
        <button
          onClick={() => router.push("/realty/listings")}
          className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-[#B4924E] text-white font-medium text-[14px] px-7 py-3 md:py-0 md:h-full md:min-h-[60px] rounded-md hover:bg-[#a07f3e] transition-colors active:scale-[0.98]"
        >
          Search Homes
        </button>
      </div>
    </div>
  );
}

/* ===========================================================================
   Cards
   ========================================================================= */
export function PropertyCard({ l }: { l: Listing }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group bg-white border border-[#EAE3D6] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link href={`/realty/listings/${l.id}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-[#ECE4D6]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={l.images[0]}
            alt={l.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute top-3 left-3">
          <StatusBadge status={l.status} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved((s) => !s);
          }}
          className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors"
          aria-label="Save listing"
        >
          <Heart
            size={16}
            className={saved ? "fill-[#B4924E] text-[#B4924E]" : "text-[#16181D]"}
          />
        </button>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <div className={cx(serifCls, "text-[24px] font-semibold text-[#16181D]")}>
            {l.status === "Sold" && l.soldPrice
              ? formatPrice(l.soldPrice)
              : formatPrice(l.price)}
          </div>
          {l.status === "Sold" && (
            <span className="text-[11px] font-semibold tracking-wide uppercase text-[#7c3030]">
              Sold
            </span>
          )}
        </div>
        <Link
          href={`/realty/listings/${l.id}`}
          className="mt-1 text-[15px] font-medium text-[#16181D] hover:text-[#B4924E] transition-colors"
        >
          {l.address}
        </Link>
        <div className="text-[13px] text-[#8a8170] mb-4">
          {l.city}, CA · {l.neighborhood}
        </div>

        <div className="flex items-center gap-4 text-[13px] text-[#3a3630] border-t border-[#EFE9DC] pt-3 mt-auto">
          <span className="flex items-center gap-1.5">
            <Bed size={15} className="text-[#B4924E]" /> {l.beds} bd
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={15} className="text-[#B4924E]" /> {l.baths} ba
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={14} className="text-[#B4924E]" />{" "}
            {l.sqft.toLocaleString()} sqft
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <Button href={`/realty/listings/${l.id}`} size="sm" variant="navy">
            Details
          </Button>
          <Button href={`/realty/listings/${l.id}#tour`} size="sm" variant="outline">
            Showing
          </Button>
          <Button href={`/realty/listings/${l.id}#ask`} size="sm" variant="outline">
            Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AgentCard({ a }: { a: Agent }) {
  return (
    <div className="group bg-white border border-[#EAE3D6] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/realty/agents/${a.slug}`} className="block aspect-[4/5] overflow-hidden bg-[#ECE4D6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={a.photo}
          alt={a.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </Link>
      <div className="p-5">
        <h3 className={cx(serifCls, "text-[22px] font-semibold text-[#16181D]")}>
          {a.name}
        </h3>
        <div className="text-[12.5px] font-semibold tracking-[0.12em] uppercase text-[#B4924E] mt-0.5">
          {a.title}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {a.specialties.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium text-[#5b564d] bg-[#F4EFE7] px-2.5 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-1.5 text-[13px] text-[#5b564d]">
          <a href={`tel:${a.phone}`} className="flex items-center gap-2 hover:text-[#B4924E]">
            <Phone size={14} className="text-[#B4924E]" /> {a.phone}
          </a>
          <a href={`mailto:${a.email}`} className="flex items-center gap-2 hover:text-[#B4924E]">
            <Mail size={14} className="text-[#B4924E]" /> {a.email}
          </a>
          <div className="text-[12px] text-[#8a8170] pt-1">{a.license}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-5">
          <Button href={`/realty/agents/${a.slug}`} size="sm" variant="navy">
            View Profile
          </Button>
          <Button href={`/realty/agents/${a.slug}#contact`} size="sm" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

export function NeighborhoodCard({ n }: { n: Neighborhood }) {
  return (
    <Link
      href={`/realty/neighborhoods#${n.slug}`}
      className="group relative block rounded-xl overflow-hidden aspect-[4/5]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={n.image}
        alt={n.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C30]/90 via-[#0E1C30]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className={cx(serifCls, "text-[24px] font-semibold")}>{n.name}</h3>
        <div className="text-[13px] text-white/80">Avg. home price {n.avgPrice}</div>
        <div className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-[#C9A96A] opacity-0 group-hover:opacity-100 transition-opacity">
          View homes <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export function BlogCard({ p }: { p: Post }) {
  return (
    <Link
      href="/realty/resources"
      className="group bg-white border border-[#EAE3D6] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#ECE4D6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#B4924E]">
          {p.category} <span className="text-[#d8cfbe]">·</span>
          <span className="text-[#9a8f7d] font-medium tracking-normal normal-case">
            {p.read}
          </span>
        </div>
        <h3
          className={cx(
            serifCls,
            "mt-2 text-[20px] font-semibold leading-snug text-[#16181D] group-hover:text-[#B4924E] transition-colors",
          )}
        >
          {p.title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#5b564d] line-clamp-3">
          {p.excerpt}
        </p>
        <div className="mt-4 text-[12px] text-[#9a8f7d]">{p.date}</div>
      </div>
    </Link>
  );
}

export function TestimonialCard({
  t,
}: {
  t: { name: string; role: string; rating: number; text: string };
}) {
  return (
    <figure className="bg-white border border-[#EAE3D6] rounded-xl p-7 flex flex-col h-full">
      <Stars n={t.rating} className="mb-4" />
      <blockquote className="text-[15.5px] leading-relaxed text-[#3a3630] flex-1">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-5 pt-5 border-t border-[#EFE9DC]">
        <div className="font-semibold text-[#16181D]">{t.name}</div>
        <div className="text-[13px] text-[#8a8170]">{t.role}</div>
      </figcaption>
    </figure>
  );
}

/* ===========================================================================
   Stats band (count-up)
   ========================================================================= */
function CountUp({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const shown = reduce ? value : n;
  return (
    <span ref={ref}>
      {shown.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

export function StatsBand({
  items,
  light = true,
}: {
  items: readonly {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    decimals?: number;
  }[];
  light?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
      {items.map((s) => (
        <div key={s.label} className="text-center">
          <div
            className={cx(
              serifCls,
              "text-[clamp(2.4rem,5vw,3.4rem)] font-semibold leading-none",
              light ? "text-white" : "text-[#16181D]",
            )}
          >
            {s.prefix}
            <CountUp value={s.value} decimals={s.decimals} />
            <span className="text-[#B4924E]">{s.suffix}</span>
          </div>
          <div
            className={cx(
              "mt-3 text-[13px] font-medium tracking-[0.1em] uppercase",
              light ? "text-white/65" : "text-[#8a8170]",
            )}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===========================================================================
   Forms
   ========================================================================= */
function FieldInput({
  label,
  type = "text",
  placeholder,
  required,
  textarea,
  options,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
}) {
  const cls =
    "w-full bg-white border border-[#E4DCCD] rounded-lg px-4 py-3 text-[14.5px] text-[#16181D] outline-none focus:border-[#B4924E] focus:ring-1 focus:ring-[#B4924E]/30 transition placeholder:text-[#a9a18f]";
  return (
    <label className="block">
      <span className="block text-[12.5px] font-semibold text-[#3a3630] mb-1.5">
        {label} {required && <span className="text-[#B4924E]">*</span>}
      </span>
      {textarea ? (
        <textarea rows={4} placeholder={placeholder} required={required} className={cls} />
      ) : options ? (
        <div className="relative">
          <select required={required} className={cx(cls, "appearance-none cursor-pointer pr-10")}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9a8f7d] pointer-events-none"
          />
        </div>
      ) : (
        <input type={type} placeholder={placeholder} required={required} className={cls} />
      )}
    </label>
  );
}

function FormShell({
  onSubmit,
  done,
  children,
  cta,
  note,
}: {
  onSubmit: (e: React.FormEvent) => void;
  done: boolean;
  children: ReactNode;
  cta: string;
  note?: string;
}) {
  if (done)
    return (
      <div className="text-center py-10 px-4">
        <div className="mx-auto w-14 h-14 rounded-full bg-[#B4924E]/15 grid place-items-center">
          <Check size={26} className="text-[#B4924E]" />
        </div>
        <h4 className={cx(serifCls, "mt-4 text-[24px] font-semibold text-[#16181D]")}>
          Thank you!
        </h4>
        <p className="mt-2 text-[14px] text-[#5b564d] max-w-sm mx-auto">
          Your request has been received. A Crestline agent will reach out shortly —
          usually within one business hour.
        </p>
      </div>
    );
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
      <Button type="submit" variant="gold" full size="lg">
        {cta}
      </Button>
      {note && (
        <p className="text-[12px] text-[#9a8f7d] text-center leading-relaxed">{note}</p>
      )}
    </form>
  );
}

function useFormSubmit() {
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  return { done, submit };
}

export function ValuationForm({ compact }: { compact?: boolean }) {
  const { done, submit } = useFormSubmit();
  return (
    <FormShell
      onSubmit={submit}
      done={done}
      cta="Get My Free Valuation"
      note="No obligation. Your information is kept private and never sold."
    >
      <FieldInput label="Property address" placeholder="123 Main St, Chino Hills, CA" required />
      <div className={cx("grid gap-4", !compact && "sm:grid-cols-2")}>
        <FieldInput label="Full name" placeholder="Jordan Avery" required />
        <FieldInput label="Phone" type="tel" placeholder="(909) 555-0100" required />
      </div>
      <FieldInput label="Email" type="email" placeholder="you@email.com" required />
      {!compact && (
        <FieldInput
          label="Timeframe to sell"
          options={["Just curious", "1–3 months", "3–6 months", "6–12 months", "Already listed"]}
        />
      )}
    </FormShell>
  );
}

export function LeadForm({
  variant = "tour",
  listingTitle,
}: {
  variant?: "tour" | "ask";
  listingTitle?: string;
}) {
  const { done, submit } = useFormSubmit();
  return (
    <FormShell
      onSubmit={submit}
      done={done}
      cta={variant === "tour" ? "Request This Showing" : "Send Question"}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <FieldInput label="Full name" placeholder="Jordan Avery" required />
        <FieldInput label="Phone" type="tel" placeholder="(909) 555-0100" required />
      </div>
      <FieldInput label="Email" type="email" placeholder="you@email.com" required />
      {variant === "tour" ? (
        <div className="grid sm:grid-cols-2 gap-4">
          <FieldInput label="Preferred date" type="date" />
          <FieldInput
            label="Preferred time"
            options={["Morning", "Afternoon", "Evening", "Weekend"]}
          />
        </div>
      ) : null}
      <FieldInput
        label="Message"
        textarea
        placeholder={
          variant === "tour"
            ? `I'd like to tour ${listingTitle ?? "this home"}.`
            : "What would you like to know about this property?"
        }
      />
    </FormShell>
  );
}

export function ContactForm() {
  const { done, submit } = useFormSubmit();
  return (
    <FormShell onSubmit={submit} done={done} cta="Send Message">
      <div className="grid sm:grid-cols-2 gap-4">
        <FieldInput label="Full name" placeholder="Jordan Avery" required />
        <FieldInput label="Phone" type="tel" placeholder="(909) 555-0100" />
      </div>
      <FieldInput label="Email" type="email" placeholder="you@email.com" required />
      <FieldInput
        label="I'm interested in"
        options={[
          "Buying a home",
          "Selling a home",
          "A free home valuation",
          "A question about a listing",
          "Joining the team",
        ]}
      />
      <FieldInput label="How can we help?" textarea placeholder="Tell us a little about what you're looking for…" />
    </FormShell>
  );
}

export function AgentContactForm({ agent }: { agent: Agent }) {
  const { done, submit } = useFormSubmit();
  return (
    <FormShell onSubmit={submit} done={done} cta={`Message ${agent.name.split(" ")[0]}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <FieldInput label="Full name" placeholder="Jordan Avery" required />
        <FieldInput label="Phone" type="tel" placeholder="(909) 555-0100" />
      </div>
      <FieldInput label="Email" type="email" placeholder="you@email.com" required />
      <FieldInput label="Message" textarea placeholder={`Hi ${agent.name.split(" ")[0]}, I'd love to connect about…`} />
    </FormShell>
  );
}

export function NewsletterForm() {
  const { done, submit } = useFormSubmit();
  if (done)
    return (
      <p className="text-[13.5px] text-[#C9A96A] flex items-center gap-2">
        <Check size={16} /> You’re subscribed. Watch your inbox for market updates.
      </p>
    );
  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="Your email"
        className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-[14px] text-white placeholder:text-white/45 outline-none focus:border-[#C9A96A]"
      />
      <button
        type="submit"
        className="shrink-0 bg-[#B4924E] text-white px-4 py-2.5 rounded-lg hover:bg-[#a07f3e] transition-colors"
        aria-label="Subscribe"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

/* ===========================================================================
   Mortgage calculator
   ========================================================================= */
function SliderRow({
  label,
  value,
  onChange,
  min,
  max,
  step,
  fmt,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  fmt: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[13px] font-medium text-[#5b564d]">{label}</span>
        <span className="text-[14px] font-semibold text-[#16181D]">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#B4924E] h-1.5"
      />
    </div>
  );
}

export function MortgageCalculator({ price }: { price: number }) {
  const [home, setHome] = useState(price);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const down = Math.round((home * downPct) / 100);
  const principal = home - down;
  const r = rate / 100 / 12;
  const nPay = term * 12;
  const mortgage =
    r === 0 ? principal / nPay : (principal * r) / (1 - Math.pow(1 + r, -nPay));
  const tax = (home * 0.0115) / 12; // ~1.15% CA effective
  const ins = (home * 0.0035) / 12;
  const total = mortgage + tax + ins;

  return (
    <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-xl p-6">
      <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D]")}>
        Mortgage Calculator
      </h3>
      <p className="text-[13px] text-[#8a8170] mb-5">
        An estimate — confirm exact figures with your lender.
      </p>
      <div className="space-y-5">
        <SliderRow
          label="Home price"
          value={home}
          onChange={setHome}
          min={200000}
          max={5000000}
          step={10000}
          fmt={(v) => `$${v.toLocaleString()}`}
        />
        <SliderRow
          label="Down payment"
          value={downPct}
          onChange={setDownPct}
          min={0}
          max={50}
          step={1}
          fmt={(v) => `${v}%  ($${down.toLocaleString()})`}
        />
        <SliderRow
          label="Interest rate"
          value={rate}
          onChange={setRate}
          min={2}
          max={10}
          step={0.1}
          fmt={(v) => `${v.toFixed(1)}%`}
        />
        <SliderRow
          label="Loan term"
          value={term}
          onChange={setTerm}
          min={10}
          max={30}
          step={5}
          fmt={(v) => `${v} yrs`}
        />
      </div>
      <div className="mt-6 pt-5 border-t border-[#E4DCCD] text-center">
        <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#8a8170]">
          Estimated monthly payment
        </div>
        <div className={cx(serifCls, "text-[40px] font-semibold text-[#16181D] leading-none mt-1")}>
          $
          {total.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          <span className="text-[16px] text-[#8a8170] font-sans">/mo</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[12px]">
          {[
            ["Principal & int.", mortgage],
            ["Taxes", tax],
            ["Insurance", ins],
          ].map(([label, v]) => (
            <div key={label as string} className="bg-white rounded-lg py-2">
              <div className="text-[#8a8170]">{label as string}</div>
              <div className="font-semibold text-[#16181D]">
                ${(v as number).toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===========================================================================
   FAQ accordion
   ========================================================================= */
export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[#E4DCCD] border-y border-[#E4DCCD]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={cx(
                  "text-[16.5px] font-medium",
                  isOpen ? "text-[#B4924E]" : "text-[#16181D]",
                )}
              >
                {it.q}
              </span>
              <ChevronDown
                size={20}
                className={cx(
                  "shrink-0 transition-transform duration-300 text-[#B4924E]",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cx(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[15px] leading-relaxed text-[#5b564d] pr-8">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ===========================================================================
   Property gallery
   ========================================================================= */
export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const go = (d: number) =>
    setActive((a) => (a + d + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 md:h-[520px]">
        <button
          onClick={() => setLightbox(true)}
          className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group bg-[#ECE4D6] aspect-[4/3] md:aspect-auto"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </button>
        {images.slice(1, 5).map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i + 1);
              setLightbox(true);
            }}
            className="relative overflow-hidden rounded-xl group bg-[#ECE4D6] hidden md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} ${i + 2}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {i === 3 && (
              <span className="absolute inset-0 bg-[#0E1C30]/55 grid place-items-center text-white text-[14px] font-medium">
                +{images.length} photos
              </span>
            )}
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] bg-[#0E1C30]/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={42} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active]}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
          >
            <ChevronRight size={42} />
          </button>
          <div className="absolute bottom-5 text-white/70 text-[13px]">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

/* ===========================================================================
   Share button
   ========================================================================= */
export function ShareButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).catch(() => {});
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#16181D] hover:text-[#B4924E] transition-colors"
    >
      <Share2 size={16} /> {copied ? "Link copied" : "Share"}
    </button>
  );
}

/* ===========================================================================
   Map embed (Google, no API key)
   ========================================================================= */
export function MapEmbed({
  query,
  className,
}: {
  query: string;
  className?: string;
}) {
  return (
    <iframe
      title={`Map of ${query}`}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
      loading="lazy"
      className={cx("w-full border-0", className)}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

/* ===========================================================================
   CTA section
   ========================================================================= */
export function CTASection({
  eyebrow = "Let's talk",
  title,
  sub,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-[#0E1C30] text-white">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #B4924E 0, transparent 45%), radial-gradient(circle at 80% 70%, #C9A96A 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-28 text-center">
        <div className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9A96A] mb-4">
          {eyebrow}
        </div>
        <h2 className={cx(serifCls, "text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08]")}>
          {title}
        </h2>
        {sub && <p className="mt-5 text-[16px] text-white/70 max-w-xl mx-auto">{sub}</p>}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          {primary && (
            <Button href={primary.href} variant="gold" size="lg">
              {primary.label} <ArrowRight size={17} />
            </Button>
          )}
          {secondary && (
            <Button href={secondary.href} variant="white" size="lg">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Footer
   ========================================================================= */
export function Footer() {
  const areas = [
    "Chino Hills",
    "Irvine",
    "Claremont",
    "Rancho Cucamonga",
    "Diamond Bar",
    "Orange County",
  ];
  const quick = [
    ["Buy a Home", "/realty/buy"],
    ["Sell a Home", "/realty/sell"],
    ["All Listings", "/realty/listings"],
    ["Our Agents", "/realty/agents"],
    ["About Us", "/realty/about"],
    ["Resources", "/realty/resources"],
  ];
  const socials = [
    [Instagram, company.social.instagram],
    [Facebook, company.social.facebook],
    [Linkedin, company.social.linkedin],
    [Youtube, company.social.youtube],
  ] as const;

  return (
    <footer className="bg-[#0E1C30] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <Logo light />
            <p className="mt-5 text-[14px] leading-relaxed text-white/60 max-w-xs">
              A boutique brokerage helping buyers, sellers, and investors across
              the Inland Empire and Orange County find their place — with local
              expertise and honest guidance.
            </p>
            <div className="mt-6 space-y-2 text-[14px] text-white/70">
              <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-[#C9A96A]">
                <Phone size={15} className="text-[#C9A96A]" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-[#C9A96A]">
                <Mail size={15} className="text-[#C9A96A]" /> {company.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#C9A96A] mt-0.5" />
                <span>
                  {company.address}
                  <br />
                  {company.city}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#C9A96A] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              {quick.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#C9A96A] mb-4">
              Areas Served
            </h4>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              {areas.map((a) => (
                <li key={a}>
                  <Link
                    href="/realty/neighborhoods"
                    className="hover:text-white transition-colors"
                  >
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#C9A96A] mb-4">
              Market Updates
            </h4>
            <p className="text-[14px] text-white/60 mb-4">
              Join our newsletter for new listings and local market insights.
            </p>
            <NewsletterForm />
            <div className="flex gap-3 mt-6">
              {socials.map(([Icon, href], i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#C9A96A] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10">
          <p className="text-[12px] leading-relaxed text-white/45 max-w-4xl">
            {company.brokerage} · {company.license}. Crestline Realty Group is a
            fictional brokerage created for demonstration purposes. All listings,
            prices, agents, and testimonials shown are sample content. Equal Housing
            Opportunity. Information deemed reliable but not guaranteed.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12.5px] text-white/55">
            <div>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </div>
            <div className="flex gap-5">
              <Link href="/realty/contact" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/realty/contact" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="/realty/contact" className="hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===========================================================================
   Small shared bits
   ========================================================================= */
export function PageHero({
  image,
  eyebrow,
  title,
  sub,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-[#0E1C30]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C30] via-[#0E1C30]/40 to-[#0E1C30]/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 md:pt-44 md:pb-20 text-white">
        {eyebrow && (
          <div className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9A96A] mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className={cx(serifCls, "text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.04] max-w-3xl")}>
          {title}
        </h1>
        {sub && <p className="mt-5 text-[17px] text-white/75 max-w-2xl leading-relaxed">{sub}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Timeline({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E4DCCD] md:left-1/2" />
      <div className="space-y-8 md:space-y-0">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div
              className={cx(
                "relative flex gap-5 md:grid md:grid-cols-2 md:gap-12 md:py-6",
                i % 2 === 1 && "md:[&>*:first-child]:order-2",
              )}
            >
              <div
                className={cx(
                  "absolute left-0 md:left-1/2 md:-translate-x-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#B4924E] text-white font-semibold text-[15px] z-10 ring-4 ring-white",
                )}
              >
                {i + 1}
              </div>
              <div className={cx("hidden md:block", i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16")} />
              <div
                className={cx(
                  "pl-14 md:pl-0",
                  i % 2 === 0 ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:row-start-1 md:text-right md:pr-16",
                )}
              >
                <h3 className={cx(serifCls, "text-[22px] font-semibold text-[#16181D]")}>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#5b564d]">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export { agents };
