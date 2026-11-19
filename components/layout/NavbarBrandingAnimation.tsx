"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseOffset: number;
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  angle: number;
  size: number;
  alpha: number;
}

export default function NavbarBrandingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    let lastTime = performance.now();
    let time = 0;

    // Cached dimensions to prevent synchronous reflow
    let curWidth = 0;
    let curHeight = 0;

    // Respect prefers-reduced-motion
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

    // Dynamic Network Nodes (interconnected points)
    let nodes: NodePoint[] = [];
    const initNodes = (w: number, h: number) => {
      nodes = [];
      const nodeCount = Math.min(18, Math.max(8, Math.floor(w / 32))); // optimized node count
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.4 + 1.1,
          baseAlpha: Math.random() * 0.45 + 0.35,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    // Floating Golden Dust Particles
    let dustParticles: Particle[] = [];
    const initDust = (w: number, h: number) => {
      dustParticles = [];
      const dustCount = Math.min(16, Math.max(8, Math.floor(w / 24)));
      for (let i = 0; i < dustCount; i++) {
        dustParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: Math.random() * 0.35 + 0.15,
          angle: Math.random() * Math.PI * 2,
          size: Math.random() * 1.1 + 0.6,
          alpha: Math.random() * 0.45 + 0.2,
        });
      }
    };

    // Canvas Resize with Cached Dimensions & Retina Support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      curWidth = rect.width;
      curHeight = rect.height;
      if (curWidth <= 0 || curHeight <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(curWidth * dpr);
      canvas.height = Math.round(curHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale
      ctx.scale(dpr, dpr);

      initNodes(curWidth, curHeight);
      initDust(curWidth, curHeight);

      if (isReducedMotion) {
        draw(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Pause when off-screen
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

    // Ultra-smooth draw using cached curWidth/curHeight and zero getBoundingClientRect
    const draw = (t: number) => {
      const w = curWidth;
      const h = curHeight;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);

      // ========================================================
      // 1. FLOWING GOLDEN WAVES
      // ========================================================
      const waveLayers = 3; // reduced from 4 for optimal mobile performance
      const baseY = h * 0.6;
      for (let layer = 0; layer < waveLayers; layer++) {
        const depth = layer / (waveLayers - 1);
        const speed = 0.5 + depth * 0.4;
        const phase = layer * 1.4;
        const amplitude = 6 + depth * 5;
        const waveAlpha = (0.12 + depth * 0.22) * 0.35;

        ctx.beginPath();
        let first = true;
        for (let x = -10; x <= w + 10; x += 14) {
          const y =
            baseY +
            (depth - 0.5) * 14 +
            Math.sin(x * 0.02 + t * speed + phase) * amplitude +
            Math.cos(x * 0.01 - t * 0.3 * speed) * (amplitude * 0.5);

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = `rgba(229, 193, 141, ${waveAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ========================================================
      // 2. ANIMATED CONNECTING NETWORK LINES (BATCHED DRAW CALL)
      // ========================================================
      const maxDistSq = 75 * 75; // avoid Math.hypot square root in inner loop
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const ni = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nj = nodes[j];
          const dx = ni.x - nj.x;
          const dy = ni.y - nj.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            ctx.moveTo(ni.x, ni.y);
            ctx.lineTo(nj.x, nj.y);
          }
        }
      }
      ctx.strokeStyle = "rgba(200, 154, 98, 0.22)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // ========================================================
      // 3. GLOWING GOLDEN NETWORK NODES (NO SLOW SHADOWBLUR)
      // ========================================================
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!isReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 10) {
            node.x = 10;
            node.vx = Math.abs(node.vx);
          } else if (node.x > w - 10) {
            node.x = w - 10;
            node.vx = -Math.abs(node.vx);
          }
          if (node.y < 8) {
            node.y = 8;
            node.vy = Math.abs(node.vy);
          } else if (node.y > h - 8) {
            node.y = h - 8;
            node.vy = -Math.abs(node.vy);
          }
        }

        const pulse = Math.sin(t * 2.5 + node.pulseOffset) * 0.3 + 0.7;
        const currentAlpha = node.baseAlpha * pulse;

        // Outer glow without costly shadowBlur filter
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 193, 141, ${currentAlpha * 0.2})`;
        ctx.fill();

        // Solid inner core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0
          ? `rgba(247, 240, 231, ${Math.min(1, currentAlpha * 1.1)})`
          : `rgba(200, 154, 98, ${currentAlpha})`;
        ctx.fill();
      }

      // ========================================================
      // 4. FLOATING GOLDEN DUST PARTICLES (BATCHED PATH)
      // ========================================================
      ctx.fillStyle = "rgba(229, 193, 141, 0.35)";
      ctx.beginPath();
      for (const p of dustParticles) {
        if (!isReducedMotion) {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;

          if (p.x < 0) p.x = w;
          else if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          else if (p.y > h) p.y = 0;
        }

        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();
    };

    // Animation Loop
    const loop = (currentTime: number) => {
      if (!isVisible || !isPageVisible || isReducedMotion) return;

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Cap delta to prevent jump after backgrounding
      time += Math.min(delta, 0.05);

      draw(time);
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full -z-0 opacity-80"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    />
  );
}


