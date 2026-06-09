"use client";

import Link from "next/link";
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
  ShieldCheck,
  PiggyBank,
  LineChart,
  Building2,
  HeartPulse,
  Briefcase,
  ArrowRight,
  Check,
  ChevronDown,
  Quote,
  GraduationCap,
  Users,
  Clock,
  HandHeart,
} from "lucide-react";

/* ===========================================================================
   Chantelle Peden Hunt, MBA — Licensed Agent with New York Life
   ----------------------------------------------------------------------------
   Palette: white · ink #16202B · navy #0F2A43 · gold #BD9B5A
            sand #F7F2E9 · green #245C46 · muted #5A6B7A
   ========================================================================= */

export const cx = (...c: (string | false | undefined | null)[]) =>
  c.filter(Boolean).join(" ");

const serif = "[font-family:var(--font-serif-p)]";

const GOLD = "#BD9B5A";

/* Unsplash helper — warm, community & family lifestyle imagery (no portraits). */
const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ---- Brand social icons (lucide build dropped brand glyphs) --------------- */
type IconProps = { size?: number; className?: string };
const svgBase = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});
const Instagram = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Facebook = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Linkedin = ({ size = 18, className }: IconProps) => (
  <svg {...svgBase(size)} className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Yelp = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M12.4 2.1c.9-.2 1.6.5 1.6 1.4l.2 7.3c0 1.1-1.4 1.6-2.1.8L8.6 8.2c-.5-.6-.4-1.5.3-1.9l3.5-4.2zM7.5 12.7l3.4-.6c1-.2 1.7 1 1.1 1.8l-2.2 2.9c-.6.8-1.9.4-2-.6l-.6-2.4c-.1-.6.3-1 .9-1.1zm5.6 1.9c.6-.7 1.8-.3 1.9.7l.5 3.5c.1.9-.8 1.6-1.6 1.2l-3.1-1.5c-.9-.4-.9-1.6-.1-2.1l2.5-1.8zm5-2.6 3 1.9c.8.5.6 1.7-.3 1.9l-3.4.7c-1 .2-1.8-.9-1.2-1.7l1.6-2.4c.2-.4.7-.5 1.1-.3zm-.2-2.1-3.4.9c-1 .3-1.8-.8-1.2-1.7l3.6-5.1c.5-.7 1.6-.5 1.9.3l1 3.4c.3.9-.4 1.8-1.3 1.9z" />
  </svg>
);

const SOCIALS = [
  { Icon: Yelp, label: "Yelp", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who I Help", href: "#who" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ===========================================================================
   Motion helpers
   ========================================================================= */
function Reveal({
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

/* Small reusable eyebrow label */
function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em]",
        light ? "text-[#BD9B5A]" : "text-[#A8853F]"
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

/* ===========================================================================
   Logo
   ========================================================================= */
function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="#home" className="flex items-center gap-3 group">
      <span className="relative grid place-items-center h-10 w-10 rounded-xl bg-[#0F2A43] ring-1 ring-[#BD9B5A]/40 shadow-sm">
        <ShieldCheck size={20} className="text-[#BD9B5A]" />
      </span>
      <span className="leading-tight">
        <span
          className={cx(
            serif,
            "block text-[17px] font-semibold tracking-tight",
            light ? "text-white" : "text-[#0F2A43]"
          )}
        >
          Chantelle Peden Hunt, <span className="text-[#BD9B5A]">MBA</span>
        </span>
        <span
          className={cx(
            "block text-[11px] font-medium uppercase tracking-[0.16em]",
            light ? "text-white/60" : "text-[#5A6B7A]"
          )}
        >
          Licensed Agent · New York Life
        </span>
      </span>
    </Link>
  );
}

/* ===========================================================================
   Navbar
   ========================================================================= */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#0F2A43]/8 shadow-[0_2px_20px_-12px_rgba(15,42,67,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-[#3A4754] transition-colors hover:text-[#0F2A43]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0F2A43] hover:text-[#A8853F]"
          >
            <Phone size={15} />
            (000) 000-0000
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F2A43] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#0A1F33] hover:shadow-md"
          >
            Request a Quote
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-[#0F2A43] lg:hidden"
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
            className="lg:hidden border-t border-[#0F2A43]/8 bg-white"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#3A4754] hover:bg-[#F7F2E9]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0F2A43] px-5 py-3 text-[15px] font-semibold text-white"
              >
                Request a Quote <ArrowRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===========================================================================
   Hero
   ========================================================================= */
export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0F2A43] pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* background image + wash */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("1511895426328-dc8714191300", 1900)}
          alt=""
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A43] via-[#0F2A43]/95 to-[#0A1F33]/90" />
        <div
          className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
          style={{ background: GOLD }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow light>Corona · Riverside · Inland Empire, CA</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className={cx(
                serif,
                "mt-5 text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-[3.6rem]"
              )}
            >
              Protecting What Matters Most —{" "}
              <span className="text-[#D8B978]">
                Your Family, Future, and Business.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">
              Chantelle Peden Hunt, MBA, Licensed Agent with New York Life,
              provides personalized insurance and financial strategies for
              individuals, families, and business owners across Corona,
              Riverside, and the Inland Empire.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#BD9B5A] px-7 py-3.5 text-[15px] font-semibold text-[#0F2A43] shadow-lg shadow-[#BD9B5A]/20 transition-all hover:bg-[#cda863] hover:shadow-xl"
              >
                Request a Quote <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Schedule a Consultation
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-white/65">
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={16} className="text-[#BD9B5A]" /> MBA ·
                Business &amp; Leadership
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#BD9B5A]" /> Licensed
                Agent, New York Life
              </span>
              <span className="inline-flex items-center gap-2">
                <HandHeart size={16} className="text-[#BD9B5A]" /> Personal,
                local guidance
              </span>
            </div>
          </Reveal>
        </div>

        {/* image card */}
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("1476703993599-0035a21b17a9", 1000)}
                alt="A parent and children at home, planning for the future"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F2E9]">
                  <HeartPulse size={18} className="text-[#245C46]" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold text-[#0F2A43]">
                    Coverage built around you
                  </p>
                  <p className="text-[12px] text-[#5A6B7A]">
                    Families · Professionals · Owners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===========================================================================
   Trust statement strip
   ========================================================================= */
export function TrustStatement() {
  return (
    <section className="bg-[#F7F2E9]">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <Quote size={34} className="mx-auto text-[#BD9B5A]" />
        </Reveal>
        <Reveal delay={0.05}>
          <p
            className={cx(
              serif,
              "mt-5 text-[1.6rem] font-medium leading-snug text-[#0F2A43] sm:text-[2rem]"
            )}
          >
            Insurance and financial planning can feel overwhelming. Chantelle
            helps simplify the process by taking time to understand your goals,
            explain your options, and create strategies designed around your
            life, family, and future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ===========================================================================
   About
   ========================================================================= */
const ABOUT_POINTS = [
  {
    Icon: GraduationCap,
    title: "MBA & business background",
    copy: "Years in business, leadership, customer service, and mentoring inform how she guides every conversation.",
  },
  {
    Icon: Users,
    title: "Built for real people",
    copy: "She works with individuals, families, and business owners — meeting you where you are.",
  },
  {
    Icon: HandHeart,
    title: "Clear, honest education",
    copy: "Chantelle explains your insurance and financial options simply, so you can decide with confidence.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#0F2A43]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("1521791136064-7986c2920216", 1100)}
                alt="A warm handshake — building a relationship of trust"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-[#BD9B5A] px-5 py-4 text-[#0F2A43] shadow-xl sm:block">
              <p className={cx(serif, "text-[2rem] font-bold leading-none")}>
                MBA
              </p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide">
                Licensed Agent
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow light>About Chantelle</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={cx(
                serif,
                "mt-4 text-[2.1rem] font-semibold leading-tight text-white sm:text-[2.6rem]"
              )}
            >
              A trusted, local guide for your financial future.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-white/75">
              <p>
                Chantelle Peden Hunt, MBA, is a Licensed Agent with New York
                Life serving individuals, families, and business owners
                throughout Corona, Riverside, and the Inland Empire. With a
                background in business, leadership, customer service, and
                mentoring, Chantelle is passionate about helping people
                understand their options and make confident decisions about
                their financial future.
              </p>
              <p>
                Her approach is personal, educational, and relationship-focused.
                She takes the time to understand what matters to you — your
                family, your goals, your business — and explains every option in
                plain language, building relationships that last well beyond a
                single policy.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {ABOUT_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.12 + i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p.Icon size={22} className="text-[#BD9B5A]" />
                  <h3 className="mt-3 text-[14px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Services (detailed)
   ========================================================================= */
type Service = {
  Icon: typeof ShieldCheck;
  title: string;
  copy: string;
  intro: string;
  points: string[];
  who: string;
};

const SERVICES: Service[] = [
  {
    Icon: ShieldCheck,
    title: "Life Insurance",
    copy: "Coverage built around the people who depend on you most.",
    intro:
      "Life insurance is one of the most meaningful ways to protect your family. Chantelle helps you understand how a policy can step in for your income and give your loved ones stability during a difficult time.",
    points: [
      "Income replacement so your family can keep their way of life",
      "Help with final expenses, debts, or a remaining mortgage",
      "A financial head start toward your children's future and education",
      "Term vs. permanent life insurance explained in plain language — term covers a set period (like 10, 20, or 30 years), while permanent is designed to last a lifetime and may build value over time",
    ],
    who: "Parents, primary earners, newlyweds, and anyone with people who count on them.",
  },
  {
    Icon: PiggyBank,
    title: "Retirement Planning",
    copy: "Look ahead with confidence and a plan that fits your life.",
    intro:
      "Retirement should feel like something to look forward to. Chantelle helps you think through where your income will come from and how to protect what you've worked hard to build.",
    points: [
      "Think through your retirement income and where it will come from",
      "Strategies focused on protecting what you've already saved",
      "Options that can complement a 401(k), IRA, or pension",
      "A steady emphasis on long-term stability and peace of mind",
    ],
    who: "Everyone from early-career savers to those approaching retirement.",
  },
  {
    Icon: LineChart,
    title: "Financial Strategies",
    copy: "Personalized guidance to build a stronger foundation.",
    intro:
      "Strong finances start with clarity. Chantelle takes time to understand your full picture, then helps you connect the pieces — protection, savings, and goals — into a strategy you actually understand.",
    points: [
      "A clear picture of where you are and where you'd like to go",
      "Guidance on protecting your income and your family",
      "Aligning insurance and savings with your real-life goals",
      "Education first — you make the decisions, at your own pace",
    ],
    who: "Individuals and families who want clarity and a plan they understand.",
  },
  {
    Icon: Building2,
    title: "Small Business Insurance",
    copy: "Protect your company, your team, and the family behind it.",
    intro:
      "Your business supports a lot of people. Chantelle helps small business owners put protection in place so a setback doesn't put everything you've built at risk.",
    points: [
      "Protection focused on keeping your business running",
      "Coverage considerations for owners and key people",
      "Options that can help you attract and protect employees",
      "Planning that's built to grow alongside your business",
    ],
    who: "Small business owners and the self-employed across Riverside County.",
  },
  {
    Icon: HeartPulse,
    title: "Health Insurance / Benefits",
    copy: "Understand your options with someone who explains them clearly.",
    intro:
      "Benefits can be confusing. Chantelle helps individuals, families, and small business owners cut through the noise and feel confident about the choices in front of them.",
    points: [
      "Guidance on benefit options for individuals and families",
      "Support for small business owners exploring employee benefits",
      "Plain-language answers to your coverage questions",
      "Help comparing options so you can choose with confidence",
    ],
    who: "Individuals, families, and small business owners weighing their options.",
  },
  {
    Icon: Briefcase,
    title: "Business Protection",
    copy: "Safeguard the owners, key people, and goals behind your company.",
    intro:
      "Behind every business are the people who make it work. Chantelle helps entrepreneurs plan for continuity so the company — and the people in it — are protected for the long term.",
    points: [
      "Protection strategies for owners and key contributors",
      "Planning for business continuity and succession",
      "Ways to help safeguard the people who drive your company",
      "Guidance tailored to entrepreneurs and growing teams",
    ],
    who: "Entrepreneurs, partners, and small business owners planning ahead.",
  },
];

function ServiceCard({ s, delay }: { s: Service; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        className={cx(
          "flex h-full flex-col rounded-2xl border bg-white p-7 transition-all",
          open
            ? "border-[#BD9B5A]/50 shadow-[0_18px_50px_-24px_rgba(15,42,67,0.4)]"
            : "border-[#0F2A43]/8 hover:border-[#BD9B5A]/40 hover:shadow-[0_18px_50px_-24px_rgba(15,42,67,0.4)]"
        )}
      >
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#0F2A43] text-[#BD9B5A]">
          <s.Icon size={22} />
        </span>
        <h3
          className={cx(
            serif,
            "mt-5 text-[1.35rem] font-semibold text-[#0F2A43]"
          )}
        >
          {s.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#5A6B7A]">
          {s.copy}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-[#0F2A43]/8 pt-5">
                <p className="text-[14px] leading-relaxed text-[#5A6B7A]">
                  {s.intro}
                </p>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#A8853F]">
                  How Chantelle can help
                </p>
                <ul className="mt-3 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#F7F2E9] text-[#245C46]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[14px] leading-relaxed text-[#3A4754]">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl bg-[#F7F2E9] px-4 py-3">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0F2A43]">
                    Who it&rsquo;s for ·{" "}
                  </span>
                  <span className="text-[13px] text-[#5A6B7A]">{s.who}</span>
                </div>
                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0F2A43] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[#0A1F33]"
                >
                  Request guidance <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-[#A8853F] transition-colors hover:text-[#0F2A43]"
          aria-expanded={open}
        >
          {open ? "Show less" : "Learn more"}
          <ChevronDown
            size={15}
            className={cx("transition-transform", open && "rotate-180")}
          />
        </button>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={cx(
                serif,
                "mt-4 text-[2.1rem] font-semibold leading-tight text-[#0F2A43] sm:text-[2.6rem]"
              )}
            >
              Thoughtful protection and planning, made personal.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5A6B7A]">
              From life insurance in Riverside to retirement planning in Corona
              and small business insurance across Riverside County, Chantelle
              helps you find the strategy that fits your life. Select{" "}
              <span className="font-semibold text-[#0F2A43]">Learn more</span> on
              any service to see how she can help.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={(i % 3) * 0.06} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0F2A43] px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className={cx(serif, "text-[1.4rem] font-semibold text-white")}>
                Not sure which fits your situation?
              </h3>
              <p className="mt-1.5 text-[15px] text-white/70">
                Let&rsquo;s talk it through together — no pressure, just clear
                answers.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#BD9B5A] px-6 py-3.5 text-[15px] font-semibold text-[#0F2A43] transition-all hover:bg-[#cda863]"
            >
              Request a consultation <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===========================================================================
   Who I Help
   ========================================================================= */
const WHO = [
  "Families who want protection",
  "Parents planning for their children's future",
  "Professionals building financial stability",
  "Business owners protecting their company",
  "Self-employed individuals",
  "People preparing for retirement",
  "People unsure what kind of insurance they need",
];

export function WhoIHelp() {
  return (
    <section id="who" className="relative overflow-hidden bg-[#245C46]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("1531983412531-1f49a365ffed", 1800)}
          alt=""
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#245C46] via-[#245C46]/95 to-[#1c4a37]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow light>Who I Help</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className={cx(
                  serif,
                  "mt-4 text-[2.1rem] font-semibold leading-tight text-white sm:text-[2.6rem]"
                )}
              >
                Real guidance for real people across the Inland Empire.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[16px] leading-relaxed text-white/75">
                Whether you&rsquo;re just starting a family, growing a business,
                or planning for retirement, Chantelle meets you where you are —
                with patience, clarity, and a plan that fits your life.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#BD9B5A] px-7 py-3.5 text-[15px] font-semibold text-[#0F2A43] shadow-lg transition-all hover:bg-[#cda863]"
              >
                Start the conversation <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {WHO.map((w, i) => (
                <Reveal key={w} delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#BD9B5A] text-[#0F2A43]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium text-white/90">
                      {w}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Quote / Consultation Form
   ========================================================================= */
const SERVICE_OPTIONS = [
  "Life Insurance",
  "Retirement Planning",
  "Financial Planning",
  "Small Business Insurance",
  "Health Insurance / Benefits",
  "Business Protection",
  "Not Sure Yet",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="bg-[#F7F2E9]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Request a Quote</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className={cx(
                  serif,
                  "mt-4 text-[2.1rem] font-semibold leading-tight text-[#0F2A43] sm:text-[2.6rem]"
                )}
              >
                Let&rsquo;s start the conversation.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5A6B7A]">
                Have questions about protecting your family, future, or
                business? Reach out to start the conversation — there&rsquo;s no
                obligation, just honest guidance built around your goals.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {[
                  { Icon: Clock, t: "Quick, friendly response" },
                  { Icon: HandHeart, t: "No-pressure, no-obligation" },
                  { Icon: MapPin, t: "Serving Corona, Riverside & the Inland Empire" },
                ].map(({ Icon, t }) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-[#245C46] shadow-sm">
                      <Icon size={17} />
                    </span>
                    <span className="text-[15px] text-[#3A4754]">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-[#0F2A43]/8 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,42,67,0.45)] sm:p-9"
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#245C46]/10 text-[#245C46]">
                    <Check size={30} strokeWidth={2.5} />
                  </span>
                  <h3
                    className={cx(
                      serif,
                      "mt-5 text-[1.5rem] font-semibold text-[#0F2A43]"
                    )}
                  >
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-[15px] text-[#5A6B7A]">
                    Your request has been received. Chantelle will reach out
                    personally to talk through your goals.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required>
                    <input
                      type="text"
                      name="name"
                      required
                      className={inputCls}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Email" name="email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      className={inputCls}
                      placeholder="jane@email.com"
                    />
                  </Field>
                  <Field label="Phone Number" name="phone">
                    <input
                      type="tel"
                      name="phone"
                      className={inputCls}
                      placeholder="(000) 000-0000"
                    />
                  </Field>
                  <Field label="City" name="city">
                    <input
                      type="text"
                      name="city"
                      className={inputCls}
                      placeholder="Corona, CA"
                    />
                  </Field>
                  <Field label="Service Interested In" name="service">
                    <div className="relative">
                      <select name="service" className={cx(inputCls, "appearance-none pr-10")}>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5A6B7A]"
                      />
                    </div>
                  </Field>
                  <Field label="Preferred Contact Method" name="contact">
                    <div className="relative">
                      <select
                        name="contact"
                        className={cx(inputCls, "appearance-none pr-10")}
                      >
                        <option>Email</option>
                        <option>Phone Call</option>
                        <option>Text Message</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5A6B7A]"
                      />
                    </div>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Message" name="message">
                      <textarea
                        name="message"
                        rows={4}
                        className={cx(inputCls, "resize-none")}
                        placeholder="Tell me a little about what you're looking for…"
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2A43] px-7 py-4 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-[#0A1F33] hover:shadow-xl sm:w-auto"
                    >
                      Request My Consultation <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-[#0F2A43]/15 bg-[#FBF9F4] px-4 py-3 text-[15px] text-[#16202B] outline-none transition-all placeholder:text-[#9aa6b1] focus:border-[#BD9B5A] focus:ring-2 focus:ring-[#BD9B5A]/20";

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-[#0F2A43]">
        {label}
        {required && <span className="text-[#BD9B5A]"> *</span>}
      </span>
      {children}
    </label>
  );
}

/* ===========================================================================
   FAQ
   ========================================================================= */
const FAQS = [
  {
    q: "Do I need life insurance?",
    a: "If anyone relies on your income — a spouse, children, aging parents, or business partners — life insurance can help protect them financially if something happens to you. Chantelle will help you think through your situation and whether coverage makes sense for you.",
  },
  {
    q: "How much life insurance should I have?",
    a: "It depends on your income, debts, family needs, and long-term goals. There's no single right answer, which is why Chantelle takes time to understand your circumstances before discussing options — never a one-size-fits-all number.",
  },
  {
    q: "What is the difference between term and permanent life insurance?",
    a: "In simple terms, term life insurance covers you for a set period (like 10, 20, or 30 years), while permanent life insurance is designed to last your lifetime and may build value over time. Chantelle can explain how each works so you can decide what fits — this is general education, not specific financial advice.",
  },
  {
    q: "Can business owners get insurance for themselves or employees?",
    a: "Yes. Business owners can explore options to protect themselves, key people, and employees, as well as strategies to support business continuity. Chantelle works with small business owners and the self-employed throughout Riverside County and the Inland Empire.",
  },
  {
    q: "Do you help with retirement planning?",
    a: "Absolutely. Chantelle helps individuals and families think through retirement income, protection, and long-term financial stability as part of a broader, personalized strategy.",
  },
  {
    q: "Is a consultation required before getting a quote?",
    a: "No, but a short conversation helps. Understanding your goals allows Chantelle to provide guidance and options that actually fit your needs — rather than a generic quote.",
  },
  {
    q: "What areas do you serve?",
    a: "Chantelle serves clients across Corona, Riverside, and the greater Inland Empire in Southern California, and can often assist neighboring communities as well.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={cx(
                serif,
                "mt-4 text-[2.1rem] font-semibold leading-tight text-[#0F2A43] sm:text-[2.6rem]"
              )}
            >
              Questions, answered simply.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-[#0F2A43]/8 rounded-2xl border border-[#0F2A43]/8 bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cx(
                      serif,
                      "text-[1.05rem] font-semibold text-[#0F2A43]"
                    )}
                  >
                    {f.q}
                  </span>
                  <span
                    className={cx(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all",
                      isOpen
                        ? "bg-[#0F2A43] text-[#BD9B5A] rotate-180"
                        : "bg-[#F7F2E9] text-[#0F2A43]"
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
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#5A6B7A]">
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
    </section>
  );
}

/* ===========================================================================
   Contact
   ========================================================================= */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0F2A43]">
      <div
        className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
        style={{ background: GOLD }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow light>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className={cx(
                  serif,
                  "mt-4 text-[2.3rem] font-semibold leading-tight text-white sm:text-[3rem]"
                )}
              >
                Start protecting what matters most today.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
                Reach out by phone, email, or the quote form. Chantelle proudly
                serves families, professionals, and business owners across
                Corona, Riverside, and the Inland Empire, California.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href="tel:+10000000000"
                  className="inline-flex items-center gap-2 rounded-full bg-[#BD9B5A] px-6 py-3.5 text-[15px] font-semibold text-[#0F2A43] transition-all hover:bg-[#cda863]"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  Request a Quote
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard Icon={Phone} label="Phone" value="(000) 000-0000" />
              <ContactCard
                Icon={Mail}
                label="Email"
                value="hello@example.com"
              />
              <ContactCard
                Icon={MapPin}
                label="Service Area"
                value="Corona · Riverside · Inland Empire, CA"
              />
              <ContactCard
                Icon={Clock}
                label="Availability"
                value="By appointment — flexible hours"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Connect
              </p>
              <div className="mt-4 flex gap-3">
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#BD9B5A]/50 hover:bg-[#BD9B5A] hover:text-[#0F2A43]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  Icon,
  label,
  value,
}: {
  Icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#BD9B5A]/15 text-[#BD9B5A]">
        <Icon size={18} />
      </span>
      <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
        {label}
      </p>
      <p className="mt-1 text-[15px] font-medium text-white">{value}</p>
    </div>
  );
}

/* ===========================================================================
   Footer (incl. compliance / disclaimer placeholders)
   ========================================================================= */
export function Footer() {
  return (
    <footer className="bg-[#0A1F33] text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
              Licensed Agent with New York Life, serving Corona, Riverside, and
              the Inland Empire. Personalized insurance and financial strategies
              for families, professionals, and business owners across Southern
              California.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 text-white/70 transition-all hover:border-[#BD9B5A]/50 hover:text-[#BD9B5A]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-[#BD9B5A]">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#quote" className="hover:text-[#BD9B5A]">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Service Areas
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/55">
              <li>Life insurance agent in Corona, CA</li>
              <li>Life insurance in Riverside, CA</li>
              <li>New York Life agent in the Inland Empire</li>
              <li>Retirement &amp; small business planning, Riverside County</li>
            </ul>
          </div>
        </div>

        {/* Compliance / disclaimer */}
        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-[12px] leading-relaxed text-white/40">
          <p className="font-semibold text-white/55">
            Disclaimer &amp; Compliance Notice
          </p>
          <p className="mt-2">
            [Placeholder — to be reviewed and approved by Chantelle and/or New
            York Life compliance before publishing.] Chantelle Peden Hunt is a
            Licensed Agent. This website is for general informational purposes
            only and does not constitute financial, tax, legal, or investment
            advice, nor an offer or solicitation in any jurisdiction where she
            is not licensed. Insurance and financial products are subject to
            eligibility, underwriting, terms, and conditions. No specific
            results, returns, or outcomes are guaranteed. Guarantees are based on
            the claims-paying ability of the issuer. Please consult a qualified
            professional regarding your individual situation. Product and company
            names referenced are placeholders pending review.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-[13px] text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Chantelle Peden Hunt, MBA · Licensed
            Agent with New York Life.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#BD9B5A]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#BD9B5A]">
              Terms
            </a>
            <a href="#" className="hover:text-[#BD9B5A]">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
