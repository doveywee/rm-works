import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // rmworks.dev ships as a static export. `next build` emits an `out/` folder
  // that the GitHub Actions workflow FTP-uploads to Hostinger's /public_html/
  // (static hosting — no Node server). Every page is fully prerendered, and
  // each route gets its own HTML file, which the /revamp and /privacy
  // per-document <style> repaint relies on.
  output: "export",

  // Allow phones on the LAN to load dev resources (HMR + JS chunks) when
  // testing the dev server over the local network. Dev-only.
  allowedDevOrigins: ["192.168.4.63"],
};

export default nextConfig;
