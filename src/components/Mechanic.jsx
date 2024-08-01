import React from 'react'
import backgroundImage from "../../public/assets/bg-img/bgcar2.jpeg"
import firstImage from "../../public/assets/slider-img/work.jpg"
import secondImage from "../../public/assets/slider-img/work2.jpg"
import { GiMechanicGarage } from "react-icons/gi";
import {motion} from "framer-motion"

function Mechanic() {
  return (
    <div>
        <motion.div 
        initial={{ opacity: 0, x: -300 }} // Start from the right
        whileInView={{ opacity: 1, x: 0 }} // End at the normal position
        transition={{ delay: 0.5, duration: 1 }}
      className="w-full h-[80vh] mt-20 flex items-center justify-center bg-cover bg-center my-8"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="flex flex-col md:flex-row w-full gap-4 max-w-7xl   rounded-lg shadow-lg">
        {/* Images Div */}
        <div className="flex flex-col w-full md:w-1/2">
          <img
            src={secondImage} 
            alt="Mechanic Image 2"
            className="w-full h-auto object-cover  rounded-b-lg"
          />
        </div>

        {/* Content Div */}
        <div className="flex flex-col justify-center text-left  w-full md:w-1/2 p-6">
          <h2 className="text-3xl md:text-4xl text-[#000d6b] font-bold text-left mb-4">
            Need a Mechanic?<br/> We’re Here to Help!
          </h2>
          <p className="text-left mb-6">
            Our skilled mechanics are available to provide top-notch repair <br/> 
            and maintenance services.
            Contact us today to get professional help <br/> and ensure your vehicle is in the best condition.
          </p>
          <div className="flex ">
              <button className="bg-[#000d6b] text-[#f9a826] px-6 py-3 mb-3 rounded-xl hover:bg-white transition flex items-center gap-2">
                Hire a Mechanic <GiMechanicGarage />
              </button>
            
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Mechanic