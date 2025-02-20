import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.png";

const BannerCarousel = () => {
    const bannerImages = [banner1, banner2, banner3];

  return (
    <div className="w-full h-[400px] bg-black rounded-lg overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="h-[400px] flex items-center justify-center bg-black">
            <img 
              src={image} 
              alt={`Banner ${index + 1}`} 
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
