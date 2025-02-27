import React from "react";
import promoimg from "../assets/banner7.png";

const PromoBanner = () => {
  return (
    <div className="p-5">
      <img
        src={promoimg} 
        alt="Promotional Banner"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default PromoBanner;
