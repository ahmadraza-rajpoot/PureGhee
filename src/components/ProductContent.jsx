import React, { useState } from "react";

import ProductAccordian from "./ProductAccordian";

const ProductContent = () => {
  
    const productContent = [
  {
    id: 1,
    type: "description",
    sectionTitle: "Product Description",
    description:
      "Experience the rich taste and aroma of 100% pure cow milk desi ghee crafted using traditional methods. It retains natural nutrients and delivers authentic flavor ideal for everyday cooking.",

    highlights: {
      title: "Key Highlights",
      items: [
        "Supports daily energy and stamina",
        "Rich in healthy fats and essential vitamins",
        "Helps improve digestion and absorption",
        "Contributes to strong immunity and brain health",
      ],
    },
  },

  {
    id: 2,
    type: "benefits",
    sectionTitle: "Health Benefits",
    description:
      "Desi ghee is a natural source of nourishment known for its multiple health benefits and traditional value in daily diets.",

    highlights: {
      title: "Core Benefits",
      items: [
        "Provides sustained natural energy",
        "Supports digestive health",
        "Strengthens immunity",
        "Enhances taste and nutritional value of meals",
      ],
    },
  },

  {
    id: 3,
    type: "usage",
    sectionTitle: "How to Use",
    description:
      "Desi ghee can be easily included in your daily meals to enhance both taste and nutrition in a natural way.",

    highlights: {
      title: "Best Ways to Use",
      items: [
        "Use in cooking for rich traditional flavor",
        "Add to roti, rice, or dal for better taste",
        "Use in baking for natural richness",
        "Consume in small quantity daily for health benefits",
      ],
    },
  },
];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="">
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
