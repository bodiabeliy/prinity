import dynamic from "next/dynamic";

import DescriptionScreen from "@/components/DescriptionScreen";
import MainInfoScreen from "@/components/MainInfoScreen";
import GLTFViewver from "@/widgets/GLTFViewver"
import Loader from "@/shared/Loader";
import TeamScreen from "@/components/TeamScreen";


const DynamicMainInfoScreen = dynamic(() => import('@/components/MainInfoScreen'), { ssr: false })

const MainPage = () => {
    return ( 
        <>
            <Loader />
            <DynamicMainInfoScreen />
            <DescriptionScreen />
            <GLTFViewver />
            <TeamScreen />
        </>
    );
}
 
export default MainPage;