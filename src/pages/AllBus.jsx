"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuClock } from 'react-icons/lu';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import backgroundImage from "/assets/bg-img/bgcar9.jpeg"
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer"; 

const vehicles = [
    // (Add vehicle objects here)
    {
      img: '/assets/bus-img/bus4.jpeg',
      name: 'City Bus',
      tag: ["All", "SUV", "Volkswagen"],
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
      img: '/assets/bus-img/bus2.jpeg',
      name: 'Metro Bus',
      tag: ["All", "Camry", "Toyota"],
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
      img: '/assets/bus-img/bus3.jpeg',
      name: 'Swift Bus',
      tag: ["All", "Camry", "Volkswagen"],
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
      img: '/assets/bus-img/bus12.jpeg',
      name: 'Express Bus',
      tag: ["All", "SUV", "Volkswagen"],
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
      img: '/assets/bus-img/bus7.jpeg',
      name: 'Express Bus',
      tag: ["All", "SUV", "Camry"],
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
      img: '/assets/bus-img/bus9.jpeg',
      name: 'Star Bus',
      tag: ["All", "Toyota", "Volkswagen"],
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
      img: '/assets/bus-img/bus13.jpeg',
      name: 'Urban Bus',
      tag: ["All", "SUV", "Volkswagen"],
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
        img: '/assets/bus-img/bus3.jpeg',
        name: 'Swift Bus',
        tag: ["All", "Camry", "Volkswagen"],
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
        img: '/assets/bus-img/bus12.jpeg',
        name: 'Express Bus',
        tag: ["All", "SUV", "Volkswagen"],
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
        img: '/assets/bus-img/bus3.jpeg',
        name: 'Swift Bus',
        tag: ["All", "Camry", "Volkswagen"],
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
        img: '/assets/bus-img/bus12.jpeg',
        name: 'Express Bus',
        tag: ["All", "SUV", "Volkswagen"],
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
        img: '/assets/bus-img/bus3.jpeg',
        name: 'Swift Bus',
        tag: ["All", "Camry", "Volkswagen"],
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
        img: '/assets/bus-img/bus12.jpeg',
        name: 'Express Bus',
        tag: ["All", "SUV", "Volkswagen"],
        description: '4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate',
        details: [
          { icon: <LuClock className="w-4 h-4 text-[#f9a826]" />, label: '2500 Miles' },
          { icon: <BsFillFuelPumpDieselFill className="w-4 h-4 text-[#f9a826]" />, label: 'Diesel' },
          { icon: <TbAutomaticGearbox className="w-4 h-4 text-[#f9a826]" />, label: 'Manual' },
          { icon: <FaRegCalendarAlt className="w-4 h-4 text-[#f9a826]" />, label: '2021' },
        ],
        price: '$22,000',
      },
  ];
  
const VehicleTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full ${isSelected ? "bg-[#f9a826]" : "bg-[#000d6b]"} text-white`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

const VehicleCard = ({ vehicle }) => {
  return (
    
    <div className=" rounded-lg shadow-lg p-4">
      <img src={vehicle.img} alt={vehicle.name} className="w-full h-30 md:h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-[#000d6b] mb-2">{vehicle.name}</h3>
      <p className="text-gray-800 mb-4">{vehicle.description}</p>
      <div className="flex gap-4">
        {vehicle.details.map((detail, index) => (
          <div key={index} className="flex items-center gap-2">
            {detail.icon}
            <span className="text-[#000d6b]">{detail.label}</span>
          </div>
        ))}
      </div>
      <div className="text-[#f9a826] font-bold mt-4">{vehicle.price}</div>
    </div>
  );
};

const AllCars = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredVehicles = vehicles.filter((vehicle) => vehicle.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col  min-h-screen">
      <div className="relative">
        <div className="absolute  bg-blue-500 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, height: '100px' }}></div>
        <Navbar className="relative z-10 text-white bg-[#000d6b] bg-opacity-70" />
      </div>
    <section className="mb-20" id="vehicles">
      
      <h2 className="text-center text-4xl text- font-bold text-[#000d6b] mt-4 mb-8 md:mb-12">
        Discover Thousands of Vehicles, Ready For You
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <VehicleTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <VehicleTag onClick={handleTagChange} name="SUV" isSelected={tag === "SUV"} />
        <VehicleTag onClick={handleTagChange} name="Camry" isSelected={tag === "Camry"} />
        <VehicleTag onClick={handleTagChange} name="Toyota" isSelected={tag === "Toyota"} />
        <VehicleTag onClick={handleTagChange} name="Volkswagen" isSelected={tag === "Volkswagen"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredVehicles.map((vehicle, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <VehicleCard vehicle={vehicle} />
          </motion.li>
        ))}
      </ul>
    </section>
    <Footer className="mt-20" />
    </div>
  );
};

export default AllCars;
