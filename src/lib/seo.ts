/* ============================================================================
   Shared SEO config
   ----------------------------------------------------------------------------
   All four client sites are served from ONE domain under path prefixes:
   /peden, /sanamluang, /spartan. metadataBase (set in the root
   layout) lets every route use relative canonical/OG paths that resolve
   against SITE_URL.

   ⚠️  SITE_URL is a placeholder. Set it to the real production domain — it is
   the single source of truth for canonicals, the sitemap, robots.txt, and
   absolute Open Graph URLs. Nothing else needs to change.
   ========================================================================== */

export const SITE_URL = "https://rmworks.dev";

/** Absolute URL for a given path, e.g. absoluteUrl("/peden") */
export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

/* ----------------------------------------------------------------------------
   Content-freshness signal. Bump this when copy is meaningfully revised; it
   feeds `dateModified` in every JSON-LD block and the sitemap's `lastmod`, so
   crawlers and AI answer engines see a recent "last updated" date. Kept as a
   single constant so freshness stays consistent across every route.
   -------------------------------------------------------------------------- */
export const LAST_UPDATED = "2026-06-09";

/** When the studio + client sites first went live (stable publish date). */
export const DATE_PUBLISHED = "2025-01-15";

/* ----------------------------------------------------------------------------
   Build a Schema.org FAQPage from a list of question/answer pairs. Used so the
   visible FAQ accordions double as AI-citable structured data. `url` anchors
   the @id to the page that shows the FAQ.
   -------------------------------------------------------------------------- */
export function faqPageSchema(
  path: string,
  faqs: { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(path) + "#faq",
    dateModified: LAST_UPDATED,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
