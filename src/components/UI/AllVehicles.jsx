import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const vehicles = [
  {
    img: "/assets/vehicle-img/car3.png",
    label: "Great Price",
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "20 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Petrol" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "Automatic" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2023" },
    ],
    price: "$40,000",
  },
  {
    img: "/assets/vehicle-img/car3.png",
    name: "T-Cross – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "15 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Petrol" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "CVT" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2023" },
    ],
    price: "$15,000",
  },
  {
    img: "/assets/vehicle-img/car4.png",
    name: "C-Class – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "50 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Petrol" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "Automatic" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2023" },
    ],
    price: "$150,000",
  },
  {
    img: "/assets/vehicle-img/car5.png",
    label: "Great Price",
    name: "Ford Transit – 2021",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "2500 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Diesel" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "Manual" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2021" },
    ],
    price: "$22,000",
  },
  {
    img: "/assets/vehicle-img/car2.png",
    label: "Low Mileage",
    name: "New GLC – 2023",
    description: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "50 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Petrol" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "Automatic" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2023" },
    ],
    price: "$80,000",
  },
  {
    img: "/assets/vehicle-img/car3.png",
    label: "Great Price",
    name: "Toyota Camry New",
    description: "3.5 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
    details: [
      { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: "20 Miles" },
      { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: "Petrol" },
      { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: "Automatic" },
      { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: "2023" },
    ],
    price: "$40,000",
  },
];

const BestDeals = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto py-8 sm:py-12 sm:px-10 md:py-16 bg-white">
      <div className="flex flex-col items-center justify-center space-y-3 text-center mb-6">
        <h1 className="text-[#000d6b] font-bold text-2xl sm:text-3xl md:text-5xl">Best Deals</h1>
        <p className="text-black text-sm sm:text-base md:text-lg">
          Discover your perfect car at a discounted price
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * (index + 1), duration: 1 }}
            className="border border-gray-200 shadow-md p-3 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              {vehicle.label && (
                <div className="flex items-center space-x-2">
                  <img src={vehicle.icon} alt="label icon" className="w-5 h-5" />
                  <span className="text-[#000d6b] text-sm font-semibold">
                    {vehicle.label}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <FiArrowUpRight className="w-5 h-5 text-[#f9a826] font-bold" />
              </div>
            </div>
            <div className="w-full h-48 mb-4">
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-3">
              <h2 className="text-[#000d6b] text-lg font-semibold">{vehicle.name}</h2>
              <p className="text-[black] text-sm">{vehicle.description}</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              {vehicle.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-1">
                  {detail.icon}
                  <span className="text-[#000d6b] text-xs text-[#000d6b]">{detail.label}</span>
                </div>
              ))}
            </div>
            <div className="text-[#f9a826] text-lg font-bold">{vehicle.price}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
