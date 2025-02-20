import React from "react";
import { categoriesData } from "../data/category";

const Categories = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2">
        <span className="text-red-500">Categories</span>
      </h2>

      <div className="grid grid-cols-6 gap-4">
        {categoriesData.map((category, index) => (
          <div
            key={index}
            className="border p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white rounded-lg transition"
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
