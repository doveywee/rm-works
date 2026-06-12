import type { MetadataRoute } from "next";
import { absoluteUrl, LAST_UPDATED } from "@/lib/seo";

// Required for static export (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable, intentional lastmod (see LAST_UPDATED) instead of build time, so the
  // freshness signal reflects real content edits rather than every deploy.
  const now = new Date(LAST_UPDATED);

  // Static routes across all client sites, with priority reflecting depth.
  const staticPaths: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "monthly"],
    ["/peden", 0.9, "monthly"],
    ["/sanamluang", 0.9, "weekly"],
    ["/spartan", 0.9, "monthly"],
    ["/spartan/services", 0.7, "monthly"],
    ["/spartan/contact", 0.6, "yearly"],
    ["/privacy", 0.3, "yearly"],
  ];

  return staticPaths.map(([path, priority, changeFrequency]) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
