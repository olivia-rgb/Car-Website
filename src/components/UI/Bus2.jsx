import React, { useState,useEffect } from 'react';
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
    img: '/assets/bus-img/bus13.jpeg',
    name: 'Urban Bus',
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
    img: '/assets/bus-img/bus14.jpeg',
    name: 'Turbo Bus',
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
    img: '/assets/bus-img/bus15.jpeg',
    name: 'Eco Bus',
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
    img: '/assets/bus-img/bus16.jpeg',
    name: 'Rapid Bus',
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
    img: '/assets/bus-img/bus17.jpeg',
    name:'Star Bus',
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
    img: '/assets/bus-img/bus18.jpeg',
    name: 'Star Bus',
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
    img: '/assets/bus-img/bus4.jpeg',
    name: 'Swift Bus',
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

const Bus2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Use a constant for itemsPerPage based on the window width
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

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('bus2-carousel');
      if (element) {
        const rect = element.getBoundingClientRect();
        // Check if any part of the element is within the viewport
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="bus2-carousel" className="relative w-full sm:px-10">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 200 }}
        transition={{ duration: 1.0, type: 'tween' }}
        className="relative w-full sm:px-10 bg-white"
      >
        <div className="relative overflow-hidden">
          <div className={`grid ${itemsPerPage === 2 ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
            <AnimatePresence initial={false}>
              {currentVehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={vehicle.img} alt={vehicle.name} className="w-full h-30 md:h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-[#000d6b]">{vehicle.name}</h3>
                    <p className="text-gray-600 font-semibold">{vehicle.description}</p>
                    <div className="flex gap-2 mt-2">
                      {vehicle.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          className={`flex items-center mt-1 text-gray-600 ${itemsPerPage === 2 ? 'hidden' : 'block'}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isVisible ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {detail.icon}
                          <span className="ml-2">{detail.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg font-bold mt-2 text-[#000d6b]">{vehicle.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full bg-[#000d6b]
                     text-[#f9a826] text-2xl md:text-4xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9a826] transition-transform 
                      ease-in-out hover:scale-105"
            animate={{ x: [0,30, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
            onClick={handlePrev}
          >
            <FaAnglesLeft />
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 rounded-full bg-[#000d6b] text-[#f9a826] tex-2xl md:text-4xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9a826] transition-transform 
                        ease-in-out hover:scale-105"
            animate={{ x: [0, -30, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
            onClick={handleNext}
          >
            <FaAnglesRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Bus2;
