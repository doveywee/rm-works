const groups = [
  {
    title: "Studio",
    links: ["Work", "Services", "Process", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Journal", "Contact"],
  },
  {
    title: "Social",
    links: ["Twitter / X", "Dribbble", "LinkedIn", "Instagram"],
  },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-white to-white/50">
                <span className="h-2.5 w-2.5 rounded-sm bg-ink" />
              </span>
              <span className="font-display text-lg font-semibold text-chalk">
                AETHER
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-mist">
              A design &amp; engineering studio building websites with gravity.
              Remote-first, working worldwide.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-fog">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-mist transition-colors hover:text-chalk"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-sm text-fog sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AETHER Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-chalk">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-chalk">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
