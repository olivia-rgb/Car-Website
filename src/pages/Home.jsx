import React from 'react';
import Header from "../components/Header";
import BrowseCar from "../components/UI/BrowseCar"; 
import PremiumBrands from "../components/UI/PremiumBrands";
import Figures from "../components/UI/Figures";
import WhyUs from "../components/UI/WhyUs";
import Review from "../components/UI/Review";
import Footer from "../components/Footer";
import SellCar from "../components/UI/SellCar";
import Contact from "../components/UI/Contact"
import AllVehicle from '../components/AllVehicle';
import Bike from "../components/Bike"
import Trucks from '../components/Trucks';
import Heavy from '../components/Heavy';
import VehicleParts from '../components/VehicleParts';
import Buses from '../components/Buses';

function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <Header />
      <div className='w-full  '>
        <BrowseCar />
        <PremiumBrands />
        <SellCar />
        <Figures />
        <AllVehicle />
        <Buses />
        <Bike />
        <Trucks />
        <Heavy />
        <VehicleParts />
        <WhyUs />
        <Review />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;
