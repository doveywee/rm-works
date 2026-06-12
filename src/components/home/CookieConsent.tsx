"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/consent";

// Re-read the decision whenever it changes (this tab writes it, or another tab
// does via the `storage` event). useSyncExternalStore lets us read client-only
// storage with no hydration mismatch and no setState-in-effect.
function subscribe(onChange: () => void) {
  window.addEventListener("rmworks:consent", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("rmworks:consent", onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * Studio-Dossier cookie notice. The static HTML ships with the banner hidden
 * (server snapshot = false), so there is no flash; once mounted it shows only
 * if the visitor has made no choice under the current policy version.
 *
 * It writes to localStorage ONLY on a button click — never on load — so the
 * site stores nothing about a visitor until they act. See src/lib/consent.ts.
 */
export function CookieConsent() {
  const show = useSyncExternalStore(
    subscribe,
    () => readConsent() === null, // client: show only if no decision yet
    () => false, // server / static export: render nothing
  );

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="rm-cookie-title"
      aria-describedby="rm-cookie-body"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md"
    >
      <div className="rounded-lg border border-paper/15 bg-ink p-5 text-paper shadow-2xl shadow-black/40 sm:p-6">
        <p
          id="rm-cookie-title"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent"
        >
          Cookie notice
        </p>
        <p
          id="rm-cookie-body"
          className="mt-3 text-sm leading-relaxed text-paper/80"
        >
          This site sets no tracking or marketing cookies. We store one small
          record only if you accept below. Choosing{" "}
          <span className="text-paper">Accept</span> also consents, in advance,
          to future analytics or similar technologies in the same categories and
          for the same purposes set out in our policy — you can change your mind
          any time.{" "}
          <Link
            href="/privacy"
            className="rm-link font-medium text-paper hover:text-accent"
          >
            Privacy &amp; Cookie Policy
          </Link>
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => writeConsent("all")}
            className="inline-flex flex-1 items-center justify-center rounded-md bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-accent-deep"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => writeConsent("necessary")}
            className="inline-flex flex-1 items-center justify-center rounded-md border border-paper/25 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80 transition-colors hover:border-paper/60 hover:text-paper"
          >
            Necessary only
          </button>
        </div>
      </div>
    </div>
  );
}
