import type { Metadata } from "next";
import { Instrument_Serif, Archivo, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// characterful editorial serif — used for every display headline on the
// studio homepage (the client sites load their own fonts in their layouts)
const display = Instrument_Serif({
  variable: "--font-rm-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Archivo({
  variable: "--font-rm-sans",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-rm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RM Works · Websites with gravity",
    template: "%s",
  },
  description:
    "RM Works is a premium web design studio. We engineer immersive, high-converting websites with motion, 3D, and obsessive craft.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RM Works · Websites with gravity",
    description:
      "A premium web design studio engineering immersive, high-converting websites.",
    url: "/",
    siteName: "RM Works",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RM Works · Websites with gravity",
    description:
      "A premium web design studio engineering immersive, high-converting websites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#010102] font-sans antialiased selection:bg-orange-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
