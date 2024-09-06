import React, { useState, useEffect } from 'react';

// Import images from your local folder
import image1 from '/assets/slider-img/buyc.jpeg';
import image2 from '/assets/slider-img/black.jpg';
import image4 from '/assets/inspect.jpg';

// Array of imported images
const images = [image1, image2,image4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="flex absolute bottom-0 left-0 items-center justify-center w-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl px-4 font-bold drop-shadow-lg">
              Trending Ads
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
