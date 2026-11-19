"use client";

import { useEffect, useRef } from "react";

export default function HeroBackgroundAnimation() {
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

    // prefers-reduced-motion check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
      if (isReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        draw(0);
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

    // Floating gold particle definitions
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      fadeSpeed: number;
    }

    let particles: Particle[] = [];

    const initParticles = (width: number, height: number) => {
      particles = [];
      const count = Math.min(30, Math.max(10, Math.floor(width / 50))); // responsive density
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.6,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.3 - 0.08,
          alpha: Math.random() * 0.4 + 0.1,
          maxAlpha: Math.random() * 0.55 + 0.25,
          fadeSpeed: Math.random() * 0.008 + 0.003,
        });
      }
    };

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
      initParticles(curWidth, curHeight);

      if (isReducedMotion) {
        draw(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // IntersectionObserver to pause loop when scrolled out of view
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

    // Draw flowing golden waves & particles (Zero forced reflows)
    const draw = (t: number) => {
      const width = curWidth;
      const height = curHeight;
      if (width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw floating ambient particles (Batched)
      ctx.beginPath();
      ctx.fillStyle = "rgba(185, 144, 115, 0.25)";
      for (const p of particles) {
        if (!isReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha += p.fadeSpeed;
          if (p.alpha > p.maxAlpha || p.alpha < 0.08) {
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

      // 2. Draw champagne-gold wave layers
      const waveLayers = [
        {
          baseY: height * 0.28,
          amp1: 20,
          amp2: 10,
          speed: 0.35,
          freq: 0.0028,
          alpha: 0.28,
          lineWidth: 1.1,
        },
        {
          baseY: height * 0.52,
          amp1: 26,
          amp2: 15,
          speed: 0.42,
          freq: 0.0022,
          alpha: 0.38,
          lineWidth: 1.3,
        },
        {
          baseY: height * 0.72,
          amp1: 22,
          amp2: 12,
          speed: 0.28,
          freq: 0.0032,
          alpha: 0.25,
          lineWidth: 1.0,
        },
        {
          baseY: height * 0.88,
          amp1: 28,
          amp2: 14,
          speed: 0.46,
          freq: 0.0018,
          alpha: 0.32,
          lineWidth: 1.2,
        },
      ];

      for (let i = 0; i < waveLayers.length; i++) {
        const layer = waveLayers[i];
        ctx.beginPath();

        let firstPoint = true;
        const stepX = 18;

        for (let x = -20; x <= width + 20; x += stepX) {
          const y =
            layer.baseY +
            Math.sin(x * layer.freq + t * layer.speed + i * 1.2) * layer.amp1 +
            Math.cos(x * layer.freq * 0.6 - t * layer.speed * 0.5 + i * 0.8) *
              layer.amp2;

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = `rgba(185, 144, 115, ${layer.alpha})`;
        ctx.lineWidth = layer.lineWidth;
        ctx.stroke();
      }
    };

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      if (!isVisible || !isPageVisible || isReducedMotion) return;

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
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
      className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden -z-10"
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

