import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const Service = () => {
  return (
    <div className="flex justify-center gap-16 mt-5  mb-20">
      {[
        { title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140", icon: <Truck size={28} /> },
        { title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support", icon: <Headphones size={28} /> },
        { title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days", icon: <ShieldCheck size={28} /> },
      ].map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border border-gray-300">
            {service.icon}
          </div>
          <h4 className="font-semibold mt-3 text-lg">{service.title}</h4>
          <p className="text-sm text-gray-500">{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
