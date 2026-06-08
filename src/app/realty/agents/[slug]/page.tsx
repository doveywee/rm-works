import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  ArrowLeft,
  Check,
} from "lucide-react";
import {
  agents,
  findAgent,
  listingsByAgent,
  testimonials,
  company,
} from "../../data";
import {
  PropertyCard,
  AgentContactForm,
  TestimonialCard,
  Button,
  Instagram,
  Linkedin,
  Facebook,
} from "../../components";
import { cx, serifCls } from "../../ui";

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = findAgent(slug);
  if (!a) notFound();

  const mine = listingsByAgent(a.slug);
  const active = mine.filter((l) => l.status !== "Sold");
  const sold = mine.filter((l) => l.status === "Sold");
  const reviews = testimonials.slice(0, 3);
  const socials = [
    a.social.instagram && [Instagram, a.social.instagram],
    a.social.linkedin && [Linkedin, a.social.linkedin],
    a.social.facebook && [Facebook, a.social.facebook],
  ].filter(Boolean) as [typeof Instagram, string][];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative bg-[#0E1C30] text-white pt-28 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-5">
          <Link
            href="/realty/agents"
            className="inline-flex items-center gap-2 text-[13.5px] text-white/70 hover:text-white mb-8"
          >
            <ArrowLeft size={16} /> Back to team
          </Link>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#16263E] ring-1 ring-white/10 max-w-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.photo} alt={a.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#C9A96A]">
                {a.title}
              </div>
              <h1 className={cx(serifCls, "mt-2 text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-none")}>
                {a.name}
              </h1>
              <p className="mt-4 text-[16px] text-white/75 max-w-xl leading-relaxed">{a.bio[0]}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${a.phone}`}
                  className="inline-flex items-center gap-2 bg-[#B4924E] text-white px-5 py-3 rounded-lg text-[14px] font-medium hover:bg-[#a07f3e] transition-colors"
                >
                  <Phone size={16} /> {a.phone}
                </a>
                <a
                  href={`mailto:${a.email}`}
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 rounded-lg text-[14px] font-medium hover:border-[#C9A96A] transition-colors"
                >
                  <Mail size={16} /> Email
                </a>
                <Button href="#contact" variant="white" size="md">
                  Schedule a Consultation
                </Button>
              </div>
              {socials.length > 0 && (
                <div className="mt-5 flex gap-3">
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-5 py-16 grid lg:grid-cols-[1fr_360px] gap-12">
        <div className="min-w-0">
          {/* Bio */}
          <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-4")}>
            About {a.name.split(" ")[0]}
          </h2>
          <div className="space-y-4 text-[16px] leading-relaxed text-[#3a3630]">
            {a.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Specialties / areas */}
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            <div>
              <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#8a8170] mb-3">
                Specialties
              </h3>
              <ul className="space-y-2 text-[14px] text-[#3a3630]">
                {a.specialties.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check size={16} className="text-[#B4924E] mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#8a8170] mb-3">
                Areas Served
              </h3>
              <ul className="space-y-2 text-[14px] text-[#3a3630]">
                {a.areas.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <MapPin size={15} className="text-[#B4924E] mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#8a8170] mb-3">
                Languages
              </h3>
              <ul className="space-y-2 text-[14px] text-[#3a3630]">
                {a.languages.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Globe size={15} className="text-[#B4924E] mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Current listings */}
          {active.length > 0 && (
            <div className="mt-14">
              <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-6")}>
                Current listings
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {active.map((l) => (
                  <PropertyCard key={l.id} l={l} />
                ))}
              </div>
            </div>
          )}

          {/* Sold */}
          {sold.length > 0 && (
            <div className="mt-14">
              <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-6")}>
                Recently sold
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {sold.map((l) => (
                  <PropertyCard key={l.id} l={l} />
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div className="mt-14">
            <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-6")}>
              Client reviews
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {reviews.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar contact */}
        <aside id="contact" className="lg:sticky lg:top-24 self-start scroll-mt-28">
          <div className="bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl p-6">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#16181D] mb-1">
              <Award size={18} className="text-[#B4924E]" /> {a.sales}
            </div>
            <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D] mb-1")}>
              Get in touch
            </h3>
            <p className="text-[13.5px] text-[#8a8170] mb-5">
              Send {a.name.split(" ")[0]} a message — typically replies within the hour.
            </p>
            <AgentContactForm agent={a} />
            <div className="mt-5 pt-5 border-t border-[#E4DCCD] text-[12px] text-[#8a8170]">
              {a.license} · {company.brokerage}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
