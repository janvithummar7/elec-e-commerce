import React, { useState, useRef } from "react";
import { flashSalesData } from "../data/flashSales";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FlashSales = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="p-5 max-w-8xl mx-auto">
       <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-lg">Today's </h3>
      </div>
      {/* Header: "Flash Sales" + Countdown Timer + Navigation Arrows */}
      <div className="flex justify-between items-center mb-4">
        {/* Flash Sales Title */}
        <h2 className="text-3xl font-bold">Flash Sales</h2>

        {/* Countdown Timer */}
        <div className="flex items-center space-x-2 text-center text-gray-700">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-500">{label}</span>
              <div className="text-black font-bold text-xl flex items-center">
                <span>03</span> <span className="text-red-500 mx-1">:</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollLeft}
          >
            <FaChevronLeft size={10} />
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollRight}
          >
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>

      {/* Product Grid - Scrollable */}
      <div ref={scrollRef} className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scrollbar-hide">
        {flashSalesData.map((product) => (
          <div
            key={product.id}
            className="p-3 min-w-[250px]"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative bg-gray-100 p-4 rounded-md shadow-md">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                {product.discount}
              </span>
              <div className="pb-10">
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
              </div>
              {hoveredId === product.id && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-sm rounded-md transition duration-300">
                  Add to Cart
                </div>
              )}
            </div>
            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              <span className="text-gray-500 line-through">{product.originalPrice}</span>
            </div>
            <p className="text-xs text-yellow-500">⭐ {product.rating} reviews</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
