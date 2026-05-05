import React, { useState } from "react";
import ProductAccordian from "./ProductAccordian";
import productsData from "../data/productsData";
import { useParams } from "react-router-dom";

const ProductContent = () => {

  const {slug} = useParams()
  const {productContent} = productsData.find(p => p.slug == slug)


  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {productContent.map((item, idx) => (
        <ProductAccordian
          key={item.id}
          item={item}
          isOpen={activeIndex === idx}
          onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
};

export default ProductContent;
