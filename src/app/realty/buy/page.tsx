import { Download, Search, FileText } from "lucide-react";
import { posts, featured } from "../data";
import {
  PageHero,
  Timeline,
  SectionHeading,
  FAQAccordion,
  BlogCard,
  PropertyCard,
  ValuationForm,
  Button,
  Reveal,
  CTASection,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=80";

const steps = [
  { title: "Get pre-approved", body: "We connect you with trusted local lenders so you know your budget and shop with confidence — and a stronger offer." },
  { title: "Start your search", body: "Tell us your must-haves. We set up custom alerts and surface homes the moment they list, sometimes before they hit the public sites." },
  { title: "Tour homes", body: "Private and weekend showings on your schedule, with honest guidance on each home's value and condition." },
  { title: "Make an offer", body: "We craft a competitive, data-backed offer and negotiate hard on price, terms, and contingencies to protect you." },
  { title: "Inspection & appraisal", body: "We coordinate inspections and the appraisal, then renegotiate repairs or credits when issues surface." },
  { title: "Close & get keys", body: "We manage the paperwork, deadlines, and final walkthrough so closing day is smooth — and exciting." },
];

const faqs = [
  { q: "How much do I need for a down payment?", a: "It depends on your loan. Conventional loans can go as low as 3–5% down, FHA as low as 3.5%, and some VA and first-time buyer programs require nothing down. We'll connect you with a lender to find the right fit." },
  { q: "Does it cost me anything to work with a buyer's agent?", a: "In most transactions the buyer's agent commission is addressed in the deal structure. We'll walk you through exactly how it works for your situation up front — no surprises." },
  { q: "How long does buying a home take?", a: "From accepted offer to keys is typically 30–45 days. The search itself varies — some buyers find the one in a weekend, others take a few months. We move at your pace." },
  { q: "What credit score do I need?", a: "Many conventional loans look for 620+, FHA can go lower, and a higher score earns you a better rate. We can point you to quick wins to raise your score before applying." },
  { q: "Should I buy now or wait?", a: "The 'right time' is personal — it depends on your finances, how long you'll stay, and local inventory. We'll give you an honest read on the market and your numbers, with zero pressure." },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="For Buyers"
        title="Buy with a team that has your back"
        sub="From pre-approval to keys in hand, we make buying a home clear, calm, and even enjoyable — and we fight to get you the right home at the right price."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/realty/listings" variant="gold" size="lg">
            Search Homes <Search size={16} />
          </Button>
          <Button href="/realty/contact" variant="white" size="lg">
            Talk to a Buyer’s Agent
          </Button>
        </div>
      </PageHero>

      {/* Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="The Buyer's Journey"
              title="Six steps from searching to settled"
              sub="You'll always know what's happening next — we keep the whole process organized for you."
            />
          </Reveal>
          <div className="mt-16">
            <Timeline steps={steps} />
          </div>
        </div>
      </section>

      {/* Guide download + resources */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Free Download"
              title="The 2026 Home Buyer's Guide"
              sub="Our 24-page guide breaks down every step, every cost, and every insider tip for buying in today's market. Get your free copy instantly."
            />
            <ul className="mt-6 space-y-3">
              {[
                "A complete cost breakdown — including closing costs",
                "How to win in a multiple-offer situation",
                "Loan types and programs explained simply",
                "A move-in checklist and timeline",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#3a3630]">
                  <FileText size={18} className="text-[#B4924E] shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-[#E4DCCD] rounded-2xl p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 grid place-items-center rounded-lg bg-[#0E1C30] text-[#C9A96A]">
                  <Download size={20} />
                </div>
                <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D]")}>
                  Get the free guide
                </h3>
              </div>
              <ValuationForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured homes */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <SectionHeading eyebrow="Start Browsing" title="Homes you might love" />
              <Button href="/realty/listings" variant="outline">
                View all listings
              </Button>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 3).map((l) => (
              <PropertyCard key={l.id} l={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading center eyebrow="Buyer Resources" title="Read before you buy" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {posts.filter((p) => p.category === "Buying").slice(0, 3).map((p) => (
              <BlogCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <SectionHeading center eyebrow="FAQ" title="Buyer questions, answered" className="mb-12" />
          </Reveal>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="No pressure, ever"
        title="Book a free buyer consultation"
        sub="Twenty minutes with a local expert to map out your search, budget, and timeline."
        primary={{ label: "Schedule a Consultation", href: "/realty/contact" }}
        secondary={{ label: "Browse Homes", href: "/realty/listings" }}
      />
    </>
  );
}
