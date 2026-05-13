import React from "react";
import { FaTruck } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const messages = [
  {
    title:"Free Delivery on Orders Above Rs. 5000",
    icon:FaTruck,
  }
  ,{
    title:"Estimated delivery time 3 to 4 working days",
    icon:IoIosTime
  }
  
];

const TopMarqueeBanner = () => {
  return (
    <div className="relative z-40 w-full overflow-hidden bg-gray-900 border-y h-10 border-green-100 flex items-center">
      
      <div className="flex items-center gap-16 whitespace-nowrap animate-marquee">
        
        {messages.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-white">
            <item.icon className="text-green-700" />
            <p className="text-sm md:text-base font-medium">{item.title}</p>
          </div>
        ))}

      </div>

      <style>
        {`
          .animate-marquee {
            display: inline-flex;
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            from {
              transform: translateX(180%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TopMarqueeBanner;