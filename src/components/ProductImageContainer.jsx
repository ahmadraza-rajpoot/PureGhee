import React, {useState} from 'react'

const ProductImageContainer = ({images}) => {

  
    const [mainImgIdx, setMainImgIdx] = useState(0);

  return (
    <div>
          
          <div className="w-full lg:w-130 h-87.5 sm:h-112.5 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images.gallery[mainImgIdx]}
              alt="desi ghee"
              className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
            />
          </div>

        
          <div className="flex justify-center gap-3 mt-4 overflow-x-auto">
            {images.gallery.map((item, idx) => (
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