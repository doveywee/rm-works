import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar, Footer } from "./components";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-r",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crestline Realty Group · Find Your Next Home With Trusted Local Experts",
  description:
    "Crestline Realty Group helps buyers, sellers, and investors across Chino Hills, Irvine, Claremont, Rancho Cucamonga, Diamond Bar, and Orange County. Search homes, get a free valuation, and connect with a local expert.",
};

export default function RealtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-screen bg-white text-[#16181D] [font-family:var(--font-sans-r)] antialiased selection:bg-[#B4924E]/25`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
