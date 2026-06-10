"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, MapPin, X } from "lucide-react";

/* Brand glyphs (lucide build here ships no brand icons) */
function IgGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FbGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5V7c0-.7.5-1 1-1h1.5V3H14c-2.2 0-3.5 1.4-3.5 3.6V8.5H8.5v3h2V21h3.5v-9.5H17l.5-3H14Z" />
    </svg>
  );
}

/* ===========================================================================
   Brand constants (all real, sourced from sanamluangclaremont.com)
   ========================================================================= */
export const slc = {
  name: "Sanamluang",
  full: "Sanamluang Thai Cuisine",
  address: "710 South Indian Hill Blvd., Claremont, CA 91711",
  addressShort: "710 S. Indian Hill Blvd.",
  city: "Claremont, CA 91711",
  tel: "(909) 621-0904",
  telHref: "tel:+19096210904",
  hoursLine: "Open Daily · 11:00 AM – 10:00 PM",
  hoursShort: "11 AM – 10 PM",
  rating: "4.4",
  google: "https://maps.app.goo.gl/XuZ2YKCZgcTFcyAv5",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Sanamluang Thai Cuisine, 710 South Indian Hill Blvd., Claremont, CA 91711"
    ),
  instagram: "https://instagram.com/sanamluang_Claremont/",
  facebook: "https://www.facebook.com/Sanamluang.Claremont",
  yelp: "https://www.yelp.com/biz/sanamluang-thai-cuisine-claremont",
};

export const A = "/sanamluang-assets";

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* ===========================================================================
   Lotus mark — a small Thai-inspired SVG ornament
   ========================================================================= */
export function Lotus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 41c-7-2.5-12-7.5-12-13 3 .2 6 1 8.6 2.6" />
        <path d="M24 41c7-2.5 12-7.5 12-13-3 .2-6 1-8.6 2.6" />
        <path d="M24 41c-3-3.5-4.7-8-4.7-13.2 0-4 1.7-8.2 4.7-11.8 3 3.6 4.7 7.8 4.7 11.8C28.7 33 27 37.5 24 41Z" />
        <path d="M24 41c-1.6-3.4-2-7-1.2-10.6M24 41c1.6-3.4 2-7 1.2-10.6" />
      </g>
    </svg>
  );
}

/* Thin double gold rule with a centered lotus */
export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={cx("flex items-center gap-3 text-[#C8A24C]", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A24C]/50" />
      <Lotus className="h-4 w-4 shrink-0 opacity-80" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A24C]/50" />
    </div>
  );
}

/* Centered section divider — the gold rule with the lotus, used to open
   every content section in place of a text kicker. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cx("mx-auto w-full max-w-2xl", className)}>
      <GoldRule />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.34em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
      <span className="h-px w-6 bg-[#C8A24C]/60" />
      {children}
    </span>
  );
}

/* ===========================================================================
   Reveal — scroll-in animation
   ========================================================================= */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ===========================================================================
   Buttons
   ========================================================================= */
export function GoldButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A24C] px-7 py-3 text-sm font-medium tracking-wide text-[#14100B] transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#E0BC6A] hover:shadow-[0_14px_40px_-16px_rgba(200,162,76,0.8)] active:scale-[0.97]",
        className
      )}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A24C]/40 px-7 py-3 text-sm font-medium tracking-wide text-[#EFE6D4] transition-[transform,border-color,background-color] duration-200 hover:border-[#C8A24C] hover:bg-[#C8A24C]/10 active:scale-[0.97]",
        className
      )}
    >
      {children}
    </a>
  );
}

/* ===========================================================================
   Navigation
   ========================================================================= */
const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Specialty", href: "#specialty" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-[#C8A24C]/15 bg-[#14100B]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Lotus className="h-7 w-7 text-[#C8A24C]" />
          <span className="text-xl tracking-wide text-[#EFE6D4] [font-family:var(--font-slc-display)]">
            Sanamluang
            <span className="ml-1.5 text-[0.62rem] uppercase tracking-[0.26em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
              Thai Cuisine
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.82rem] uppercase tracking-[0.18em] text-[#EFE6D4]/75 transition-colors duration-200 hover:text-[#C8A24C]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={slc.telHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#C8A24C] px-4 py-2 text-[0.82rem] font-medium text-[#14100B] transition-[transform,background-color] duration-200 hover:bg-[#E0BC6A] active:scale-[0.97]"
          >
            <Phone className="h-3.5 w-3.5" /> {slc.tel}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-[#C8A24C] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#C8A24C]/15 bg-[#14100B]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.16em] text-[#EFE6D4]/80 hover:bg-[#C8A24C]/10 hover:text-[#C8A24C]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={slc.telHref}
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-[#C8A24C] px-3 py-3 text-sm font-medium text-[#14100B]"
              >
                <Phone className="h-4 w-4" /> {slc.tel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

/* ===========================================================================
   Map (keyless Google Maps embed)
   ========================================================================= */
export function MapEmbed({ className }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    `${slc.full}, ${slc.address}`
  )}&z=15&output=embed`;
  return (
    <iframe
      title={`Map to ${slc.full}`}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cx("block h-full w-full border-0", className)}
    />
  );
}

/* ===========================================================================
   Lightbox — view a full menu image
   ========================================================================= */
export function Lightbox({
  src,
  label,
  onClose,
}: {
  src: string | null;
  label: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (src) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0B0805]/92 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="mb-3 flex w-full max-w-3xl items-center justify-between">
            <span className="text-sm uppercase tracking-[0.28em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
              {label}
            </span>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A24C]/40 text-[#C8A24C] transition-colors hover:bg-[#C8A24C]/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.img
            key={src}
            src={src}
            alt={`${label} menu`}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[82vh] w-auto max-w-3xl rounded-md object-contain shadow-2xl ring-1 ring-[#C8A24C]/25"
          />
          <p className="mt-3 text-xs text-[#EFE6D4]/45">Tap anywhere to close</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===========================================================================
   Footer
   ========================================================================= */
export function Footer() {
  return (
    <footer className="border-t border-[#C8A24C]/15 bg-[#0F0C08]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Lotus className="h-8 w-8 text-[#C8A24C]" />
              <span className="text-2xl text-[#EFE6D4] [font-family:var(--font-slc-display)]">
                Sanamluang
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#EFE6D4]/55">
              Authentic Thai cooking in the heart of Claremont. Noodles are the
              specialty.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href={slc.instagram} label="Instagram">
                <IgGlyph className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={slc.facebook} label="Facebook">
                <FbGlyph className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={slc.yelp} label="Yelp">
                <span className="text-[0.62rem] font-bold tracking-wide">YELP</span>
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.28em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
              Visit
            </h4>
            <a
              href={slc.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-[#EFE6D4]/70 transition-colors hover:text-[#C8A24C]"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A24C]/70" />
              {slc.address}
            </a>
            <a
              href={slc.telHref}
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#EFE6D4]/70 hover:text-[#C8A24C]"
            >
              <Phone className="h-4 w-4 text-[#C8A24C]/70" /> {slc.tel}
            </a>
          </div>

          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.28em] text-[#C8A24C] [font-family:var(--font-slc-caps)]">
              Hours
            </h4>
            <div className="mt-4 text-sm text-[#EFE6D4]/70">
              <span className="block text-[#EFE6D4]/90">Open Daily</span>
              <span className="block text-[#EFE6D4]/55">
                11:00 AM – 10:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-[#C8A24C]/10 pt-6 text-center text-xs text-[#EFE6D4]/40 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Sanamluang Thai Cuisine · Claremont, CA
          </span>
          <span>Open daily · {slc.tel}</span>
          <a
            href="https://rmworks.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A24C]"
          >
            Web Design by RMWorks
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A24C]/30 text-[#C8A24C] transition-[transform,background-color,border-color] duration-200 hover:border-[#C8A24C] hover:bg-[#C8A24C]/10 active:scale-95"
    >
      {children}
    </a>
  );
}
