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
- `v4` — rebrand to Vantage Systems, Syne headline, real-text per-word
  warp, hole fades instead of collapsing.
- `v5` (current) — design polish pass (see below).
Switch with `git checkout <branch>`. Compare with `git diff v4 v5`.

## v5 — design polish pass (DONE, branch `v5` off v4)
Applied with the global skills `frontend-design`, `ui-ux-pro-max`, `emil-design-eng`,
and `design-taste-frontend`. Treated as a *redesign-preserve* (kept the brand, dark
monotone, violet/cyan accent, Syne/Space Grotesk/Inter, and the signature hero). Changes:
- **Motion system (emil):** added strong custom easing tokens in `globals.css`
  (`--default-transition-timing-function`, `--ease-fluid`, `--ease-snappy`) so every
  `transition-*` utility uses a punchy ease-out; replaced `transition: all` in Nav/Contact
  with explicit property lists; added `:active`/`whileTap` press feedback to all CTAs
  (Nav, MagneticButton, Contact submit, Services/Templates modal buttons).
- **Hero feel:** softened the per-word warp (rotate 130→112, skew 18→13, blur 14→11) for
  a more gravitational-lensing read; seeded the black hole from a singularity (scale
  0.04 not 0); removed the animated scroll-cue (a banned taste tell).
- **AI tells removed (taste):** cut section eyebrows from 5 → 2 (kept Services "What we
  do" + Process "How we work"); fixed the banned split-header in Templates (stacked
  vertically); purged every em-dash from user-visible copy (titles, body, price ranges).
- **Layout repetition (taste 4.7):** rebuilt Process from 4 equal bordered cards into a
  connected timeline (numbered nodes on a hairline rail) so it no longer repeats the
  card-grid family used by Services/Templates/Pricing.
- **Correctness:** fixed a React 19 setState-in-effect lint error in `CursorGlow`.
Verified: `npm run build` passes (TS clean); changed files lint clean. The only remaining
lint warnings live in the dead `three/BlackHoleCanvas.tsx` reference file (out of scope).
Not yet committed — review on the running dev server first.

Skills note: design+marketing skills are installed globally (`~/.claude/skills/`).
Project folder is `vantage-systems` (renamed from aether-studio).

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
- The folder and package are named `vantage-systems`.
