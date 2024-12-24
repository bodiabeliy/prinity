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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import videoPreloader from "../public/videoPreloader.png"

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

  const isMobile = window.matchMedia( '(max-width : 768px)').matches;

  useEffect(() => {
    getScenes(dispatch);
  }, []);
  return (
    <div className="portfolio-section">
      <Suspense fallback={<> <PortfolioPreloader /></>}>
        {/* {portfolioLoader == true ? (
          <PortfolioPreloader />
        ) : ( */}
          <>

            {/* <Leva hidden /> */}
            <DynamicOverlay />
            {/* <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/5jzXL?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=0.24&thumbs=1"></iframe>
            <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/5jBfK?logo=1&info=1&fs=0&vr=0&zoom=1&autorotate=0.24&thumbs=1&inst=0"></iframe> */}
            {/* <Canvas
              shadows
              camera={{ position: [0, 0, 5], fov: 30 }}
              children={<></>}
            >
              <color attach="background" args={["#ececec"]} />
              <DynamicPortfolioModelList />
            </Canvas> */}
             <Carousel showArrows={true} >
              <div style={{height:"100vh"}}>
              <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking" allowfullscreen scrolling="no" src="https://kuula.co/share/hppWv?logo=1&info=1&fs=0&vr=0&gyro=0&autorotate=1.14&thumbs=1"></iframe>
              </div>
                <div style={{height:"100vh"}}>
                <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking" allowfullscreen scrolling="no" src="https://kuula.co/share/hLYdJ?logo=1&info=1&fs=0&vr=0&zoom=1&autorotate=0.24&thumbs=1&inst=0"></iframe>
                </div>
                <div style={{height:"100vh"}}>
                <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/5jzXL?logo=1&info=1&fs=1&vr=0&zoom=1&autorotate=0.24&thumbs=1"></iframe>
                </div>
{/*                  
                   <video width={!isMobile?"100%":"0"} height={!isMobile?"100%":"0"} autoplay controls poster={"https://firebasestorage.googleapis.com/v0/b/d-portfolio-5d3cd.appspot.com/o/videoPreloader.png?alt=media&token=b7c56136-7461-449d-82ef-480bdec41f74"}>
                   {!isMobile &&  <source src="https://firebasestorage.googleapis.com/v0/b/d-portfolio-5d3cd.appspot.com/o/terrain.mp4?alt=media&token=87e356a6-e775-426a-bc2b-cd83e720ac6e" type="video/mp4" />}
                </video>
                 */}
              
                <div style={{height:"100vh"}}>
                <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/5jBfK?logo=1&info=1&fs=0&vr=0&zoom=1&autorotate=0.24&thumbs=1&inst=0"></iframe>
                </div>
              
            </Carousel>
          </>
        {/* )} */}
      </Suspense>
    </div>
  );
};

export default GLTFViewver;
