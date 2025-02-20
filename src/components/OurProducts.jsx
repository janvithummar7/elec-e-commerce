import React, { useState } from "react";
import { ourProductsData } from "../data/ourProducts";

const OurProducts = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-lg">Our Products</h3>
      </div>

      <h2 className="text-3xl font-bold mt-2">Explore Our Products</h2>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {ourProductsData.map((product) => (
          <div
            key={product.id}
            className="transition relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative bg-gray-100">
                {product.isNew && (
                <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                    NEW
                </span>
                )}
                <div className="pb-12 pt-6">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
                </div>
                {hoveredId === product.id && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black p-2 text-white text-center">
                        Add to Cart
                    </div>
                )}
            </div>

            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {"⭐".repeat(product.rating)}
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>

            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                ❤️
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                👁️
              </button>
            </div>

            {product.colors && (
              <div className="flex items-center gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 border-gray-300`}
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded text-lg hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
