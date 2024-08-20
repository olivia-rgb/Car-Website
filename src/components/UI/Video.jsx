import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mybg from "../../video/mybggg.mp4"
import bg2 from "../../video/mybg.mp4";
import bg3 from "../../video/mybgg.mp4";

const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this to control the time interval
    arrows: true,
  };

  // Inline CSS styles
  const sliderStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const dotStyle = {
    bottom: '20px',
  };

  const arrowStyle = {
    zIndex: 1,
  };

  return (
    <div style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <video style={videoStyle} autoPlay loop muted>
            <source src={mybg} type="video/mp4" />
          </video>
        </div>
        <div>
          <video style={videoStyle} autoPlay loop muted>
            <source src={bg2} type="video/mp4" />
          </video>
        </div>
        <div>
          <video style={videoStyle} autoPlay loop muted>
            <source src={bg3} />
          </video>
        </div>
      </Slider>
      {/* Custom CSS for dots and arrows */}
      <style>
        {`
          .slick-dots {
            bottom: ${dotStyle.bottom} !important;
          }

          .slick-arrow {
            z-index: ${arrowStyle.zIndex} !important;
          }
        `}
      </style>
    </div>
  );
};

export default Video;
