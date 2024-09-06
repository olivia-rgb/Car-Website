import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';
import { motion, AnimatePresence } from 'framer-motion';
import { GrLogin } from "react-icons/gr";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCarDropdownNew, setShowCarDropdownNew] = useState(false);
  const [showCarDropdownUsed, setShowCarDropdownUsed] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleNewDropdown = () => {
    setShowCarDropdownNew(!showCarDropdownNew);
  };

  const toggleUsedDropdown = () => {
    setShowCarDropdownUsed(!showCarDropdownUsed);
  };

  return (
    <div className="font-medium text-[#000d6b] text-2xl md:text-xl font-Montserrat">
      {/* Logo and Navbar Links */}
      <div className="fixed top-0 left-0 w-full bg-white text-[#000d6b] z-50">
        <div className="hidden md:flex justify-between items-center w-full px-10 mx-auto">
          <div className="flex gap-4 items-center">
            <img src="/assets/brand-img/brand33.png" alt="logo" className="w-12 mr-10" />
            <Link to="/about" className="hover:underline hover:text-[#f9a826] flex items-center">About</Link>
            <Link to="/contact" className="hover:underline hover:text-[#f9a826] flex items-center">Contact</Link>

            {/* Shop New Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowCarDropdownNew(true)}
              onMouseLeave={() => setShowCarDropdownNew(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#000d6b]">
                Shop New <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showCarDropdownNew && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/allcars" className="block px-4 py-2 hover:bg-gray-200">Cars</Link>
                    <Link to="/allbus" className="block px-4 py-2 hover:bg-gray-200">Buses</Link>
                    <Link to="/allbus" className="block px-4 py-2 hover:bg-gray-200">Microbuses</Link>
                    <Link to="/allbike" className="block px-4 py-2 hover:bg-gray-200">Motorbikes</Link>
                    <Link to="/allheavy" className="block px-4 py-2 hover:bg-gray-200">Heavy Equipment</Link>
                    <Link to="/alltruck" className="block px-4 py-2 hover:bg-gray-200">Trucks</Link>
                    <Link to="/alltruck" className="block px-4 py-2 hover:bg-gray-200">Trailers</Link>
                    <Link to="/allparts" className="block px-4 py-2 hover:bg-gray-200">Vehicle Parts</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Shop Used Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowCarDropdownUsed(true)}
              onMouseLeave={() => setShowCarDropdownUsed(false)}
            >
              <button className="flex items-center hover:underline hover:text-[#000d6b]">
                Shop Used <GoTriangleDown />
              </button>
              <AnimatePresence>
                {showCarDropdownUsed && (
                  <motion.div
                    className="absolute top-full left-0 bg-white text-black mt-2 rounded shadow-lg w-48"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/allcars" className="block px-4 py-2 hover:bg-gray-200">Cars</Link>
                    <Link to="/allbus" className="block px-4 py-2 hover:bg-gray-200">Buses</Link>
                    <Link to="/allbus" className="block px-4 py-2 hover:bg-gray-200">Microbuses</Link>
                    <Link to="/allbike" className="block px-4 py-2 hover:bg-gray-200">Motorbikes</Link>
                    <Link to="/allheavy" className="block px-4 py-2 hover:bg-gray-200">Heavy Equipment</Link>
                    <Link to="/alltruck" className="block px-4 py-2 hover:bg-gray-200">Trucks</Link>
                    <Link to="/alltruck" className="block px-4 py-2 hover:bg-gray-200">Trailers</Link>
                    <Link to="/allparts" className="block px-4 py-2 hover:bg-gray-200">Vehicle Parts</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div 
              className="relative"
              onMouseEnter={() => setHoveredIcon('login')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Link 
                to="/login" 
                className="p-2 rounded-full flex items-center bg-[#f9a826] text-[#000d6b] hover:bg-[#e89c1c]"
              >
                <GrLogin className="text-xl text-black" />
              </Link>
              {hoveredIcon === 'login' && (
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold px-6 py-2 bg-black text-white whitespace-nowrap">
                  Log In
                </span>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setHoveredIcon('signup')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Link 
                to="/signup" 
                className="p-2 rounded-full flex items-center bg-[#f9a826] text-[#000d6b] hover:bg-[#e89c1c]"
              >
                <FaUser className="text-xl" />
              </Link>
              {hoveredIcon === 'signup' && (
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold px-6 py-2 bg-black text-white whitespace-nowrap">
                  Sign Up
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden px-2 fixed top-0 left-0 w-full bg-white text-[#000d6b] z-50">
        <div className="flex justify-between items-center">
          <img src="/assets/brand-img/brand33.png" alt="logo" className="w-15" />
          <button onClick={toggleMenu} className="text-2xl">
            {showMenu ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>
        {showMenu && (
          <div className="absolute top-full left-0 w-full bg-white text-[#000d6b] z-50 shadow-lg">
            <div className="flex flex-col px-4 py-4">
              <Link to="/home" className="hover:underline py-3 hover:text-[#f9a826]">Home</Link>
              <Link to="/about" className="hover:underline py-3 hover:text-[#f9a826]">About</Link>
              <Link to="/contact" className="hover:underline py-3 hover:text-[#f9a826]">Contact</Link>

              {/* Shop New Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleNewDropdown}
                  className="flex items-center justify-between w-full hover:underline py-3 hover:text-[#f9a826]"
                >
                  Shop New <GoTriangleDown />
                </button>
                {showCarDropdownNew && (
                  <div className="pl-20">
                    <Link to="/allcars" className="block py-2 hover:text-[#f9a826]">Cars</Link>
                    <Link to="/allbus" className="block py-2 hover:text-[#f9a826]">Buses</Link>
                    <Link to="/allbus" className="block py-2 hover:text-[#f9a826]">Microbuses</Link>
                    <Link to="/allbike" className="block py-2 hover:text-[#f9a826]">Motorbikes</Link>
                    <Link to="/allheavy" className="block py-2 hover:text-[#f9a826]">Heavy Equipment</Link>
                    <Link to="/alltruck" className="block py-2 hover:text-[#f9a826]">Trucks</Link>
                    <Link to="/alltruck" className="block py-2 hover:text-[#f9a826]">Trailers</Link>
                    <Link to="/allparts" className="block py-2 hover:text-[#f9a826]">Vehicle Parts</Link>
                  </div>
                )}
              </div>

              {/* Shop Used Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleUsedDropdown}
                  className="flex items-center justify-between w-full hover:underline py-3 hover:text-[#f9a826]"
                >
                  Shop Used <GoTriangleDown />
                </button>
                {showCarDropdownUsed && (
                  <div className="pl-20">
                    <Link to="/allcars" className="block py-2 hover:text-[#f9a826]">Cars</Link>
                    <Link to="/allbus" className="block py-2 hover:text-[#f9a826]">Buses</Link>
                    <Link to="/allbus" className="block py-2 hover:text-[#f9a826]">Microbuses</Link>
                    <Link to="/allbike" className="block py-2 hover:text-[#f9a826]">Motorbikes</Link>
                    <Link to="/allheavy" className="block py-2 hover:text-[#f9a826]">Heavy Equipment</Link>
                    <Link to="/alltruck" className="block py-2 hover:text-[#f9a826]">Trucks</Link>
                    <Link to="/alltruck" className="block py-2 hover:text-[#f9a826]">Trailers</Link>
                    <Link to="/allparts" className="block py-2 hover:text-[#f9a826]">Vehicle Parts</Link>
                  </div>
                )}
              </div>

              <div className="flex gap-4 items-center">
            <div 
              className="relative"
              onMouseEnter={() => setHoveredIcon('login')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Link 
                to="/login" 
                className="p-2 rounded-full flex items-center bg-[#f9a826] text-[#000d6b] hover:bg-[#e89c1c]"
              >
                <GrLogin className="text-xl text-black" />
              </Link>
              {hoveredIcon === 'login' && (
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold px-6 py-2 bg-black text-white whitespace-nowrap">
                  Log In
                </span>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setHoveredIcon('signup')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Link 
                to="/signup" 
                className="p-2 rounded-full flex items-center bg-[#f9a826] text-[#000d6b] hover:bg-[#e89c1c]"
              >
                <FaUser className="text-xl" />
              </Link>
              {hoveredIcon === 'signup' && (
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold px-6 py-2 bg-black text-white whitespace-nowrap">
                  Sign Up
                </span>
              )}
            </div>
          </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
