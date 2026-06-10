/* Spartan contact-page FAQ content. Plain data (no "use client") so the server
   layout can build FAQPage JSON-LD from the same source the client page renders.
   License identifiers are written out as literals here (they also live in the
   `company` object in ../components) so this stays a server-safe data module. */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I get the most accurate quote?",
    a: "Provide your moving date, pickup and drop-off locations, number of rooms, stairs or elevators, parking details, heavy items, and any packing needs.",
  },
  {
    q: "Why mention stairs, elevators, or parking?",
    a: "These details affect the time, equipment, and planning needed for the move.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Spartan Moving and Transport Inc publicly lists DOT #3480106, MC #0602297, and CAL T0192705. Customers should verify all licensing and insurance information before booking.",
  },
  {
    q: "What should I do before movers arrive?",
    a: "Pack and label boxes, clear walkways, reserve parking if needed, separate valuables, and keep important personal items with you.",
  },
  {
    q: "What items should I not put on the truck?",
    a: "Personally transport cash, jewelry, important documents, medications, hazardous materials, flammable items, and anything extremely personal or irreplaceable.",
  },
];
