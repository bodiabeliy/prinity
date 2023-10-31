
"use client"

import WebGiViewver from "@/widgets/WebGiViewver";

const MainInfoScreen = () => {

  const ExploreMore = () => {
    const element =document.querySelector(".sound-section");
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
                  <span className="description">Create your amazing 3-D visualization home! </span> 
                  <button onClick={ExploreMore} className="button">Explore more</button>
                </div>
                <WebGiViewver />
              </div>
            </section>
        </>
     );
}
 
export default MainInfoScreen;
