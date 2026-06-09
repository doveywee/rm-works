import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar, Footer } from "./components";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-p",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-p",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Chantelle Peden Hunt, MBA · Life Insurance & Financial Strategies · Corona, Riverside & the Inland Empire",
  description:
    "Chantelle Peden Hunt, MBA, Licensed Agent with New York Life, provides personalized life insurance, retirement planning, and financial strategies for families, professionals, and business owners across Corona, Riverside, and the Inland Empire, CA. Request a quote or schedule a consultation.",
  keywords: [
    "life insurance agent in Corona CA",
    "life insurance in Riverside CA",
    "New York Life agent Inland Empire",
    "retirement planning Corona Riverside",
    "small business insurance Riverside County",
    "financial strategies Southern California",
  ],
  openGraph: {
    title:
      "Chantelle Peden Hunt, MBA · Licensed Agent with New York Life",
    description:
      "Personalized insurance and financial strategies for families, professionals, and business owners across Corona, Riverside, and the Inland Empire.",
    type: "website",
  },
};

export default function PedenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-screen bg-white text-[#16202B] [font-family:var(--font-sans-p)] antialiased selection:bg-[#BD9B5A]/25`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
