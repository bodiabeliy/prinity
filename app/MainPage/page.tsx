import DescriptionScreen from "@/components/DescriptionScreen";
import MainInfoScreen from "@/components/MainInfoScreen";
import Loader from "@/shared/Loader";

const MainPage = () => {
    return ( 
        <>
            <Loader />
            <MainInfoScreen />
            <DescriptionScreen />
        </>
    );
}
 
export default MainPage;