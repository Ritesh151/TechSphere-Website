"use client";

import { useEffect, useRef } from "react";

export default function FooterAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    let time = 0;
    let curWidth = 0;
    let curHeight = 0;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        draw(0); // static snapshot
      } else {
        lastTime = performance.now();
        loop(lastTime);
      }
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Pause when tab is inactive
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && isVisible && !isReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Floating ambient gold dust particles
    interface AmbientParticle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      alpha: number;
      maxAlpha: number;
      fadeSpeed: number;
    }

    let ambientParticles: AmbientParticle[] = [];

    const initAmbientParticles = (width: number, height: number) => {
      ambientParticles = [];
      const count = Math.min(35, Math.max(12, Math.floor(width / 45))); // responsive count
      for (let i = 0; i < count; i++) {
        ambientParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.5,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -Math.random() * 0.35 - 0.1,
          alpha: Math.random() * 0.5 + 0.1,
          maxAlpha: Math.random() * 0.55 + 0.25,
          fadeSpeed: Math.random() * 0.01 + 0.005,
        });
      }
    };

    // Canvas resize handling with Cached Dimensions and Retina Display support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      curWidth = rect.width;
      curHeight = rect.height;
      if (curWidth <= 0 || curHeight <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(curWidth * dpr);
      canvas.height = Math.round(curHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initAmbientParticles(curWidth, curHeight);

      if (isReducedMotion) {
        draw(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // IntersectionObserver to pause rendering when footer is offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isPageVisible && !isReducedMotion) {
            lastTime = performance.now();
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(loop);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // -------------------------------------------------------------
    // Core Wave & Particle Mesh Render Function (Zero Reflows)
    // -------------------------------------------------------------
    const draw = (t: number) => {
      const width = curWidth;
      const height = curHeight;
      if (width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Ambient Golden Particles (Batched)
      ctx.beginPath();
      ctx.fillStyle = "rgba(229, 193, 141, 0.25)";
      for (const p of ambientParticles) {
        if (!isReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha += p.fadeSpeed;
          if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
            p.fadeSpeed = -p.fadeSpeed;
          }
          if (p.y < 0) p.y = height;
          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
        }

        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fill();

      // 2. Continuous Golden 3D Mesh Wave Parameters
      const numLines = 8; // Optimized from 14 to 8 clean, silky smooth layers
      const baseY = height * 0.68;
      const waveSpread = height * 0.28;
      const stepX = Math.max(18, Math.floor(width / 50)); // smooth step

      // Draw continuous ribbons and particles
      for (let i = 0; i < numLines; i++) {
        const depthRatio = i / (numLines - 1); // 0 (back) to 1 (front)
        const lineOffsetY = (depthRatio - 0.5) * waveSpread;
        const speedMultiplier = 0.65 + depthRatio * 0.45;
        const phaseShift = i * 0.28;

        const baseAlpha = 0.15 + depthRatio * 0.65;
        const isCrestRibbon = i >= numLines - 2;

        ctx.beginPath();
        let firstPoint = true;

        for (let x = -20; x <= width + 20; x += stepX) {
          const wave1 =
            Math.sin(x * 0.0035 + t * speedMultiplier + phaseShift) *
            (24 + depthRatio * 18);
          const wave2 =
            Math.cos(x * 0.0018 - t * 0.4 * speedMultiplier + phaseShift * 0.5) *
            (16 + depthRatio * 12);
          const y = baseY + lineOffsetY + wave1 + wave2;

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Draw line ribbon without slow shadowBlur
        ctx.strokeStyle = `rgba(229, 193, 141, ${baseAlpha * (isCrestRibbon ? 0.45 : 0.22)})`;
        ctx.lineWidth = isCrestRibbon ? 1.4 : 0.8;
        ctx.stroke();
      }
    };

    // -------------------------------------------------------------
    // Animation Loop with delta time
    // -------------------------------------------------------------
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      if (!isVisible || !isPageVisible || isReducedMotion) return;

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Increment continuous time capped
      time += Math.min(delta, 0.05) * 0.85;

      draw(time);
      animationFrameId = requestAnimationFrame(loop);
    };

    if (isReducedMotion) {
      draw(0);
    } else {
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

