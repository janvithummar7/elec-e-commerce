import React, { useRef } from "react";
import { categoriesData } from "../data/category";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Categories = () => {
  const scrollRef = useRef(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="p-5 w-full"> 
      <div className="flex items-center gap-2">
        <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-m">Categories</h3>
      </div>

      <div className="flex justify-between items-center mt-4 mb-8">
        <h2 className="text-3xl font-bold">Browse By Category</h2>
        <div className="flex gap-2">
          <button
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollLeft}
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            onClick={scrollRight}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hidden scroll-smooth px-2 gap-8" 
        >
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white rounded-sm transition w-32 h-28 flex-shrink-0"
            >
              <span className="text-3xl mb-4">{category.icon}</span>
              <p className="text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
