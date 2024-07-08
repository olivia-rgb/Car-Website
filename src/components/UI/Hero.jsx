import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../styles/hero-slider.css"

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="carousel">
        <div>
          <img src="/assets/slider-img/slider-1.jpg" alt="Car 1" />
        </div>
        <div>
          <img src="/assets/slider-img/slider-2.jpg"  alt="Car 2" />
        </div>
        <div>
          <img src="/assets/slider-img/slider-3.jpg"  alt="Car 3" />
        </div>
      </Slider>
      <div className="hero-content">
        <h1>Find Your Dream Car</h1>
        <p>Explore our extensive collection of cars to find the perfect match for you.</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
