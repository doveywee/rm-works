import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // rmworks.dev is deployed on Hostinger as a Git-connected Next.js *server*
  // app (it runs `next start`), so we must NOT use `output: "export"` — a
  // static export produces an `out/` folder with no server for Hostinger to
  // start, which is why earlier builds never went live. Every page here is
  // still fully static/prerendered (SSG); Hostinger just serves them through
  // the Next runtime (matches the x-nextjs-prerender headers on the live site).
  //
  // Allow phones on the LAN to load dev resources (HMR + JS chunks) when
  // testing the dev server over the local network. Dev-only.
  allowedDevOrigins: ["192.168.4.63"],
};

export default nextConfig;
