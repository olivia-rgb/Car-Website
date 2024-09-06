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
    <div className="w-full sm:w-10/12 h-screen mx-auto grid grid-rows-8 my-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-40 mb-20 h-[240vh] sm:h-[140vh]">
      {/* Column 1 spanning first six rows with list of links */}
      <div className="hidden lg:flex row-span-3 col-start-1 bg-[#000d6b]  flex-col items-start justify-center p-4 space-y-2 font-bold">
        <Link to="/cars" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaCar className="mr-2" /> Cars</span>
          <FaAngleRight  />
        </Link>
        <Link to="/bus" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaBus className="mr-2" /> Bus</span>
          <FaAngleRight />
        </Link>
        <Link to="/bike" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaBicycle className="mr-2" /> Bike</span>
          <FaAngleRight />
        </Link>
        <Link to="/scooters" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaMotorcycle className="mr-2" /> Scooters</span>
          <FaAngleRight />
        </Link>
        <Link to="/trucks" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaTruck className="mr-2" /> Trucks</span>
          <FaAngleRight />
        </Link>
        <Link to="/car-parts" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaCarBattery className="mr-2" /> Car Parts</span>
          <FaAngleRight />
        </Link>
        <Link to="/trailers" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaTrailer className="mr-2" /> Trailers</span>
          <FaAngleRight />
        </Link>
        <Link to="/heavy-equipment" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaTools className="mr-2" /> Heavy Equipment</span>
          <FaAngleRight />
        </Link>
        <Link to="/tow" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaTruckPickup className="mr-2" /> Tow</span>
          <FaAngleRight />
        </Link>
        <Link to="/hire-driver" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaUserTie className="mr-2" /> Hire Driver</span>
          <FaAngleRight />
        </Link>
        <Link to="/hire-jet" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaPlane className="mr-2" /> Hire Jet</span>
          <FaAngleRight />
        </Link>
        <Link to="/hire-mechanic" className="flex justify-between items-center text-white w-full">
          <span className="flex items-center"><FaWrench className="mr-2" /> Hire Mechanic</span>
          <FaAngleRight />
        </Link>
      </div>
      {/* Carousel in the center */}
      <div className=" hidden lg:flex row-span-3 col-start-2 col-span-3 items-center justify-center">
        <Carousel />
      </div>

      {/* Responsive Grid for Items */}
      <div className="col-span-4 my-40 lg:mt-0">

  <h2 className="text-xl font-bold text-center mb-4 sm:hidden">Trending Ads</h2>
  
  <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
    {/* Item 1 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/vehicle-img/car4.png" alt="Car" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Car</span>
      <span className="text-gray-600">$10,000</span>
    </div>
    {/* Item 2 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/parts-img/part1.jpeg" alt="Part 1" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Part 1</span>
      <span className="text-gray-600">$1,200</span>
    </div>
    {/* Item 3 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/bike-img/bike4.jpeg" alt="Bike" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Bike</span>
      <span className="text-gray-600">$800</span>
    </div>
    {/* Item 4 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/bus-img/bus1.jpeg" alt="Bus" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Bus</span>
      <span className="text-gray-600">$15,000</span>
    </div>
    {/* Item 5 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/parts-img/part9.jpeg" alt="Part 2" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Part 2</span>
      <span className="text-gray-600">$900</span>
    </div>
    {/* Item 6 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/bus-img/bus6.jpeg" alt="Bus 2" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Bus 2</span>
      <span className="text-gray-600">$18,000</span>
    </div>
    {/* Item 7 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/heavy-img/heavy1.jpeg" alt="Heavy Equipment" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Heavy Equipment</span>
      <span className="text-gray-600">$50,000</span>
    </div>
    {/* Item 8 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/parts-img/part6.jpeg" alt="Part 3" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Part 3</span>
      <span className="text-gray-600">$2,500</span>
    </div>
    {/* Item 9 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/heavy-img/heavy3.jpeg" alt="Heavy Equipment 2" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Heavy Equipment 2</span>
      <span className="text-gray-600">$75,000</span>
    </div>
    {/* Item 10 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/vehicle-img/car5.png" alt="Car 2" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Car 2</span>
      <span className="text-gray-600">$20,000</span>
    </div>
    {/* Item 11 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/bike-img/bike8.jpeg" alt="Bike 2" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Bike 2</span>
      <span className="text-gray-600">$1,500</span>
    </div>
    {/* Item 12 */}
    <div className="p-2 flex flex-col items-center text-center">
      <img src="/assets/vehicle-img/car9.jpeg" alt="Car 3" className="w-full h-40 object-cover mb-2" />
      <span className="font-semibold">Car 3</span>
      <span className="text-gray-600">$20,000</span>
    </div>

  </div>
</div>
    </div>
  );
};

export default TrendingAds;

