import React from 'react'
import ProductHead from '../components/ProductHead'
import ProductContent from '../components/ProductContent'

const ProductDetailPage = () => {
  return (
    <div className='mt-20 mx-auto max-w-6xl px-4'>
        <ProductHead />
        <div id="product-content" className="scroll-mt-18"></div>
        <ProductContent  />
    </div>
  )
}

export default ProductDetailPage