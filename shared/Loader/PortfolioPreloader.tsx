import Image from 'next/image';
import PortfolioLoading from "@/public/portfolio-loading.gif"

const PortfolioPreloader = () => {
    return ( 
        <div className="portfolioPreloader__wrapper">
             <Image src={PortfolioLoading} className='portfolioPreloader__image' width={30} height={30} alt="" />
            <span>Portfolio gallery is loading...</span>
        </div>
     );
}
 
export default PortfolioPreloader;