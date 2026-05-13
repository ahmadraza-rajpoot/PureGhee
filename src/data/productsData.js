import pr1 from "../assets/products/product1.jpeg";
import pr2 from "../assets/products/product1_2.jpg";
import pr3 from "../assets/products/product2.webp";
import pr4 from '../assets/products/product2_2.webp'
import desighee1 from '../assets/products/desighee1.jpeg'
import desighee2 from '../assets/products/desighee2.jpeg'
import desighee3 from '../assets/products/desighee3.jpeg'
import desighee4 from '../assets/products/desighee4.jpeg'


const productsData = [
  {
    id: 1,
    slug: "cows-milk-desi-ghee-1kg",

    title: {
      short: "Desi Ghee 1KG",
      full: "Cow's Milk Desi Ghee 1KG Bucket",
    },

    description: {
      short: "Rich aroma and traditional taste",
      full: "Experience the rich taste and aroma of 100% pure cow's milk desi ghee, crafted using traditional methods to preserve its natural goodness. Packed with essential nutrients and perfect for daily use.",
    },

    features: [
      "Enhances natural energy levels and supports daily stamina.",
      "Packed with healthy fats and fat-soluble vitamins for overall wellness.",
      "Aids in improving digestion and nutrient absorption.",
      "Supports brain function and helps maintain a strong immune system.",
    ],

    productContent: [
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
    ],

    images: {
      primary: desighee4,
      gallery: [desighee4, desighee3  , desighee2, desighee1],
    },

    pricing: {
      price: 3000,
      originalPrice: 3500,
      currency: "PKR",
    },

    weight: "1kg",
    category: "ghee",
    bestSeller: true,
  },

  {
    id: 2,
    slug: "cows-milk-desi-ghee-2kg",

    title: {
      short: "Desi Ghee 2KG",
      full: "Cow's Milk Desi Ghee 2KG Bucket",
    },

    description: {
      short: "Rich aroma and traditional taste",
      full: "Experience the rich taste and aroma of 100% pure cow's milk desi ghee, crafted using traditional methods to preserve its natural goodness. Packed with essential nutrients and perfect for daily use.",
    },

    features: [
      "Enhances natural energy levels and supports daily stamina.",
      "Packed with healthy fats and fat-soluble vitamins for overall wellness.",
      "Aids in improving digestion and nutrient absorption.",
      "Supports brain function and helps maintain a strong immune system.",
    ],

    productContent: [
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
    ],

    images: {
      primary: desighee4,
      gallery: [desighee4, desighee3 , desighee2, desighee1],
    },

    pricing: {
      price: 6000,
      originalPrice: 7000,
      currency: "PKR",
    },

    weight: "2kg",
    category: "ghee",
    bestSeller: false,
  },

  {
    id: 3,
    slug: "cows-milk-butter-1kg",

    title: {
      short: "Cow's Milk Butter 1KG",
      full: "Cow's Milk Pure Butter 1KG Bucket",
    },

    description: {
      short: "Pure natural cow milk butter",
      full: "Experience the rich creaminess of 100% pure cow's milk butter, made from fresh farm milk using traditional methods to preserve its natural flavor. Smooth, wholesome, and packed with essential nutrients, it is perfect for everyday cooking and baking.",
    },

    features: [
      "Provides a natural source of energy to support daily activities.",
      "Rich in healthy fats and essential vitamins for overall nourishment.",
      "Enhances flavor and texture in cooking and baking.",
      "Supports healthy growth and overall well being.",
    ],

    productContent: [
      {
        id: 1,
        type: "description",
        sectionTitle: "Product Description",
        description:
          "Experience the smooth texture and rich creaminess of 100% pure cow milk butter, made from fresh farm milk using traditional methods. It preserves its natural goodness and delivers a wholesome taste perfect for everyday use.",

        highlights: {
          title: "Key Highlights",
          items: [
            "Provides natural energy to support daily activities",
            "Rich in healthy fats and essential vitamins",
            "Enhances taste and texture in meals and baking",
            "Supports overall growth and nourishment",
          ],
        },
      },

      {
        id: 2,
        type: "benefits",
        sectionTitle: "Health Benefits",
        description:
          "Pure cow milk butter is a natural source of nourishment that provides essential nutrients and supports overall well being when consumed in moderation.",

        highlights: {
          title: "Core Benefits",
          items: [
            "Provides a quick and natural source of energy",
            "Supports healthy weight gain and nourishment",
            "Contains essential vitamins for body development",
            "Helps improve overall strength and vitality",
          ],
        },
      },

      {
        id: 3,
        type: "usage",
        sectionTitle: "How to Use",
        description:
          "Butter can be easily included in your daily meals to enhance flavor, richness, and nutritional value in a simple and natural way.",

        highlights: {
          title: "Best Ways to Use",
          items: [
            "Spread on bread or toast for a rich taste",
            "Use in cooking to enhance flavor and texture",
            "Add to baking recipes for softness and richness",
            "Melt over vegetables or rice for extra taste",
          ],
        },
      },
    ],

    images: {
      primary: pr3,
      gallery: [pr3, pr4, pr3, pr4],
    },

    pricing: {
      price: 2500,
      originalPrice: 3000,
      currency: "PKR",
    },

    weight: "1kg",
    category: "butter",
    bestSeller: true,
  },

   {
    id: 4,
    slug: "cows-milk-butter-2kg",

    title: {
      short: "Cow's Milk Butter 2KG",
      full: "Cow's Milk Pure Butter 2KG Bucket",
    },

    description: {
      short: "Pure natural cow milk butter",
      full: "Experience the rich creaminess of 100% pure cow's milk butter, made from fresh farm milk using traditional methods to preserve its natural flavor. Smooth, wholesome, and packed with essential nutrients, it is perfect for everyday cooking and baking.",
    },

    features: [
      "Provides a natural source of energy to support daily activities.",
      "Rich in healthy fats and essential vitamins for overall nourishment.",
      "Enhances flavor and texture in cooking and baking.",
      "Supports healthy growth and overall well being.",
    ],

    productContent: [
      {
        id: 1,
        type: "description",
        sectionTitle: "Product Description",
        description:
          "Experience the smooth texture and rich creaminess of 100% pure cow milk butter, made from fresh farm milk using traditional methods. It preserves its natural goodness and delivers a wholesome taste perfect for everyday use.",

        highlights: {
          title: "Key Highlights",
          items: [
            "Provides natural energy to support daily activities",
            "Rich in healthy fats and essential vitamins",
            "Enhances taste and texture in meals and baking",
            "Supports overall growth and nourishment",
          ],
        },
      },

      {
        id: 2,
        type: "benefits",
        sectionTitle: "Health Benefits",
        description:
          "Pure cow milk butter is a natural source of nourishment that provides essential nutrients and supports overall well being when consumed in moderation.",

        highlights: {
          title: "Core Benefits",
          items: [
            "Provides a quick and natural source of energy",
            "Supports healthy weight gain and nourishment",
            "Contains essential vitamins for body development",
            "Helps improve overall strength and vitality",
          ],
        },
      },

      {
        id: 3,
        type: "usage",
        sectionTitle: "How to Use",
        description:
          "Butter can be easily included in your daily meals to enhance flavor, richness, and nutritional value in a simple and natural way.",

        highlights: {
          title: "Best Ways to Use",
          items: [
            "Spread on bread or toast for a rich taste",
            "Use in cooking to enhance flavor and texture",
            "Add to baking recipes for softness and richness",
            "Melt over vegetables or rice for extra taste",
          ],
        },
      },
    ],

    images: {
      primary: pr3,
      gallery: [pr3, pr4, pr3, pr4],
    },

    pricing: {
      price: 5000,
      originalPrice: 3000,
      currency: "PKR",
    },

    weight: "2kg",
    category: "butter",
    bestSeller: false,
  },
];

export default productsData;
