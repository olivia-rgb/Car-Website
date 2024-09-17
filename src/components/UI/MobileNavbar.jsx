import React, { useState, useEffect } from 'react';
import { FaHome, FaShoppingCart, FaDollarSign, FaUser, FaEnvelope } from 'react-icons/fa';

const MobileNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling Down
      setShowNavbar(false);
    } else {
      // Scrolling Up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg ${showNavbar ? 'block' : 'hidden'} md:hidden`}>
      <div className="flex justify-between items-center py-2 px-6">
        <div className="flex flex-col items-center">
          <FaHome className="text-xl text-[#000d6b]" />
          <span className="text-sm text-[#000d6b]">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <FaShoppingCart className="text-xl" />
          <span className="text-sm">Buy</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDollarSign className="text-xl" />
          <span className="text-sm">Sell</span>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-xl" />
          <span className="text-sm">Messages</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUser className="text-xl" />
          <span className="text-sm">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
