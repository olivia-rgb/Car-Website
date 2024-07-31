import React from 'react'
import towImage from '/assets/slider-img/tow.jpg'
import { motion } from 'framer-motion';
import { GiTowTruck } from "react-icons/gi";

function TowVehicle() {
  return (
    <div>

<motion.div
 initial={{ opacity: 0, x: '100%' }} // Start from the right
 whileInView={{ opacity: 1, x: 0 }} // End at the normal position
 transition={{ delay: 0.5, duration: 1 }}
  className="my-20 py-12 bg-cover md:bg-contain bg-center w-full h-[65vh]  relative"
  style={{
    backgroundImage: `url(${towImage})`,
  }}
>
  <div
    className="bg-black w-full h-full opacity-50 absolute top-0 left-0"
    style={{
      zIndex: 1,
    }}
  ></div>
  <div className="relative z-10 text-white pt-6 md:pt-12">
    <h2 className="text-[1.6rem] text-center md:text-[3.5rem] font-semibold mt-8">
      Need to Tow Your Vehicle? We're Here to Help!
    </h2>
    <p className="text-center text-[1.5rem] mt-2">
      Whether it's a breakdown or a scheduled tow, our professional team is ready to assist you. <br />
      Trust us to get your vehicle to its destination safely and efficiently.
    </p>
    <h4 className="text-center mt-4 text-[1.3rem] md:text-[1.5rem] font-semibold">
      Contact Us for Reliable Towing Services!
    </h4>
    <div className="flex justify-center mt-8">
        <button className="bg-[#000d6b] text-[#f9a826] px-4 md:px-8 py-4 rounded-2xl hover:bg-[#ff4c4c] transition flex  font-semibold items-center gap-2">
          Request Towing <GiTowTruck className=" text-2xl animate-bounce" /> 
        </button>
      
    </div>
  </div>
</motion.div>

    </div>
  )
}

export default TowVehicle