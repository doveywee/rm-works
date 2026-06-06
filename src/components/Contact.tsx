"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Demo only — no backend wired up.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-ink to-ink p-8 sm:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Start a project
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-chalk sm:text-5xl text-balance">
              Let&apos;s build something with gravity.
            </h2>
            <p className="mt-5 max-w-md text-mist">
              Tell us about your project. We reply within one business day, and
              the first call is a free strategy session — not a sales pitch.
            </p>
            <div className="mt-8 space-y-1 text-sm text-mist">
              <p>
                <span className="text-fog">Email</span> · studio@aether.design
              </p>
              <p>
                <span className="text-fog">Booking</span> · cal.com/aether
              </p>
            </div>
          </div>

          {sent ? (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center rounded-2xl border border-line bg-ink/60 p-10 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-chalk text-ink">
                <Check size={26} />
              </span>
              <h3 className="mt-5 font-display text-xl text-chalk">
                Message sent
              </h3>
              <p className="mt-2 max-w-xs text-sm text-mist">
                Thanks — we&apos;ll be in touch within one business day. Keep an
                eye on your inbox.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
              <Field id="name" label="Name" placeholder="Ada Lovelace" required />
              <Field
                id="email"
                label="Work email"
                type="email"
                placeholder="ada@company.com"
                required
              />
              <div className="grid gap-2">
                <label
                  htmlFor="budget"
                  className="text-sm font-medium text-chalk"
                >
                  Budget range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="h-12 rounded-xl border border-line bg-ink px-4 text-sm text-chalk outline-none transition-colors focus:border-white/40 focus:ring-2 focus:ring-white/15"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>$8k – $15k</option>
                  <option>$15k – $30k</option>
                  <option>$30k+</option>
                  <option>Monthly retainer</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-chalk"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What are you building, and what does success look like?"
                  className="resize-none rounded-xl border border-line bg-ink px-4 py-3 text-sm text-chalk placeholder:text-fog outline-none transition-colors focus:border-white/40 focus:ring-2 focus:ring-white/15"
                />
                <p className="text-xs text-fog">
                  The more context, the sharper our first reply.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-chalk px-7 text-sm font-medium text-ink transition-all hover:bg-white disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

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
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-chalk">
        {label}
        {required && <span className="text-fog"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={id === "email" ? "email" : id === "name" ? "name" : "off"}
        className="h-12 rounded-xl border border-line bg-ink px-4 text-sm text-chalk placeholder:text-fog outline-none transition-colors focus:border-white/40 focus:ring-2 focus:ring-white/15"
      />
    </div>
  );
}
