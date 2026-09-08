"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface KeyboardScrollProps {
  progress: number; // 0 to 1 scroll progress
  className?: string;
}

const TOTAL_FRAMES = 250;

export default function KeyboardScroll({ progress, className = "" }: KeyboardScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const padIndex = (num: number) => String(num).padStart(3, "0");

  // Preload frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let count = 0;

    const getFrameUrl = (idx: number) => `/images/keyboard/ezgif-frame-${padIndex(idx + 1)}.jpg`;

    const loadFrame = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isMounted) return;
          loadedImages[index] = img;
          count++;
          setLoadedCount(count);
          if (count === TOTAL_FRAMES) setIsLoading(false);
          resolve();
        };
        img.onerror = () => {
          if (!isMounted) return;
          count++;
          setLoadedCount(count);
          resolve();
        };
      });
    };

    const loadAllFrames = async () => {
      // First batch for fast interactive load
      const firstBatch = Array.from({ length: 40 }, (_, i) => loadFrame(i));
      await Promise.all(firstBatch);

      // Remaining frames in background chunks
      for (let i = 40; i < TOTAL_FRAMES; i += 15) {
        if (!isMounted) break;
        const chunk = Array.from({ length: Math.min(15, TOTAL_FRAMES - i) }, (_, offset) => loadFrame(i + offset));
        await Promise.all(chunk);
      }
    };

    imagesRef.current = loadedImages;
    loadAllFrames();

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw frame on full-width canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx] || imagesRef.current[0];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Calculate full-screen cinematic fitting (object-contain with max scale)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = height * 0.88;
      drawWidth = drawHeight * imgRatio;
      offsetX = width > 768 ? width * 0.48 - drawWidth * 0.05 : (width - drawWidth) / 2;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = width * 0.95;
      drawHeight = drawWidth / imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Subtle atmospheric wine glow behind keyboard on canvas
    const glowGradient = ctx.createRadialGradient(
      width * 0.65,
      height / 2,
      10,
      width * 0.65,
      height / 2,
      Math.max(width, height) * 0.45
    );
    glowGradient.addColorStop(0, "rgba(91, 15, 24, 0.08)");
    glowGradient.addColorStop(0.5, "rgba(91, 15, 24, 0.02)");
    glowGradient.addColorStop(1, "rgba(248, 241, 231, 0)");

    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);

    // Draw keyboard frame
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // Sync canvas with scroll progress
  useEffect(() => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
    );

    const animId = requestAnimationFrame(() => {
      drawFrame(frameIndex);
    });

    return () => cancelAnimationFrame(animId);
  }, [progress, loadedCount, drawFrame]);

  const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}>
      {/* Loading Badge */}
      {isLoading && loadedCount < 40 && (
        <div className="absolute right-8 bottom-12 z-30 bg-[#FCF9F5]/90 backdrop-blur-md border border-[#5B0F18]/15 px-4 py-2 rounded-full flex items-center gap-3 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5B0F18] animate-ping" />
          <span className="text-xs font-mono text-[#24191A] font-semibold">
            LOADING HARDWARE SCENE // {loadPercentage}%
          </span>
        </div>
      )}

      {/* Full Viewport Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
    </div>
  );
}
