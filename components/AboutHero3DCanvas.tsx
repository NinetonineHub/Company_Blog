"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface AboutHero3DCanvasProps {
  className?: string;
}

// Sleek Real 3D Rocket Model (PBR Metallic Body + Defined Nose, Fins, Engine Bell & Particle Trail)
function DigitalRocket({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const rocketGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const thrusterParticlesRef = useRef<THREE.Points>(null);
  const surfaceParticlesRef = useRef<THREE.Points>(null);

  // Brand Color Palette
  const wineColor = useMemo(() => new THREE.Color("#5B0F18"), []);
  const deepWineColor = useMemo(() => new THREE.Color("#3A080F"), []);
  const charcoalColor = useMemo(() => new THREE.Color("#24191A"), []);
  const creamColor = useMemo(() => new THREE.Color("#F8F1E7"), []);
  const roseHighlight = useMemo(() => new THREE.Color("#9E2A38"), []);

  // Smooth, continuous aerodynamic rocket body profile (Lathe profile without rings)
  const mainBodyPoints = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    // Smooth Ogive Nose Cone (y: 2.50 down to 1.10)
    pts.push(new THREE.Vector2(0.001, 2.50));
    pts.push(new THREE.Vector2(0.12, 2.38));
    pts.push(new THREE.Vector2(0.32, 2.15));
    pts.push(new THREE.Vector2(0.52, 1.85));
    pts.push(new THREE.Vector2(0.66, 1.50));
    pts.push(new THREE.Vector2(0.74, 1.10));

    // Smooth Cylindrical Main Body (y: 1.10 down to -0.40)
    pts.push(new THREE.Vector2(0.75, 0.60));
    pts.push(new THREE.Vector2(0.75, 0.00));
    pts.push(new THREE.Vector2(0.74, -0.40));

    // Smooth Lower Body Taper towards Engine Deck (y: -0.40 down to -1.05)
    pts.push(new THREE.Vector2(0.70, -0.75));
    pts.push(new THREE.Vector2(0.62, -1.05));

    // Integrated Compact Thruster Nozzle Bell Housing (y: -1.05 to -1.68)
    pts.push(new THREE.Vector2(0.55, -1.12));
    pts.push(new THREE.Vector2(0.32, -1.18));
    pts.push(new THREE.Vector2(0.28, -1.22));
    pts.push(new THREE.Vector2(0.35, -1.40));
    pts.push(new THREE.Vector2(0.46, -1.62));
    pts.push(new THREE.Vector2(0.50, -1.68));

    return pts;
  }, []);

  // 3D Aerodynamic Curved Fin Shape
  const finShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.30, -0.15, 0.55, -0.55, 0.60, -0.90);
    shape.lineTo(0.52, -1.00);
    shape.bezierCurveTo(0.32, -0.92, 0.12, -0.84, 0, -0.80);
    shape.closePath();
    return shape;
  }, []);

  const finExtrudeSettings = useMemo(() => ({
    depth: 0.04,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.012,
    bevelThickness: 0.012,
  }), []);

  // Subtle wireframe overlay points
  const wireOverlayPoints = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    pts.push(new THREE.Vector2(0.005, 2.505));
    pts.push(new THREE.Vector2(0.355, 2.155));
    pts.push(new THREE.Vector2(0.685, 1.505));
    pts.push(new THREE.Vector2(0.755, 1.105));
    pts.push(new THREE.Vector2(0.755, 0.405));
    pts.push(new THREE.Vector2(0.745, -0.405));
    pts.push(new THREE.Vector2(0.645, -1.055));
    return pts;
  }, []);

  // Assembly animation factor (0 to 1 over first 1.8 seconds)
  const assemblyFactor = useRef(0);

  // 1. Generate Surface Particles forming the Rocket Silhouette (Preserved 100%)
  const { particleHomePositions, initialPositions, particleColors } = useMemo(() => {
    const count = 900;
    const homes = new Float32Array(count * 3);
    const inits = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;
      const section = Math.random();

      if (section < 0.3) {
        // Nose Cone (y: 1.2 to 2.8)
        const h = Math.random();
        y = 1.2 + h * 1.6;
        const radius = (1 - h) * 0.75;
        const angle = Math.random() * Math.PI * 2;
        x = radius * Math.cos(angle);
        z = radius * Math.sin(angle);
      } else if (section < 0.75) {
        // Main Fuselage Body (y: -1.2 to 1.2)
        y = -1.2 + Math.random() * 2.4;
        const radius = 0.7 + (Math.sin(y * 1.2) * 0.08);
        const angle = Math.random() * Math.PI * 2;
        x = radius * Math.cos(angle);
        z = radius * Math.sin(angle);
      } else if (section < 0.9) {
        // 4 Swept Side Fins (Base around y: -1.4)
        const finAngle = (Math.floor(Math.random() * 4) * Math.PI) / 2;
        const finLen = 0.6 + Math.random() * 0.75;
        y = -1.6 + Math.random() * 1.2;
        const rad = 0.65 + (1 - (y + 1.6) / 1.2) * finLen;
        x = rad * Math.cos(finAngle) + (Math.random() - 0.5) * 0.1;
        z = rad * Math.sin(finAngle) + (Math.random() - 0.5) * 0.1;
      } else {
        // Engine Nozzle Ring (y: -1.8 to -1.2)
        y = -1.8 + Math.random() * 0.6;
        const radius = 0.45 + (y + 1.8) * 0.3;
        const angle = Math.random() * Math.PI * 2;
        x = radius * Math.cos(angle);
        z = radius * Math.sin(angle);
      }

      homes[i * 3] = x;
      homes[i * 3 + 1] = y;
      homes[i * 3 + 2] = z;

      inits[i * 3] = (Math.random() - 0.5) * 12;
      inits[i * 3 + 1] = (Math.random() - 0.5) * 12;
      inits[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const c = Math.random() > 0.45 ? wineColor : Math.random() > 0.5 ? roseHighlight : creamColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return {
      particleHomePositions: homes,
      initialPositions: inits,
      particleColors: colors,
    };
  }, [wineColor, roseHighlight, creamColor]);

  const currentPositions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

  // 2. Generate Downward Digital Thruster Trail Particles (Preserved 100%)
  const { thrusterPositions, thrusterVelocities } = useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const rad = Math.random() * 0.4;
      pos[i * 3] = rad * Math.cos(angle);
      pos[i * 3 + 1] = -1.8 - Math.random() * 2.5;
      pos[i * 3 + 2] = rad * Math.sin(angle);
      vel[i] = 0.03 + Math.random() * 0.05;
    }
    return { thrusterPositions: pos, thrusterVelocities: vel };
  }, []);

  // 3. Main Animation Loop (Preserved 100%)
  useFrame((state, delta) => {
    if (!rocketGroupRef.current || !surfaceParticlesRef.current) return;

    if (assemblyFactor.current < 1) {
      assemblyFactor.current = Math.min(1, assemblyFactor.current + delta * 0.7);
    }

    const af = assemblyFactor.current;
    const time = state.clock.elapsedTime;
    const geom = surfaceParticlesRef.current.geometry;
    const posAttr = geom.attributes.position;
    const posArray = posAttr.array as Float32Array;

    const mx = mousePos.current.x * 2.5;
    const my = mousePos.current.y * 2.5;

    for (let i = 0; i < particleHomePositions.length / 3; i++) {
      const idx = i * 3;
      const hx = particleHomePositions[idx];
      const hy = particleHomePositions[idx + 1];
      const hz = particleHomePositions[idx + 2];

      const ix = initialPositions[idx];
      const iy = initialPositions[idx + 1];
      const iz = initialPositions[idx + 2];

      let targetX = THREE.MathUtils.lerp(ix, hx, af);
      let targetY = THREE.MathUtils.lerp(iy, hy, af);
      let targetZ = THREE.MathUtils.lerp(iz, hz, af);

      targetX += Math.sin(time * 2 + hy) * 0.012;
      targetY += Math.cos(time * 2 + hx) * 0.012;

      const dx = targetX - mx;
      const dy = targetY - my;
      const distSq = dx * dx + dy * dy;

      if (distSq < 1.8) {
        const force = (1.8 - distSq) * 0.25;
        targetX += (dx / (Math.sqrt(distSq) + 0.001)) * force;
        targetY += (dy / (Math.sqrt(distSq) + 0.001)) * force;
      }

      posArray[idx] += (targetX - posArray[idx]) * 0.1;
      posArray[idx + 1] += (targetY - posArray[idx + 1]) * 0.1;
      posArray[idx + 2] += (targetZ - posArray[idx + 2]) * 0.1;
    }

    posAttr.needsUpdate = true;

    if (thrusterParticlesRef.current) {
      const tGeom = thrusterParticlesRef.current.geometry;
      const tPos = tGeom.attributes.position.array as Float32Array;

      for (let i = 0; i < thrusterPositions.length / 3; i++) {
        const idx = i * 3 + 1;
        tPos[idx] -= thrusterVelocities[i];

        if (tPos[idx] < -4.8) {
          tPos[idx] = -1.8;
          const angle = Math.random() * Math.PI * 2;
          const rad = Math.random() * 0.35;
          tPos[i * 3] = rad * Math.cos(angle);
          tPos[i * 3 + 2] = rad * Math.sin(angle);
        }
      }
      tGeom.attributes.position.needsUpdate = true;
    }

    rocketGroupRef.current.rotation.y += delta * 0.3;
    rocketGroupRef.current.position.y = Math.sin(time * 1.5) * 0.12;

    const targetRotX = mousePos.current.y * 0.25;
    const targetRotZ = -mousePos.current.x * 0.18;
    rocketGroupRef.current.rotation.x += (targetRotX - rocketGroupRef.current.rotation.x) * 0.05;
    rocketGroupRef.current.rotation.z += (targetRotZ - rocketGroupRef.current.rotation.z) * 0.05;

    if (coreRef.current) {
      const pulse = 1 + Math.sin(time * 2.2) * 0.04;
      coreRef.current.scale.set(0.55 * pulse, 1.6 * pulse, 0.55 * pulse);
    }
  });

  return (
    <group ref={mainGroupRef}>
      <group ref={rocketGroupRef} position={[0, -0.05, 0]} scale={1.24}>
        
        {/* 1. INNER ENERGY CORE */}
        <mesh ref={coreRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 2.2, 32]} />
          <MeshDistortMaterial
            color={wineColor}
            roughness={0.2}
            metalness={0.3}
            distort={0.15}
            speed={2.0}
            clearcoat={1.0}
            opacity={0.45}
            transparent
          />
        </mesh>

        {/* 2. CONTINUOUS SMOOTH 3D ROCKET BODY (LATHE PROFILE) */}
        <mesh position={[0, 0, 0]}>
          <latheGeometry args={[mainBodyPoints, 64]} />
          <meshPhysicalMaterial
            color={wineColor}
            roughness={0.24}
            metalness={0.30}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            reflectivity={0.88}
          />
        </mesh>

        {/* 3. INTEGRATED SINGLE CIRCULAR COCKPIT / ROCKET WINDOW (Upper Front Surface) */}
        <group position={[0, 1.05, 0.735]} rotation={[0.12, 0, 0]}>
          {/* Outer Bezel Frame (Dark Charcoal Metallic) */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.04, 36]} />
            <meshStandardMaterial color={charcoalColor} roughness={0.2} metalness={0.8} />
          </mesh>
          {/* Inner Bezel Accent Ring (Deep Wine) */}
          <mesh position={[0, 0, 0.015]}>
            <torusGeometry args={[0.18, 0.015, 16, 36]} />
            <meshStandardMaterial color={deepWineColor} roughness={0.3} metalness={0.5} />
          </mesh>
          {/* Glass Reflection Porthole (Cream Highlight Glass) */}
          <mesh position={[0, 0, 0.022]}>
            <circleGeometry args={[0.165, 36]} />
            <meshPhysicalMaterial
              color={creamColor}
              roughness={0.08}
              metalness={0.85}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>

        {/* 4. COMPACT ENGINE NOZZLE INTERIOR THROAT & LIP GLOW RING */}
        <mesh position={[0, -1.25, 0]}>
          <cylinderGeometry args={[0.24, 0.32, 0.18, 32]} />
          <meshStandardMaterial color={charcoalColor} roughness={0.4} metalness={0.7} />
        </mesh>
        <mesh position={[0, -1.68, 0]}>
          <torusGeometry args={[0.505, 0.015, 16, 48]} />
          <meshStandardMaterial
            color={creamColor}
            emissive={creamColor}
            emissiveIntensity={0.22}
            roughness={0.2}
          />
        </mesh>

        {/* 5. 4 SCULPTED AERODYNAMIC CURVED FINS */}
        {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle, idx) => (
          <group key={idx} rotation={[0, angle, 0]} position={[0, 0, 0]}>
            <mesh position={[0.72, -0.2, -0.02]}>
              <extrudeGeometry args={[finShape, finExtrudeSettings]} />
              <meshPhysicalMaterial
                color={wineColor}
                roughness={0.22}
                metalness={0.32}
                clearcoat={0.9}
                clearcoatRoughness={0.1}
              />
            </mesh>
          </group>
        ))}

        {/* 6. SECONDARY DIGITAL WIRE OVERLAY (Subtle 8% Opacity Secondary Grid) */}
        <mesh position={[0, 0, 0]}>
          <latheGeometry args={[wireOverlayPoints, 20]} />
          <meshStandardMaterial
            color={creamColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* 7. SURFACE DIGITAL PARTICLES CLOUD (Preserved 100%) */}
        <points ref={surfaceParticlesRef}>
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
            size={0.045}
            vertexColors
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>

        {/* 8. DOWNWARD DIGITAL THRUSTER STREAM PARTICLES (Preserved 100%) */}
        <points ref={thrusterParticlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[thrusterPositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            color={roseHighlight}
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>

      </group>
    </group>
  );
}

// Responsive Three.js Camera Controller for 100% Object Containment
function ResponsiveCameraFitter() {
  const { camera, size } = useThree();

  useFrame(() => {
    if (!camera) return;
    const aspect = size.width / size.height;

    // Rocket vertical height span (y: -1.68 to 2.50) scaled by 1.24 with 22% padding margin
    const effectiveHeight = 4.18 * 1.24 * 1.22;
    // Rocket horizontal width span (x: -1.30 to 1.30) scaled by 1.24 with 22% padding margin
    const effectiveWidth = 2.60 * 1.24 * 1.22;

    const fovRad = (40 * Math.PI) / 180;
    const distForHeight = effectiveHeight / (2 * Math.tan(fovRad / 2));
    const distForWidth = effectiveWidth / (2 * Math.tan(fovRad / 2) * aspect);

    const targetZ = Math.max(distForHeight, distForWidth) + 0.4;

    const persCam = camera as THREE.PerspectiveCamera;
    persCam.position.z += (targetZ - persCam.position.z) * 0.1;
    persCam.aspect = aspect;
    persCam.updateProjectionMatrix();
  });

  return null;
}

export default function AboutHero3DCanvas({ className = "" }: AboutHero3DCanvasProps) {
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
        <pointLight position={[0, 1.5, 4.5]} intensity={1.6} color="#FFF8F0" />
        <pointLight position={[0, -2, 3]} intensity={1.4} color="#9E2A38" />

        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <DigitalRocket mousePos={mousePos} />
        </Float>
      </Canvas>
    </div>
  );
}



