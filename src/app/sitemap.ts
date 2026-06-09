import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

// Required for static export (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes across all client sites, with priority reflecting depth.
  const staticPaths: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "monthly"],
    ["/peden", 0.9, "monthly"],
    ["/sanamluang", 0.9, "weekly"],
    ["/spartan", 0.9, "monthly"],
    ["/spartan/services", 0.7, "monthly"],
    ["/spartan/contact", 0.6, "yearly"],
  ];

  return staticPaths.map(([path, priority, changeFrequency]) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
