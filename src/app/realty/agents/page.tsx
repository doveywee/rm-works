import { Globe, MapPin, Award } from "lucide-react";
import { agents } from "../data";
import {
  PageHero,
  AgentCard,
  SectionHeading,
  Reveal,
  CTASection,
} from "../components";
import { cx, serifCls } from "../ui";

const IMG =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

export default function AgentsPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="Our Team"
        title="Meet the people behind Crestline"
        sub="A small, senior team of local specialists. No call centers, no hand-offs — just experienced agents who answer their own phones and treat your goals as their own."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="text-[18px] leading-relaxed text-[#3a3630]">
              Founded in Chino Hills in 2008, Crestline Realty Group was built on a
              belief that great representation should feel personal. Every agent here
              is a local expert in their markets, hand-picked for skill and integrity.
              When you work with one of us, you get the whole team behind you.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-[14px] text-[#5b564d]">
            <span className="inline-flex items-center gap-2">
              <Award size={18} className="text-[#B4924E]" /> 1,480+ homes sold
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} className="text-[#B4924E]" /> 6 communities served
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe size={18} className="text-[#B4924E]" /> 4 languages spoken
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EFE7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 4) * 0.06}>
                <AgentCard a={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed roster with specialties/languages/areas */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionHeading
              center
              eyebrow="At a Glance"
              title="Specialties, languages & areas served"
              className="mb-14"
            />
          </Reveal>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#8a8170] border-b border-[#E4DCCD]">
                  <th className="py-4 pr-4">Agent</th>
                  <th className="py-4 px-4">Specialties</th>
                  <th className="py-4 px-4">Languages</th>
                  <th className="py-4 px-4">Areas Served</th>
                  <th className="py-4 pl-4">License</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[#3a3630]">
                {agents.map((a) => (
                  <tr key={a.slug} className="border-b border-[#EFE9DC] align-top">
                    <td className="py-5 pr-4">
                      <div className={cx(serifCls, "text-[18px] font-semibold text-[#16181D]")}>
                        {a.name}
                      </div>
                      <div className="text-[12px] text-[#B4924E] uppercase tracking-wide">
                        {a.title}
                      </div>
                    </td>
                    <td className="py-5 px-4">{a.specialties.join(", ")}</td>
                    <td className="py-5 px-4">{a.languages.join(", ")}</td>
                    <td className="py-5 px-4">{a.areas.join(", ")}</td>
                    <td className="py-5 pl-4 text-[13px] text-[#8a8170]">{a.license}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join us"
        title="Thinking about a career in real estate?"
        sub="We're always looking for driven, client-first agents to join the Crestline team. Let's talk about your future."
        primary={{ label: "Get in Touch", href: "/realty/contact" }}
        secondary={{ label: "About Crestline", href: "/realty/about" }}
      />
    </>
  );
}
