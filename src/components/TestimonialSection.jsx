import React, { useState, useEffect } from "react";
import review from '../assets/review1.jpg'
import { CgProfile } from "react-icons/cg";
import reviewImg from '../assets/reviewPic.jpg'
import TestimonialCard from "./TestimonialCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Testimonials = () => {

    const reviews = [
  {
    "id": 1,
    "name": "Ali Ahmad",
    "review": "Amazing desi ghee. full rich taste, bilkul ghar jaisa."
  },
  {
    "id": 2,
    "name": "Yasir",
    "review": "MashaAllah kamal taste hai is desi gheeka, highly recommended."
  },
  {
    "id": 3,
    "name": "Ayesha Khan",
    "review": "Really good quality desi ghee 👍 taste is rich and pure."
  },
  {
    "id": 4,
    "name": "Usman Tariq",
    "review": "Butter bohat creamy aur fresh hai. Perfect for daily use"
  }
]

    const [reviewData ,setReviewData] = useState(reviews)
    const [start, setStart] = useState(0)
    const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    const handleRight = ()=>{
        if(start+visible < reviewData.length){
           
            setStart(pre => pre+1)
           
        }
        
    }

    const handleLeft = ()=>{
        if(start > 0 ){
            setStart(pre => pre-1)
        }
        
    }
  
  return (
    <section className="py-16 bg-gray-50  ">

        <div className="mb-12 flex flex-col items-center text-center px-4">

  <h1 className="mb-4 text-xl sm:text-3xl md:text-4xl font-semibold text-emerald-800 leading-snug">
    Loved by Families Who Choose <span className="text-yellow-400">Purity</span>
  </h1>

  <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
    Our customers trust us for purity and taste that feels like home. Every review reflects real experiences from families who value quality and care.
  </p>

</div>
        

        <div className="relative flex items-center">

            
        
            <div className="w-full flex justify-between absolute z-50 px-2 lg:px-4 xl:px-20">

                < FaArrowCircleLeft
                    onClick={handleLeft}
                className={` ${start==0? "text-gray-300 pointer-events-none":"text-yellow-400"} text-3xl hover:scale-115 transition-all duration-300 hover:cursor-pointer` } />
                
                <FaArrowCircleRight
                    onClick={handleRight}
                className={ ` ${start+visible >=reviewData.length? "text-gray-300 pointer-events-none":"text-yellow-400"} text-3xl hover:scale-115 transition-all duration-300  hover:cursor-pointer `} />
            </div>

            <div className="max-w-6xl  grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto ">

                {
                    reviewData.slice(start,start+visible).map((item,idx)=>(<TestimonialCard key={item} item={item} />))
                }
            
            </div>
      </div>
     
    </section>
  );
};

export default Testimonials;