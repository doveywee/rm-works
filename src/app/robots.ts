import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

// Required for static export (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // build/output noise that occasionally ships to the web root
      disallow: ["/test/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, ""),
  };
}
