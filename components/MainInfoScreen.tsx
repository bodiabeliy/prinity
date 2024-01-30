
"use client"

import WebGiViewver from "@/widgets/WebGiViewver";
import dynamic from "next/dynamic";


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
                  <p className="text">Let`s create future together!</p> 
                  <span className="description">Creating 3D visualization houses and cars for you! </span> 
                  <button onClick={ExploreMore} className="button">More info</button>
                </div>
                <WebGiViewver />
              </div>
            </section>
        </>
     );
}
 
export default MainInfoScreen;
