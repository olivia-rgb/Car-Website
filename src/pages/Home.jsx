import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import BrowseCar from "../components/UI/BrowseCar"; 
import PremiumBrands from "../components/UI/PremiumBrands";
import Figures from "../components/UI/Figures";
import WhyUs from "../components/UI/WhyUs";
import Review from "../components/UI/Review";
import Footer from "../components/UI/Footer";
import SellCar from "../components/UI/SellCar";
import Contact from "../components/UI/Contact";
import AllVehicle from '../components/AllVehicle';
import Bike from "../components/Bike";
import Trucks from '../components/Trucks';
import Heavy from '../components/Heavy';
import VehicleParts from '../components/VehicleParts';
import Buses from '../components/Buses';
import TowVehicle from '../components/TowVehicle';
import Mechanic from '../components/Mechanic';
import { FadeLoader } from "react-spinners"; // Import the spinner component
import TrendingAds from '../components/UI/TrendingAds';
import MobileNavbar from '../components/UI/MobileNavbar'; 

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FadeLoader color="#000d6b" size={50} />
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center overflow-x-hidden'>
      <Header />
      <div className='w-full'>
        <TrendingAds />
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
        <Mechanic />
        <TowVehicle />
        <WhyUs />
        <Review />
        <Contact />
        <Footer />
      </div>
      {/* Include the MobileNavbar here */}
      <MobileNavbar />
    </div>
  );
}

export default Home;
