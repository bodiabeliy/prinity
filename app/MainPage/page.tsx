import DescriptionScreen from "@/components/DescriptionScreen";
import MainInfoScreen from "@/components/MainInfoScreen";
import GLTFViewver from "@/widgets/GLTFViewver"
import Loader from "@/shared/Loader";

const MainPage = () => {
    return ( 
        <>
            <Loader />
            <MainInfoScreen />
            <DescriptionScreen />
            <GLTFViewver />
        </>
    );
}
 
export default MainPage;