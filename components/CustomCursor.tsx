"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== "undefined") {
      const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouch(touchDevice);
      if (touchDevice) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

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

        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#5B0F18] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(91,15,24,0.4)]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${
            isHovered ? 2.5 : 1
          })`,
        }}
      />
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border ${
          isHovered
            ? "w-12 h-12 border-[#5B0F18]/80 bg-[#5B0F18]/10 shadow-[0_0_20px_rgba(91,15,24,0.2)]"
            : "w-8 h-8 border-[#5B0F18]/25 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${
            position.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
}
