import { Heart, Compass, ShieldCheck, Users, MapPin } from "lucide-react";
import { stats, company } from "../data";
import {
  PageHero,
  StatsBand,
  SectionHeading,
  Reveal,
  CTASection,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80";

const values = [
  { icon: ShieldCheck, title: "Integrity first", body: "We give honest advice even when it costs us a sale. Your trust is worth more than any single deal." },
  { icon: Compass, title: "Local to the core", body: "We live, work, and raise our families here. Our advice is grounded in real, on-the-ground knowledge." },
  { icon: Heart, title: "Client for life", body: "We're not chasing transactions — we're building relationships that last for decades and generations." },
  { icon: Users, title: "A true team", body: "When you hire one of us, you get all of us. Every client benefits from our collective experience." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="About Us"
        title="A boutique brokerage with deep local roots"
        sub="Crestline Realty Group was founded on a simple idea: that buying or selling a home should feel personal, honest, and a little less stressful."
      />

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#ECE4D6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
                alt="The Crestline team"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Our Story" title="Built in Chino Hills, trusted across the region" />
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#3a3630]">
              <p>
                In 2008, Sofia Marín left a large national brokerage with a conviction
                that clients deserved better than a number in a sales funnel. She
                started Crestline at a kitchen table in Chino Hills with a handful of
                referrals and a promise to always tell the truth.
              </p>
              <p>
                Eighteen years later, that promise still defines us. We’ve grown into a
                team of senior local specialists and helped more than 1,400 families
                buy and sell across the Inland Empire and Orange County — but we’ve
                stayed deliberately small, so every client gets our best.
              </p>
              <p>
                We believe great real estate is equal parts market expertise and genuine
                care. That’s the standard we hold ourselves to on every single home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0E1C30] py-20 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9A96A] mb-5">
            Our Mission
          </div>
          <p className={cx(serifCls, "text-white text-[clamp(1.7rem,3.5vw,2.6rem)] font-medium leading-snug")}>
            “To guide every client home with honesty, expertise, and genuine care — and
            to be the brokerage our neighbors recommend without hesitation.”
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading center eyebrow="What We Stand For" title="Our values" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-xl p-7 h-full">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-[#0E1C30] text-[#C9A96A]">
                    <v.icon size={22} />
                  </div>
                  <h3 className={cx(serifCls, "mt-4 text-[21px] font-semibold text-[#16181D]")}>
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#5b564d]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F4EFE7] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <StatsBand items={stats} light={false} />
          </Reveal>
        </div>
      </section>

      {/* Brokerage + community */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Community" title="Invested where we live" />
            <p className="mt-5 text-[16px] leading-relaxed text-[#3a3630]">
              We believe a brokerage should give back to the community it serves. Each
              year Crestline sponsors youth sports across Chino Hills and Rancho
              Cucamonga, supports local food banks during the holidays, and donates a
              portion of every commission to regional housing nonprofits.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-[#3a3630]">
              {[
                "Title sponsor, Inland Empire Youth Soccer League",
                "Annual partner of the Second Harvest Food Bank",
                "Founding member of the Chino Hills Small Business Alliance",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#B4924E] shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl p-8">
              <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D] mb-5")}>
                Brokerage information
              </h3>
              <dl className="space-y-4 text-[14.5px]">
                {[
                  ["Brokerage", company.brokerage],
                  ["License", company.license],
                  ["Office", `${company.address}, ${company.city}`],
                  ["Phone", company.phone],
                  ["Email", company.email],
                  ["Founded", "2008 · Chino Hills, California"],
                  ["Areas served", "Chino Hills · Irvine · Claremont · Rancho Cucamonga · Diamond Bar · Orange County"],
                ].map(([label, val]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:gap-4 border-b border-[#E4DCCD] pb-4 last:border-0 last:pb-0">
                    <dt className="w-32 shrink-0 text-[12px] font-semibold tracking-[0.1em] uppercase text-[#8a8170]">
                      {label}
                    </dt>
                    <dd className="text-[#3a3630]">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="We'd love to meet you"
        sub={`Have a question, or just want to talk through your options? Reach out — there's never any pressure.`}
        primary={{ label: "Contact the Team", href: "/realty/contact" }}
        secondary={{ label: "Meet Our Agents", href: "/realty/agents" }}
      />
    </>
  );
}
