"use client"
import dynamic from 'next/dynamic'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

const DynamicOverlay = dynamic(() => import('@/components/Overlay'), { ssr: false })
const DynamicPortfolioModelList = dynamic(() => import('@/components/PortfolioModelList'), { ssr: false })

const GLTFViewver = () => {
  return (
    <div className="portfolio-section">
      <Suspense fallback={
      <>
      </>
      }>
        <Leva hidden />
        <DynamicOverlay />
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
            {/* <DynamicPortfolioModelList /> */}
        </Canvas>
      </Suspense>
     
    </div>
  );
}

export default GLTFViewver;
