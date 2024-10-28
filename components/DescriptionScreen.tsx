"use client"
const DescriptionScreen = () => {
    const ExploreMore = () => {
        const element =document.querySelector(".portfolio-section");
         window.scrollTo({
          top : element?.getBoundingClientRect().bottom, 
          left : 0,
          behavior : "smooth"
        })
      }
    return ( 
        <>
            <div className="benefits-section wrapper"> 
                <div className="body"> 
                    <div className="benefits-section-content content"> 
                        <p className="text">Why you should choose me?</p> 
                        <span className="description"></span>
                        <ul>
                            <li className="flex text-black m-4 text-lg">
                            <svg className="text-xl" fill="#1e3791" width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z"/></svg>
                            <span>Result Oriented (care about ending product)</span>
                            </li>
                            <li className="flex text-black m-4 text-lg">
                            <svg className="text-xl" fill="#1e3791" width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z"/></svg>
                            <span>Openess Relationships to customer</span>
                            </li>
                            <li className="flex text-black m-4 text-lg">
                            <svg className="text-xl" fill="#1e3791" width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z"/></svg>
                            <span>Modern and Exclusive work approachies 😉</span>
                            </li>
                        </ul>
                        {/* <button onClick={() =>ExploreMore()} className="button"> Check portfolio</button> */}

                    </div> 
                </div> 
            </div>
        </>
    );
}
 
export default DescriptionScreen;