import DescriptionScreen from "@/components/DescriptionScreen";
import MainInfoScreen from "@/components/MainInfoScreen";
import GLTFViewver from "@/widgets/GLTFViewver"
import Loader from "@/shared/Loader";
import TeamScreen from "@/components/TeamScreen";

const MainPage = () => {
    return ( 
        <>
            <Loader />
            <MainInfoScreen />
            <DescriptionScreen />
            <GLTFViewver />
            <TeamScreen />
        </>
    );
}
 
export default MainPage;