import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Allow phones on the LAN to load dev resources (HMR + JS chunks) when
  // testing the dev server over the local network. Dev-only; ignored by the
  // static export build. Without this, Next 16 blocks the phone's cross-origin
  // requests and the client bundle never loads (page can't hydrate).
  allowedDevOrigins: ["192.168.4.63"],
};

export default nextConfig;
