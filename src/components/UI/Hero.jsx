import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className="text-6xl font-bold text-center mb-5 text-white leading-[70px] max-w-[706px] max-md:text-4xl">
      Find Your Perfect Car
    </div>

    <div className="flex gap-5  justify-end py-2.5 pr-2.5 pl-6 text-base bg-white rounded-[80px] max-md:flex-wrap max-md:pl-5">
      <div className="flex flex-auto gap-0 my-auto leading-[187%] text-slate-950 max-md:flex-wrap">
        <div className="flex gap-5 justify-center px-8 py-3 border-r border-gray-200 border-solid max-md:px-5">
          <div>Any Makes</div>
          <div className="shrink-0 my-auto w-2 border-solid border-t-[5px] border-t-slate-950 border-x-4 border-x-slate-950 h-[5px]" />
        </div>
        <div className="flex gap-5 justify-center px-8 py-3 border-r border-gray-200 border-solid max-md:px-5">
          <div>Any Models</div>
          <div className="shrink-0 my-auto w-2 border-solid border-t-[5px] border-t-slate-950 border-x-4 border-x-slate-950 h-[5px]" />
        </div>
      </div>
      <div className="flex flex-auto gap-5 justify-between">
        <div className="my-auto capitalize leading-[240%] text-slate-950">
          All Prices
        </div>
        <div className="flex items-center gap-3 px-14 py-5 font-medium text-center text-white bg-blue-600 border border-blue-600 border-solid leading-[185%] rounded-[60px] max-md:px-5">
          <FaSearch className='text-[#f9a826] text-xl'/>
          <div>Search Cars</div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Hero;