import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syne } from "next/font/google";
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
  title: "Vantage Systems · Websites with gravity",
  description:
    "Vantage Systems is a premium web design studio. We engineer immersive, high-converting websites with motion, 3D, and obsessive craft.",
  openGraph: {
    title: "Vantage Systems · Websites with gravity",
    description:
      "A premium web design studio engineering immersive, high-converting websites.",
    type: "website",
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
      <body className="min-h-full bg-ink text-mist font-sans antialiased selection:bg-violet-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
