"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

interface Hero3DCanvasProps {
  className?: string;
}

// 3D Digital Growth Core with 5 Physical Orbital Rings & Network Nodes (Medium Size Composition)
function DigitalGrowthCore({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const shellLatticeRef = useRef<THREE.Mesh>(null);

  // 5 Physical Orbital Ring Refs
  const ring1Ref = useRef<THREE.Mesh>(null); // Data Orbit (Wine Metallic)
  const ring2Ref = useRef<THREE.Mesh>(null); // Connectivity Orbit (Cream Satin)
  const ring3Ref = useRef<THREE.Mesh>(null); // Marketing Orbit (Wine Highlight)
  const ring4Ref = useRef<THREE.Mesh>(null); // Technology Orbit (Translucent Ring)
  const ring5Ref = useRef<THREE.Mesh>(null); // Growth Scale Orbit (Outer Node Track)

  const nodeGroupRef = useRef<THREE.Group>(null);

  // Palette Materials
  const wineColor = new THREE.Color("#5B0F18");
  const creamColor = new THREE.Color("#F8F1E7");
  const goldEmissive = new THREE.Color("#A32837");

  // Orbiting geometric data nodes (Scaled up proportionally to max radius ~3.4)
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 45; i++) {
      const radius = 2.0 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      const scale = 0.025 + Math.random() * 0.04;
      const isCream = i % 2 === 0;
      temp.push({ x, y, z, scale, isCream });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (!mainGroupRef.current) return;

    // Smooth global rotation
    mainGroupRef.current.rotation.y += delta * 0.2;
    mainGroupRef.current.rotation.x += delta * 0.08;

    // Pulse core sphere breathing effect
    if (coreMeshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.03;
      coreMeshRef.current.scale.set(pulse, pulse, pulse);
    }

    if (shellLatticeRef.current) {
      shellLatticeRef.current.rotation.y -= delta * 0.25;
      shellLatticeRef.current.rotation.z += delta * 0.12;
    }

    // 1. Data Orbit (Wine Metallic)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.45;
      ring1Ref.current.rotation.x -= delta * 0.15;
    }

    // 2. Connectivity Orbit (Cream Satin)
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5;
      ring2Ref.current.rotation.z += delta * 0.2;
    }

    // 3. Marketing Orbit (Deep Wine Accent)
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.35;
      ring3Ref.current.rotation.y += delta * 0.25;
    }

    // 4. Technology Stack Orbit (Cream Ring extending forward)
    if (ring4Ref.current) {
      ring4Ref.current.rotation.z -= delta * 0.28;
      ring4Ref.current.rotation.x += delta * 0.18;
    }

    // 5. Growth Orbit (Outer Node Track)
    if (ring5Ref.current) {
      ring5Ref.current.rotation.y += delta * 0.24;
      ring5Ref.current.rotation.z -= delta * 0.12;
    }

    // Smooth cursor mouse-follow parallax target lerp
    const targetRotX = mousePos.current.y * 0.25;
    const targetRotY = mousePos.current.x * 0.25;
    mainGroupRef.current.rotation.x += (targetRotX - mainGroupRef.current.rotation.x) * 0.04;
    mainGroupRef.current.rotation.y += (targetRotY - mainGroupRef.current.rotation.y) * 0.04;

    // Animate node cloud
    if (nodeGroupRef.current) {
      nodeGroupRef.current.rotation.y += delta * 0.12;
      nodeGroupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={mainGroupRef}>
      {/* 1. CENTRAL GLOSSY DIGITAL GROWTH CORE (Scale 1.15 — 28% larger) */}
      <mesh ref={coreMeshRef} scale={1.15}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={wineColor}
          roughness={0.1}
          metalness={0.82}
          distort={0.32}
          speed={2.0}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* 2. TRANSLUCENT LATTICE WIREFRAME SHELL (Scale 1.45 — 26% larger) */}
      <mesh ref={shellLatticeRef} scale={1.45}>
        <icosahedronGeometry args={[1, 2]} />
        <meshPhysicalMaterial
          color={wineColor}
          transmission={0.7}
          opacity={0.65}
          transparent
          roughness={0.12}
          ior={1.45}
          thickness={0.8}
          wireframe
        />
      </mesh>

      {/* 3. ORBITAL RING 1 — DATA ORBIT (Scale 1.90 — 26.6% larger) */}
      <mesh ref={ring1Ref} scale={1.90} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <torusGeometry args={[1, 0.032, 32, 100]} />
        <meshStandardMaterial
          color={wineColor}
          metalness={0.92}
          roughness={0.1}
          emissive={goldEmissive}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* 4. ORBITAL RING 2 — CONNECTIVITY ORBIT (Scale 2.35 — 27% larger) */}
      <mesh ref={ring2Ref} scale={2.35} rotation={[-Math.PI / 3, Math.PI / 5, Math.PI / 4]}>
        <torusGeometry args={[1, 0.025, 32, 100]} />
        <meshStandardMaterial
          color={creamColor}
          metalness={0.45}
          roughness={0.18}
          emissive={creamColor}
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* 5. ORBITAL RING 3 — MARKETING ORBIT (Scale 2.80 — 27.2% larger) */}
      <mesh ref={ring3Ref} scale={2.80} rotation={[Math.PI / 3, -Math.PI / 4, 0]}>
        <torusGeometry args={[1, 0.02, 24, 90]} />
        <meshStandardMaterial
          color={wineColor}
          metalness={0.88}
          roughness={0.14}
        />
      </mesh>

      {/* 6. ORBITAL RING 4 — TECHNOLOGY STACK ORBIT (Scale 3.25 — 27.4% larger) */}
      <mesh ref={ring4Ref} scale={3.25} rotation={[0, Math.PI / 3, -Math.PI / 6]}>
        <torusGeometry args={[1, 0.016, 24, 80]} />
        <meshStandardMaterial
          color={creamColor}
          metalness={0.65}
          roughness={0.22}
          opacity={0.88}
          transparent
        />
      </mesh>

      {/* 7. ORBITAL RING 5 — GROWTH SCALE ORBIT (Scale 3.70 — 27.5% larger) */}
      <mesh ref={ring5Ref} scale={3.70} rotation={[Math.PI / 6, Math.PI / 4, Math.PI / 3]}>
        <torusGeometry args={[1, 0.013, 16, 80]} />
        <meshStandardMaterial
          color={wineColor}
          metalness={0.75}
          roughness={0.28}
          opacity={0.65}
          transparent
        />
      </mesh>

      {/* 8. ORBITING GEOMETRIC DATA NODES */}
      <group ref={nodeGroupRef}>
        {nodes.map((node, idx) => (
          <mesh key={idx} position={[node.x, node.y, node.z]}>
            <sphereGeometry args={[node.scale, 16, 16]} />
            <meshStandardMaterial
              color={node.isCream ? creamColor : wineColor}
              emissive={node.isCream ? creamColor : wineColor}
              emissiveIntensity={node.isCream ? 0.75 : 0.9}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function Hero3DCanvas({ className = "" }: Hero3DCanvasProps) {
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
      className={`relative w-full bg-transparent flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto ${className}`}
    >
      {/* 3D WebGL Canvas — Medium Composition Camera Framing */}
      <Canvas
        camera={{ position: [0, 0, 10.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full relative z-10"
      >
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[12, 12, 8]} intensity={1.7} color="#FFFFFF" />
        <directionalLight position={[-12, -10, -6]} intensity={0.65} color="#5B0F18" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#F8F1E7" />
        <pointLight position={[4, -3, -2]} intensity={1.2} color="#5B0F18" />

        {/* Continuous Floating Motion */}
        <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.35}>
          <DigitalGrowthCore mousePos={mousePos} />
        </Float>

        {/* Realistic Studio Reflection */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
