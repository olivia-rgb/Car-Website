import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { LuClock } from 'react-icons/lu';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const vehicles = [
  // (Add vehicle objects here)
  {
    img: '/assets/bike-img/bike1.jpeg',
    name: 'Toyota Camry New',
    description: '3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '20 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Automatic' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$40,000',
  },
  {
    img: '/assets/bike-img/bike2.jpeg',
    name: 'T-Cross – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '15 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'CVT' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$15,000',
  },
  {
    img: '/assets/bike-img/bike22.jpeg',
    name: 'C-Class – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '50 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Automatic' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$150,000',
  },
  {
    img: '/assets/bike-img/bike4.jpeg',
    name: 'Ford Transit – 2021',
    description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '2500 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Diesel' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Manual' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2021' },
    ],
    price: '$22,000',
  },
  {
    img: '/assets/bike-img/bike5.jpeg',
    name: 'New GLC – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '50 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Automatic' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$80,000',
  },
  {
    img: '/assets/bike-img/bike6.jpeg',
    name: 'Toyota Camry New',
    description: '3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '20 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Automatic' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$40,000',
  },
  {
    img: '/assets/bike-img/bike7.jpeg',
    name: 'C-Class – 2023',
    description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '50 Miles' },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Petrol' },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Automatic' },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2023' },
    ],
    price: '$150,000',
  },
];

const Car = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 2 : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + vehicles.length) % vehicles.length
    );
  };

  const currentVehicles = vehicles
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(vehicles.slice(0, Math.max(0, currentIndex + itemsPerPage - vehicles.length)));

  return (
    <div className="relative w-full sm:px-10 ">
      <motion.div
      initial={{ opacity: 0, x: 200 }}  // Component starts from right
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0, type: 'tween' }}  // Duration
      className="relative w-full   sm:px-10  bg-white"
    >
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence initial={false}>
            {currentVehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 200 }}  // Start from right
                whileInView={{ opacity: 1, x: 0 }}   // Move to center
                exit={{ opacity: 0, x: -200 }}    // Exit to left
                transition={{ duration: 1.0, type: 'tween' }}  // Increased duration
                className="border border-gray-200 shadow-md px-3 flex flex-col justify-between"
              >
                {vehicle.label && (
                  <div className="absolute top-2 left-2  px-2 py-1 rounded text-[#000d6b] font-semibold">
                    {vehicle.label}
                  </div>
                )}
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="object-cover w-full h-30 mb-4"
                />
                <div className='flex gap-2'>
                  <h2 className="text-lg text-black font-bold mb-1">{vehicle.name}</h2>
                  <p className="text-sm text-gray-600">{vehicle.description}</p>
                </div>
                <div className="mt-1 text-lg text-[#000d6b] font-bold">{vehicle.price}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-[#f9a826] rounded-full bg-[#000d6b] shadow-md"  animate={{ x: [0, -30, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
          onClick={handlePrev}
        >
          <FaAnglesLeft size={50} />
        </motion.button>
        <motion.button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-[#f9a828] rounded-full bg-[#000d6b] shadow-md"animate={{ x: [0, -30, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
          onClick={handleNext}
        >
          <FaAnglesRight size={50} />
        </motion.button>
      </div>
      </motion.div>
    </div>
  );
};

export default Car;
