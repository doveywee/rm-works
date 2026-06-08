import Link from "next/link";
import { posts } from "../data";
import {
  PageHero,
  BlogCard,
  SectionHeading,
  ValuationForm,
  Reveal,
  Button,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=2000&q=80";

const categories = ["All", "Buying", "Selling", "Neighborhoods", "Market"];

export default function ResourcesPage() {
  const [feature, ...rest] = posts;
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="Resources"
        title="Real estate, made clear"
        sub="Guides, market updates, and straight answers to help you make confident decisions — whether you're buying, selling, or just getting started."
      />

      {/* Featured post */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Link
              href="/realty/resources"
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl overflow-hidden"
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#B4924E]">
                  Featured · {feature.category}
                </div>
                <h2
                  className={cx(
                    serifCls,
                    "mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight text-[#16181D] group-hover:text-[#B4924E] transition-colors",
                  )}
                >
                  {feature.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5b564d]">{feature.excerpt}</p>
                <div className="mt-5 text-[13px] text-[#9a8f7d]">
                  {feature.date} · {feature.read}
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Category filter (visual) + grid */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c, i) => (
              <span
                key={c}
                className={cx(
                  "text-[13px] font-medium px-4 py-2 rounded-full border transition-colors cursor-pointer",
                  i === 0
                    ? "bg-[#0E1C30] text-white border-[#0E1C30]"
                    : "bg-white text-[#5b564d] border-[#E4DCCD] hover:border-[#B4924E] hover:text-[#B4924E]",
                )}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <BlogCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / valuation */}
      <section className="bg-[#F4EFE7] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Free Tool"
              title="Curious what your home is worth?"
              sub="Skip the generic online estimate. Get a real, local valuation from an expert who actually knows your neighborhood."
            />
            <div className="mt-6">
              <Button href="/realty/sell" variant="navy" size="lg">
                Get a Free Valuation
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-[#E4DCCD] rounded-2xl p-7 md:p-9">
              <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D] mb-1")}>
                Request your home valuation
              </h3>
              <p className="text-[13.5px] text-[#8a8170] mb-6">Free and no obligation.</p>
              <ValuationForm compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
