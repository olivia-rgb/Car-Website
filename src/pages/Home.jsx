import React from 'react';
import Header from "../components/Header";
import BrowseCar from "../components/UI/BrowseCar"; 
import PremiumBrands from "../components/UI/PremiumBrands";
import FeaturedVehicle from '../components/UI/FeaturedVehicle';
import Figures from "../components/UI/Figures";
import SellingCar from "../components/UI/SellingCar";
import AllVehicles from "../components/UI/AllVehicles";
import WhyUs from "../components/UI/WhyUs";
import Review from "../components/UI/Review";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <Header />
      <div className='w-full max-w-7xl px-4'>
        <BrowseCar />
        <PremiumBrands />
        <FeaturedVehicle />
        <Figures />
        <SellingCar />
        <AllVehicles />
        <WhyUs />
        <Review />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
