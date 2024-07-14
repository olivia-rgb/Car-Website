import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";
import {motion} from "framer-motion"


function FeaturedVehicle() {
  return (
    <div className='flex flex-col md:flex-row w-full md:w-10/12 pt-10 mx-auto gap-5 md:gap-24 mt-9'>
      
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      className=' flex flex-col items-center md:hidden w-full'>
      <div className="text-3xl font-bold leading-8 max-w-full text-[#000d6b] text-center w-10/12">
        Get A Fair Price For Your Car <br/> Sell To Us Today
      </div>
      <div className='w-full flex justify-center mt-4'>
        <img src="/assets/slider-img/buy.jpg" alt="Vehicle 1" className='w-10/12'/>
      </div>
      <div className="text-lg pt-3 leading-6 max-w-full text-slate-950 mt-2 text-center w-10/12">
        We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
      </div>
      <div className="flex flex-col max-w-full text-[#000d6b] mt-4 w-10/12">
        <div className="flex gap-2.5 items-center self-stretch px-2.5 flex-wrap w-full">
          <CiLocationArrow1 className='text-[#f9a826]' />
          <div className="flex-auto my-auto text-sm font-medium leading-6 max-w-full">
            We are the UK’s largest provider, with more patrols in more places
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-2.5 mt-2 w-full">
          <CiLocationArrow1 className='text-[#f9a826]' />
          <div className="my-auto text-sm font-medium leading-6">
            You get 24/7 roadside assistance
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-2.5 mt-2 w-full">
          <CiLocationArrow1 className='text-[#f9a826]' />
          <div className="flex-auto my-auto text-sm font-medium leading-6">
            We fix 4 out of 5 cars at the roadside
          </div>
        </div>
        <div className=" mt-4 flex justify-center">
          <div className="flex gap-3 justify-center items-center px-5 py-3 text-sm font-bold leading-4 text-center text-[#000d6b] bg-[#f9a826] rounded-xl border border-[#000d6b] border-solid w-auto">
            <div>Get Started</div>
            <FiArrowUpRight className='text-xl font-bold'/>
          </div>
        </div>
      </div>
    </motion.div>

      {/* Desktop View */}
       <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }} className='hidden md:flex flex-col md:flex-row w-full gap-5 md:gap-24 items-center'>
        <div className='w-full md:w-1/2 order-2 md:order-1 flex flex-col md:flex-row gap-10 md:gap-7'>
          <div className='flex flex-col gap-3 md:flex'>
            <div><img src="/assets/feat-img/1.png" alt="Vehicle 1" className='hidden md:block'/></div>
            <div><img src="/assets/feat-img/2.png" alt="Vehicle 2" className='hidden md:block'/></div>
          </div>
          <div className='pt-5 md:pt-24'><img src="/assets/feat-img/3.png" alt="Vehicle 3" /></div>
        </div>

        <div className='w-full md:w-1/2 order-1 md:order-2'>
          <div className="text-2xl md:text-4xl font-bold leading-8 md:leading-[56px] max-w-full md:max-w-[460px] text-[#000d6b] text-center md:text-left">
            Get A Fair Price For Your<br />Car Sell To Us Today
          </div>
          <div className="text-sm md:text-base leading-6 md:leading-7 max-w-full md:max-w-[493px] text-slate-950 mt-2 md:mt-4 text-center md:text-left">
            We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
          </div>
          <div className="flex flex-col items-center md:items-start max-w-full md:max-w-[498px] text-[#000d6b] mt-4 md:mt-6">
          <div className="flex gap-2.5 items-center self-stretch px-2.5 flex-wrap">
          <CiLocationArrow1 className='text-[#f9a826]' />
            <div className="flex-auto my-auto text-sm font-medium leading-6 max-w-full">We are the UK’s largest provider, with more patrols in more places</div>
          </div>
          <div className="flex  items-center gap-2.5 px-2.5 mt-2">
          <CiLocationArrow1 className='text-[#f9a826]' />
            <div className="my-auto text-sm font-medium leading-6">You get 24/7 roadside assistance</div>
          </div>
          <div className="flex items-center gap-2.5 px-2.5 mt-2">
          <CiLocationArrow1 className='text-[#f9a826]' />
            <div className="flex-auto my-auto text-sm font-medium leading-6">We fix 4 out of 5 cars at the roadside</div>
          </div>
            <div className="flex gap-3 justify-center items-center mt-4 md:mt-5 px-5 md:px-7 py-3 md:py-5 text-sm md:text-base font-bold leading-4 text-center text-[#000d6b] bg-[#f9a826] rounded-xl border border-blue-600 border-solid">
              <div>Get Started</div>
              <FiArrowUpRight className='text-x2xl font-bold'/>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default FeaturedVehicle;
