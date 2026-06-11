import { Reveal } from "./Reveal";

const navLinks = [
  { label: "Lab", href: "#lab" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 border-b border-paper/15 pb-12 sm:flex-row">
          <p className="max-w-xs leading-relaxed text-paper/70">
            A design and engineering studio building websites with gravity.
            Remote first, working worldwide.
          </p>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:text-right">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@rmworks.dev"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-accent"
            >
              info@rmworks.dev
            </a>
          </nav>
        </div>

        {/* the studio signs its own work in 15vw type */}
        <div aria-hidden className="select-none overflow-hidden">
          <Reveal>
            <div className="font-display text-[20vw] leading-[1.05] tracking-tight text-paper/95 sm:text-[15vw]">
              RM Works<span className="text-accent">.</span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-paper/15 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} RM Works. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#top" className="transition-colors hover:text-accent">
              Back to top ↑
            </a>
            <a
              href="https://rmworks.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Web Design by RMWorks
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
