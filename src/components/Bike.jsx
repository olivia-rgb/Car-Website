import React from 'react';
import Bike from "./UI/Bike";
import Bike2 from "./UI/Bike2";
import { FaSearch } from 'react-icons/fa';
import backgroundImage from '../../public/assets/bg-img/bgcar16.jpeg';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function AllVehicle() {
  return (
    <div 
      className="relative min-h-full bg-cover my-10 bg-center bg-no-repeat" 
      style={{ backgroundImage:`  url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 text-center mb-6 px-4 py-8">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="text-white font-bold text-2xl sm:text-3xl md:text-5xl"
        >
           Elevate Your Ride with Our Bikes and Scooters
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="text-white text-sm sm:text-base md:text-lg"
        >
           Innovative Bikes and Scooters for Every Journey
        </motion.p>
      </div>
      <div className="relative z-10">
        <Bike />
        <Bike2 />
        <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-8 py-10">
          <div className="hidden md:flex items-center gap-3 px-8 py-2 md:px-12 py-4 font-bold text-center text-[#f9a826] bg-[#000d6b] border border-blue-600 border-solid leading-[185%] rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
            <FaSearch className='text-[#f9a826] text-xl' />
            <div>Buy Bike</div>
          </div>
          <div className=" flex items-center gap-3 px-8 py-2 md:px-12 py-4 font-bold text-center text-[#000d6b] bg-gradient-to-r from-[#f9a826] via-[#f79a1a] to-[#f9c05b] border border-blue-600 border-solid leading-[185%] rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105">
            <FaSearch className='text-[#000d6b] text-xl' />
            <div>See More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllVehicle;