"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

// Free email delivery with no server, via Web3Forms. Submissions arrive at
// the studio inbox (ruijli@icloud.com).
const WEB3FORMS_ACCESS_KEY = "a15d05e4-e638-46f4-9dca-88fd381439aa";

const inputCls =
  "w-full border-b border-ink/30 bg-transparent pb-3 pt-2 text-lg text-ink placeholder:text-faint/70 outline-none transition-colors duration-300 focus:border-accent";

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={id === "email" ? "email" : id === "name" ? "name" : "off"}
        className={inputCls}
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pkg, setPkg] = useState("");

  // auto-fill the package when a tier is chosen in the Pricing section
  useEffect(() => {
    function onSelect(e: Event) {
      setPkg((e as CustomEvent<string>).detail);
    }
    window.addEventListener("select-package", onSelect);
    return () => window.removeEventListener("select-package", onSelect);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "New project inquiry · RM Works");
      formData.append("from_name", "RM Works website");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel />
        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.98] tracking-tight text-ink sm:text-7xl text-balance">
              Let&apos;s build something with{" "}
              <em className="text-accent">gravity.</em>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-soot">
              Tell us about your project. We reply within one business day, and
              the first call is a free strategy session, not a sales pitch.
            </p>
            <dl className="mt-10 max-w-md">
              <div className="flex items-baseline justify-between border-t border-rule py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@rmworks.dev"
                    className="rm-link text-ink"
                  >
                    info@rmworks.dev
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between border-y border-rule py-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                  Response time
                </dt>
                <dd className="text-ink">One business day</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center border border-rule bg-paper-2/60 p-10">
                <span className="font-display text-5xl italic text-accent">
                  Received.
                </span>
                <p className="mt-4 max-w-sm leading-relaxed text-soot">
                  Thanks, we&apos;ll be in touch within one business day. Keep
                  an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-8">
                <Field id="name" label="Name" placeholder="Ada Lovelace" required />
                <Field
                  id="email"
                  label="Work email"
                  type="email"
                  placeholder="ada@company.com"
                  required
                />
                <div>
                  <label
                    htmlFor="package"
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint"
                  >
                    Package selection
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className={`${inputCls} appearance-none rounded-none`}
                  >
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option>Website Design</option>
                    <option>Management Package</option>
                    <option>Creative Package</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What are you building, and what does success look like?"
                    className={`${inputCls} resize-none`}
                  />
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    The more context, the sharper our first reply.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-accent disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message ↗"}
                </button>

                {error && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-deep">
                    Something went wrong. Please try again, or email
                    info@rmworks.dev directly.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionLabel() {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
          (06) Contact
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-faint sm:block">
          RM Works · Studio dossier
        </span>
      </div>
    </Reveal>
  );
}
