import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import ProductImageContainer from "./ProductImageContainer";
import { Link, useParams } from "react-router-dom";
import productsData from "../data/productsData";


const ProductHead = () => {
  
  const {slug} = useParams()
  const {description, features, images, pricing, title, productContent} = productsData.find(p => p.slug == slug)
  
  const handleOrder = ()=>{
    const phone = "923056887561"; // your WhatsApp number
    const message = `Hello, I want to order ${title.short}.

  Product: ${title.full}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")  
}



  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      
      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT: Images */}
        
        <ProductImageContainer images= {images} />

        {/* RIGHT: Content */}
        <div className="flex flex-col gap-5">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
           {title.full}
          </h1>

          {/* Price */}
          <h3 className="text-2xl font-semibold text-emerald-600">
            Rs. {pricing.price}
          </h3>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Description
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {description.full}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <BsStarFill className="text-yellow-400 mt-1" />
                <p className="text-sm text-gray-600">{feature}</p>
              </div>
            ))}
          </div>

          {/* Delivery */}
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-around bg-gray-100 p-3 rounded-lg text-gray-600">
            <div className="flex items-center gap-2">
               <LuCalendarClock className="text-lg" />
              <p className="text-sm">
                Estimated delivery: <span className="font-medium">4-5 days</span>
              </p>
            </div>


            <div className="flex items-center gap-2">
               <GrDeliver className="text-lg font-bold" />
              <p className="text-sm">
                Delivery Charges: <span className="font-bold">Rs. 350</span>
              </p>
            </div>
           
          </div>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center mt-3">
            <button onClick={handleOrder} className="w-full sm:w-72 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:cursor-pointer hover:scale-[1.02]">
              Order on WhatsApp
            </button>

            <a href='#product-content' className="w-full text-center sm:w-72 border border-emerald-500  hover:bg-emerald-600 text-emerald-500 hover:text-white transition-all duration-300 hover:cursor-pointer py-3 rounded-xl font-semibold hover:scale-[1.02]">
              View Description
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductHead;