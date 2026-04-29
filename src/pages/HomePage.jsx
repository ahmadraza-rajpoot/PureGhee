import React from 'react'

import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Products from '../components/Products'
import FounderSection from '../components/FounderSection'
import TestimonialSection from '../components/TestimonialSection'
import CTASection from '../components/CTASection'


const HomePage = () => {
  return (
    <div>
        <Hero />
        <ChooseUs />
        <Products />
        <FounderSection />
        <TestimonialSection />
        <CTASection />
    </div>
  )
}

export default HomePage