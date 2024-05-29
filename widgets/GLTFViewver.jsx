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

            {/* <Leva hidden /> */}
            <DynamicOverlay />
            <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/5jzXL?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=0.24&thumbs=1"></iframe>

            {/* <Canvas
              shadows
              camera={{ position: [0, 0, 5], fov: 30 }}
              children={<></>}
            >
              <color attach="background" args={["#ececec"]} />
              <DynamicPortfolioModelList />
            </Canvas> */}
          </>
        )}
      </Suspense>
    </div>
  );
};

export default GLTFViewver;
