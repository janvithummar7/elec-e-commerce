import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSales from "../components/BestSales";
import PromoBanner from "../components/PromoBanner"
import OurProducts from "../components/OurProducts";
import NewArrivalSection from "../components/NewArrivalSection";
import Service from "../components/Service";


const Home = () => {
  return (
    <div className="flex flex-col px-20 py-2 p-5 space-y-10">
      <div className="flex">
        <div className="w-1/5 p-5 border-r border-gray-200">
          <ul className="space-y-4">
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category, index) => (
              <li key={index} className="flex justify-between items-center text-gray-600 cursor-pointer hover:text-black">
                {category} <span className="text-lg">›</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-4/5 p-5">
          <BannerCarousel />
        </div>
      </div>

      <div className="mt-15">
        <FlashSales />
      </div>

      <div className="mt-10">
        <Categories />
      </div>

      <div className="mt-10">
        <BestSales />
      </div>

      <div className="mt-10">
        <PromoBanner />
      </div>

      <div className="mt-10">
        <OurProducts />
      </div>

      <div className="mt-10">
        <NewArrivalSection />
      </div>

      <div className="mt-10">
        <Service />
      </div>
    </div>
  );
};

export default Home;
