"use client"
import {
  AccumulativeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Sphere,
  useGLTF,
} from "@react-three/drei";
import {BackSide} from "three";

import React, { useEffect } from "react";
import { DEG2RAD } from "three/src/math/MathUtils";

export const Scene = ({ mainColor, path, ...props }) => {
  const { nodes, materials, scene } = useGLTF(path);

  const ratioScale = Math.min(1.2, Math.max(0.5, window.innerWidth / 1920));
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <group {...props}>
        <PerspectiveCamera makeDefault position={[3, 3, 8]} near={2} />
        <OrbitControls
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          minDistance={10}
          maxDistance={50}
          autoRotateSpeed={0.5}
        />
        <primitive object={scene} scale={ratioScale} />
        
        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color={mainColor} side={BackSide} />
          </Sphere>           
        </Environment>
      </group>
    </>
  );
};



