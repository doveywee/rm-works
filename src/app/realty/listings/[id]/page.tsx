import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize,
  Trees,
  CalendarDays,
  DollarSign,
  Car,
  Building2,
  MapPin,
  GraduationCap,
  Check,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import {
  company,
  listings,
  findListing,
  findAgent,
  formatPrice,
  pricePerSqft,
} from "../../data";
import {
  Gallery,
  MortgageCalculator,
  LeadForm,
  PropertyCard,
  MapEmbed,
  StatusBadge,
  ShareButton,
  Avatar,
  Button,
  SectionHeading,
} from "../../components";
import { cx, serifCls } from "../../ui";

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const l = findListing(id);
  if (!l) notFound();

  const agent = findAgent(l.agent)!;
  const similar = listings
    .filter((s) => s.id !== l.id && s.neighborhood === l.neighborhood)
    .concat(listings.filter((s) => s.id !== l.id && s.neighborhood !== l.neighborhood))
    .slice(0, 3);

  const facts = [
    { icon: Bed, label: "Beds", value: l.beds },
    { icon: Bath, label: "Baths", value: l.baths },
    { icon: Maximize, label: "Sq Ft", value: l.sqft.toLocaleString() },
    { icon: DollarSign, label: "Per Sq Ft", value: `$${pricePerSqft(l)}` },
    { icon: Trees, label: "Lot", value: l.lot ? `${l.lot} ac` : "—" },
    { icon: CalendarDays, label: "Year Built", value: l.year },
    { icon: Car, label: "Garage", value: l.garage },
    { icon: Building2, label: "HOA", value: l.hoa ? `$${l.hoa}/mo` : "None" },
  ];

  return (
    <div className="bg-white">
      {/* spacing for fixed nav */}
      <div className="pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center justify-between gap-4 mb-5">
            <Link
              href="/realty/listings"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#5b564d] hover:text-[#B4924E]"
            >
              <ArrowLeft size={16} /> All listings
            </Link>
            <ShareButton />
          </div>
          <Gallery images={l.images} title={l.title} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 grid lg:grid-cols-[1fr_380px] gap-10">
        {/* Main column */}
        <div className="min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <StatusBadge status={l.status} />
            {l.openHouse && (
              <span className="text-[13px] font-medium text-[#B4924E]">
                Open House · {l.openHouse}
              </span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className={cx(serifCls, "text-[clamp(2rem,4vw,3rem)] font-semibold text-[#16181D] leading-none")}>
                {formatPrice(l.status === "Sold" && l.soldPrice ? l.soldPrice : l.price)}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-[16px] text-[#3a3630]">
                <MapPin size={17} className="text-[#B4924E]" />
                {l.address}, {l.city}, CA · {l.neighborhood}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[#8a8170]">
                <span>{l.type}</span>
                <span className="text-[#d8cfbe]">·</span>
                <span>MLS# {l.mls}</span>
                <span className="text-[#d8cfbe]">·</span>
                <span>{l.dom} {l.dom === 1 ? "day" : "days"} on market</span>
              </div>
            </div>
          </div>

          {/* fact grid */}
          <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
            {facts.map((f) => (
              <div key={f.label} className="bg-[#F4EFE7] rounded-xl p-4 text-center">
                <f.icon size={20} className="text-[#B4924E] mx-auto" />
                <div className="mt-2 text-[15px] font-semibold text-[#16181D] leading-tight">
                  {f.value}
                </div>
                <div className="text-[11px] text-[#8a8170]">{f.label}</div>
              </div>
            ))}
          </div>

          {/* description */}
          <div className="mt-10">
            <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-3")}>
              About this home
            </h2>
            <p className="text-[16px] leading-relaxed text-[#3a3630]">{l.description}</p>
          </div>

          {/* features */}
          <div className="mt-10">
            <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-4")}>
              Features & amenities
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {l.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-[15px] text-[#3a3630]">
                  <Check size={18} className="text-[#B4924E] shrink-0 mt-0.5" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* map */}
          <div className="mt-10">
            <h2 className={cx(serifCls, "text-[28px] font-semibold text-[#16181D] mb-4")}>
              Location
            </h2>
            <div className="rounded-xl overflow-hidden border border-[#E4DCCD]">
              <MapEmbed query={`${l.address}, ${l.city}, CA`} className="h-[380px]" />
            </div>
            <div className="mt-4 flex items-start gap-2.5 text-[14.5px] text-[#3a3630]">
              <GraduationCap size={18} className="text-[#B4924E] shrink-0 mt-0.5" />
              <span>
                <span className="font-semibold text-[#16181D]">Assigned schools:</span>{" "}
                {l.schools}
              </span>
            </div>
          </div>

          {/* mortgage */}
          <div className="mt-10">
            <MortgageCalculator price={l.price} />
          </div>

          {/* lead forms */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div id="tour" className="scroll-mt-28 bg-white border border-[#E4DCCD] rounded-xl p-6">
              <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D] mb-1")}>
                Schedule a Tour
              </h3>
              <p className="text-[13.5px] text-[#8a8170] mb-5">
                Pick a time that works — we’ll confirm right away.
              </p>
              <LeadForm variant="tour" listingTitle={l.title} />
            </div>
            <div id="ask" className="scroll-mt-28 bg-white border border-[#E4DCCD] rounded-xl p-6">
              <h3 className={cx(serifCls, "text-[24px] font-semibold text-[#16181D] mb-1")}>
                Ask a Question
              </h3>
              <p className="text-[13.5px] text-[#8a8170] mb-5">
                Have a question about this property? We’re here to help.
              </p>
              <LeadForm variant="ask" listingTitle={l.title} />
            </div>
          </div>
        </div>

        {/* Sidebar: agent card */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="bg-[#0E1C30] text-white rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <Avatar name={agent.name} size={64} className="ring-2 ring-[#C9A96A]/50" />
              <div>
                <div className={cx(serifCls, "text-[20px] font-semibold")}>{agent.name}</div>
                <div className="text-[12px] text-[#C9A96A] uppercase tracking-wide">
                  {agent.title}
                </div>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] text-white/65 leading-relaxed">
              Listing presented by {agent.name.split(" ")[0]}. Reach out anytime for a
              private showing or more details.
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href={`tel:${agent.phone}`}
                className="flex items-center justify-center gap-2 bg-[#B4924E] text-white py-3 rounded-lg text-[14px] font-medium hover:bg-[#a07f3e] transition-colors"
              >
                <Phone size={16} /> {agent.phone}
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center justify-center gap-2 border border-white/25 text-white py-3 rounded-lg text-[14px] font-medium hover:border-[#C9A96A] transition-colors"
              >
                <Mail size={16} /> Email Agent
              </a>
              <Button href={`/realty/agents/${agent.slug}`} variant="ghost" full className="!text-white/70 hover:!text-white">
                View full profile
              </Button>
            </div>
            <div className="mt-5 pt-5 border-t border-white/10 text-[12px] text-white/45">
              {agent.license} · {company.license}
            </div>
          </div>

          <div className="mt-5 bg-[#F4EFE7] border border-[#E4DCCD] rounded-2xl p-6 text-center">
            <div className={cx(serifCls, "text-[22px] font-semibold text-[#16181D]")}>
              Want a private showing?
            </div>
            <p className="mt-2 text-[13.5px] text-[#5b564d]">
              We offer flexible weekday, evening, and weekend tours.
            </p>
            <Button href="#tour" variant="navy" full className="mt-4">
              Schedule a Tour
            </Button>
          </div>
        </aside>
      </div>

      {/* Similar listings */}
      <section className="bg-[#F4EFE7] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="You may also like" title="Similar homes nearby" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {similar.map((s) => (
              <PropertyCard key={s.id} l={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
