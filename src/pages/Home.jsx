import React from 'react'
import Header from "../components/Header"
import BrowseCar from "../components/UI/BrowseCar" 
import PremiumBrands from "../components/UI/PremiumBrands"
import FeaturedVehicle from '../components/UI/FeaturedVehicle'
import Figures from "../components/UI/Figures"
import SellingCar from "../components/UI/SellingCar"
import AllVehicles from "../components/UI/AllVehicles"
import WhyUs from "../components/UI/WhyUs"
import Review from "../components/UI/Review"
import Footer from "../components/Footer"


function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-centeritems-center'>
    <Header />
    <BrowseCar />
    <PremiumBrands />
    <FeaturedVehicle />
    <Figures />
    <SellingCar />
    <AllVehicles />
    <WhyUs />
    <Review />
    <Footer />
    </div>
  )
}

export default Home