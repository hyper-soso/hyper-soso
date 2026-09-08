"use client";

import { Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group } from "three";

function Logo() {
  const logo = useRef<Group>(null);
  const { scene } = useGLTF("/hyper_soso_3d.glb");
  const viewport = useThree((state) => state.viewport);
  const [reduceMotion, setReduceMotion] = useState(false);
  const scale = Math.min(
    (viewport.width * 0.64) / 3,
    (viewport.height * 0.56) / 1.32,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useFrame(({ clock }) => {
    if (!logo.current || reduceMotion) return;

    const time = clock.getElapsedTime();
    logo.current.position.y = Math.sin(time * 1.25) * 0.11;
    logo.current.rotation.x = Math.sin(time * 0.55) * 0.1;
    logo.current.rotation.y = Math.sin(time * 0.42) * 0.2;
    logo.current.rotation.z = Math.sin(time * 0.72) * 0.035;
  });

  return (
    <group ref={logo} scale={scale}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function HomeLogoScene() {
  return (
    <Canvas
      aria-label="Animated HyperSoSo three-dimensional logo"
      role="img"
      camera={{ position: [0, 0, 5], fov: 32 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 4, 6]} intensity={2.3} />
      <directionalLight position={[-4, -2, 3]} intensity={0.8} />
      <Suspense fallback={null}>
        <Logo />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/hyper_soso_3d.glb");
