import React, { useState } from "react";
import { flashSalesData } from "../data/flashSales";

const FlashSales = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2">
        <span className="text-red-500">Today’s </span>Flash Sales
      </h2>

      <div className="flex space-x-2 text-center text-gray-700 mb-5">
        {["03 Days", "23 Hours", "19 Minutes", "56 Seconds"].map((time, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded-md">
            <span className="font-bold text-xl">{time.split(" ")[0]}</span>
            <p className="text-sm">{time.split(" ")[1]}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {flashSalesData.map((product) => (
          <div
            key={product.id}
            className="p-3"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative bg-gray-100">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                {product.discount}
              </span>
              <div className="pb-10">
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
              </div>
              {hoveredId === product.id && (
                <div className="absolute bottom-0 left-0 right-0 bg-black p-2 text-white text-center">
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

      <div className="mt-5 text-center">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
