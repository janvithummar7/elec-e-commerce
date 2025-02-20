import React from "react";
import item2 from "../assets/banner2.jpeg";
import item3 from "../assets/banner3.png";
import item4 from "../assets/banner4.png";
import item5 from "../assets/banner5.png";

const NewArrivalSection = () => {
  return (
    <div className="mt-10 px-20">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-lg">Featured</h3>
      </div>
      <h2 className="text-3xl font-bold mt-2">New Arrival</h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-6">
        <div className="relative bg-black text-white col-span-1 row-span-2">
          <img src={item3} alt="PlayStation 5" className="w-full h-full object-cover" />
          <div className="absolute bottom-5 left-5">
            <h3 className="text-lg font-semibold">PlayStation 5</h3>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-2 bg-white text-black px-4 py-2 text-sm font-bold">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black text-white p-5 col-span-2 row-span-1">
          <img src={item2} alt="Women's Collections" className="w-full h-40 object-cover" />
          <div className="absolute bottom-5 left-5">
            <h3 className="text-lg font-semibold">Women’s Collections</h3>
            <p className="text-sm">Featured women's collections that give you another vibe.</p>
            <button className="mt-2 bg-white text-black px-4 py-2 text-sm font-bold">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black text-white p-5">
          <img src={item4} alt="Speakers" className="w-full h-40 object-cover" />
          <div className="absolute bottom-5 left-5">
            <h3 className="text-sm font-semibold">Speakers</h3>
            <button className="mt-1 bg-white text-black px-2 py-1 text-xs font-bold">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black text-white p-5">
          <img src={item5} alt="Perfume" className="w-full h-40 object-cover" />
          <div className="absolute bottom-5 left-5">
            <h3 className="text-sm font-semibold">Perfume</h3>
            <button className="mt-1 bg-white text-black px-2 py-1 text-xs font-bold">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 border-t pt-5">
        {[
          { title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140", icon: "🚚" },
          { title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support", icon: "☎️" },
          { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days", icon: "💰" },
        ].map((service, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl">{service.icon}</div>
            <h4 className="font-semibold mt-2">{service.title}</h4>
            <p className="text-sm text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
