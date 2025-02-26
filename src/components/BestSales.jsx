import React from "react";
import { bestSalesData } from "../data/bestSales";

const BestSales = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-lg">This Month</h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        <div className="flex gap-2">
          <button className="bg-red-500 border border-red-500 text-white text-sm px-6 py-2 rounded-sm hover:bg-red-600 transition">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {bestSalesData.map((product) => (
          <div key={product.id} className="p-3">
            <div className="relative p-5 bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
            </div>
            <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>
            <p className="text-xs text-yellow-500">⭐ {product.rating} reviews</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSales;
