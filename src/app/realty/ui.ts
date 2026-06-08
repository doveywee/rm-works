/* Server-safe shared utilities. Kept out of the "use client" component module
   so server components can call them directly during static rendering. */

export const serifCls = "[font-family:var(--font-serif)]";

export const cx = (...c: (string | false | undefined | null)[]) =>
  c.filter(Boolean).join(" ");
