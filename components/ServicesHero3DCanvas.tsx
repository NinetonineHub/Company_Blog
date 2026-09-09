"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface ServicesHero3DCanvasProps {
  className?: string;
}

interface CubeDef {
  id: number;
  homePos: [number, number, number];
  size: number;
  type: "wine" | "deepWine" | "cream" | "rose";
  rotationSpeed: [number, number, number];
  delay: number;
}

// 26 Sculpted Cubes forming the 3D "Magic Cube" Cluster
const CUBES_DATA: CubeDef[] = [
  // Core central cluster
  { id: 0, homePos: [0, 0, 0], size: 1.1, type: "wine", rotationSpeed: [0.005, 0.008, 0], delay: 0.0 },
  { id: 1, homePos: [0.85, 0.6, 0.4], size: 0.85, type: "cream", rotationSpeed: [-0.006, 0.005, 0.003], delay: 0.05 },
  { id: 2, homePos: [-0.8, -0.55, 0.5], size: 0.8, type: "deepWine", rotationSpeed: [0.004, -0.007, 0.002], delay: 0.08 },
  { id: 3, homePos: [0.65, -0.7, 0.65], size: 0.75, type: "rose", rotationSpeed: [0.007, 0.004, -0.005], delay: 0.06 },
  { id: 4, homePos: [-0.6, 0.8, -0.5], size: 0.8, type: "wine", rotationSpeed: [-0.005, -0.006, 0.004], delay: 0.07 },
  { id: 5, homePos: [0, 1.15, 0], size: 0.9, type: "cream", rotationSpeed: [0.003, 0.009, 0], delay: 0.04 },
  { id: 6, homePos: [0, -1.15, 0], size: 0.85, type: "deepWine", rotationSpeed: [-0.004, 0.006, 0.002], delay: 0.05 },

  // Secondary layer
  { id: 7, homePos: [1.2, -0.2, -0.6], size: 0.65, type: "wine", rotationSpeed: [0.006, -0.005, 0.003], delay: 0.12 },
  { id: 8, homePos: [-1.1, 0.3, 0.7], size: 0.7, type: "rose", rotationSpeed: [-0.005, 0.007, -0.004], delay: 0.10 },
  { id: 9, homePos: [0.5, 1.0, -0.85], size: 0.6, type: "cream", rotationSpeed: [0.008, -0.004, 0.002], delay: 0.11 },
  { id: 10, homePos: [-0.75, -1.0, -0.6], size: 0.65, type: "wine", rotationSpeed: [-0.004, 0.005, -0.006], delay: 0.13 },
  { id: 11, homePos: [0.95, -0.9, 0.2], size: 0.6, type: "deepWine", rotationSpeed: [0.005, -0.008, 0.003], delay: 0.14 },
  { id: 12, homePos: [-0.4, 1.45, 0.45], size: 0.55, type: "cream", rotationSpeed: [-0.007, 0.004, 0.005], delay: 0.12 },
  { id: 13, homePos: [0.7, 0.45, -1.1], size: 0.55, type: "rose", rotationSpeed: [0.004, 0.006, -0.003], delay: 0.15 },

  // Floating satellite cubes
  { id: 14, homePos: [1.5, 1.1, 0.6], size: 0.45, type: "cream", rotationSpeed: [-0.006, -0.005, 0.007], delay: 0.18 },
  { id: 15, homePos: [-1.4, -1.2, 0.8], size: 0.45, type: "wine", rotationSpeed: [0.008, 0.003, -0.005], delay: 0.19 },
  { id: 16, homePos: [1.6, -0.8, -1.0], size: 0.4, type: "rose", rotationSpeed: [-0.004, 0.009, 0.002], delay: 0.20 },
  { id: 17, homePos: [-1.5, 1.2, -0.9], size: 0.42, type: "cream", rotationSpeed: [0.007, -0.006, -0.003], delay: 0.17 },
  { id: 18, homePos: [0.3, -1.75, 0.9], size: 0.4, type: "deepWine", rotationSpeed: [-0.005, 0.004, 0.006], delay: 0.21 },
  { id: 19, homePos: [-0.5, 1.85, -0.7], size: 0.38, type: "wine", rotationSpeed: [0.006, -0.007, -0.004], delay: 0.19 },

  // Outer micro satellites
  { id: 20, homePos: [1.85, 0.2, 1.1], size: 0.3, type: "cream", rotationSpeed: [0.009, 0.002, -0.005], delay: 0.24 },
  { id: 21, homePos: [-1.8, -0.3, -1.2], size: 0.32, type: "rose", rotationSpeed: [-0.007, -0.006, 0.004], delay: 0.25 },
  { id: 22, homePos: [1.1, -1.6, 1.2], size: 0.28, type: "wine", rotationSpeed: [0.005, 0.008, -0.003], delay: 0.26 },
  { id: 23, homePos: [-1.2, 1.7, 1.0], size: 0.3, type: "cream", rotationSpeed: [-0.008, 0.004, 0.006], delay: 0.23 },
  { id: 24, homePos: [0, 2.1, 0.3], size: 0.35, type: "deepWine", rotationSpeed: [0.006, -0.005, -0.004], delay: 0.22 },
  { id: 25, homePos: [0, -2.1, -0.4], size: 0.35, type: "rose", rotationSpeed: [-0.004, 0.007, 0.005], delay: 0.24 },
];

function MagicCubeCluster({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const cubeRefs = useRef<(THREE.Group | null)[]>([]);

  // Brand Color Palette
  const wineColor = useMemo(() => new THREE.Color("#5B0F18"), []);
  const deepWineColor = useMemo(() => new THREE.Color("#3A080F"), []);
  const creamColor = useMemo(() => new THREE.Color("#F8F1E7"), []);
  const roseColor = useMemo(() => new THREE.Color("#9E2A38"), []);

  // Assembly animation progress (0 to 1 over first 2.4 seconds)
  const assemblyFactor = useRef(0);

  // Main Animation Loop
  useFrame((state, delta) => {
    if (!masterGroupRef.current) return;

    // 1. Inside-Out Expansion Intro Sequence (0 to 1)
    if (assemblyFactor.current < 1) {
      assemblyFactor.current = Math.min(1, assemblyFactor.current + delta * 0.45);
    }
    const af = assemblyFactor.current;
    const time = state.clock.elapsedTime;

    // 2. Periodic Controlled Pulse / Elegant Expansion (Every ~8 seconds)
    const pulseCycle = Math.sin(time * 0.7);
    const isPulsing = pulseCycle > 0.6;
    const pulseIntensity = isPulsing ? (pulseCycle - 0.6) * 0.35 : 0;

    // Mouse coordinates in 3D space
    const mx = mousePos.current.x * 2.2;
    const my = mousePos.current.y * 2.2;

    // 3. Animate Individual Cubes (INSIDE-OUT RADIAL EXPLOSION -> CONTROLLED REASSEMBLY)
    CUBES_DATA.forEach((cube, idx) => {
      const group = cubeRefs.current[idx];
      if (!group) return;

      const [hx, hy, hz] = cube.homePos;

      // Staggered intro progress per cube based on distance from core
      const localAf = Math.max(0, Math.min(1, (af - cube.delay) / (1 - cube.delay || 1)));

      // Calculate Radial Expansion Factor:
      // Stage 1 (0 -> 0.62): Compressed inside center (0.06x) -> Explode OUTWARD (1.45x overshoot)
      // Stage 2 (0.62 -> 1.0): Controlled reassembly back inward to home position (1.45x -> 1.0x)
      let radialFactor = 1.0;
      let cubeScaleFactor = 1.0;

      if (localAf < 0.62) {
        const p1 = localAf / 0.62;
        const ease1 = Math.sin(p1 * Math.PI * 0.5); // Smooth easeOutQuad
        radialFactor = 0.06 + ease1 * (1.45 - 0.06);
        cubeScaleFactor = 0.15 + ease1 * 0.95;
      } else {
        const p2 = (localAf - 0.62) / 0.38;
        const ease2 = 0.5 - 0.5 * Math.cos(p2 * Math.PI); // Smooth easeInOutSin
        radialFactor = 1.45 - ease2 * (1.45 - 1.0);
        cubeScaleFactor = 1.1 - ease2 * 0.1;
      }

      // Compute base target position with radial explosion factor
      let targetX = hx * radialFactor;
      let targetY = hy * radialFactor;
      let targetZ = hz * radialFactor;

      // Special case for central origin cube (0,0,0)
      if (hx === 0 && hy === 0 && hz === 0) {
        targetX = 0;
        targetY = 0;
        targetZ = 0;
      }

      // Add controlled periodic pulse expansion after intro completes
      if (localAf >= 0.95 && pulseIntensity > 0) {
        const normLen = Math.sqrt(hx * hx + hy * hy + hz * hz) || 1;
        targetX += (hx / normLen) * pulseIntensity;
        targetY += (hy / normLen) * pulseIntensity;
        targetZ += (hz / normLen) * pulseIntensity;
      }

      // Add gentle individual floating wave
      targetY += Math.sin(time * 1.8 + idx) * 0.035;
      targetX += Math.cos(time * 1.4 + idx) * 0.025;

      // Mouse Proximity Attraction / Shift
      const dx = targetX - mx;
      const dy = targetY - my;
      const distSq = dx * dx + dy * dy;
      if (distSq < 2.2) {
        const force = (2.2 - distSq) * 0.18;
        targetX += (dx / (Math.sqrt(distSq) + 0.001)) * force;
        targetY += (dy / (Math.sqrt(distSq) + 0.001)) * force;
      }

      // Smooth position update
      group.position.x += (targetX - group.position.x) * 0.1;
      group.position.y += (targetY - group.position.y) * 0.1;
      group.position.z += (targetZ - group.position.z) * 0.1;

      // Scale update
      group.scale.setScalar(cubeScaleFactor);

      // Individual slow rotation
      const [rxSpeed, rySpeed, rzSpeed] = cube.rotationSpeed;
      group.rotation.x += rxSpeed;
      group.rotation.y += rySpeed;
      group.rotation.z += rzSpeed;
    });

    // 4. Master Cluster Rotation & Hover Parallax
    masterGroupRef.current.rotation.y += delta * 0.25;

    const targetRotX = mousePos.current.y * 0.28;
    const targetRotZ = -mousePos.current.x * 0.20;
    masterGroupRef.current.rotation.x += (targetRotX - masterGroupRef.current.rotation.x) * 0.05;
    masterGroupRef.current.rotation.z += (targetRotZ - masterGroupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={masterGroupRef} position={[0, 0, 0]} scale={1.85}>
      {CUBES_DATA.map((cube, idx) => (
        <group
          key={cube.id}
          ref={(el) => {
            cubeRefs.current[idx] = el;
          }}
          position={[0, 0, 0]}
          rotation={cube.rotationSpeed}
        >
          <RoundedBox
            args={[cube.size, cube.size, cube.size]}
            radius={0.045}
            smoothness={4}
          >
            {cube.type === "wine" && (
              <meshPhysicalMaterial
                color={wineColor}
                roughness={0.18}
                metalness={0.35}
                clearcoat={1.0}
                clearcoatRoughness={0.08}
                reflectivity={0.9}
              />
            )}

            {cube.type === "deepWine" && (
              <meshPhysicalMaterial
                color={deepWineColor}
                roughness={0.25}
                metalness={0.3}
                clearcoat={0.8}
                clearcoatRoughness={0.12}
              />
            )}

            {cube.type === "cream" && (
              <meshPhysicalMaterial
                color={creamColor}
                roughness={0.14}
                metalness={0.65}
                clearcoat={1.0}
                clearcoatRoughness={0.05}
                reflectivity={0.95}
              />
            )}

            {cube.type === "rose" && (
              <meshPhysicalMaterial
                color={roseColor}
                roughness={0.2}
                metalness={0.4}
                clearcoat={1.0}
                transparent
                opacity={0.88}
              />
            )}
          </RoundedBox>
        </group>
      ))}
    </group>
  );
}

// Responsive Camera Controller ensuring 100% Magic Cube Containment with zero clipping
function ResponsiveCameraFitter() {
  const { camera, size } = useThree();

  useFrame(() => {
    if (!camera) return;
    const aspect = size.width / size.height;

    // Total 3D Magic Cube cluster bounding span (~4.8 units) scaled by 1.85 with 12% padding margin
    const objectSpan = 4.8 * 1.85 * 1.12;

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

export default function ServicesHero3DCanvas({ className = "" }: ServicesHero3DCanvasProps) {
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
        <ambientLight intensity={1.15} />
        <directionalLight position={[10, 12, 8]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-10, 8, -6]} intensity={1.2} color="#F8F1E7" />
        <directionalLight position={[-8, -10, -5]} intensity={1.4} color="#9E2A38" />
        <pointLight position={[0, 2, 4.5]} intensity={1.8} color="#FFF8F0" />
        <pointLight position={[0, -2, 3]} intensity={1.4} color="#5B0F18" />

        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.25}>
          <MagicCubeCluster mousePos={mousePos} />
        </Float>
      </Canvas>
    </div>
  );
}

