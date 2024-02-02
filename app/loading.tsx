import Image from "next/image";
import Logo from "@/public/dream-2.png"
const Loader = () => {
    return ( 
        <>
        <div className="loader">
           <div className="loaderImage">
                <Image className="logo" src={Logo} alt={""} />
                <span className="loaderText">Data is loading...</span>
           </div>
        </div>
        </>
    );
}
 
export default Loader;