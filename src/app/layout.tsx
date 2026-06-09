import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syne } from "next/font/google";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// distinctive geometric display face — used for the hero headline
const headline = Syne({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
      className={`${display.variable} ${headline.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#010102] text-mist font-sans antialiased selection:bg-orange-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
