import { Reveal } from "./Reveal";

/** Dossier-style section header: mono index, ruled line, serif headline. */
export function SectionHead({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
          ({index}) {label}
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-faint sm:block">
          RM Works · Studio dossier
        </span>
      </div>
      <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl text-balance">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-soot">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
