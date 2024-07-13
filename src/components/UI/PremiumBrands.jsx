import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const PremiumBrands = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="mt-10 py-10"
    >
      <div className='w-10/12 mx-auto'>
        <div className="flex flex-col items-center pt-20 pb-6 bg-white leading-[100%] text-[#000d6b] max-md:px-5">
          <div className="flex gap-5 mt-6 w-full max-w-[1400px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl font-bold max-md:max-w-full">
              Explore Our Premium Brands
            </div>
            <div className="flex gap-2.5 my-auto text-base font-medium text-center">
              <div className="grow">Show All Brands</div>
              <FiArrowUpRight className='text-[#f9a826] font-bold'/>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-start text-lg font-medium leading-5 text-center whitespace-nowrap text-slate-950 max-md:flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand1.jpg.png' className="brand-img" alt="Audi"/>
            <div className="mt-3.5">Audi</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand2.jpg.png' className="brand-img" alt="BMW"/>
            <div className="mt-3.5">BMW</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand3.jpg.png' className="brand-img" alt="Ford"/>
            <div className="mt-3.5">Ford</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand4.jpg.png' className="brand-img" alt="Mercedes"/>
            <div className="mt-3.5">Mercedes</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand5.jpg.png' className="brand-img" alt="Peugeot"/>
            <div className="mt-3.5">Peugeot</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand6.jpg.png' className="brand-img" alt="Volkswagen"/>
            <div className="mt-3.5">Volkswagen</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand7.jpg.png' className="brand-img" alt="Bentley"/>
            <div className="mt-3.5">Bentley</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand8.jpg.png' className="brand-img" alt="Nissan"/>
            <div className="mt-3.5">Nissan</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand9.jpg.png' className="brand-img" alt="Jeep"/>
            <div className="mt-3.5">Jeep</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="brand-item"
          >
            <img src='/assets/brand-img/brand10.jpg.png' className="brand-img" alt="Skoda"/>
            <div className="mt-3.5">Skoda</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PremiumBrands;
