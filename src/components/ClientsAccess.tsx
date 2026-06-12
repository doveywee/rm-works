"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

// Destinations that actually exist. We only ever navigate to one of these so a
// typo can't client-route the visitor to a 404 in the static export.
const ALLOWED = new Set([
  "/peden",
  "/sanamluang",
  "/spartan",
  "/spartan/services",
  "/spartan/contact",
]);

// First path segment -> that site's root, so "spartan" (or "spartan/anything"
// we don't recognise) still lands somewhere sensible.
const ROOTS: Record<string, string> = {
  peden: "/peden",
  sanamluang: "/sanamluang",
  spartan: "/spartan",
};

/** Turn whatever the client typed into a known path, or null if unknown. */
function resolve(raw: string): string | null {
  const cleaned = raw.trim().toLowerCase().replace(/\s+/g, "");
  if (!cleaned) return null;
  const path = "/" + cleaned.replace(/^\/+/, "").replace(/\/+$/, "");
  if (ALLOWED.has(path)) return path;
  const seg = path.split("/")[1];
  return ROOTS[seg] ?? null;
}

export function ClientsAccess() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const shake = useAnimationControls();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const dest = resolve(value);
    if (dest) {
      router.push(dest);
      return;
    }
    setError(true);
    if (!reduce) {
      shake.start({
        x: [0, -7, 7, -5, 5, 0],
        transition: { duration: 0.4 },
      });
    }
    inputRef.current?.focus();
  }

  function close() {
    setOpen(false);
    setValue("");
    setError(false);
  }

  return (
    <section id="clients" className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
        <AnimatePresence mode="wait" initial={false}>
          {!open ? (
            <motion.button
              key="trigger"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-fog transition-colors hover:border-white/25 hover:text-chalk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <Lock className="h-3.5 w-3.5" aria-hidden />
              Clients Access
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </motion.button>
          ) : (
            <motion.div
              key="bar"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="flex w-full justify-center"
            >
              <motion.form
                animate={shake}
                onSubmit={submit}
                className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] py-2 pl-5 pr-2 backdrop-blur transition-colors focus-within:border-white/40"
              >
                <span
                  aria-hidden
                  className="select-none font-mono text-sm text-fog"
                >
                  /
                </span>
                <input
                  ref={inputRef}
                  autoFocus
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") close();
                  }}
                  placeholder="site"
                  aria-label="Client site name"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className="min-w-0 flex-1 bg-transparent font-mono text-sm text-chalk placeholder:text-fog/60 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Go to site"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-chalk text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        {open && (
          <p
            role={error ? "alert" : undefined}
            className={`font-mono text-[11px] tracking-wide transition-colors ${
              error ? "text-accent" : "text-fog/70"
            }`}
          >
            {error
              ? "No site by that name."
              : "Enter your site name, then press Enter."}
          </p>
        )}
      </div>
    </section>
  );
}
