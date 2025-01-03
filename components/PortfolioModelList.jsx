"use client";
import { useEffect, useRef, Suspense } from "react";
import { useAtom } from "jotai";
import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  MeshDistortMaterial,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";


import { Scene } from "../widgets/Scene";
import { slideAtom } from "./Overlay";
import { useDispatch, useSelector } from "react-redux";
import {getScenesSelector} from "../providers/reducers/ScenesSlice"



const CameraHandler = ({ slideDistance }) => {
  const viewport = useThree((state) => state.viewport);
  const cameraControls = useRef();
  const [slide] = useAtom(slideAtom);
  const lastSlide = useRef(0);

  const { dollyDistance } = useControls({
    dollyDistance: {
      value: 10,
      min: 0,
      max: 100,
    },
  });

  const moveToSlide = async () => {
    await cameraControls.current.setLookAt(
      lastSlide.current * (viewport.width + slideDistance),
      3,
      dollyDistance,
      lastSlide.current * (viewport.width + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (slide + 1) * (viewport.width + slideDistance),
      1,
      dollyDistance,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      slide * (viewport.width + slideDistance),
      0,
      5,
      slide * (viewport.width + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        slide * (viewport.width + slideDistance),
        0,
        5,
        slide * (viewport.width + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [viewport]);

  useEffect(() => {
    if (lastSlide.current === slide) {
      return;
    }
    moveToSlide();
    lastSlide.current = slide;
  }, [slide]);
  return (
    <CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

export default function PortfolioModelList() {
  const scenes = useSelector(getScenesSelector)
  const viewport = useThree((state) => state.viewport);
  const { slideDistance } = useControls({
    slideDistance: {
      value: 1,
      min: 0,
      max: 100,
    },
  });



  return (
    <>
    {scenes.length && (
        <>
        <ambientLight intensity={0.2} />
          <Environment preset={"city"} />
          <CameraHandler slideDistance={slideDistance} />
          {/* MAIN WORLD */}
          <group>
            <mesh position-y={viewport.height / 2 + 1.5}>
              <sphereGeometry args={[1, 32, 32]} />
              <MeshDistortMaterial color={scenes[0]?.mainColor} speed={3} />
            </mesh>

            <mesh
              position-x={viewport.width + slideDistance}
              position-y={viewport.height / 2 + 1.5}
            >
              <boxGeometry />
              <MeshDistortMaterial color={scenes[1]?.mainColor} speed={3} />
            </mesh>

            <Dodecahedron
              position-x={2 * (viewport.width + slideDistance)}
              position-y={viewport.height / 2 + 1.5}
            >
              <MeshDistortMaterial color={scenes[2]?.mainColor} speed={3} />
            </Dodecahedron>
          </group>

         
          {scenes.map((scene, index) => (
           <>
           <mesh
              key={index}
              position={[index * (viewport.width + slideDistance), 0, 0]}
            >
              <planeGeometry args={[viewport.width, viewport.height]} />
              <meshBasicMaterial toneMapped={false}>
                <RenderTexture attach="map">
                  <Scene {...scene} />
                
                </RenderTexture>
              </meshBasicMaterial>
            </mesh>

           </>
          ))}
        </>
      )}
    </>
  );
}
