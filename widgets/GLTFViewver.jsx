/* eslint-disable react/no-children-prop */
"use client";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import PortfolioPreloader from "@/shared/Loader/PortfolioPreloader";
import { useDispatch, useSelector } from "react-redux";
import { getScenes } from "@/services/ScenesService";
import { getIsSceneLoadingSelector } from "@/providers/reducers/ScenesSlice";

const DynamicOverlay = dynamic(() => import("@/components/Overlay"), {
  ssr: false,
});
const DynamicPortfolioModelList = dynamic(
  () => import("@/components/PortfolioModelList"),
  { ssr: false }
);

const GLTFViewver = () => {
  const portfolioLoader = useSelector(getIsSceneLoadingSelector);
  const dispatch = useDispatch();

  console.log("portfolioLoader", portfolioLoader);

  useEffect(() => {
    getScenes(dispatch);
  }, []);
  return (
    <div className="portfolio-section">
      <Suspense fallback={<></>}>
        {portfolioLoader == true ? (
          <PortfolioPreloader />
        ) : (
          <>
            <Leva hidden />
            <DynamicOverlay />
            <Canvas
              shadows
              camera={{ position: [0, 0, 5], fov: 30 }}
              children={<></>}
            >
              <color attach="background" args={["#ececec"]} />
              <DynamicPortfolioModelList />
            </Canvas>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default GLTFViewver;
