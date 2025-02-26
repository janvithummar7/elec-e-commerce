import React from "react";
import { categoriesData } from "../data/category";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Categories = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-lg">Categories </h3>
      </div>
      {/* Header: "Flash Sales" + Countdown Timer + Navigation Arrows */}
      <div className="flex justify-between items-center mb-4">
        {/* Flash Sales Title */}
        <h2 className="text-3xl font-bold">Browse By Category</h2>

      {/* Navigation Arrows */}
      <div className="flex gap-2">
         <button
           className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
          //  onClick={scrollLeft}
         >
           <FaChevronLeft size={10} />
         </button>
         <button
           className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
          //  onClick={scrollRight}
         >
           <FaChevronRight size={10} />
         </button>
       </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white rounded-sm transition w-28 h-24"
          >
            <span className="text-2xl">{category.icon}</span>
            <p className="text-sm">{category.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;
