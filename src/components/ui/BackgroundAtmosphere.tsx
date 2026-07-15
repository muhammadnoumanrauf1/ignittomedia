"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 1.5;
    }
    return [positions, sizes];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00BFFF"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-brand-bg overflow-hidden">
      {/* Noise Texture - Hidden on mobile to save GPU */}
      <div 
        className="hidden md:block absolute inset-0 opacity-[0.03] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Glow Orbs - Reduced blur on mobile, no animation on mobile */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-glow/20 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen md:animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/20 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen md:animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Hide heavy global particles on mobile entirely to prioritize hero scroll smoothness */}
      <div className="hidden md:block">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles count={1000} />
        </Canvas>
      </div>
    </div>
  );
}
