"use client"
import Image from "next/image";
import Lightbox, { isImageFitCover, isImageSlide, useLightboxProps, useLightboxState } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";


import "yet-another-react-lightbox/styles.css";
import SlideDescription from "./SlideDescription";


const SlideShow = ({ images, modelData, isOpen, onClose }: any) => {  
  console.log("modelData", modelData);
  
  const slides = images?.map((photo:any) => {
    return {
      src: photo.src,
      title: <SlideDescription price={modelData?.price} square={modelData?.range} />
     
    };
  });
  
  return (
    <div className="slider">
      <Lightbox
        open={isOpen}
        close={() => onClose(false)}
        slides={slides}
        labels={modelData?.name}
        plugins={[Captions]}
      />
    </div>
  );
};



export default SlideShow;
