import React from "react";
import farm from "../assets/products/desighee4.jpeg";
import { FaStar } from "react-icons/fa";

import { ImPower } from "react-icons/im";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <main id="hero" className="min-h-screen mt-10 lg:mt-0 flex items-center bg-gradient-to-b from-white via-green-50 to-emerald-50 relative">

     <div className="custom-shape-divider-bottom-1776530758">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-4 xl:px-0 py-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 relative">

            <div className="flex flex-col gap-6 items-center lg:items-start">

              {/* Badge */}
              <div className="flex flex-col md:flex-row gap-2">
                  <div className="w-55 px-4 flex items-center justify-center gap-2 py-1 rounded-md bg-green-100 text-yellow-400 border border-emerald-200 text-sm font-medium">
                   <FaStar /> 100% Pure and Organic
                  </div>
                  <div className="w-55 flex items-center justify-center gap-2 px-4 py-1 rounded-md bg-green-100 text-yellow-400 border border-emerald-200 text-sm font-medium">
                    <ImPower /> Rich in Nutrients  
                  </div>
              </div>
              

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl  font-bold leading-tight text-emerald-900">
                Taste the Purity of Real Desi Ghee 
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
                Our desi ghee is made from pure farm fresh milk using traditional bilona methods.
                It is slow churned with care to preserve its natural aroma rich taste and essential nutrients.
                We do not use any chemicals or preservatives. Just pure healthy goodness made for your family.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">

                <Link
                  to={'/products/detail/cows-milk-desi-ghee-1kg'}
                  className="bg-yellow-300 border border-yellow-300 hover:text-yellow-400 hover:bg-transparent text-white px-7 py-3 rounded-full text-center font-medium transition-all duration-300"
                >
                  Shop Now
                </Link>

                <a
                  href="#products"
                  className="bg-white border border-yellow-200 text-emerald-900 px-6 py-3 rounded-full text-center font-medium hover:bg-yellow-50 transition"
                >
                  View Products
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-75 md:h-100 rounded-3xl overflow-hidden shadow-lg">

              <img
                src={farm}
                alt="cow farm"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
              />

            </div>

          </div>

        </div>
      </div>

    </main>
  );
};

export default Hero;