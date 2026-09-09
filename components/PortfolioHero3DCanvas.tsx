"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PortfolioHero3DCanvasProps {
  className?: string;
}

// ----------------------------------------------------------------------
// Floating 2.5D/3D Digital Earth Component Using Saved Asset earth.png
// ----------------------------------------------------------------------
function ImageBasedDigitalEarth({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const earthMeshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const assemblyFactor = useRef(0);

  // Load Saved Transparent Earth Image Asset
  const earthTexture = useTexture("/images/websites/earth.png");

  // Nine to Nine Hub Brand Colors
  const creamColor = useMemo(() => new THREE.Color("#F8F1E7"), []);
  const roseColor = useMemo(() => new THREE.Color("#9E2A38"), []);
  const wineColor = useMemo(() => new THREE.Color("#5B0F18"), []);

  // 1. Generate 350 Ambient Digital Particles (Orbiting Floating Cloud)
  const { particleHomePositions, initialPositions, particleColors } = useMemo(() => {
    const count = 350;
    const homes = new Float32Array(count * 3);
    const inits = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 1.65 + Math.random() * 0.75;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta) * 1.05;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.95;
      const z = r * Math.cos(phi) * 0.85;

      homes[i * 3] = x;
      homes[i * 3 + 1] = y;
      homes[i * 3 + 2] = z;

      inits[i * 3] = x * 0.1;
      inits[i * 3 + 1] = y * 0.1;
      inits[i * 3 + 2] = z * 0.1;

      const c = Math.random() > 0.5 ? creamColor : Math.random() > 0.35 ? roseColor : wineColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { particleHomePositions: homes, initialPositions: inits, particleColors: colors };
  }, [creamColor, roseColor, wineColor]);

  const currentPositions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

  // Main Animation Loop
  useFrame((state, delta) => {
    if (!masterGroupRef.current || !particlesRef.current || !earthMeshRef.current) return;

    // Initial load assembly & smooth scale/opacity fade-in
    if (assemblyFactor.current < 1) {
      assemblyFactor.current = Math.min(1, assemblyFactor.current + delta * 0.65);
    }

    const af = assemblyFactor.current;
    const time = state.clock.elapsedTime;

    // Smooth cubic easing for assembly progress
    const easeOutCubic = 1 - Math.pow(1 - af, 3);

    // Initial scale-up & gentle float
    const baseScale = THREE.MathUtils.lerp(0.85, 1.60, easeOutCubic);
    const hoverScaleBoost = (Math.abs(mousePos.current.x) + Math.abs(mousePos.current.y)) * 0.04;
    const finalScale = baseScale + hoverScaleBoost;

    masterGroupRef.current.scale.set(finalScale, finalScale, finalScale);

    // Animate subtle ambient particles
    const geom = particlesRef.current.geometry;
    const posAttr = geom.attributes.position;
    const posArray = posAttr.array as Float32Array;

    const mx = mousePos.current.x * 2.2;
    const my = mousePos.current.y * 2.2;

    for (let i = 0; i < particleHomePositions.length / 3; i++) {
      const idx = i * 3;
      const hx = particleHomePositions[idx];
      const hy = particleHomePositions[idx + 1];
      const hz = particleHomePositions[idx + 2];

      const ix = initialPositions[idx];
      const iy = initialPositions[idx + 1];
      const iz = initialPositions[idx + 2];

      let targetX = THREE.MathUtils.lerp(ix, hx, easeOutCubic) + Math.sin(time * 1.4 + hy) * 0.015;
      let targetY = THREE.MathUtils.lerp(iy, hy, easeOutCubic) + Math.cos(time * 1.4 + hx) * 0.015;
      let targetZ = THREE.MathUtils.lerp(iz, hz, easeOutCubic);

      // Mouse proximity interaction: particles react gently on hover
      const dx = targetX - mx;
      const dy = targetY - my;
      const distSq = dx * dx + dy * dy;

      if (distSq < 2.0) {
        const pushForce = (2.0 - distSq) * 0.10;
        targetX += (dx / (Math.sqrt(distSq) + 0.001)) * pushForce;
        targetY += (dy / (Math.sqrt(distSq) + 0.001)) * pushForce;
      }

      posArray[idx] += (targetX - posArray[idx]) * 0.08;
      posArray[idx + 1] += (targetY - posArray[idx + 1]) * 0.08;
      posArray[idx + 2] += (targetZ - posArray[idx + 2]) * 0.08;
    }
    posAttr.needsUpdate = true;

    // Master 3D Group Hover Parallax & Gentle Depth Sway
    masterGroupRef.current.position.y = Math.sin(time * 1.2) * 0.06;

    const targetRotX = mousePos.current.y * 0.22;
    const targetRotY = mousePos.current.x * 0.18 + Math.sin(time * 0.4) * 0.04;

    masterGroupRef.current.rotation.x += (targetRotX - masterGroupRef.current.rotation.x) * 0.05;
    masterGroupRef.current.rotation.y += (targetRotY - masterGroupRef.current.rotation.y) * 0.05;

    // Atmosphere Rim Glow Subtle Pulse
    if (atmosphereRef.current) {
      const pulse = 1 + Math.sin(time * 2.0) * 0.04;
      atmosphereRef.current.scale.set(1.04 * pulse, 1.04 * pulse, 1.0);
    }
  });

  return (
    <group ref={masterGroupRef}>

      {/* 1. ATMOSPHERIC BACK GLOW RIM HALO (BEHIND EARTH DISC) */}
      <mesh ref={atmosphereRef} position={[0, 0, -0.05]}>
        <circleGeometry args={[1.58, 64]} />
        <meshBasicMaterial
          color={roseColor}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 2. MAIN FLOATING 2.5D/3D DIGITAL EARTH IMAGE DISC (SAVED ASSET earth.png) */}
      <mesh ref={earthMeshRef} position={[0, 0, 0]}>
        <planeGeometry args={[3.15, 3.15]} />
        <meshBasicMaterial
          map={earthTexture}
          transparent
          alphaTest={0.005}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3. AMBIENT FLOATING DIGITAL PARTICLES */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[currentPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.038}
          vertexColors
          transparent
          opacity={0.82}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

    </group>
  );
}

// Responsive Camera Controller ensuring 100% Digital Earth Containment with zero clipping
function ResponsiveCameraFitter() {
  const { camera, size } = useThree();

  useFrame(() => {
    if (!camera) return;
    const aspect = size.width / size.height;

    // Total Earth Image Disc span (~3.15 units) scaled by 1.60 with 12% padding margin
    const objectSpan = 3.15 * 1.60 * 1.12;

    const fovRad = (40 * Math.PI) / 180;
    const distForHeight = objectSpan / (2 * Math.tan(fovRad / 2));
    const distForWidth = objectSpan / (2 * Math.tan(fovRad / 2) * aspect);

    const targetZ = Math.max(distForHeight, distForWidth);

    const persCam = camera as THREE.PerspectiveCamera;
    persCam.position.z += (targetZ - persCam.position.z) * 0.08;
    persCam.aspect = aspect;
    persCam.updateProjectionMatrix();
  });

  return null;
}

export default function PortfolioHero3DCanvas({ className = "" }: PortfolioHero3DCanvasProps) {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePos.current = { x, y };
  };

  const handleMouseLeave = () => {
    mousePos.current = { x: 0, y: 0 };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full bg-transparent flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto select-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full relative z-10"
      >
        <ResponsiveCameraFitter />
        <ambientLight intensity={1.25} />
        <directionalLight position={[10, 14, 10]} intensity={2.4} color="#FFFFFF" />
        <directionalLight position={[-10, 8, -6]} intensity={1.3} color="#F8F1E7" />
        <directionalLight position={[-8, -10, -5]} intensity={1.4} color="#9E2A38" />
        <pointLight position={[0, 1.5, 4.5]} intensity={1.8} color="#FFF8F0" />
        <pointLight position={[0, -2, 3]} intensity={1.4} color="#5B0F18" />

        <Float speed={1.4} rotationIntensity={0.10} floatIntensity={0.20}>
          <ImageBasedDigitalEarth mousePos={mousePos} />
        </Float>
      </Canvas>
    </div>
  );
}
