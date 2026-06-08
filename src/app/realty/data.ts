/* ============================================================================
   Crestline Realty Group — sample data
   ----------------------------------------------------------------------------
   Everything a real deployment would pull from a CRM / MLS feed lives here as
   plain, typed sample content. Swap these arrays to re-skin the whole site for
   a different brokerage or agent.
   ========================================================================== */

export const company = {
  name: "Crestline Realty Group",
  short: "Crestline",
  tagline: "Trusted local experts for buyers, sellers, and investors.",
  phone: "(909) 555-0142",
  phoneHref: "tel:+19095550142",
  email: "hello@crestlinerealty.com",
  address: "3795 Grand Avenue, Suite 200",
  city: "Chino Hills, CA 91709",
  license: "CA DRE #02114876",
  brokerage: "Crestline Realty Group, Inc. · Licensed Real Estate Broker",
  hours: [
    ["Monday – Friday", "8:00 AM – 7:00 PM"],
    ["Saturday", "9:00 AM – 5:00 PM"],
    ["Sunday", "By appointment"],
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
} as const;

export const stats = [
  { value: 1480, suffix: "+", label: "Homes sold" },
  { value: 18, suffix: " yrs", label: "Serving the region" },
  { value: 1.2, prefix: "$", suffix: "B+", label: "In sales volume", decimals: 1 },
  { value: 4.9, suffix: "/5", label: "Average client rating", decimals: 1 },
] as const;

/* ---- image helpers --------------------------------------------------------
   Unsplash for property/lifestyle photography only — no people/portraits.
   These load client-side, so the static export stays fully offline-buildable. */
export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const EXT = [
  "1568605114967-8130f3a36994",
  "1570129477492-45c003edd2be",
  "1564013799919-ab600027ffc6",
  "1512917774080-9991f1c4c750",
  "1600596542815-ffad4c1539a9",
  "1605276374104-dee2a0ed3cd6",
  "1583608205776-bfd35f0d9f83",
  "1613490493576-7fde63acd811",
  "1576941089067-2de3c901e126",
  "1518780664697-55e3ad937233",
  "1572120360610-d971b9d7767c",
  "1605146769289-440113cc3d00",
];
const INT = [
  "1600585154340-be6161a56a0c",
  "1600607687939-ce8a6c25118c",
  "1600566753086-00f18fb6b3ea",
  "1600210492486-724fe5c67fb0",
  "1616137466211-f939a420be84",
  "1617104551722-3b2d51366400",
  "1618221195710-dd6b41faaea6",
  "1631679706909-1844bbd07221",
];

const gallery = (i: number) => [
  img(EXT[i % EXT.length], 1600),
  img(INT[i % INT.length], 1600),
  img(INT[(i + 1) % INT.length], 1600),
  img(EXT[(i + 3) % EXT.length], 1600),
  img(INT[(i + 3) % INT.length], 1600),
];

export type Status = "For Sale" | "Pending" | "Sold" | "Open House";

export type Listing = {
  id: string;
  title: string;
  price: number;
  soldPrice?: number;
  status: Status;
  address: string;
  city: string;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: number;
  lot: number; // acres
  type: "Single Family" | "Condo" | "Townhouse" | "Luxury Estate" | "New Construction";
  year: number;
  images: string[];
  description: string;
  features: string[];
  agent: string; // agent slug
  openHouse?: string;
  coords: { q: string }; // google maps query
  mls: string;
  hoa?: number; // monthly $; omit if none
  garage: string;
  dom: number; // days on market
  schools: string;
};

export const pricePerSqft = (l: Listing) =>
  Math.round((l.status === "Sold" && l.soldPrice ? l.soldPrice : l.price) / l.sqft);

export const listings: Listing[] = [
  {
    id: "summit-ridge-estate",
    title: "Gated Payne Ranch view estate",
    price: 2398000,
    status: "Open House",
    address: "15842 Old Hickory Lane",
    city: "Chino Hills",
    neighborhood: "Chino Hills",
    beds: 5,
    baths: 5.5,
    sqft: 5180,
    lot: 0.61,
    type: "Luxury Estate",
    year: 2018,
    images: gallery(6),
    description:
      "Custom view home in the guard-gated Payne Ranch enclave, backing to open hillside with no rear neighbors. Single-level living option with a main-floor primary suite plus a downstairs guest casita with its own entrance. The kitchen runs Thermador appliances, dual islands, and a walk-in pantry, opening to a great room with 12-foot ceilings. Saltwater pool and spa, built-in BBQ, and a 4-car garage with two EV chargers. Owned solar (no lease). No Mello-Roos.",
    features: [
      "Guard-gated Payne Ranch community",
      "Main-floor primary + detached guest casita",
      "Thermador appliances, dual islands",
      "Saltwater pool, spa & built-in BBQ",
      "Owned 9.6 kW solar (no lease)",
      "4-car garage, 2 EV chargers",
      "Backs to protected open space",
      "No Mello-Roos · low special taxes",
    ],
    agent: "sofia-marin",
    openHouse: "Sat & Sun, 1:00 – 4:00 PM",
    coords: { q: "Payne Ranch Rd, Chino Hills, CA 91709" },
    mls: "CV26071184",
    hoa: 312,
    garage: "4-car attached",
    dom: 6,
    schools: "Chino Valley USD · Country Springs Elem, Townsend MS, Ayala HS",
  },
  {
    id: "vineyard-court-modern",
    title: "Turnkey home near Victoria Gardens",
    price: 1149000,
    status: "For Sale",
    address: "12714 Honeysuckle Court",
    city: "Rancho Cucamonga",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 3,
    sqft: 3060,
    lot: 0.2,
    type: "Single Family",
    year: 2015,
    images: gallery(0),
    description:
      "Two-story on a quiet cul-de-sac in the Day Creek area, about a mile from Victoria Gardens. Downstairs bedroom and full bath work well for guests or a home office. Quartz kitchen with a large island opens to the family room and a covered California room. Whole-house fan, tankless water heater, and a 3-car tandem garage. Low-maintenance, drought-tolerant yard.",
    features: [
      "Cul-de-sac lot in Day Creek",
      "Downstairs bedroom + full bath",
      "Quartz kitchen, walk-in pantry",
      "Covered California room",
      "Tankless water heater + whole-house fan",
      "3-car tandem garage",
    ],
    agent: "daniel-okafor",
    coords: { q: "Day Creek Blvd, Rancho Cucamonga, CA 91739" },
    mls: "CV26066920",
    hoa: 0,
    garage: "3-car tandem",
    dom: 11,
    schools: "Etiwanda SD · Golden Elem, Day Creek MS, Los Osos HS",
  },
  {
    id: "claremont-craftsman",
    title: "Restored 1924 Craftsman near the Village",
    price: 1325000,
    status: "For Sale",
    address: "344 W Eighth Street",
    city: "Claremont",
    neighborhood: "Claremont",
    beds: 4,
    baths: 2,
    sqft: 2410,
    lot: 0.18,
    type: "Single Family",
    year: 1924,
    images: gallery(8),
    description:
      "Five blocks from the Claremont Village and the Sunday farmers market. Original built-ins, picture rails, and Batchelder-style fireplace, paired with a 2021 kitchen remodel and updated systems. Full copper/PEX repipe, 200-amp panel, and central AC added in 2020. Detached two-car garage with alley access and room to build an ADU. Deep, mature lot with citrus and a covered porch.",
    features: [
      "5 blocks to Claremont Village",
      "Original built-ins & period details",
      "2021 kitchen remodel",
      "Full repipe, 200-amp panel, central AC (2020)",
      "Detached garage + ADU potential",
      "Mature citrus, covered front porch",
    ],
    agent: "evelyn-hart",
    coords: { q: "W Eighth St, Claremont, CA 91711" },
    mls: "CV26059338",
    garage: "2-car detached",
    dom: 8,
    schools: "Claremont USD · Sycamore Elem, El Roble MS, Claremont HS",
  },
  {
    id: "diamond-bar-view-home",
    title: "Updated view home in 'The Country'",
    price: 1499000,
    status: "Pending",
    address: "2657 Indian Creek Road",
    city: "Diamond Bar",
    neighborhood: "Diamond Bar",
    beds: 5,
    baths: 3,
    sqft: 3640,
    lot: 0.33,
    type: "Single Family",
    year: 2001,
    images: gallery(4),
    description:
      "Elevated lot with city-light and hill views from the rear yard and primary suite. Remodeled kitchen (2022) with quartz and stainless, refinished hardwood, and a main-floor bedroom and full bath. Three-car garage, newer 5-ton HVAC, and a built-in BBQ island. Walnut Valley schools, one of the most requested districts in the area.",
    features: [
      "City-light & hillside views",
      "2022 kitchen remodel",
      "Main-floor bed + full bath",
      "Built-in BBQ island",
      "Newer 5-ton HVAC",
      "Walnut Valley USD",
    ],
    agent: "sofia-marin",
    coords: { q: "Diamond Bar, CA 91765" },
    mls: "TR26051207",
    hoa: 0,
    garage: "3-car attached",
    dom: 19,
    schools: "Walnut Valley USD · Castle Rock Elem, South Pointe MS, Diamond Bar HS",
  },
  {
    id: "irvine-greenbelt-townhome",
    title: "Stonegate townhome on the greenbelt",
    price: 1019000,
    status: "For Sale",
    address: "118 Coralwood",
    city: "Irvine",
    neighborhood: "Irvine",
    beds: 3,
    baths: 2.5,
    sqft: 1760,
    lot: 0.04,
    type: "Townhouse",
    year: 2014,
    images: gallery(1),
    description:
      "End-unit in Stonegate with only one shared wall, steps from a greenbelt, pool, and Stonegate Elementary. Open main level with white shaker cabinets, quartz counters, and a private patio. Attached two-car garage, tankless water heater, and assigned to award-winning Irvine Unified schools. Low tax rate for the area and resort-style community amenities.",
    features: [
      "End-unit, one shared wall",
      "Steps to greenbelt, pool & park",
      "Walk to Stonegate Elementary",
      "Quartz kitchen, private patio",
      "Attached 2-car garage, tankless WH",
      "Irvine USD · resort amenities",
    ],
    agent: "daniel-okafor",
    coords: { q: "Stonegate, Irvine, CA 92620" },
    mls: "OC26063415",
    hoa: 215,
    garage: "2-car attached",
    dom: 9,
    schools: "Irvine USD · Stonegate Elem, Sierra Vista MS, Northwood HS",
  },
  {
    id: "orange-county-coastal",
    title: "Newer build two blocks from the sand",
    price: 3195000,
    status: "For Sale",
    address: "412 Marigold Avenue",
    city: "Corona del Mar",
    neighborhood: "Orange County",
    beds: 4,
    baths: 4.5,
    sqft: 3120,
    lot: 0.07,
    type: "Luxury Estate",
    year: 2020,
    images: gallery(7),
    description:
      "Front unit of a detached duplex in the CdM Village flower streets, two blocks to the beach and walkable to dining on PCH. Three levels with a rooftop deck and ocean peeks, an elevator, and La Cantina folding doors to a private courtyard. White oak floors, Wolf/Sub-Zero kitchen, and an attached two-car garage. No HOA.",
    features: [
      "2 blocks to the beach, walk to PCH",
      "Rooftop deck with ocean peeks",
      "Private elevator, 3 levels",
      "La Cantina doors to courtyard",
      "Wolf / Sub-Zero kitchen, white oak floors",
      "Attached 2-car garage · no HOA",
    ],
    agent: "evelyn-hart",
    coords: { q: "Marigold Ave, Corona del Mar, CA 92625" },
    mls: "NP26044180",
    garage: "2-car attached",
    dom: 27,
    schools: "Newport-Mesa USD · Harbor View Elem, CdM Middle & High",
  },
  {
    id: "new-haven-new-build",
    title: "Never-lived-in home at The Resort",
    price: 1049000,
    status: "Open House",
    address: "3877 Crescent Court",
    city: "Ontario",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 3,
    sqft: 2880,
    lot: 0.13,
    type: "New Construction",
    year: 2025,
    images: gallery(5),
    description:
      "Brand-new Lennar home at The Resort in Ontario Ranch, never occupied, with the balance of the builder warranty. Included owned solar, tankless water heater, and a downstairs bedroom and bath. Open kitchen with a quartz island, walk-in pantry, and upgraded LVP flooring throughout the main level. Walk to the community clubhouse, pools, and the central park.",
    features: [
      "Never lived in · builder warranty",
      "Owned solar + tankless water heater",
      "Downstairs bed + full bath",
      "Quartz island, walk-in pantry",
      "Walk to clubhouse & pools",
      "EV-ready 2-car garage",
    ],
    agent: "daniel-okafor",
    openHouse: "Daily, 10:00 AM – 5:00 PM",
    coords: { q: "The Resort, Ontario Ranch, Ontario, CA 91761" },
    mls: "IV26068021",
    hoa: 176,
    garage: "2-car attached",
    dom: 4,
    schools: "Mountain View SD + Chaffey Joint Union HSD",
  },
  {
    id: "the-preserve-condo",
    title: "Bright corner condo at The Preserve",
    price: 599000,
    status: "For Sale",
    address: "8336 Sunset Rose Drive #204",
    city: "Chino",
    neighborhood: "Chino Hills",
    beds: 2,
    baths: 2,
    sqft: 1240,
    lot: 0,
    type: "Condo",
    year: 2019,
    images: gallery(2),
    description:
      "Upper corner unit with no one above, extra windows, and a private balcony overlooking the greenbelt. Open layout with a quartz kitchen, in-unit laundry, and a primary suite with a walk-in closet. Two assigned parking spaces and access to The Preserve's pools, parks, and trails. Great first home or low-maintenance lock-and-leave.",
    features: [
      "Top-floor corner unit, no one above",
      "Private greenbelt-view balcony",
      "Quartz kitchen, in-unit laundry",
      "Primary suite w/ walk-in closet",
      "2 assigned parking spaces",
      "Pools, parks & trails",
    ],
    agent: "sofia-marin",
    coords: { q: "The Preserve, Chino, CA 91708" },
    mls: "CV26057742",
    hoa: 268,
    garage: "2 assigned spaces",
    dom: 14,
    schools: "Chino Valley USD · Cal Aero Preserve Academy K-8",
  },
  {
    id: "alta-loma-ranch",
    title: "Single-story on a half-acre in Alta Loma",
    price: 1129000,
    status: "Sold",
    soldPrice: 1165000,
    address: "9612 Hillside Road",
    city: "Rancho Cucamonga",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 2,
    sqft: 2640,
    lot: 0.47,
    type: "Single Family",
    year: 1996,
    images: gallery(3),
    description:
      "Rare single-story on a flat 0.47-acre lot north of Banyan with mountain views and gated RV parking. Remodeled primary bath, newer roof (2022), and an oversized 3-car garage. Room for a pool and ADU, with pre-plans available. Sold with multiple offers in eight days, $36k over list.",
    features: [
      "Single story on 0.47-acre flat lot",
      "Gated RV parking · room for ADU",
      "Mountain views north of Banyan",
      "Newer roof (2022)",
      "Oversized 3-car garage",
      "Sold $36k over list in 8 days",
    ],
    agent: "evelyn-hart",
    coords: { q: "Hillside Rd, Alta Loma, Rancho Cucamonga, CA 91737" },
    mls: "CV26021553",
    garage: "3-car attached",
    dom: 8,
    schools: "Alta Loma SD · Carnelian Elem, Alta Loma JHS, Alta Loma HS",
  },
  {
    id: "woodbury-irvine-estate",
    title: "Woodbury home with detached casita",
    price: 1849000,
    status: "Sold",
    soldPrice: 1880000,
    address: "59 Secret Garden",
    city: "Irvine",
    neighborhood: "Irvine",
    beds: 5,
    baths: 4,
    sqft: 3540,
    lot: 0.11,
    type: "Single Family",
    year: 2008,
    images: gallery(9),
    description:
      "Detached casita off a private front courtyard, ideal for multi-gen living or a home office. Main house has a downstairs bed and bath, a chef's kitchen with double ovens, and a built-in California room. Steps to Woodbury Town Center, the community pools, and Woodbury Elementary. Closed at $1.88M with a 12-day escrow.",
    features: [
      "Detached casita + private courtyard",
      "Downstairs bedroom & full bath",
      "Double-oven kitchen, walk-in pantry",
      "Built-in California room",
      "Walk to Woodbury Town Center",
      "Irvine USD · resort amenities",
    ],
    agent: "daniel-okafor",
    coords: { q: "Woodbury, Irvine, CA 92620" },
    mls: "OC26009447",
    hoa: 245,
    garage: "2-car attached",
    dom: 5,
    schools: "Irvine USD · Woodbury Elem, Jeffrey Trail MS, Portola HS",
  },
  {
    id: "claremont-village-bungalow",
    title: "Updated bungalow near the Colleges",
    price: 859000,
    status: "Sold",
    soldPrice: 889000,
    address: "271 W Tenth Street",
    city: "Claremont",
    neighborhood: "Claremont",
    beds: 3,
    baths: 2,
    sqft: 1540,
    lot: 0.15,
    type: "Single Family",
    year: 1949,
    images: gallery(10),
    description:
      "Move-in-ready bungalow a few blocks from the Claremont Colleges and Village. Refinished oak floors, updated kitchen and baths, and a permitted bonus room that works as an office or fourth bedroom. Deep lot with a detached garage and alley access for a future ADU. Sold above list with seven offers.",
    features: [
      "Walk to the Colleges & Village",
      "Refinished oak floors",
      "Permitted bonus room / office",
      "Deep lot, alley-access garage",
      "ADU potential",
      "Sold above list, 7 offers",
    ],
    agent: "evelyn-hart",
    coords: { q: "W Tenth St, Claremont, CA 91711" },
    mls: "CV26004611",
    garage: "1-car detached",
    dom: 6,
    schools: "Claremont USD · Oakmont Elem, El Roble MS, Claremont HS",
  },
  {
    id: "diamond-bar-investor",
    title: "Updated duplex with both units leased",
    price: 1289000,
    status: "For Sale",
    address: "508 N Prospectors Road",
    city: "Diamond Bar",
    neighborhood: "Diamond Bar",
    beds: 6,
    baths: 4,
    sqft: 2980,
    lot: 0.27,
    type: "Single Family",
    year: 1988,
    images: gallery(11),
    description:
      "Side-by-side duplex, each unit 3 bed / 2 bath with its own attached garage, separate gas and electric meters, and in-unit laundry. Both units renovated in 2021 (kitchens, baths, flooring) and leased to long-term tenants at $3,150 and $3,250/month. Roughly 5.0% cap at list. Good house-hack or 1031 target in Walnut Valley schools.",
    features: [
      "Two 3/2 units, separate meters",
      "Both attached garages + in-unit laundry",
      "Renovated 2021 · leased long-term",
      "$6,400/mo gross · ~5.0% cap",
      "Walnut Valley USD",
      "House-hack or 1031 candidate",
    ],
    agent: "marcus-bennett",
    coords: { q: "N Prospectors Rd, Diamond Bar, CA 91765" },
    mls: "TR26060338",
    garage: "2 attached (one per unit)",
    dom: 16,
    schools: "Walnut Valley USD · Quail Summit Elem, Chaparral MS, Diamond Bar HS",
  },
];

export const findListing = (id: string) => listings.find((l) => l.id === id);
export const forSale = listings.filter((l) => l.status !== "Sold");
export const recentSales = listings.filter((l) => l.status === "Sold");
export const featured = listings.filter((l) =>
  ["summit-ridge-estate", "vineyard-court-modern", "orange-county-coastal", "irvine-greenbelt-townhome", "claremont-craftsman", "new-haven-new-build"].includes(l.id),
);

/* ---- agents -------------------------------------------------------------- */
export type Agent = {
  slug: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  license: string;
  bio: string[];
  specialties: string[];
  languages: string[];
  areas: string[];
  sales: string;
  social: { instagram?: string; linkedin?: string; facebook?: string };
};

export const agents: Agent[] = [
  {
    slug: "sofia-marin",
    name: "Sofia Marín",
    title: "Founder & Principal Broker",
    phone: "(909) 555-0148",
    email: "sofia@crestlinerealty.com",
    license: "CA DRE #01489204",
    bio: [
      "Sofia has been licensed since 2008 and founded Crestline that same year. She has closed more than 600 transactions, most of them in Chino Hills, Diamond Bar, and the surrounding hills, and holds the CRS and Certified Luxury Home Marketing Specialist (CLHMS) designations.",
      "A Chino Hills resident, she works mainly by referral and keeps her active listing count low so each seller gets her direct attention from pricing through close. She is known for disciplined pricing and steady, well-prepared negotiation.",
    ],
    specialties: ["Luxury & view estates", "Move-up sellers", "Pricing & negotiation"],
    languages: ["English", "Spanish"],
    areas: ["Chino Hills", "Diamond Bar", "Rancho Cucamonga"],
    sales: "600+ homes closed",
    social: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    slug: "daniel-okafor",
    name: "Daniel Okafor",
    title: "Senior Buyer's Agent",
    phone: "(909) 555-0151",
    email: "daniel@crestlinerealty.com",
    license: "CA DRE #01996532",
    bio: [
      "Daniel works almost exclusively with buyers and has helped more than 200 families purchase homes since 2014, focused on Irvine and the I-15 corridor. After a prior career in mortgage lending, he runs the numbers on every offer and is an Accredited Buyer's Representative (ABR).",
      "He has a track record of winning in multiple-offer situations without overpaying, and he is candid with clients about a home's flaws as well as its strengths. He is a relocation-approved agent for several large local employers.",
    ],
    specialties: ["First-time buyers", "Relocation", "New construction"],
    languages: ["English"],
    areas: ["Irvine", "Rancho Cucamonga", "Ontario"],
    sales: "200+ buyers represented",
    social: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    slug: "evelyn-hart",
    name: "Evelyn Hart",
    title: "Listing Specialist",
    phone: "(909) 555-0156",
    email: "evelyn@crestlinerealty.com",
    license: "CA DRE #02047781",
    bio: [
      "Evelyn is Crestline's listing specialist and a Certified Staging Professional. Since 2016 she has listed and sold over 180 homes, with a focus on Claremont's historic Craftsmans and coastal Orange County. Her listings sell, on average, in under three weeks.",
      "She handles pricing, prep, staging, professional media, and the full digital rollout for every seller. Clients hire her for the results and stay for the organized, low-stress process.",
    ],
    specialties: ["Listing & marketing", "Staging", "Historic & coastal homes"],
    languages: ["English", "French"],
    areas: ["Claremont", "Orange County", "Diamond Bar"],
    sales: "180+ homes sold",
    social: { instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    slug: "marcus-bennett",
    name: "Marcus Bennett",
    title: "Investment Advisor",
    phone: "(909) 555-0159",
    email: "marcus@crestlinerealty.com",
    license: "CA DRE #01872240",
    bio: [
      "Marcus advises investors across the Inland Empire, from first rental properties to 1031 exchanges and small multi-family. Licensed since 2011 with a background in commercial underwriting, he builds the financial model on every deal before a client writes an offer.",
      "He focuses on cash-flow and value-add opportunities in Rancho Cucamonga, Ontario, and Chino, and represents several out-of-state owners managing portfolios from a distance.",
    ],
    specialties: ["Investment property", "1031 exchanges", "Small multi-family"],
    languages: ["English"],
    areas: ["Rancho Cucamonga", "Ontario", "Chino"],
    sales: "$190M+ in investment sales",
    social: { linkedin: "https://linkedin.com" },
  },
];

export const findAgent = (slug: string) => agents.find((a) => a.slug === slug);
export const listingsByAgent = (slug: string) =>
  listings.filter((l) => l.agent === slug);

/* ---- neighborhoods ------------------------------------------------------- */
export type Neighborhood = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
  avgPrice: string;
  lifestyle: string[];
  schools: string;
  restaurants: string;
  shopping: string;
  commute: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "chino-hills",
    name: "Chino Hills",
    image: img("1518780664697-55e3ad937233", 1200),
    blurb:
      "Rolling hills, top schools, and newer estate communities make Chino Hills one of the region's most sought-after family addresses.",
    avgPrice: "$1.05M",
    lifestyle: ["Hillside trails", "Parks & sports complexes", "Family-friendly"],
    schools: "Chino Valley USD — many 8–10 GreatSchools ratings",
    restaurants: "The Shoppes at Chino Hills dining district",
    shopping: "The Shoppes, Costco, Trader Joe's",
    commute: "~35 min to DTLA · SR-71 & SR-60 access",
  },
  {
    slug: "irvine",
    name: "Irvine",
    image: img("1570129477492-45c003edd2be", 1200),
    blurb:
      "Master-planned, walkable villages, nationally ranked schools, and a thriving job market — Irvine is Orange County living at its most polished.",
    avgPrice: "$1.45M",
    lifestyle: ["Master-planned villages", "Greenbelts & pools", "Safest big city in the U.S."],
    schools: "Irvine USD — among California's highest performing",
    restaurants: "Diamond Jamboree, Woodbury Town Center",
    shopping: "Irvine Spectrum, South Coast nearby",
    commute: "~20 min to John Wayne Airport · I-5 & I-405",
  },
  {
    slug: "claremont",
    name: "Claremont",
    image: img("1600596542815-ffad4c1539a9", 1200),
    blurb:
      "Tree-lined streets, the Claremont Colleges, and a walkable Village give this town a timeless, college-town charm.",
    avgPrice: "$1.10M",
    lifestyle: ["Historic Craftsman homes", "Walkable Village", "Arts & college culture"],
    schools: "Claremont USD + the Claremont Colleges",
    restaurants: "Claremont Village cafés & bistros",
    shopping: "The Village, Sunday farmers market",
    commute: "Metrolink to DTLA · I-10 access",
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    image: img("1564013799919-ab600027ffc6", 1200),
    blurb:
      "Mountain-view neighborhoods, new construction, and the Victoria Gardens lifestyle center anchor this fast-growing favorite.",
    avgPrice: "$865K",
    lifestyle: ["Mountain views", "New communities", "Outdoor recreation"],
    schools: "Multiple districts, several highly rated",
    restaurants: "Victoria Gardens dining",
    shopping: "Victoria Gardens lifestyle center",
    commute: "Metrolink + I-15 / I-210 access",
  },
  {
    slug: "diamond-bar",
    name: "Diamond Bar",
    image: img("1613490493576-7fde63acd811", 1200),
    blurb:
      "View lots, strong schools, and a central location between LA and OC keep Diamond Bar in steady demand.",
    avgPrice: "$1.15M",
    lifestyle: ["Hillside view homes", "Golf & country club", "Central LA/OC location"],
    schools: "Walnut Valley USD — top rated",
    restaurants: "Diamond Bar Town Center",
    shopping: "Local centers + nearby malls",
    commute: "SR-57 & SR-60 interchange · ~30 min to either basin",
  },
  {
    slug: "orange-county",
    name: "Orange County Coast",
    image: img("1583608205776-bfd35f0d9f83", 1200),
    blurb:
      "From Corona del Mar to Newport, the coast offers beach-close living, world-class dining, and some of California's most coveted real estate.",
    avgPrice: "$2.30M",
    lifestyle: ["Beach-close living", "Boating & coastal trails", "Luxury market"],
    schools: "Newport-Mesa USD + private options",
    restaurants: "Fashion Island & coastal village dining",
    shopping: "Fashion Island, South Coast Plaza",
    commute: "~25 min to John Wayne Airport · PCH & I-405",
  },
];

export const findNeighborhood = (slug: string) =>
  neighborhoods.find((n) => n.slug === slug);

/* ---- testimonials -------------------------------------------------------- */
export const testimonials = [
  {
    name: "The Reyes Family",
    role: "Buyers · Chino Hills",
    rating: 5,
    text: "Sofia found us our dream home before it ever hit the market and negotiated $40k under asking. We never felt rushed or pressured — just genuinely cared for.",
  },
  {
    name: "Karen & Mike T.",
    role: "Sellers · Rancho Cucamonga",
    rating: 5,
    text: "Evelyn's staging and marketing were on another level. We had nine offers in a weekend and closed $33k over list. Worth every penny.",
  },
  {
    name: "Priya S.",
    role: "First-time buyer · Irvine",
    rating: 5,
    text: "As a first-time buyer I was terrified. Daniel walked me through every step, explained the numbers, and helped me win in a multiple-offer situation. Incredible.",
  },
  {
    name: "James O.",
    role: "Investor · Ontario",
    rating: 5,
    text: "Marcus understands the numbers cold. He helped me 1031 into a duplex that's already cash-flowing. This is the team I'll use for every deal going forward.",
  },
  {
    name: "The Nguyens",
    role: "Sellers & buyers · Diamond Bar",
    rating: 5,
    text: "They sold our home and bought our next one in the same month without a hitch. The coordination and communication were flawless.",
  },
  {
    name: "Daniela M.",
    role: "Buyer · Claremont",
    rating: 5,
    text: "Honest, patient, and deeply local. Crestline knew every street and school in the Village. We couldn't be happier in our Craftsman.",
  },
];

/* ---- blog / resources ---------------------------------------------------- */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  read: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: "first-time-home-buyer-guide",
    title: "The First-Time Home Buyer's Guide for 2026",
    excerpt:
      "From pre-approval to keys in hand, here's exactly what to expect — and how to avoid the most common first-timer mistakes.",
    category: "Buying",
    date: "May 28, 2026",
    read: "9 min read",
    image: img("1600585154340-be6161a56a0c"),
  },
  {
    slug: "how-much-is-my-home-worth",
    title: "How Much Is My Home Really Worth?",
    excerpt:
      "Online estimates are a starting point, not an answer. Here's how professionals price a home — and why it matters.",
    category: "Selling",
    date: "May 14, 2026",
    read: "6 min read",
    image: img("1600607687939-ce8a6c25118c"),
  },
  {
    slug: "best-neighborhoods-to-buy",
    title: "Best Neighborhoods to Buy in the Inland Empire This Year",
    excerpt:
      "Where value, schools, and long-term appreciation line up across our region in 2026.",
    category: "Neighborhoods",
    date: "Apr 30, 2026",
    read: "8 min read",
    image: img("1564013799919-ab600027ffc6"),
  },
  {
    slug: "buy-or-rent",
    title: "Should You Buy or Keep Renting?",
    excerpt:
      "Run the real numbers on break-even timelines, appreciation, and the lifestyle factors a calculator can't capture.",
    category: "Buying",
    date: "Apr 18, 2026",
    read: "7 min read",
    image: img("1600566753086-00f18fb6b3ea"),
  },
  {
    slug: "prepare-your-home-for-sale",
    title: "How to Prepare Your Home for Sale",
    excerpt:
      "The high-ROI repairs, staging moves, and timing decisions that help your home sell faster and for more.",
    category: "Selling",
    date: "Apr 2, 2026",
    read: "6 min read",
    image: img("1600210492486-724fe5c67fb0"),
  },
  {
    slug: "local-market-update",
    title: "Local Market Update: Q2 2026",
    excerpt:
      "Inventory, rates, and price trends across Chino Hills, Irvine, and the wider region — and what they mean for you.",
    category: "Market",
    date: "Mar 25, 2026",
    read: "5 min read",
    image: img("1616137466211-f939a420be84"),
  },
  {
    slug: "closing-costs-explained",
    title: "Closing Costs, Explained Line by Line",
    excerpt:
      "What buyers and sellers actually pay at the closing table — with real numbers for a typical local transaction.",
    category: "Buying",
    date: "Mar 11, 2026",
    read: "7 min read",
    image: img("1617104551722-3b2d51366400"),
  },
  {
    slug: "credit-score-to-buy",
    title: "What Credit Score Do You Need to Buy a Home?",
    excerpt:
      "Minimums by loan type, how your score shapes your rate, and quick wins to raise it before you apply.",
    category: "Buying",
    date: "Feb 26, 2026",
    read: "6 min read",
    image: img("1618221195710-dd6b41faaea6"),
  },
];

export const formatPrice = (n: number) =>
  n >= 1000
    ? `$${n.toLocaleString("en-US")}`
    : `$${n}`;
