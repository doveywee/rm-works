/* ============================================================================
   Cookie / storage consent
   ----------------------------------------------------------------------------
   This site currently sets NO cookies and loads NO third-party tracking. The
   only thing stored in the browser is the consent record itself — a single
   localStorage entry that remembers the visitor's choice. Under GDPR/ePrivacy
   that record is "strictly necessary" and is allowed without prior consent.

   Anything non-essential added later (analytics, marketing pixels, etc.) MUST
   gate on `hasConsent("analytics")` / `hasConsent("marketing")` so nothing
   loads until the visitor opts in. That is what keeps the promise on the
   banner honest: no tracking storage is written before the visitor accepts.

   Bump CONSENT_VERSION when the policy changes in a way that materially widens
   what we collect — that re-prompts everyone who consented under the old terms.
   ========================================================================== */

export const CONSENT_KEY = "rmworks.consent";
export const CONSENT_VERSION = 1;

export type ConsentCategory = "analytics" | "marketing";

export type ConsentRecord = {
  /** schema/policy version this decision was made under */
  v: number;
  /** "all" = accepted everything, "necessary" = strictly-necessary only */
  status: "all" | "necessary";
  /** ISO timestamp of the decision */
  ts: string;
};

/** Read the stored decision, or null if none / stale / unparseable. */
export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    // A decision made under an older policy version is treated as absent, so
    // the banner reappears and the visitor can re-consent to the new terms.
    if (parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Persist a decision. Only ever called from a user click. */
export function writeConsent(status: ConsentRecord["status"]): ConsentRecord {
  const record: ConsentRecord = {
    v: CONSENT_VERSION,
    status,
    ts: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* storage blocked (private mode etc.) — banner just reappears next load */
  }
  // Let any listeners (future analytics loaders) react in the same session.
  window.dispatchEvent(
    new CustomEvent<ConsentRecord>("rmworks:consent", { detail: record }),
  );
  return record;
}

/**
 * The gate every non-essential script must check before it loads.
 * Today nothing calls it; it exists so that when tracking is added later it
 * cannot run unless the visitor has accepted.
 */
export function hasConsent(category: ConsentCategory): boolean {
  // Consent is currently all-or-nothing; `category` is accepted now so call
  // sites read clearly and so a granular model can land later without churn.
  void category;
  return readConsent()?.status === "all";
}
