import React, { useState } from "react";
import review from "../assets/review1.jpg";
import reviewImg from "../assets/reviewPic.jpg";
import reviewImg2 from "../assets/products/desighee4.jpeg";

const TestimonialCard = ({item}) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [];

  return (
    <div className="w-[300px]">

      {/* Main Card */}
      <div className="bg-white p-6 rounded-3xl relative shadow-md border border-emerald-100 flex flex-col items-center text-center">

        {/* Profile Image */}
        <img
          src={reviewImg}
          className="h-16 w-16 rounded-full shadow-md border-2 border-white"
        />

        {/* Stars */}
        <p className="text-amber-400 text-lg mt-3">★★★★★</p>

        {/* Review */}
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
         {item.review}
        </p>

        {/* Name */}
        <p className="mt-5 font-semibold text-[#3A2E2A]">
          {item.name}
        </p>

        {/* WhatsApp Images */}
        <div className="mt-6 flex gap-2 justify-center">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImg(img)}
              className="w-12 h-12 object-cover rounded-md cursor-pointer border border-gray-200 hover:scale-110 transition"
            />
          ))}

        </div>
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;