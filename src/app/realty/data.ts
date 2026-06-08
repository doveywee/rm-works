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
   Unsplash for property/lifestyle photography; randomuser.me for headshots.
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
};

export const listings: Listing[] = [
  {
    id: "summit-ridge-estate",
    title: "Summit Ridge Estate",
    price: 2495000,
    status: "Open House",
    address: "14 Summit Ridge Drive",
    city: "Chino Hills",
    neighborhood: "Chino Hills",
    beds: 5,
    baths: 6,
    sqft: 5240,
    lot: 0.62,
    type: "Luxury Estate",
    year: 2019,
    images: gallery(6),
    description:
      "A statement of modern California luxury perched on a private ridge with uninterrupted canyon and city-light views. Walls of glass frame the great room, a chef's kitchen opens to a resort-style backyard, and the primary suite is its own retreat with a spa bath and view terrace.",
    features: [
      "Panoramic canyon & city-light views",
      "Chef's kitchen with Wolf & Sub-Zero",
      "Resort pool, spa & outdoor kitchen",
      "Primary suite with private terrace",
      "Home theater & temperature-controlled wine room",
      "4-car garage with EV charging",
      "Owned solar system",
      "Smart-home automation throughout",
    ],
    agent: "sofia-marin",
    openHouse: "Sat & Sun, 1:00 – 4:00 PM",
    coords: { q: "Chino Hills, CA" },
  },
  {
    id: "vineyard-court-modern",
    title: "Vineyard Court Modern",
    price: 1185000,
    status: "For Sale",
    address: "2870 Vineyard Court",
    city: "Rancho Cucamonga",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 3,
    sqft: 3120,
    lot: 0.21,
    type: "Single Family",
    year: 2016,
    images: gallery(0),
    description:
      "Crisp contemporary lines meet warm, livable spaces in this turnkey home near the Victoria Gardens district. An open great room flows to a covered California room, and the flexible downstairs suite is ideal for guests or a home office.",
    features: [
      "Open-concept great room",
      "Quartz island kitchen",
      "Downstairs guest suite",
      "Covered California room",
      "Drought-tolerant landscaping",
      "Three-car tandem garage",
    ],
    agent: "daniel-okafor",
    coords: { q: "Rancho Cucamonga, CA" },
  },
  {
    id: "claremont-craftsman",
    title: "Restored Claremont Craftsman",
    price: 1395000,
    status: "For Sale",
    address: "418 Harvard Avenue",
    city: "Claremont",
    neighborhood: "Claremont",
    beds: 4,
    baths: 3,
    sqft: 2680,
    lot: 0.19,
    type: "Single Family",
    year: 1924,
    images: gallery(8),
    description:
      "A lovingly restored Craftsman in the heart of the Claremont Village, blocks from the Colleges and the Sunday farmers market. Original built-ins and millwork pair with a thoughtfully modernized kitchen and systems.",
    features: [
      "Walk to Claremont Village",
      "Original built-ins & millwork",
      "Updated kitchen & systems",
      "Wraparound covered porch",
      "Detached studio / ADU potential",
      "Mature, private gardens",
    ],
    agent: "evelyn-hart",
    coords: { q: "Claremont Village, Claremont, CA" },
  },
  {
    id: "diamond-bar-view-home",
    title: "Diamond Bar View Home",
    price: 1525000,
    status: "Pending",
    address: "23711 Ridgeline Road",
    city: "Diamond Bar",
    neighborhood: "Diamond Bar",
    beds: 5,
    baths: 4,
    sqft: 3860,
    lot: 0.34,
    type: "Single Family",
    year: 2004,
    images: gallery(4),
    description:
      "Set on an elevated view lot in a sought-after Diamond Bar enclave, this spacious home offers soaring ceilings, a remodeled kitchen, and a backyard built for entertaining against a backdrop of rolling hills.",
    features: [
      "Elevated hillside view lot",
      "Two-story entry with natural light",
      "Remodeled kitchen & baths",
      "Built-in BBQ & fire pit",
      "Award-winning school district",
      "Low-maintenance yard",
    ],
    agent: "sofia-marin",
    coords: { q: "Diamond Bar, CA" },
  },
  {
    id: "irvine-greenbelt-townhome",
    title: "Irvine Greenbelt Townhome",
    price: 989000,
    status: "For Sale",
    address: "62 Sapphire, Plan 3",
    city: "Irvine",
    neighborhood: "Irvine",
    beds: 3,
    baths: 3,
    sqft: 1840,
    lot: 0.05,
    type: "Townhouse",
    year: 2018,
    images: gallery(1),
    description:
      "A light-filled, low-maintenance townhome steps from greenbelts, pools, and top-rated Irvine schools. The open main level is perfect for everyday living, with a private patio for morning coffee.",
    features: [
      "Steps to greenbelt & pool",
      "Top-ranked Irvine Unified schools",
      "Open kitchen with island seating",
      "Attached two-car garage",
      "Smart thermostat & EV-ready",
      "Resort-style community amenities",
    ],
    agent: "daniel-okafor",
    coords: { q: "Irvine, CA" },
  },
  {
    id: "orange-county-coastal",
    title: "Coastal Contemporary",
    price: 3250000,
    status: "For Sale",
    address: "117 Marguerite Avenue",
    city: "Corona del Mar",
    neighborhood: "Orange County",
    beds: 4,
    baths: 5,
    sqft: 3480,
    lot: 0.08,
    type: "Luxury Estate",
    year: 2021,
    images: gallery(7),
    description:
      "Moments from the village and the sand, this newer coastal contemporary blends indoor-outdoor living with designer finishes, a rooftop deck, and peeks of the Pacific from the upper level.",
    features: [
      "Walk to beach & village",
      "Rooftop deck with ocean peeks",
      "La Cantina folding glass doors",
      "Designer lighting & finishes",
      "Elevator-ready shaft",
      "Two-car garage + guest parking",
    ],
    agent: "evelyn-hart",
    coords: { q: "Corona del Mar, CA" },
  },
  {
    id: "new-haven-new-build",
    title: "New Haven New Construction",
    price: 1075000,
    status: "Open House",
    address: "7204 Compass Lane",
    city: "Ontario",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 3,
    sqft: 2940,
    lot: 0.14,
    type: "New Construction",
    year: 2024,
    images: gallery(5),
    description:
      "Brand-new and never lived in, this energy-efficient home anchors a walkable master-planned community with parks, trails, and a town center. Builder warranty and modern finishes throughout.",
    features: [
      "Never-lived-in, builder warranty",
      "Owned solar + tankless water heater",
      "Walkable community with parks",
      "Designer-selected upgrades",
      "Loft + downstairs flex room",
      "EV-ready garage",
    ],
    agent: "daniel-okafor",
    openHouse: "Daily, 10:00 AM – 5:00 PM",
    coords: { q: "Ontario Ranch, Ontario, CA" },
  },
  {
    id: "the-preserve-condo",
    title: "The Preserve Garden Condo",
    price: 619000,
    status: "For Sale",
    address: "15930 Vista Pointe #214",
    city: "Chino",
    neighborhood: "Chino Hills",
    beds: 2,
    baths: 2,
    sqft: 1280,
    lot: 0,
    type: "Condo",
    year: 2020,
    images: gallery(2),
    description:
      "An ideal first home or lock-and-leave, this bright corner condo overlooks landscaped grounds and is minutes from The Preserve's parks, trails, and shops.",
    features: [
      "Bright corner unit",
      "In-unit laundry",
      "Two assigned parking spaces",
      "Community pool & clubhouse",
      "Low-maintenance lifestyle",
      "Near parks & trails",
    ],
    agent: "sofia-marin",
    coords: { q: "The Preserve, Chino, CA" },
  },
  {
    id: "alta-loma-ranch",
    title: "Alta Loma Single-Story Ranch",
    price: 1149000,
    status: "Sold",
    soldPrice: 1182000,
    address: "9425 Hidden Farm Road",
    city: "Rancho Cucamonga",
    neighborhood: "Rancho Cucamonga",
    beds: 4,
    baths: 3,
    sqft: 2760,
    lot: 0.46,
    type: "Single Family",
    year: 1998,
    images: gallery(3),
    description:
      "A rare single-story on nearly a half acre in Alta Loma with room for a pool, RV access, and gardens, all framed by mountain views.",
    features: [
      "Single story on ~0.46 acre",
      "Mountain views",
      "RV access & potential ADU",
      "Remodeled primary bath",
      "Three-car garage",
    ],
    agent: "evelyn-hart",
    coords: { q: "Alta Loma, Rancho Cucamonga, CA" },
  },
  {
    id: "woodbury-irvine-estate",
    title: "Woodbury Estate Home",
    price: 1895000,
    status: "Sold",
    soldPrice: 1925000,
    address: "85 Tall Hedge",
    city: "Irvine",
    neighborhood: "Irvine",
    beds: 5,
    baths: 5,
    sqft: 3720,
    lot: 0.12,
    type: "Single Family",
    year: 2009,
    images: gallery(9),
    description:
      "An entertainer's home in guard-gated Woodbury with a private courtyard, casita, and resort amenities just around the corner.",
    features: [
      "Detached casita",
      "Private central courtyard",
      "Chef's kitchen",
      "Guard-gated community",
      "Walk to Woodbury Town Center",
    ],
    agent: "daniel-okafor",
    coords: { q: "Woodbury, Irvine, CA" },
  },
  {
    id: "claremont-village-bungalow",
    title: "Village Bungalow",
    price: 879000,
    status: "Sold",
    soldPrice: 905000,
    address: "236 W 11th Street",
    city: "Claremont",
    neighborhood: "Claremont",
    beds: 3,
    baths: 2,
    sqft: 1620,
    lot: 0.14,
    type: "Single Family",
    year: 1947,
    images: gallery(10),
    description:
      "Charming and updated, this bungalow lives large with a flexible bonus room and a deep lot a short stroll from the Village.",
    features: [
      "Stroll to the Village",
      "Updated kitchen",
      "Flexible bonus room",
      "Deep, usable lot",
      "Detached garage / ADU potential",
    ],
    agent: "evelyn-hart",
    coords: { q: "Claremont, CA" },
  },
  {
    id: "diamond-bar-investor",
    title: "Diamond Bar Income Duplex",
    price: 1325000,
    status: "For Sale",
    address: "512 & 514 Sunset Crossing",
    city: "Diamond Bar",
    neighborhood: "Diamond Bar",
    beds: 6,
    baths: 4,
    sqft: 3040,
    lot: 0.28,
    type: "Single Family",
    year: 1989,
    images: gallery(11),
    description:
      "A turnkey duplex in a strong rental market, ideal for house-hacking or adding to a portfolio. Both units recently updated with long-term tenants in place.",
    features: [
      "Two updated units",
      "Strong rental demand",
      "Separate meters",
      "Long-term tenants in place",
      "Value-add ADU potential",
    ],
    agent: "sofia-marin",
    coords: { q: "Diamond Bar, CA" },
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
  photo: string;
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
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: [
      "Sofia founded Crestline Realty Group with a simple belief: that local expertise and honest guidance should be the standard, not the exception. Over 18 years she has guided more than 600 families through some of the biggest decisions of their lives.",
      "A Chino Hills resident and lifelong Inland Empire local, she specializes in luxury estates and complex move-up transactions, and is known for calm, strategic negotiation that protects her clients' bottom line.",
    ],
    specialties: ["Luxury estates", "Move-up sellers", "Negotiation strategy"],
    languages: ["English", "Spanish"],
    areas: ["Chino Hills", "Diamond Bar", "Rancho Cucamonga"],
    sales: "$480M+ closed",
    social: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    slug: "daniel-okafor",
    name: "Daniel Okafor",
    title: "Senior Buyer's Agent",
    phone: "(909) 555-0151",
    email: "daniel@crestlinerealty.com",
    license: "CA DRE #01996532",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: [
      "Daniel is a tireless advocate for buyers, with a particular gift for helping first-time and relocating buyers win in competitive markets without overpaying.",
      "An Irvine specialist with a background in finance, he breaks down pre-approval, inspections, and offer strategy into clear, confident steps.",
    ],
    specialties: ["First-time buyers", "Relocation", "New construction"],
    languages: ["English"],
    areas: ["Irvine", "Rancho Cucamonga", "Orange County"],
    sales: "$310M+ closed",
    social: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    slug: "evelyn-hart",
    name: "Evelyn Hart",
    title: "Listing Specialist",
    phone: "(909) 555-0156",
    email: "evelyn@crestlinerealty.com",
    license: "CA DRE #02047781",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: [
      "Evelyn brings a designer's eye to every listing, with a full-service marketing approach that includes staging, professional media, and targeted digital exposure that consistently sells homes faster and for more.",
      "She is the go-to listing agent for Claremont's historic Craftsman homes and coastal Orange County properties alike.",
    ],
    specialties: ["Listing & marketing", "Staging", "Historic homes"],
    languages: ["English", "French"],
    areas: ["Claremont", "Orange County", "Diamond Bar"],
    sales: "$265M+ closed",
    social: { instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    slug: "marcus-bennett",
    name: "Marcus Bennett",
    title: "Investment Advisor",
    phone: "(909) 555-0159",
    email: "marcus@crestlinerealty.com",
    license: "CA DRE #01872240",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: [
      "Marcus helps investors build and optimize portfolios across the Inland Empire, from first duplexes to multi-property 1031 exchanges.",
      "He pairs market data with on-the-ground knowledge to surface deals other agents miss.",
    ],
    specialties: ["Investment property", "1031 exchanges", "Multi-family"],
    languages: ["English"],
    areas: ["Rancho Cucamonga", "Chino Hills", "Ontario"],
    sales: "$190M+ closed",
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
