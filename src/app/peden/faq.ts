/* Peden FAQ content. Plain data (no "use client") so it can be imported by
   BOTH the client UI (components.tsx, which renders the accordion) and the
   server layout (layout.tsx, which emits FAQPage JSON-LD). Keeping it here is
   what lets the visible Q&A and the structured data stay in lockstep. */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need life insurance?",
    a: "If anyone relies on your income (a spouse, children, aging parents, or business partners), life insurance can help protect them financially if something happens to you. Chantelle will help you think through your situation and whether coverage makes sense for you.",
  },
  {
    q: "How much life insurance should I have?",
    a: "It depends on your income, debts, family needs, and long-term goals. There's no single right answer, which is why Chantelle takes time to understand your circumstances before discussing options, never a one-size-fits-all number.",
  },
  {
    q: "What is the difference between term and permanent life insurance?",
    a: "In simple terms, term life insurance covers you for a set period (like 10, 20, or 30 years), while permanent life insurance is designed to last your lifetime and may build value over time. Chantelle can explain how each works so you can decide what fits. This is general education, not specific financial advice.",
  },
  {
    q: "Can business owners get insurance for themselves or employees?",
    a: "Yes. Business owners can explore options to protect themselves, key people, and employees, as well as strategies to support business continuity. Chantelle works with small business owners and the self-employed throughout Riverside County and the Inland Empire.",
  },
  {
    q: "Do you help with retirement planning?",
    a: "Absolutely. Chantelle helps individuals and families think through retirement income, protection, and long-term financial stability as part of a broader, personalized strategy.",
  },
  {
    q: "Is a consultation required before getting a quote?",
    a: "No, but a short conversation helps. Understanding your goals allows Chantelle to provide guidance and options that actually fit your needs, rather than a generic quote.",
  },
  {
    q: "What areas do you serve?",
    a: "Chantelle serves clients across Corona, Riverside, and the greater Inland Empire in Southern California, and can often assist neighboring communities as well.",
  },
];
