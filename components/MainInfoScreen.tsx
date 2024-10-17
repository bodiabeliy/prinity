
"use client"

import Loader from "@/app/loading";
import { getIsLoaded3DModelSelector } from "@/providers/reducers/ScenesSlice";
import WebGiViewver from "@/widgets/WebGiViewver";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DynamicWebGiViewver = dynamic(() => import('@/widgets/WebGiViewver'), 
  // {
  //   loading: () => <Loader />,
  // }
)
const MainInfoScreen = () => {
  const isLoadedMainModel = useSelector(getIsLoaded3DModelSelector)
  console.log("isLoadedMainModel", isLoadedMainModel);
  const mobilePhoto = window.matchMedia( '(max-width : 768px)').matches;

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
                {isLoadedMainModel == true &&(
                   <div className="main-text">
                   <h1 className="text title">Let`s create future together!</h1> 
                   <span className="description">Making 3D visualization sweety houses for you!</span> 
                   <button onClick={ExploreMore} className="button">More info</button>
                   <iframe width={!mobilePhoto ?"640px":"0"} height="315" style={{display:!mobilePhoto ?"block":"none"}} src="https://www.youtube.com/embed/r4u2ydFLbN4" 
                      title="Alps - best trip 2024" allow="accelerometer; autoplay" allowFullScreen>
                    </iframe>
                 </div>
                )}
               
                <DynamicWebGiViewver />
              </div>
            </section>
        </>
     );
}
 
export default MainInfoScreen;
