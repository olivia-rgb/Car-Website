// Import React and necessary components
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCar, FaCarSide, FaTimes, FaUser, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCarDropdown, setShowCarDropdown] = useState(false);
  const [showBusDropdown, setShowBusDropdown] = useState(false);
  const [showTruckDropdown, setShowTruckDropdown] = useState(false);
  const [showPartsDropdown, setShowPartsDropdown] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-bold text-white text-2xl md:text-2xl">
      {/* Logo (Centered on Desktop) */}
      <div className={`fixed top-0 left-0 w-full ${scrolling ? 'bg-white text-[#000d6b] shadow-2xl' : 'bg-transparent'} transition-all duration-300 z-50`}>
        <div className="hidden py-3 md:flex justify-between items-center w-10/12 mx-auto">
          <div className="flex gap-4 items-center">
            <img src="/assets/brand-img/brand33.png" alt="logo" className="w-20" />
            <Link to="/about" className="hover:underline hover:text-[#f9a826] flex items-center">About</Link>
            <Link to="/contact" className="hover:underline hover:text-[#f9a826] flex items-center">Contact</Link>

            {/* Car Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowCarDropdown(true)}
              onMouseLeave={() => setShowCarDropdown(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#000d6b]">
                Car <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showCarDropdown && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/car-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
                    <Link to="/car-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
                    <Link to="/car-brand3" className="block px-4 py-2 hover:bg-gray-200">Brand 3</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bus Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowBusDropdown(true)}
              onMouseLeave={() => setShowBusDropdown(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#000d6b]">
                Bus <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showBusDropdown && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/bus-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
                    <Link to="/bus-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Truck Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowTruckDropdown(true)}
              onMouseLeave={() => setShowTruckDropdown(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#f9a826]">
                Truck <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showTruckDropdown && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/truck-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
                    <Link to="/truck-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Parts Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowPartsDropdown(true)}
              onMouseLeave={() => setShowPartsDropdown(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#f9a826]">
                Parts <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showPartsDropdown && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/part1" className="block px-4 py-2 hover:bg-gray-200">Part 1</Link>
                    <Link to="/part2" className="block px-4 py-2 hover:bg-gray-200">Part 2</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="hover:underline hover:text-[#f9a826] flex items-center">Mechanic</Link>
            <Link to="/about" className="hover:underline hover:text-[#f9a826] flex items-center">Tow</Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/login" className={`py-2 px-2 rounded-full flex items-center ${scrolling ? 'bg-[#f9a826] text-[#000d6b] hover:bg-[#e89c1c]' : 'text-white hover:bg-[#e89c1c]'}`}>
              <FaSignInAlt className="mr-2" />
              Log In
            </Link>
            <div className="border-l border-white h-6 mx-4"></div>
            <Link to="/signup" className={`py-2 px-4 rounded-full flex items-center ${scrolling ? 'bg-[#f9a826] text-black hover:bg-[#e89c1c]' : 'text-white hover:bg-[#e89c1c]'}`}>
              <FaUser className="mr-2" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className={`md:hidden px-2 fixed top-0 left-0 w-full bg-white text-[#000d6b] transition-all duration-300  z-50`}>
        <div className="flex justify-between items-center px-4">
          <img src="/assets/brand-img/brand33.png" alt="logo" className="w-20" />
          <button onClick={toggleMenu} className="text-2xl">
            {showMenu ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>
        {showMenu && (
          <div className="px-4 py-2">
            <div className="relative mb-4">
            <Link to="/home" className="hover:underline  py-2 hover:text-[#f9a826] flex items-center">Home</Link>
            <Link to="/about" className="hover:underline  py-2 hover:text-[#f9a826] flex items-center">About</Link>
            <Link to="/contact" className="hover:underline py-2 hover:text-[#f9a826] flex items-center">Contact</Link>

  <button
    onClick={() => setShowCarDropdown(!showCarDropdown)}
    className="flex items-center w-full py-2 text-left bg-white border-b border-gray-200 hover:bg-gray-100"
  >
    Car <GoTriangleDown className="ml-auto" />
  </button>
  {showCarDropdown && (
    <div className="absolute left-0 w-full bg-white text-black shadow-lg mt-2 rounded z-50">
      <Link to="/car-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
      <Link to="/car-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
      <Link to="/car-brand3" className="block px-4 py-2 hover:bg-gray-200">Brand 3</Link>
    </div>
  )}
</div>
<div className="relative mb-4">
  <button
    onClick={() => setShowBusDropdown(!showBusDropdown)}
    className="flex items-center w-full py-2 text-left bg-white border-b border-gray-200 hover:bg-gray-100"
  >
    Bus <GoTriangleDown className="ml-auto" />
  </button>
  {showBusDropdown && (
    <div className="absolute left-0 w-full bg-white text-black shadow-lg mt-2 rounded z-50">
      <Link to="/car-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
      <Link to="/car-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
      <Link to="/car-brand3" className="block px-4 py-2 hover:bg-gray-200">Brand 3</Link>
    </div>
  )}
</div>
<div className="relative mb-4">
  <button
    onClick={() => setShowTruckDropdown(!showTruckDropdown)}
    className="flex items-center w-full py-2 text-left bg-white border-b border-gray-200 hover:bg-gray-100"
  >
    Trucks <GoTriangleDown className="ml-auto" />
  </button>
  {showTruckDropdown && (
    <div className="absolute left-0 w-full bg-white text-black shadow-lg mt-2 rounded z-50">
      <Link to="/car-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
      <Link to="/car-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
      <Link to="/car-brand3" className="block px-4 py-2 hover:bg-gray-200">Brand 3</Link>
    </div>
  )}
</div>
<div className="relative mb-4">
  <button
    onClick={() => setShowPartsDropdown(!showPartsDropdown)}
    className="flex items-center w-full py-2 text-left bg-white border-b border-gray-200 hover:bg-gray-100"
  >
    Parts <GoTriangleDown className="ml-auto" />
  </button>
  {showPartsDropdown && (
    <div className="absolute left-0 w-full bg-white text-black shadow-lg mt-2 rounded z-50">
      <Link to="/car-brand1" className="block px-4 py-2 hover:bg-gray-200">Brand 1</Link>
      <Link to="/car-brand2" className="block px-4 py-2 hover:bg-gray-200">Brand 2</Link>
      <Link to="/car-brand3" className="block px-4 py-2 hover:bg-gray-200">Brand 3</Link>
    </div>
  )}
</div>

            <Link to="/about" className="block py-2 text-left hover:bg-gray-100">Mechanic</Link>
            <Link to="/about" className="block py-2 text-left hover:bg-gray-100">Tow</Link>

            <Link to="/login" className="block py-2 text-left hover:bg-gray-100">Log In</Link>
            <Link to="/signup" className="block py-2 text-left hover:bg-gray-100">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
