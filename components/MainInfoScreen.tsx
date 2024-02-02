
"use client"

import Loader from "@/app/loading";
import WebGiViewver from "@/widgets/WebGiViewver";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicWebGiViewver = dynamic(() => import('@/widgets/WebGiViewver'))
const MainInfoScreen = () => {


  const ExploreMore = () => {
    const element =document.querySelector(".benefits-section");
     window.scrollTo({
      top : element?.getBoundingClientRect().top, 
      left : 0,
      behavior : "smooth"
    })
  }
    return ( 
        <>
            <section className="jumbotron-section wrapper">
              <div className="jumbotron-section container">
                <div className="main-text">
                  <p className="text title">Let`s create future together!</p> 
                  <span className="description">Creating 3D visualization houses and cars for you! </span> 
                  <button onClick={ExploreMore} className="button">More info</button>
                </div>
                <DynamicWebGiViewver />
              </div>
            </section>
        </>
     );
}
 
export default MainInfoScreen;
