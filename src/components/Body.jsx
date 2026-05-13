import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import TopMarqueeBanner from './TopMarqueeBanner'

const Body = () => {
  return (
    <>
      <ScrollTop />
   
      <div className='flex flex-col min-h-screen pt-10'>
        
          <header className="fixed top-0 left-0 w-full z-150">
            <TopMarqueeBanner />
            <Navbar />
          </header>
        
         
        
          
              <div className='flex-1'>
                  <Outlet />
              </div>
          
          <Footer />
      </div>
     </>
  )
}

export default Body