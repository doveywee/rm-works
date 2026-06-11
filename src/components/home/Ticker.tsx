const tones = {
  ink: {
    band: "bg-ink",
    text: "text-paper/90",
    mark: "text-accent",
  },
  accent: {
    band: "bg-accent",
    text: "text-white",
    mark: "text-ink",
  },
};

/** Full-bleed looping band. Pauses on hover; reversible. */
export function Ticker({
  items,
  tone = "ink",
  reverse = false,
}: {
  items: string[];
  tone?: keyof typeof tones;
  reverse?: boolean;
}) {
  const t = tones[tone];
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className={`flex items-center font-mono text-[12px] uppercase tracking-[0.3em] ${t.text}`}
        >
          <span className="px-8">{item}</span>
          <span className={t.mark}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`rm-ticker overflow-hidden border-b border-rule py-4 ${t.band}`}>
      <div
        className={`rm-marquee flex w-max whitespace-nowrap ${
          reverse ? "rm-marquee--rev" : ""
        }`}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
