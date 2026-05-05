import React from 'react'
import ProductHead from '../components/ProductHead'
import ProductContent from '../components/ProductContent'
import TestimonialSection from '../components/TestimonialSection'
import Products from '../components/Products'

const ProductDetailPage = () => {
  return (
    <section>
        <div className='mt-20 mx-auto max-w-6xl px-4'>
          <ProductHead />
          <div id="product-content" className="scroll-mt-18"></div>
          <ProductContent  />
          
      </div>
      <TestimonialSection />
      <Products />
    </section>
    
  )
}

export default ProductDetailPage