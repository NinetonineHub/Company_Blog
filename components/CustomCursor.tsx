"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (touchDevice) {
        setIsTouch(true);
        return;
      }
    }

    let mouseX = -100;
    let mouseY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId: number;

    const updatePosition = () => {
      if (dotRef.current && ringRef.current) {
        if (!isVisible) {
          dotRef.current.style.opacity = "0";
          ringRef.current.style.opacity = "0";
        } else {
          dotRef.current.style.opacity = "1";
          ringRef.current.style.opacity = "1";
          const scale = isHovered ? 2.5 : 1;
          const offsetRing = isHovered ? 24 : 16;
          dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${scale})`;
          ringRef.current.style.transform = `translate3d(${mouseX - offsetRing}px, ${mouseY - offsetRing}px, 0)`;
          if (isHovered) {
            ringRef.current.className = "fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border border-[#5B0F18]/80 bg-[#5B0F18]/10 shadow-[0_0_20px_rgba(91,15,24,0.2)]";
          } else {
            ringRef.current.className = "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border border-[#5B0F18]/25 bg-transparent";
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) isVisible = true;

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.classList.contains("interactive-hover") ||
          target.closest(".interactive-hover") !== null;

        isHovered = isInteractive;
      }

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePosition);
    };

    const handleMouseLeave = () => {
      isVisible = false;
      updatePosition();
    };

    const handleMouseEnter = () => {
      isVisible = true;
      updatePosition();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#5B0F18] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(91,15,24,0.4)] opacity-0"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border border-[#5B0F18]/25 bg-transparent opacity-0"
      />
    </>
  );
}
