"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";
import { diskVertex, diskFragment } from "./blackHoleShaders";

const smooth = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function Hole({ progress }: { progress: RefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const stars = useRef<THREE.Group>(null);
  const disk = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uColorA: { value: new THREE.Color("#8b7bff") },
      uColorB: { value: new THREE.Color("#22d3ee") },
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const p = progress.current ?? 0;

    if (disk.current) {
      disk.current.uniforms.uTime.value = t;
      disk.current.uniforms.uScroll.value = p;
    }

    if (group.current) {
      group.current.rotation.z += delta * (0.05 + p * 0.3);
      // grow slightly, then collapse to a point as the page is consumed
      let s = 1 + 0.35 * smooth(0, 0.3, p);
      s *= 1 - smooth(0.32, 0.46, p);
      group.current.scale.setScalar(Math.max(s, 0.0001));
    }

    if (stars.current) {
      // pull the surrounding starfield inward
      const ss = 1 - smooth(0, 0.45, p);
      stars.current.scale.setScalar(Math.max(ss, 0.0001));
      stars.current.rotation.z -= delta * 0.04;
    }
  });

  return (
    <>
      <group ref={stars}>
        <Sparkles
          count={130}
          scale={20}
          size={2}
          speed={0.2}
          opacity={0.5}
          color="#cfc8ff"
        />
      </group>

      <group ref={group}>
        {/* event horizon — pure black core */}
        <mesh renderOrder={1}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* photon / Einstein ring in the screen plane */}
        <mesh renderOrder={2}>
          <ringGeometry args={[1.04, 1.13, 128]} />
          <meshBasicMaterial
            color="#c2b6ff"
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* tilted accretion disk */}
        <mesh rotation={[-1.28, 0, 0]} renderOrder={2}>
          <ringGeometry args={[1.1, 2.9, 200, 1]} />
          <shaderMaterial
            ref={disk}
            vertexShader={diskVertex}
            fragmentShader={diskFragment}
            uniforms={uniforms}
            transparent
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </>
  );
}

export default function BlackHole({
  progress,
}: {
  progress: RefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.7, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#050507"]} />
      <Hole progress={progress} />
    </Canvas>
  );
}
