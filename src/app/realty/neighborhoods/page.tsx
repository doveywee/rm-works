import {
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  Car,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { neighborhoods } from "../data";
import {
  PageHero,
  Reveal,
  Button,
  CTASection,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000&q=80";

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="Neighborhoods"
        title="Explore the communities we serve"
        sub="Every neighborhood has its own character, schools, and lifestyle. Here's an honest, local look at the places we know best."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 space-y-10">
          {neighborhoods.map((n, i) => (
            <Reveal key={n.slug}>
              <article
                id={n.slug}
                className="scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl overflow-hidden"
              >
                <div className={cx("relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]", i % 2 === 1 && "lg:order-2")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={n.image} alt={n.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h2 className={cx(serifCls, "text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold text-[#16181D]")}>
                      {n.name}
                    </h2>
                    <div className="text-right">
                      <div className="text-[12px] uppercase tracking-wide text-[#8a8170]">Avg. price</div>
                      <div className={cx(serifCls, "text-[26px] font-semibold text-[#B4924E] leading-none")}>
                        {n.avgPrice}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-[#3a3630]">{n.blurb}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {n.lifestyle.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#5b564d] bg-white border border-[#E4DCCD] px-3 py-1.5 rounded-full"
                      >
                        <Sparkles size={13} className="text-[#B4924E]" /> {t}
                      </span>
                    ))}
                  </div>

                  <dl className="mt-6 grid sm:grid-cols-2 gap-4 text-[13.5px]">
                    {[
                      [GraduationCap, "Schools", n.schools],
                      [UtensilsCrossed, "Dining", n.restaurants],
                      [ShoppingBag, "Shopping", n.shopping],
                      [Car, "Commute", n.commute],
                    ].map(([Icon, label, val], k) => {
                      const I = Icon as typeof GraduationCap;
                      return (
                        <div key={k} className="flex gap-3">
                          <I size={18} className="text-[#B4924E] shrink-0 mt-0.5" />
                          <div>
                            <dt className="font-semibold text-[#16181D]">{label as string}</dt>
                            <dd className="text-[#5b564d]">{val as string}</dd>
                          </div>
                        </div>
                      );
                    })}
                  </dl>

                  <div className="mt-7">
                    <Button href="/realty/listings" variant="navy">
                      View homes in {n.name} <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Find the right neighborhood for you"
        sub="Tell us about your lifestyle, budget, and must-haves, and we'll point you to the communities that fit best."
        primary={{ label: "Talk to a Local Expert", href: "/realty/contact" }}
        secondary={{ label: "Browse All Listings", href: "/realty/listings" }}
      />
    </>
  );
}
