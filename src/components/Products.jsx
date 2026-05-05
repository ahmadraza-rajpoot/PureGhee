import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData";



const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900">
          From Our Village <span className="text-yellow-400">Dairy</span> to Your Home
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose from our range of pure and traditionally prepared dairy products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 md:gap-4 lg:gap-3 mt-12">
         
        {
            productsData.map((product)=>(
                <ProductCard key={product.id}  product = {product} />
            ))
        }
        </div>
      </div>
    </section>
  );
};

export default Products;
