import { ListingsExplorer } from "../explorer";
import { PageHero, CTASection } from "../components";

const IMG =
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=80";

export default function ListingsPage() {
  return (
    <>
      <PageHero
        image={IMG}
        eyebrow="Homes For Sale"
        title="Find your place"
        sub="Search every active listing across the Inland Empire and Orange County. Filter by price, beds, baths, type, and more — then schedule a showing in a tap."
      />
      <ListingsExplorer />
      <CTASection
        title="Don't see the one yet?"
        sub="New homes hit the market every day. Tell us what you're after and we'll send matches the moment they list — often before they reach the public sites."
        primary={{ label: "Set Up Listing Alerts", href: "/realty/contact" }}
        secondary={{ label: "Talk to an Agent", href: "/realty/agents" }}
      />
    </>
  );
}
