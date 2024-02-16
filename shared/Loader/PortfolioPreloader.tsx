import Image from 'next/image';
import PortfolioLoading from "@/public/portfolio-loading.gif"

const PortfolioPreloader = () => {
    return ( 
        <div className="portfolioPreloader__wrapper">
             <Image src={PortfolioLoading} className='portfolioPreloader__image' width={30} height={30} alt="" />

        </div>
     );
}
 
export default PortfolioPreloader;