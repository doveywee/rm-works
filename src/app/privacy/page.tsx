import type { Metadata } from "next";
import Link from "next/link";
import { CookieConsent } from "@/components/home/CookieConsent";
import { LAST_UPDATED } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy · RM Works",
  description:
    "How RM Works handles your data and cookies. We set no tracking or marketing cookies, store nothing until you accept, and self-host our fonts.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy & Cookie Policy · RM Works",
    description:
      "How RM Works handles your data and cookies. No tracking cookies, nothing stored until you accept.",
    url: "/privacy",
    siteName: "RM Works",
    type: "website",
  },
};

// Human-readable effective date derived from the freshness constant.
const EFFECTIVE = new Date(LAST_UPDATED + "T00:00:00").toLocaleDateString(
  "en-US",
  { year: "numeric", month: "long", day: "numeric" },
);

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-10 sm:py-12">
      <p className="text-xs uppercase tracking-[0.25em] text-accent">{label}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-chalk sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-mist [&_a]:font-medium [&_a]:text-chalk [&_a]:underline [&_a]:decoration-white/25 [&_a]:underline-offset-2 [&_a:hover]:text-accent [&_a:hover]:decoration-accent [&_strong]:text-chalk">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-dvh">
      {/* Film grain over the dark canvas — the body's #010102 background and its
          ambient orange glow (body::before) come from globals and need no
          per-document override here, unlike the light revamp routes. */}
      <div className="noise" aria-hidden />

      <div className="relative z-10">
        <header className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.22em] text-fog transition-colors hover:text-accent"
          >
            ← RM Works
          </Link>
        </header>

        <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-12">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-chalk sm:text-6xl">
            Privacy &amp; Cookie{" "}
            <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist">
            Plain-language version: we do not track you, we do not sell anything
            about you, and we store nothing in your browser until you say yes.
            The sections below explain this in full. This notice describes our
            practices; it is not a contract and does not take away any right you
            have under the law that applies to you.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-fog">
            Effective {EFFECTIVE} · RM Works · rmworks.dev
          </p>

          <Section label="01" title="Who we are">
            <p>
              RM Works (&ldquo;RM Works&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) is an independent web design and engineering
              studio operating the website at <strong>rmworks.dev</strong>. We
              are the data controller for the information described here.
              Questions? Email{" "}
              <a href="mailto:info@rmworks.dev">info@rmworks.dev</a>.
            </p>
          </Section>

          <Section label="02" title="What we collect">
            <p>
              <strong>Almost nothing, by default.</strong> Browsing this site
              does not require an account and does not feed any analytics or
              advertising profile.
            </p>
            <p>
              <strong>If you contact us.</strong> When you submit the project
              inquiry form or email us, we receive the details you choose to
              send — typically your name, email address, and message — so we can
              reply and discuss working together.
            </p>
            <p>
              <strong>Server logs.</strong> Our hosting provider may record
              standard technical request data (such as IP address, browser
              type, and timestamps) for security and to keep the site online.
              This is ordinary web-server logging, not behavioural tracking.
            </p>
            <p>
              <strong>Why we&rsquo;re allowed to.</strong> Where the GDPR
              applies, our legal bases are: your consent and our taking steps at
              your request before any engagement (for inquiry messages you send
              us); and our legitimate interest in keeping the site secure and
              available (for server logs). We only ever use this information for
              the purpose you gave it to us for.
            </p>
          </Section>

          <Section label="03" title="Cookies & similar technologies">
            <p>
              We set{" "}
              <strong>no advertising, marketing, or analytics cookies</strong>,
              and we embed no third-party trackers. The site loads its fonts
              from our own server rather than from Google, so simply viewing a
              page contacts no advertising network.
            </p>
            <p>
              The only thing we may store in your browser is a single{" "}
              <strong>consent record</strong> — a small entry in local storage
              that remembers the choice you made in the cookie notice. It is
              strictly necessary to honour your preference and contains no
              identifier and no tracking data.
            </p>
            <p>
              <strong>Nothing is stored until you choose.</strong> If you ignore
              or dismiss the notice without accepting, no record is written. You
              can clear it any time through your browser&rsquo;s site-data
              controls, which will bring the notice back.
            </p>
            <p>
              <strong>Do Not Track &amp; Global Privacy Control.</strong>{" "}
              Because we do not track you across sites or over time, there is
              nothing for a browser&rsquo;s Do Not Track (DNT) or Global Privacy
              Control (GPC) signal to switch off. If we ever add a technology
              those signals apply to, we will treat an enabled signal as a
              request not to be tracked.
            </p>
          </Section>

          <Section label="04" title="Your consent choices">
            <p>
              We ask before storing anything non-essential. Right now there is
              little to consent to beyond remembering your choice, because we
              run no analytics or marketing technologies.
            </p>
            <p>
              <strong>If we add measurement later.</strong> We may add
              privacy-respecting analytics or similar measurement in future.
              Choosing <strong>Accept</strong> tells us you are comfortable with
              us doing so <strong>within the same categories and for the same
              purposes</strong> set out in this policy — for example, turning on
              a cookieless analytics tool — so we don&rsquo;t have to interrupt
              you for every minor change.
            </p>
            <p>
              <strong>Where the law requires more, we ask again.</strong> This
              advance agreement never overrides a stronger right. Where the law
              that applies to you — such as the EU/UK GDPR and ePrivacy rules —
              requires specific, informed consent before a particular technology
              runs, we will obtain that consent at the time (the cookie notice
              will reappear) and will not rely on this section to skip it. Any
              genuinely new purpose, new category of data, or sharing for
              advertising likewise triggers a fresh request, signalled by a new
              policy version.
            </p>
            <p>
              <strong>You stay in control.</strong> Choose{" "}
              <strong>Necessary only</strong>, or simply don&rsquo;t accept, and
              the site stays limited to strictly necessary storage. You can
              withdraw consent at any time by clearing this site&rsquo;s data or
              by emailing <a href="mailto:info@rmworks.dev">info@rmworks.dev</a>;
              withdrawal does not affect anything done while consent was in
              place.
            </p>
          </Section>

          <Section label="05" title="Who we share it with">
            <p>
              We do not sell your personal information. We share it only with
              the service providers that make the site work, under their own
              terms:
            </p>
            <ul className="ml-5 list-disc space-y-2 marker:text-accent">
              <li>
                <strong>Our hosting provider</strong> — serves the website and
                keeps the security logs described above.
              </li>
              <li>
                <strong>Web3Forms</strong> — delivers messages submitted through
                the inquiry form to our inbox. The details you enter pass
                through their service for that delivery.
              </li>
            </ul>
            <p>
              <strong>Where your data goes.</strong> These providers may process
              your data on servers in the United States. If you contact us from
              outside the US, your message is transferred there so we can
              receive and reply to it — a transfer that is necessary to handle
              the request you chose to send us, and which also relies on those
              providers&rsquo; own safeguards.
            </p>
            <p>
              We may also disclose information where the law genuinely requires
              it.
            </p>
          </Section>

          <Section label="06" title="Your rights">
            <p>
              Depending on where you live (for example under the GDPR or the
              CCPA/CPRA), you may have the right to access, correct, delete, or
              export the personal information we hold about you, to object to or
              restrict certain processing, and to withdraw consent. To exercise
              any of these, email{" "}
              <a href="mailto:info@rmworks.dev">info@rmworks.dev</a> and we will
              respond within the time the applicable law allows. You also have
              the right to complain to your local data-protection authority.
            </p>
          </Section>

          <Section label="07" title="Retention & children">
            <p>
              We keep inquiry messages only as long as needed to respond and to
              keep a record of our correspondence, then delete them. The site is
              not directed to children under 13, and we do not knowingly collect
              their information.
            </p>
          </Section>

          <Section label="08" title="Changes to this policy">
            <p>
              We may update this policy as the site evolves. When we do, we
              revise the effective date above, and for material changes that
              widen what we collect we raise the policy version so the cookie
              notice asks for your consent again. For minor changes, your
              continued use of the site after the new effective date reflects
              the updated policy. We will not apply a materially new use to data
              we already hold without asking you first, and nothing here removes
              a consent the law requires us to obtain (see section 04).
            </p>
          </Section>

          <footer className="mt-12 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.18em] text-fog">
            © {new Date().getFullYear()} RM Works · Effective {EFFECTIVE}
          </footer>
        </main>
      </div>

      <CookieConsent />
    </div>
  );
}
