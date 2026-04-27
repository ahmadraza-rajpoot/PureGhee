import './App.css'
import ChooseUs from './components/ChooseUs'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FounderSection from './components/FounderSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import TestimonialSection from './components/TestimonialSection'

function App() {


  return (
    <>
      <Navbar />
      
        <Hero />
        <ChooseUs />
        <Products />
        <FounderSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
    </>
  )
}

export default App
