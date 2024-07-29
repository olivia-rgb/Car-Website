import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { LuClock } from 'react-icons/lu';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { FaRegCalendarAlt } from 'react-icons/fa';

const vehicles = [
  // (Add vehicle objects here)
  {
    img: '/assets/vehicle-img/car3.png',
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
    img: '/assets/vehicle-img/car3.png',
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
    img: '/assets/vehicle-img/car4.png',
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
    img: '/assets/vehicle-img/car5.png',
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
    img: '/assets/vehicle-img/car2.png',
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
    img: '/assets/vehicle-img/car3.png',
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
    img: '/assets/vehicle-img/car4.png',
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
  const [isVisible, setIsVisible] = useState(true);
  const itemsPerPage = window.innerWidth < 768 ? 2 : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= vehicles.length ? newIndex - vehicles.length : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? newIndex + vehicles.length : newIndex;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('car-carousel');
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentVehicles = vehicles
    .slice(currentIndex, currentIndex + itemsPerPage)
    .concat(vehicles.slice(0, Math.max(0, currentIndex + itemsPerPage - vehicles.length)));

  return (
    <div id="car-carousel" className="relative w-full sm:px-10">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 200 }}
        transition={{ duration: 1.0, type: 'tween' }}
        className="relative w-full sm:px-10 bg-white"
      >
        <div className="relative overflow-hidden">
          <div className={`grid ${window.innerWidth < 768 ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
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
                  <img src={vehicle.img} alt={vehicle.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                    <p className="text-gray-600">{vehicle.description}</p>
                    <div className="flex flex-col mt-2">
                      {vehicle.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center mt-1 text-gray-600">
                          {detail.icon}
                          <span className="ml-2">{detail.label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg font-bold mt-2">{vehicle.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            <FaAnglesLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            <FaAnglesRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Car;
