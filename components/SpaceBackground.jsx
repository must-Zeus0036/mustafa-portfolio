"use client";

import { useEffect, useRef } from "react";

/**
 * SpaceBackground
 * Ambient starfield: multiple depth layers of stars drifting slowly
 * (parallax), gentle twinkle, and occasional shooting stars. Kept in
 * the site's navy/indigo palette so it reads as "this site's space"
 * rather than generic wallpaper. Respects prefers-reduced-motion.
 * Pauses when the tab is hidden.
 *
 * Usage (once, near the root):
 *   <SpaceBackground />
 *   <YourContent />
 *
 * Renders as a fixed, full-viewport canvas behind everything (z-index -1).
 */
export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Three depth layers: far (small, slow, dim) to near (bigger, faster, brighter)
    const LAYERS = [
      { count: 90, sizeRange: [0.5, 1], speed: 0.02, alpha: 0.35 },
      { count: 55, sizeRange: [1, 1.8], speed: 0.05, alpha: 0.55 },
      { count: 25, sizeRange: [1.5, 2.5], speed: 0.09, alpha: 0.85 },
    ];
    const SHOOTING_STAR_CHANCE = 0.0025; // per frame

    let width, height, layers, shootingStars, animationId, running = true;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function makeStars() {
      layers = LAYERS.map((layer) => ({
        ...layer,
        stars: new Array(layer.count).fill(0).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          r:
            layer.sizeRange[0] +
            Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]),
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
        })),
      }));
      shootingStars = [];
    }

    resize();
    makeStars();
    window.addEventListener("resize", resize);

    function drawStaticFrame() {
      ctx.fillStyle = "#080b14";
      ctx.fillRect(0, 0, width, height);
      layers.forEach((layer) => {
        layer.stars.forEach((s) => {
          ctx.fillStyle = `rgba(199, 210, 254, ${layer.alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    }

    if (prefersReducedMotion) {
      drawStaticFrame();
      return () => window.removeEventListener("resize", resize);
    }

    function step() {
      // Deep-space navy background, slightly darker than site bg for depth
      ctx.fillStyle = "#080b14";
      ctx.fillRect(0, 0, width, height);

      layers.forEach((layer) => {
        layer.stars.forEach((s) => {
          // drift downward slowly (depth-based speed = parallax)
          s.y += layer.speed;
          if (s.y > height) {
            s.y = 0;
            s.x = Math.random() * width;
          }

          // twinkle via sine wave on alpha
          s.twinklePhase += s.twinkleSpeed;
          const twinkle = 0.6 + 0.4 * Math.sin(s.twinklePhase);

          ctx.fillStyle = `rgba(199, 210, 254, ${layer.alpha * twinkle})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // occasionally spawn a shooting star from a random top-ish position
      if (Math.random() < SHOOTING_STAR_CHANCE) {
        const startX = Math.random() * width;
        const startY = Math.random() * height * 0.4;
        shootingStars.push({
          x: startX,
          y: startY,
          vx: 6 + Math.random() * 4,
          vy: 3 + Math.random() * 2,
          life: 0,
          maxLife: 40,
        });
      }

      // draw + advance shooting stars
      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
      shootingStars.forEach((s) => {
        const tailX = s.x - s.vx * 4;
        const tailY = s.y - s.vy * 4;
        const fade = 1 - s.life / s.maxLife;

        const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(224, 231, 255, ${fade})`);
        gradient.addColorStop(1, "rgba(224, 231, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life++;
      });

      if (running) animationId = requestAnimationFrame(step);
    }

    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (running) step();
      else cancelAnimationFrame(animationId);
    }

    document.addEventListener("visibilitychange", handleVisibility);
    step();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, background: "#080b14" }}
    />
  );
}
