import React, { useState, useEffect } from 'react';
import { FaSearch,FaChevronDown } from 'react-icons/fa'; // Import search icon from react-icons

const Slider = () => {
  const slides = [
    { title: "Let's Find Your Dream Car", paragraph: 'All our cars are inspected and verified by professionals ', video: '/src/video/buycar.mp4', buttonText: 'Search Car' },
    { title: ' Sell to Us Today', paragraph: 'All our cars are inspected and verified by profAll our cars are inspected and verified by professionals', video: '/src/video/sell.mp4',buttonText: 'Sell Car' },
    { title: 'Rent a Car Today', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/rental2.mp4',buttonText: 'Rent a Car' },
    { title: 'Expert Mechanic Services', paragraph: 'All our cars are inspected and verified by professionals!', video: '/src/video/mechanic.mp4',buttonText: 'Mechanic' },
    { title: 'Top-Notch Car Servicing', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/service.mp4',buttonText: 'Service Car' },
    { title: 'Find Your Perfect Bus', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/buss.mp4', buttonText: 'Search bus'},
    { title: "Fast Tow Services", paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/tow.mp4',buttonText: 'Tow Car' },
    { title: 'High-Quality Bikes', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/bike2.mp4',buttonText: 'Search bike' },
    { title: 'Discover Top-Quality Trucks', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/truck.mov',buttonText: 'Search truck' },
    { title: 'Durable Heavy Equipment', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/heavy.mp4',buttonText: 'Heavy equps' },
    { title: 'Quality Car Parts', paragraph: 'All our cars are inspected and verified by professionals', video: '/src/video/parts.mp4', buttonText: 'Search parts'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
     const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          key={index}
        >
        
            <video 
              className="w-full h-full object-cover"
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#000d6b] bg-opacity-30 flex flex-col items-center justify-center p-6">
              <div className="text-center flex flex-col justify-center items-center text-white max-w-5xl">
                <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4">{slide.title}</h1>
                
                {/* Desktop View */}
                <div className="hidden md:flex gap-3 justify-end py-2.5 pr-2.5 pl-3 text-base bg-white rounded-[80px] relative z-10">
                <div className="flex items-center gap-3 px-14 py-5 font-medium text-center text-white bg-[#000d6b] border border-blue-600 border-solid leading-[185%] rounded-[60px]">
                    <FaSearch className='text-[#f9a826] text-xl'/>
                    <div>{currentSlide.buttonText}
                    </div>
                  </div>
                  <div className="flex items-center flex-auto gap-5 justify-center px-8 py-3 border-r border-gray-200 border-solid">
                    <div className="text-[#000d6b] font-bold">Any Makes</div>
                    <FaChevronDown className="ml-2 text-[#000d6b]" />
                  </div>
                  <div className="flex gap-5 items-center justify-center px-8 py-3">
                    <div className="text-[#000d6b] font-bold ">Any Models</div>
                    <FaChevronDown className="ml-2 text-[#000d6b]" />
                  </div>

                </div>

                {/* Mobile View */}
                <div className="flex md:hidden justify-center items-center text-xl gap-3 px-6 py-3 font-bold text-center text-white bg-[#000d6b] border border-blue-900 border-solid leading-[185%] rounded-[60px] relative w-[200px] z-10">
                  <FaSearch className='text-[#f9a826] text-xl'/>
                  <div>{currentSlide.buttonText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="absolute top-1/2 left-1 md:left-3 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        onClick={handlePrev}
      >
        ❮
      </button>
      <button 
        className="absolute top-1/2 right-1 md:right-3 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        onClick={handleNext} 
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;