# Vantage Systems — project handoff

A premium web-design studio marketing site. Built with **Next.js 16 (App Router,
Turbopack), TypeScript, Tailwind v4, framer-motion**. Dark, monotone aesthetic
with a violet/cyan accent. Originally named "AETHER", now **Vantage Systems**.

## How to run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build / type-check
```
Node 20+ recommended (built on Node 24).

## The signature hero (most-iterated piece)
`src/components/HeroReveal.tsx` — a pinned hero where:
1. The headline **"Websites with gravity."** is real text in the **Syne** font.
2. As you scroll, a **2D black hole** (CSS radial-gradient disc) grows to engulf,
   then **fades** (it does NOT collapse/close back in).
3. Each headline **word warps in individually** (spin/skew/drift/blur, staggered)
   while the whole line converges to the hole's centre — see `WarpWord`.
4. The rest of the site is **born out of the centre** (scales up + fades in over
   the page background), then **each section pops in** on its own (`ui/Reveal`
   has a spring scale-pop).
- `src/components/three/BlackHoleCanvas.tsx` + `blackHoleShaders.ts` are the OLD
  particle-text version of the hero — **no longer used** (kept for reference).

## Key files
- `src/app/layout.tsx` — fonts: Space_Grotesk (`--font-display`), Syne
  (`--font-headline`), Inter (`--font-sans`); metadata.
- `src/app/page.tsx` — composes the page inside `<HeroReveal>`.
- `src/app/globals.css` — Tailwind v4 `@theme` tokens (colors: ink/surface/line/
  mist/fog/chalk/accent/violet-glow/cyan-glow), `.font-display`, `.font-headline`,
  `.gradient-text`, marquee + cube keyframes.
- Sections: `Nav`, `LogoMarquee` (scroll-velocity marquee), `Services` (clickable
  cards → modal with unique per-service visuals), `Templates` (clickable cards →
  detail modal, no prices), `Process`, `Pricing`, `Contact`, `Footer`.
- `ui/`: `Reveal`, `MagneticButton`, `Modal`, `ScrollProgress`, `CursorGlow`, `WarpIn`.

## Version history (git branches/tags)
- `v1` / `master` (tag `v1`) — original animated 3D orb hero.
- `v2` — first scroll-driven particle black hole.
- `v3` — black hole collapses to a point, site born from it.
- `v4` (current) — rebrand to Vantage Systems, Syne headline, real-text per-word
  warp, hole fades instead of collapsing.
Switch with `git checkout <branch>`. Compare with `git diff v3 v4`.

## OPEN / TODO
- **Contact form email is wired to Web3Forms but NOT finished.** `src/components/
  Contact.tsx` POSTs to web3forms with `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
  - Need to: get a free access key at https://web3forms.com (using ruijli@icloud.com),
    put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...` (gitignored,
    so it does NOT travel with this repo — re-add on the Mac).
  - It delivers submissions to the inbox with reply-to = the sender.
  - NOTE: on the Windows machine, Windows Defender kept QUARANTINING Contact.tsx
    when it contained the external POST (flagged as data-harvesting). On macOS this
    should not happen. If a similar AV issue appears, add a folder exclusion.
- Consider deploying (Vercel) once email is done — `deploy-to-vercel` skill exists.

## Notes
- `.env.local` is gitignored (keys stay private; recreate it on the Mac).
- The folder is still named `aether-studio` (internal only; not shown to users).
