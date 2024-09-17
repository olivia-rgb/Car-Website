import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCar, FaBus, FaBicycle, FaMotorcycle, FaTruck, 
  FaCarBattery, FaTrailer, FaTools, FaTruckPickup, 
  FaUserTie, FaPlane, FaWrench, FaAngleRight, 
} from 'react-icons/fa';
import Carousel from './AdCarousel'; // Adjust the path as needed

const TrendingAds = () => {
  return (
    <div className="w-full sm:w-11/12  mx-auto flex flex-col justify-center px-2 md:px-2 mb-40 mt-40 gap-4">

      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000d6b] md:text-left mb-4">Trending Ads</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Item 1 */}
        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/vehicle-img/car4.png" alt="Car" className="w-full h-40 md:h-48 object-cover mb-2" />
          <span className="font-bold text-xl  py-1 text-[#000d6b]">Car</span>
          <span className="text-[#f9a826]">$10,000</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/parts-img/part1.jpeg" alt="Part 1" className="w-full h-40  md:h-48 object-contain mb-2" />
          <span className="font-bold  py-1 text-xl text-[#000d6b]">Part 1</span>
          <span className="text-[#f9a826]">$1,200</span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/bike-img/bike8.jpeg" alt="Bike" className="w-full h-40  md:h-48 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Bike</span>
          <span className="text-[#f9a826]">$800</span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/bus-img/bus1.jpeg" alt="Bus" className="w-full h-40 md:h-48 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Bus</span>
          <span className="text-[#f9a826]">$15,000</span>
        </div>

        
        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/parts-img/part9.jpeg" alt="Part 2" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Part 2</span>
          <span className="text-[#f9a826]">$900</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/bus-img/bus10.jpeg" alt="Bus 2" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold  py-1 text-xl  text-[#000d6b]">Bus 2</span>
          <span className="text-[#f9a826]">$18,000</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/heavy-img/heavy1.jpeg" alt="Heavy Equipment" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Heavy Equipment</span>
          <span className="text-[#f9a826]">$50,000</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/parts-img/part6.jpeg" alt="Part 3" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold  py-1 text-xl text-[#000d6b]">Part 3</span>
          <span className="text-[#f9a826]">$2,500</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/heavy-img/heavy3.jpeg" alt="Heavy Equipment 2" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Heavy Equipment</span>
          <span className="text-[#f9a826]">$75,000</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/vehicle-img/car5.png" alt="Car 2" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl  text-[#000d6b]">Car 2</span>
          <span className="text-[#f9a826]">$20,000</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/bike-img/bike8.jpeg" alt="Bike 2" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Bike 2</span>
          <span className="text-[#f9a826]">$1,500</span>
        </div>

        <div className="flex flex-col bg-white shadow-lg items-center">
          <img src="/assets/vehicle-img/car9.jpeg" alt="Car 3" className="w-full md:h-48 h-40 object-cover mb-2" />
          <span className="font-bold py-1 text-xl text-[#000d6b]">Car 3</span>
          <span className="text-[#f9a826]">$20,000</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingAds;
