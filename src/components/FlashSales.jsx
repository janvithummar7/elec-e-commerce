import React, { useState, useRef, useEffect } from "react";
import { flashSalesData } from "../data/flashSales";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FlashSales = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

  const initialTime = 3 * 24 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="p-5 max-w-8xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
        <h3 className="text-red-500 font-semibold text-m">Today's</h3>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-12">
          <h2 className="text-3xl font-bold mt-4">Flash Sales</h2>
          <div className="flex items-center space-x-6 text-center text-gray-700 ">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((time, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-xs font-bold text-black-500 mb-1">{time.label}</span>
                <div className="text-black font-bold text-3xl flex items-center">
                  <span>{time.value.toString().padStart(2, "0")}</span>
                  {index < 3 && <span className="text-red-500 mx-1">:</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition" onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}>
            <FaChevronLeft size={10} />
          </button>
          <button className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition" onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}>
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scrollbar-hidden pb-4"
        >
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
        <div className="flex justify-center mt-4">
          <button className="bg-red-500 border border-red-500 text-white text-sm px-6 py-2 rounded-sm hover:bg-red-600 transition">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
