import React, { useEffect, useRef, useState } from "react";

const ProductImageContainer = ({ images }) => {
  const [mainImgIdx, setMainImgIdx] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Browser blocked autoplay
      });
    }
  }, [mainImgIdx]);

  return (
    <div className="w-full">
      {/* Main Preview */}
      <div className="w-full aspect-square max-h-[450px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
        {images.gallery[mainImgIdx].type === "image" ? (
          <img
            src={images.gallery[mainImgIdx].src}
            alt="Product"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        ) : (
          <video
             ref={videoRef}
              src={images.gallery[mainImgIdx].src}
              muted
              autoPlay
              playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {images.gallery.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setMainImgIdx(idx)}
            className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition ${
              mainImgIdx === idx
                ? "border-emerald-500"
                : "border-gray-200"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
               
                src={item.src}
                muted
                
                playsInline
                
                className="w-full h-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageContainer;