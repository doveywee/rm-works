import {
  Camera,
  Sofa,
  Globe,
  Share2,
  DoorOpen,
  Handshake,
} from "lucide-react";
import { recentSales, testimonials } from "../data";
import {
  PageHero,
  Timeline,
  SectionHeading,
  ValuationForm,
  PropertyCard,
  TestimonialCard,
  Reveal,
  CTASection,
  StatsBand,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=2000&q=80";

const steps = [
  { title: "Free valuation & strategy", body: "We assess your home and the market, then build a pricing and prep plan designed to maximize your net proceeds." },
  { title: "Prep, stage & shoot", body: "Light repairs, professional staging, and magazine-quality photography, video, and floor plans to make your home shine." },
  { title: "Launch & market", body: "Your home goes live across the MLS, top portals, social media, and our buyer network with a coordinated launch." },
  { title: "Showings & open houses", body: "We manage all showings and host high-traffic open houses, gathering feedback at every step." },
  { title: "Negotiate offers", body: "We field and negotiate offers to get you the best price and terms — and the cleanest path to closing." },
  { title: "Close with confidence", body: "We handle escrow, disclosures, and deadlines so you can move forward stress-free." },
];

const marketing = [
  { icon: Camera, title: "Professional Photography", body: "HDR photos, drone, twilight, and video tours that stop the scroll and pull in buyers." },
  { icon: Sofa, title: "Staging & Styling", body: "Expert staging and styling consults that help buyers fall in love and pay more." },
  { icon: Globe, title: "Maximum Online Exposure", body: "MLS plus Zillow, Realtor.com, Redfin, and our own high-traffic site — everywhere buyers look." },
  { icon: Share2, title: "Social Media Marketing", body: "Targeted Instagram, Facebook, and YouTube campaigns that reach qualified local buyers." },
  { icon: DoorOpen, title: "Open Houses", body: "Broker previews and well-promoted public open houses that drive competitive demand." },
  { icon: Handshake, title: "Negotiation Strategy", body: "Eighteen years of dealmaking working to protect your bottom line on every term." },
];

const sellerStats = [
  { value: 99, suffix: "%", label: "Of list price, on average" },
  { value: 21, suffix: " days", label: "Average days on market" },
  { value: 1480, suffix: "+", label: "Homes sold" },
  { value: 4.9, suffix: "/5", label: "Seller rating", decimals: 1 },
] as const;

export default function SellPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="For Sellers"
        title="Sell for more, with less stress"
        sub="A full-service marketing machine, expert staging, and a negotiator who's closed over $1B in homes — all working to get you top dollar."
      />

      {/* Valuation form */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Start Here"
              title="What's your home worth?"
              sub="Get a free, no-obligation valuation from a local expert. We'll send a detailed estimate based on real comparable sales and current demand in your neighborhood — usually within one business day."
            />
            <div className="mt-10">
              <StatsBand items={sellerStats} light={false} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl p-7 md:p-9">
              <h3 className={cx(serifCls, "text-[26px] font-semibold text-[#16181D] mb-1")}>
                Free Home Valuation
              </h3>
              <p className="text-[13.5px] text-[#8a8170] mb-6">
                No obligation, no spam — just an honest number.
              </p>
              <ValuationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="The Selling Process"
              title="From listing to closing, handled"
            />
          </Reveal>
          <div className="mt-16">
            <Timeline steps={steps} />
          </div>
        </div>
      </section>

      {/* Marketing plan */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Our Marketing Plan"
              title="A modern marketing plan for every home"
              sub="We don't just list your home — we launch it. Here's how we get your property in front of the most qualified buyers."
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {marketing.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.07}>
                <div className="bg-white border border-[#EAE3D6] rounded-xl p-7 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-[#F4EFE7] text-[#B4924E]">
                    <m.icon size={22} />
                  </div>
                  <h3 className={cx(serifCls, "mt-4 text-[22px] font-semibold text-[#16181D]")}>
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5b564d]">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recently sold */}
      <section className="bg-[#0E1C30] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Recently Sold"
              title="Homes we've sold for happy sellers"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {recentSales.map((l) => (
              <PropertyCard key={l.id} l={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Seller testimonials */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading center eyebrow="Seller Stories" title="Sellers love working with us" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials
              .filter((t) => t.role.toLowerCase().includes("seller"))
              .concat(testimonials.filter((t) => !t.role.toLowerCase().includes("seller")))
              .slice(0, 3)
              .map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Curious?"
        title="Find out what your home is worth"
        sub="It takes less than a minute and there's zero obligation. Let's see what the market will pay for your home today."
        primary={{ label: "Get My Free Valuation", href: "/realty/contact" }}
        secondary={{ label: "See Recent Sales", href: "/realty/listings" }}
      />
    </>
  );
}
