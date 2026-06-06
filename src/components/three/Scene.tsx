"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./shaders";

function Orb() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.32 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color("#5b4bff") },
      uColorB: { value: new THREE.Color("#0b0b16") },
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    // smooth the pointer toward its target
    mouse.current.lerp(state.pointer, Math.min(1, delta * 3));
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = t;
      matRef.current.uniforms.uMouse.value.copy(mouse.current);
    }
    if (groupRef.current) {
      // gently rock around center instead of continuously spinning to one side,
      // so it never reads as "drifting right"
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        Math.sin(t * 0.25) * 0.35 + mouse.current.x * 0.18,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.18,
        0.05
      );
    }
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.28;

  return (
    <group ref={groupRef} scale={scale}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1, 32]} />
          <shaderMaterial
            ref={matRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
          />
        </mesh>
        {/* faint wireframe shell for extra structure */}
        <mesh scale={1.28}>
          <icosahedronGeometry args={[1, 3]} />
          <meshBasicMaterial
            color="#6d5cff"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#08080a"]} />
      <fog attach="fog" args={["#08080a", 8, 18]} />
      <Orb />
      <Sparkles
        count={60}
        scale={12}
        size={2.2}
        speed={0.25}
        opacity={0.5}
        color="#e7e7ef"
      />
      <Sparkles
        count={35}
        scale={9}
        size={1.5}
        speed={0.18}
        opacity={0.35}
        color="#b7a9ff"
      />
    </Canvas>
  );
}
