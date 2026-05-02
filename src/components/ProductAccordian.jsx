import React, {useState} from 'react'
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ProductAccordian = ({isOpen, onToggle, item}) => {
  return (
    <div className="border my-3 border-emerald-100 rounded-lg overflow-hidden bg-white shadow-sm">
        {/* HEADER */}
        <div
          onClick={() => onToggle(!isOpen)}
          className="flex justify-between items-center cursor-pointer px-5 py-4 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300"
        >
          <h1 className="font-semibold text-emerald-900 text-lg">
            {item.sectionTitle}
          </h1>

          <div className="text-emerald-700 text-lg transition-transform duration-300">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`px-5 overflow-hidden transition-all duration-600  ${
            isOpen
              ? "max-h-[800px] opacity-100 py-4 scale-100"
              : "max-h-0 opacity-0 py-0 scale-100"
          }`}
        >
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {item.description}
          </p>

          {item.highlights && <div className="mt-5">
            <h4 className="font-semibold text-emerald-800 text-base">
              {item.highlights.title}
            </h4>

            <div className="mt-3 flex flex-col gap-2 text-gray-600 text-sm md:text-base">
              
              {
                item.highlights.items.map((feature)=>(
                    <div className="flex items-start gap-2">
                        <GoDotFill className="text-emerald-500 mt-1" />
                        <p>{feature}</p>
                    </div>
                ))
              }
              

              
            </div>

          </div>
          }

        </div>
      </div>
  )
}

export default ProductAccordian