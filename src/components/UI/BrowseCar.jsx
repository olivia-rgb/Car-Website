import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { TbCarSuv } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa6"; 
import { FaCarOn } from "react-icons/fa6";
import { RiPoliceCarLine } from "react-icons/ri";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { motion } from "framer-motion";



const BrowseCar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 1 }}
      className="my-32"
    >
      <div className='w-11/12 mx-auto h-full'>

        <div className="flex flex-col items-center pb-6 bg-white leading-[100%] text-[#000d6b] max-md:px-5">
          <div className="flex gap-5 mt-2.5 w-full  max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-3xl md:text-4xl font-bold">Browse by Type</div>
            <div className="flex items-center gap-3 my-auto text-base font-semibold text-center">
              <div>View All</div>
              <FiArrowUpRight className='text-[#f9a826] font-bold'/>
            </div>
          </div>
        </div>

        <div className="flex gap-5 text-lg font-medium leading-5 text-center whitespace-nowrap text-slate-950 max-md:flex-wrap">
          <div className="flex gap-2 items-center py-2  border border-[#000d6b] hover:shadow-md car-type-item">
            <TbCarSuv className='car-icon'/>
            <div className="mt-3 font-bold">SUV</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-[#000d6b] hover:shadow-md car-type-item">
            <FaCarAlt className='car-icon' />
            <div className="mt-3 font-bold">Sedan</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <FaCarSide className='car-icon'/>
            <div className="mt-3 font-bold">Hatchback</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <FaCaravan className='car-icon'/>
            <div className="mt-3 font-bold">Coupe</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <FaCarSide className='car-icon'/>
            <div className="mt-3 font-bold">Hybrid</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <FaCarOn className='car-icon'/>
            <div className="mt-3 font-bold">Convertible</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <FaCaravan className='car-icon'/>
            <div className="mt-3 font-bold">Van</div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 border border-gray-300 hover:shadow-md car-type-item">
            <RiPoliceCarLine className='car-icon'/>
            <div className="mt-3 font-bold">Electric</div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default BrowseCar;
