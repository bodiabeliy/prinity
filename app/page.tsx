"use client"
import dynamic from "next/dynamic";
import DescriptionScreen from "@/components/DescriptionScreen";
import GLTFViewver from "@/widgets/GLTFViewver"
import TeamScreen from "@/components/TeamScreen";
import { useSelector } from "react-redux";
import { getIsLoaded3DModelSelector } from "@/providers/reducers/ScenesSlice";


const DynamicMainInfoScreen = dynamic(() => import('@/components/MainInfoScreen'), { ssr: false })


const MainPage = () => {
    const isLoadedMainModel = useSelector(getIsLoaded3DModelSelector)    
    return ( 
        <>
            <DynamicMainInfoScreen />
            {
               isLoadedMainModel ==true && (
                  <>
                    <DescriptionScreen />
                    <GLTFViewver />
                    <TeamScreen />
                  </>
                )
            }
            
        </>
    );
}
 
export default MainPage;