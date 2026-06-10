"use client";

import { useEffect, useRef } from "react";

/**
 * Light-orange night-sky starfield, fixed behind the whole page.
 *
 * Per-star twinkling lives in CSS (`.star-layer` animations in globals.css).
 * Here we only drive the *whole field's* opacity from scroll position so it
 * stays in step with the hero's black hole: as the hole grows and engulfs the
 * first viewport the stars are pulled out of sight, then once you scroll past
 * the hole and into the real site they bloom smoothly back in.
 */
export function Starfield() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      // progress 0 -> 1 across the first viewport of scroll, matching the
      // pinned hero's scrollYProgress used in HeroReveal.
      const p = Math.min(Math.max(window.scrollY / vh, 0), 1);

      let o: number;
      if (p < 0.12) {
        o = 1; // resting night sky
      } else if (p < 0.45) {
        // consumed as the hole engulfs the screen -> fade to nothing
        o = 1 - (p - 0.12) / (0.45 - 0.12);
      } else if (p < 0.55) {
        o = 0; // gone while the hole is at full size
      } else {
        // bloom smoothly back in as the real site rises into view
        o = Math.min((p - 0.55) / (0.85 - 0.55), 1);
      }

      el.style.opacity = o.toFixed(3);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="starfield" aria-hidden>
      <span className="star-layer star-layer--1" />
      <span className="star-layer star-layer--2" />
      <span className="star-layer star-layer--3" />
      <span className="star-layer star-layer--4" />
      <span className="star-layer star-layer--5" />
      <span className="star-layer star-layer--6" />
    </div>
  );
}
