import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCar, FaCarSide, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="font-bold text-[#000d6b] text-2xl md:text-xl ">
      {/* Logo (Centered on Desktop) */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="hidden md:flex justify-between items-center w-10/12 mx-auto">
        <div className="flex gap-8">
            <Link to="/" className=" hover:underline hover:text-[#f9a826]">Home</Link>
            <Link to="/about" className="hover:underline hover:text-[#f9a826]">About</Link>
            <Link to="/contact" className="hover:underline hover:text-[#f9a826]">Contact</Link>
        </div>
        <img src="/assets/nav-img/logo3.png" alt="logo" className="w-20 mx-auto mt-4" />
        <div className="flex gap-8">
        <button className="bg-[#f9a826] rounded-md border border-blue-500 text-[#000d6b] px-4 py-1 ">
              Buy Car
            </button>
            <button className="bg-[#f9a826] rounded-md border border-blue-500 text-[#000d6b] px-4 py-1">
              Sell Car
            </button>
        </div>
      </div>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className=" fixed top-0 left-0 w-full bg-white shadow-md z-40 py-2">
      <div className="md:hidden flex flex-wrap justify-between items-center px-4 py-2">
        <img src="/assets/nav-img/logo3.png" alt="logo" className="w-12" />
        <button onClick={toggleMenu} className="text-4xl">
          {showMenu ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="md:hidden fixed inset-0 top-10 h-[50vh] bg-[#000d6b] text-white font-bold flex flex-col justify-center items-center z-20 overflow-auto">
          <div className="w-full p-4">
            <div className="text-center p-2">Home</div>
            <div className="text-center p-2">About</div>
            <div className="text-center p-2">Contact</div>
            <div className="text-center p-2">
              <FaCar className="inline-block text-[#f9a826] mr-1" />
              Buy Car
            </div>
            <div className="text-center p-2">
              <FaCarSide className="inline-block text-[#f9a826] mr-1" />
              Sell Car
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
