"use client";

import { useEffect, useRef, type RefObject } from "react";

type Particle = {
  ox: number;
  oy: number;
  d: number; // distance from centre
  a: number; // angle from centre
  color: string;
};

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

// brand gradient across the text: white -> violet -> cyan
function colorAt(t: number) {
  const stops = [
    [255, 255, 255],
    [182, 168, 255],
    [143, 230, 255],
  ];
  const seg = t < 0.5 ? 0 : 1;
  const lt = t < 0.5 ? t / 0.5 : (t - 0.5) / 0.5;
  const a = stops[seg];
  const b = stops[seg + 1];
  const r = Math.round(a[0] + (b[0] - a[0]) * lt);
  const g = Math.round(a[1] + (b[1] - a[1]) * lt);
  const bl = Math.round(a[2] + (b[2] - a[2]) * lt);
  return `rgb(${r},${g},${bl})`;
}

const CONSUME_END = 0.95; // progress at which everything is fully swallowed

export function BlackHoleCanvas({
  progress,
  lines = ["Websites with", "gravity."],
  className = "",
}: {
  progress: RefObject<number>;
  lines?: string[];
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const geomRef = useRef({ cx: 0, cy: 0, farthest: 1, maxRadius: 1 });
  const psRef = useRef(4);
  const rafRef = useRef<number | null>(null);

  // ---- sample the text into particles --------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;

    const family =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-display")
        .trim() || "sans-serif";

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      if (cw === 0 || ch === 0) return;

      canvas.width = Math.floor(cw * dpr);
      canvas.height = Math.floor(ch * dpr);

      const step = Math.max(3, Math.round(5 * dpr));
      psRef.current = Math.max(1.5, 2.1 * dpr);

      // fit font size to the box
      let fs = Math.min(cw * 0.14, 96) * dpr;
      const weight = "600";
      const widthOf = (size: number) => {
        ctx.font = `${weight} ${size}px ${family}`;
        return Math.max(...lines.map((l) => ctx.measureText(l).width));
      };
      let w = widthOf(fs);
      const maxW = canvas.width * 0.94;
      if (w > maxW) fs *= maxW / w;
      ctx.font = `${weight} ${fs}px ${family}`;

      const lineHeight = fs * 1.14;
      const totalH = lines.length * lineHeight;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const startY = cy - totalH / 2 + lineHeight / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      lines.forEach((ln, i) =>
        ctx.fillText(ln, cx, startY + i * lineHeight)
      );

      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const parts: Particle[] = [];
      let farthest = 1;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const alpha = img.data[(y * canvas.width + x) * 4 + 3];
          if (alpha > 128) {
            const dx = x - cx;
            const dy = y - cy;
            const d = Math.hypot(dx, dy);
            if (d > farthest) farthest = d;
            parts.push({
              ox: x,
              oy: y,
              d,
              a: Math.atan2(dy, dx),
              color: colorAt(x / canvas.width),
            });
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = parts;
      geomRef.current = {
        cx,
        cy,
        farthest,
        // grow large enough to engulf the whole screen (diagonal-based)
        maxRadius: Math.hypot(canvas.width, canvas.height) * 0.72,
      };
    };

    const run = async () => {
      // wait for the web font so glyph shapes are correct
      try {
        await (
          document as unknown as { fonts?: { ready: Promise<unknown> } }
        ).fonts?.ready;
      } catch {}
      if (!cancelled) setup();
    };
    run();

    window.addEventListener("resize", setup);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", setup);
    };
  }, [lines]);

  // ---- render loop (driven by scroll progress) -----------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const { cx, cy, farthest, maxRadius } = geomRef.current;
      const ps = psRef.current;
      const parts = particlesRef.current;

      const p = clamp(progress.current ?? 0, 0, 1);
      const cp = clamp(p / CONSUME_END, 0, 1);
      const R = cp * maxRadius;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // black hole beneath the particles — grows to fill the whole screen
      const rVis = Math.min(R, maxRadius);
      if (rVis > 1) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rVis);
        g.addColorStop(0, "rgba(0,0,0,1)");
        g.addColorStop(0.7, "rgba(7,6,18,1)");
        g.addColorStop(0.9, "rgba(22,18,44,0.85)");
        g.addColorStop(1, "rgba(124,107,255,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, rVis, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        // bright rim sweeping outward
        ctx.beginPath();
        ctx.arc(cx, cy, rVis, 0, Math.PI * 2);
        ctx.lineWidth = Math.max(1, ps * 0.7);
        ctx.strokeStyle = "rgba(194,182,255,0.45)";
        ctx.stroke();
      }

      // particles pulled in + spiralling
      for (let i = 0; i < parts.length; i++) {
        const pt = parts[i];
        let x = pt.ox;
        let y = pt.oy;
        let op = 1;
        if (R > pt.d) {
          const local = clamp((R - pt.d) / (maxRadius * 0.4), 0, 1);
          const spin = pt.a + local * 3.6;
          const rr = pt.d * (1 - local);
          x = cx + Math.cos(spin) * rr;
          y = cy + Math.sin(spin) * rr;
          op = 1 - local;
        }
        if (op <= 0.01) continue;
        ctx.globalAlpha = op;
        ctx.fillStyle = pt.color;
        ctx.fillRect(x - ps / 2, y - ps / 2, ps, ps);
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [progress]);

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} />;
}
