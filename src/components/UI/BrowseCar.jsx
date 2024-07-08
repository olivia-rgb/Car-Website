import React from 'react';
import "../../styles/browse.css"

const BrowseCar = () => {
  return (
    <div className="container">
      <div className="image-container">
        <div className="overlay">
          <span className='p-3 text-center font-extrabold'>Explore Our Premium Brand</span>
        </div>
      </div>
      <div className="text-container">
        <div className="flex gap-5 justify-between items-start px-5 pt-11 text-lg font-medium leading-5 text-center text-slate-950 max-md:flex-wrap ">
          <div className="brand">
            <img src="/assets/brand-img/brand1.jpg.png" alt="Audi" />
            <div>Audi</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand2.jpg.png" alt="BMW" />
            <div>BMW</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand3.jpg.png" alt="Ford" />
            <div>Ford</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand5.jpg.png" alt="Peugeot" />
            <div>Peugeot</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand6.jpg.png" alt="Volkswagen" />
            <div>Volkswagen</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand7.jpg.png" alt="Bentley" />
            <div>Bentley</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand8.jpg.png" alt="Nissan" />
            <div>Nissan</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand9.jpg.png" alt="Jeep" />
            <div>Jeep</div>
          </div>
          <div className="brand">
            <img src="/assets/brand-img/brand10.jpg.png" alt="Skoda" />
            <div>Skoda</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCar;
