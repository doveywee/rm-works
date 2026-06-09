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
