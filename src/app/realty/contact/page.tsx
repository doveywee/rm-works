import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "../data";
import {
  PageHero,
  ContactForm,
  MapEmbed,
  Reveal,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

export default function ContactPage() {
  const socials = [
    [Instagram, company.social.instagram],
    [Facebook, company.social.facebook],
    [Linkedin, company.social.linkedin],
    [Youtube, company.social.youtube],
  ] as const;

  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="Contact"
        title="Let's start a conversation"
        sub="Buying, selling, investing, or just exploring — reach out and a local Crestline expert will get back to you, usually within one business hour."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Form */}
          <Reveal>
            <h2 className={cx(serifCls, "text-[30px] font-semibold text-[#16181D] mb-2")}>
              Send us a message
            </h2>
            <p className="text-[15px] text-[#5b564d] mb-7">
              Tell us a little about what you’re looking for and we’ll point you to the
              right person on our team.
            </p>
            <ContactForm />
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="bg-[#0E1C30] text-white rounded-2xl p-7">
              <h3 className={cx(serifCls, "text-[24px] font-semibold mb-5")}>
                Crestline Realty Group
              </h3>
              <div className="space-y-4 text-[14.5px]">
                <a href={company.phoneHref} className="flex items-start gap-3 hover:text-[#C9A96A]">
                  <Phone size={18} className="text-[#C9A96A] shrink-0 mt-0.5" />
                  <span>{company.phone}</span>
                </a>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 hover:text-[#C9A96A]">
                  <Mail size={18} className="text-[#C9A96A] shrink-0 mt-0.5" />
                  <span>{company.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C9A96A] shrink-0 mt-0.5" />
                  <span>
                    {company.address}
                    <br />
                    {company.city}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#C9A96A] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    {company.hours.map(([d, h]) => (
                      <div key={d} className="flex justify-between gap-6">
                        <span className="text-white/70">{d}</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C9A96A] mb-3">
                  Follow along
                </div>
                <div className="flex gap-3">
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
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-[12px] text-white/45">
                {company.license} · {company.brokerage}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F4EFE7] pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl overflow-hidden border border-[#E4DCCD]">
            <MapEmbed query={`${company.address}, ${company.city}`} className="h-[440px]" />
          </div>
        </div>
      </section>
    </>
  );
}
