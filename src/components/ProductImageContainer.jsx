import pr1 from "../assets/products/product1.jpeg";
import pr2 from "../assets/products/product1_2.jpg";
import React, {useState} from 'react'

const ProductImageContainer = () => {

    const productImages = [pr1, pr2, pr1, pr1];
    const [mainImgIdx, setMainImgIdx] = useState(0);

  return (
    <div>
          {/* Main Image */}
          <div className="w-full lg:w-130 h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={productImages[mainImgIdx]}
              alt="desi ghee"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-3 mt-4 overflow-x-auto">
            {productImages.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setMainImgIdx(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  mainImgIdx === idx
                    ? "border-emerald-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={item}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
  )
}

export default ProductImageContainer