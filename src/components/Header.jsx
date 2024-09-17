import React, { useEffect, useRef } from "react";
import mybg from "../video/mybggg.mp4";
import { motion } from "framer-motion";
import Navbar from "./UI/Navbar"
import Slider from "./UI/Slider";
import Hero from "./UI/Hero";

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handlePlayVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    document.addEventListener("click", handlePlayVideo);

    return () => {
      document.removeEventListener("click", handlePlayVideo);
    };
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      viewport={{
        amount: "all",
      }}
      className="w-[98.7vw] h-full mb-40 lg:mb-0"
    >

       {/* Overlay to darken the video */}
       <div className="  w-[98.7vw] max-[450px]:h-[90vh] h-[93vh] mt-[-1rem] absolute opacity-30 z-[-1]"></div>


      {/* Navbar and Hero components */}
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default Header;
