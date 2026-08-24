"use client";

import { useEffect, useRef } from "react";

/**
 * CodeRainBackground
 * Ambient, low-opacity "code rain" effect tuned to the site's existing
 * navy/blue palette instead of classic green Matrix — reads as tech-signal
 * rather than pastiche. Respects prefers-reduced-motion.
 *
 * Usage (e.g. in app/layout.tsx or the hero section):
 *   <div className="relative">
 *     <CodeRainBackground />
 *     <YourContent />
 *   </div>
 *
 * The canvas is position: fixed and sits behind content (z-index -1),
 * so drop it once near the root and everything else layers on top.
 */
export default function CodeRainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Characters: mix of binary + a few syntax fragments for a "code" feel
    const glyphs =
      "01{}[]<>/;=+-*&|!?:._rustFnLetMutVecReturnBufNull".split("");

    const fontSize = 15;
    let columns = 0;
    let drops = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      // Static, very faint single pass — no animation loop at all
      ctx.fillStyle = "#0a0e17";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(129, 140, 248, 0.08)";
      for (let i = 0; i < columns; i++) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(glyph, i * fontSize, Math.random() * canvas.height);
      }
      return () => window.removeEventListener("resize", resize);
    }

    let animationId;

    function draw() {
      // Fading trail: translucent navy overlay instead of full clear
      ctx.fillStyle = "rgba(10, 14, 23, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character slightly brighter, matches accent blue (#818cf8-ish)
        ctx.fillStyle =
          Math.random() > 0.98
            ? "rgba(165, 180, 252, 0.5)"
            : "rgba(99, 102, 241, 0.14)";

        ctx.fillText(glyph, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
