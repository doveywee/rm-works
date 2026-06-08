import Link from "next/link";
import {
  Search,
  TrendingUp,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  stats,
  featured,
  agents,
  neighborhoods,
  recentSales,
  testimonials,
  posts,
} from "./data";
import {
  SearchBar,
  PropertyCard,
  AgentCard,
  NeighborhoodCard,
  BlogCard,
  TestimonialCard,
  StatsBand,
  ValuationForm,
  SectionHeading,
  Reveal,
  Button,
  CTASection,
} from "./components";
import { cx, serifCls } from "./ui";

const HERO_IMG =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80";

const services = [
  {
    icon: Search,
    title: "Buy",
    body: "From first homes to forever homes, we help you search smart, tour with ease, and win the right house at the right price.",
    href: "/realty/buy",
    cta: "Start your search",
  },
  {
    icon: TrendingUp,
    title: "Sell",
    body: "Full-service marketing, expert staging, and sharp negotiation to sell your home faster and for top dollar.",
    href: "/realty/sell",
    cta: "Get your home's value",
  },
  {
    icon: Building2,
    title: "Invest",
    body: "Build and grow a real estate portfolio with data-driven guidance on rentals, multi-family, and 1031 exchanges.",
    href: "/realty/contact",
    cta: "Talk to an advisor",
  },
];

export default function Home() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="relative min-h-[100svh] flex items-center bg-[#0E1C30]">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMG} alt="Luxury California home at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1C30] via-[#0E1C30]/45 to-[#0E1C30]/65" />
        </div>

        <div className="relative w-full mx-auto max-w-7xl px-5 pt-32 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.2em] uppercase text-[#C9A96A] mb-5">
              <span className="w-8 h-px bg-[#C9A96A]" /> Inland Empire & Orange County
            </div>
            <h1 className={cx(serifCls, "text-white text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.02]")}>
              Find Your Next Home With Trusted Local Experts
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-white/80 max-w-xl">
              Crestline Realty Group helps buyers, sellers, and investors make
              confident moves — backed by 18 years of local market knowledge and a
              team that treats your goals as our own.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/realty/listings" variant="gold" size="lg">
                Search Homes <ArrowRight size={17} />
              </Button>
              <Button href="/realty/sell" variant="white" size="lg">
                Get Home Valuation
              </Button>
              <Button href="/realty/agents" variant="outline" size="lg" className="!border-white/40 !text-white hover:!border-[#C9A96A] hover:!text-[#C9A96A]">
                Contact an Agent
              </Button>
            </div>
          </div>

          <div className="mt-10 max-w-5xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* ---- Stats strip --------------------------------------------------- */}
      <section className="bg-[#0E1C30] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <StatsBand items={stats} />
        </div>
      </section>

      {/* ---- Featured listings -------------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <SectionHeading
                eyebrow="Featured Homes"
                title="Handpicked listings across the region"
                sub="A curated selection of our newest and most distinctive homes for sale."
              />
              <Button href="/realty/listings" variant="outline">
                View all listings <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 0.08}>
                <PropertyCard l={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Services ------------------------------------------------------ */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="How We Help"
              title="Whatever your move, we've done it hundreds of times"
              sub="Buyers, sellers, and investors all get the same thing: a knowledgeable local team in your corner from first call to closing."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="group block bg-white rounded-xl p-8 h-full border border-[#EAE3D6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-13 h-13 grid place-items-center rounded-xl bg-[#0E1C30] text-[#C9A96A] p-3.5">
                    <s.icon size={24} />
                  </div>
                  <h3 className={cx(serifCls, "mt-5 text-[28px] font-semibold text-[#16181D]")}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#5b564d]">{s.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#B4924E]">
                    {s.cta}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Valuation ----------------------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="For Sellers"
              title="What's your home worth in today's market?"
              sub="Get a complimentary, no-obligation valuation prepared by a local expert — not a generic algorithm. We'll factor in your home's condition, recent comparable sales, and current demand in your specific neighborhood."
            />
            <ul className="mt-7 space-y-3">
              {[
                "A real human analysis, not just an automated estimate",
                "Recent comparable sales in your exact neighborhood",
                "A pricing & prep strategy to maximize your sale",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#3a3630]">
                  <CheckCircle2 size={20} className="text-[#B4924E] shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl p-7 md:p-9">
              <h3 className={cx(serifCls, "text-[26px] font-semibold text-[#16181D] mb-1")}>
                Free Home Valuation
              </h3>
              <p className="text-[13.5px] text-[#8a8170] mb-6">
                Takes less than a minute.
              </p>
              <ValuationForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Team preview -------------------------------------------------- */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <SectionHeading
                eyebrow="Meet The Team"
                title="Local experts who actually live here"
                sub="A small, senior team that knows these streets, schools, and markets inside out."
              />
              <Button href="/realty/agents" variant="outline">
                Meet everyone <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 0.06}>
                <AgentCard a={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Neighborhoods ------------------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Neighborhoods"
              title="The communities we know and love"
              sub="Explore the cities we serve across the Inland Empire and Orange County."
            />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {neighborhoods.map((n, i) => (
              <Reveal key={n.slug} delay={(i % 3) * 0.06}>
                <NeighborhoodCard n={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Recent sales -------------------------------------------------- */}
      <section className="bg-[#0E1C30] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Recent Sales"
              title="Results that speak for themselves"
              sub="A few of the homes we've recently closed for happy sellers and buyers."
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {recentSales.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 0.08}>
                <PropertyCard l={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Testimonials -------------------------------------------------- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Client Stories"
              title="Trusted by families across the region"
              sub="We're proud of a 4.9-star average rating and hundreds of five-star reviews."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Blog ---------------------------------------------------------- */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <SectionHeading
                eyebrow="Resources"
                title="Guides & local market insight"
                sub="Straightforward answers to the questions buyers and sellers ask us most."
              />
              <Button href="/realty/resources" variant="outline">
                Read the blog <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <BlogCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Final CTA ----------------------------------------------------- */}
      <CTASection
        eyebrow="Ready when you are"
        title="Let's find your next move."
        sub="Whether you're buying, selling, or just exploring, schedule a free, no-pressure consultation with a local Crestline expert."
        primary={{ label: "Schedule a Consultation", href: "/realty/contact" }}
        secondary={{ label: "Browse Listings", href: "/realty/listings" }}
      />
    </>
  );
}
