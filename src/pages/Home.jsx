import React from 'react'
import Header from '../components/Header'
import  BrowseCar from '../components/UI/BrowseCar'
import  FeaturedVehicle from '../components/UI/FeaturedVehicle'
import Figures from '../components/UI/Figures'
import SellingCar from '../components/UI/SellingCar'
import AllVehicles from '../components/UI/AllVehicles'
import WhyUs from '../components/UI/WhyUs.jsx'
import Review from '../components/UI/Review,.jsx'
import Contact from '../components/UI/Contact.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="flex min-h-screen flex-col mx-auto">
         <Header />
         <BrowseCar />
         <FeaturedVehicle />
         <Figures />
         <SellingCar />
         <AllVehicles />
         <WhyUs />
         <Review />
         <Contact />
         <Footer />
    </div>
  )
}

export default Home