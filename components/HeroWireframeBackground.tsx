import React from "react";

export default function HeroWireframeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 
        Subtle Wine Wireframe Hands Artwork Background:
        - Hand-reaching artwork positioned diagonally across the viewport.
        - Inverted + Sepia + Hue-Rotate transforms the white wireframe lines into rich Wine #5B0F18 lines.
        - mix-blend-multiply eliminates the white image background completely on #F8F1E7 cream.
        - Controlled subtle opacity (~8%-14%) ensures perfect contrast and editorial elegance.
      */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.08] sm:opacity-[0.11] md:opacity-[0.14] mix-blend-multiply scale-110 sm:scale-125 md:scale-135 transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('/images/wireframe-hands.jpg')`,
          filter: "invert(1) sepia(1) hue-rotate(310deg) saturate(4) brightness(0.82)",
          backgroundPosition: "center center",
          transform: "translateZ(0)",
        }}
      />

      {/* Subtle Wine Radial Ambient Glow in Hero Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[800px] h-[450px] bg-[#5B0F18]/6 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
}
