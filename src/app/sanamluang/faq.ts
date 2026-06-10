/* Sanamluang FAQ content. Plain data (no "use client") so the server layout can
   emit FAQPage JSON-LD from the same source the client page renders as a visible
   accordion. Answers use real NAP and hours from the Restaurant schema. */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Where is Sanamluang Thai Cuisine located?",
    a: "Sanamluang Thai Cuisine is at 710 South Indian Hill Blvd., Claremont, CA 91711, in the Inland Empire.",
  },
  {
    q: "What are your hours?",
    a: "We are open daily from 11:00 AM to 10:00 PM.",
  },
  {
    q: "What is the specialty at Sanamluang?",
    a: "Noodles are the specialty. House favorites include the Sanamluang Noodle, Pad Thai, Rahd Nah, and Pad See Ewe, alongside a full menu of authentic Thai dishes.",
  },
  {
    q: "Do you offer takeout?",
    a: "Yes. You can call (909) 621-0904 to place a takeout order, and our full menu is available to view on this page before you order.",
  },
  {
    q: "Do you have vegetarian options?",
    a: "Yes. We have a dedicated vegetarian section on the menu, plus many dishes that can be prepared vegetarian on request.",
  },
  {
    q: "How spicy is the food?",
    a: "Spice levels are made to order. Let us know your preference, from mild to Thai-hot, and the kitchen will adjust the heat to suit you.",
  },
];
