import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import backgroundImage from "../../../public/assets/bg-img/bgcar9.jpeg";

const PremiumBrands = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-[#000d6b]"
      
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-32 pb-24"
      >
        <div className='w-11/12 mx-auto'>
          <div className="flex flex-col items-center pt-10 pb-10 leading-[100%] text-[#000d6b] max-md:px-5">
            <div className="flex gap-5 mt-6 w-full  max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto text-3xl text-white md:text-4xl font-bold max-md:max-w-full">
                Explore Our Premium Brands
              </div>
              <div className="flex gap-2.5 my-auto text-base font-medium text-center">
                <div className="grow text-white font-semibold">Show All Brands</div>
                <FiArrowUpRight className='text-[#f9a826] text-xl font-bold'/>
              </div>
            </div>
          </div>

          <div className="flex gap-5 justify-between item-center text-lg font-medium leading-5 text-center whitespace-nowrap text-slate-950 max-md:flex-wrap">
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand1.jpg.png' className="brand-img" alt="Audi"/>
              <div className="mt-3.5 font-bold text-lg text-white">Audi</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand2.jpg.png' className="brand-img" alt="BMW"/>
              <div className="mt-3.5  font-bold text-lg text-white ">BMW</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand3.jpg.png' className="brand-img" alt="Ford"/>
              <div className="mt-3.5 font-bold text-lg text-white ">Ford</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand4.jpg.png' className="brand-img" alt="Mercedes"/>
              <div className="mt-3.5 font-bold text-lg text-white ">Mercedes</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand5.jpg.png' className="brand-img" alt="Peugeot"/>
              <div className="mt-3.5 font-bold text-lg text-white ">Peugeot</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand6.jpg.png' className="brand-img" alt="Volkswagen"/>
              <div className="mt-3.5 font-bold text-lg text-white ">Volks</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand7.jpg.png' className="brand-img" alt="Bentley"/>
              <div className="mt-3.5 font-bold text-lg text-white ">Bentley</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand8.jpg.png' className="brand-img" alt="Nissan"/>
              <div className="mt-3.5 font-bold text-lg text-white">Nissan</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src='/assets/brand-img/brand9.jpg.png' className="brand-img" alt="Jeep"/>
              <div className="mt-3.5 font-bold text-lg text-white">Jeep</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PremiumBrands;
