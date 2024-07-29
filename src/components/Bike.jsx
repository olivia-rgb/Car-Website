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
        <div className="flex mx-auto justify-center items-center gap-8 py-10">
          <div className="flex items-center gap-3 px-20 py-5 font-medium text-center text-[#000d6b] bg-[#f9a826] border border-blue-600 border-solid leading-[185%] rounded-[60px]">
            <FaSearch className='text-[#000d6b] text-xl' />
            <div>Buy Bike</div>
          </div>
          <div className="flex items-center gap-3 px-20 py-5 font-medium text-center text-white bg-blue-600 border border-blue-600 border-solid leading-[185%] rounded-[60px]">
            <FaSearch className='text-[#f9a826] text-xl' />
            <div>See More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllVehicle;