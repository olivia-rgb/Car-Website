import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className="text-6xl font-bold text-center mb-5 text-white leading-[70px] max-w-[706px] max-md:text-4xl">
        Find Your Dream Car
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-5 justify-end py-2.5 pr-2.5 pl-6 text-base bg-white rounded-[80px]">
        <div className="flex items-center flex-auto gap-5 justify-center px-8 py-3 border-r border-gray-200 border-solid">
          <div>Any Makes</div>
          <div className="shrink-0 my-auto w-2 border-solid border-t-[5px] border-t-slate-950 border-x-4 border-x-slate-950 h-[5px]" />
        </div>
        <div className="flex gap-5 items-center justify-center px-8 py-3 border-r border-gray-200 border-solid">
          <div>Any Models</div>
          <div className="shrink-0 my-auto w-2 border-solid border-t-[5px] border-t-slate-950 border-x-4 border-x-slate-950 h-[5px]" />
        </div>
        <div className="flex items-center gap-3 px-14 py-5 font-medium text-center text-white bg-blue-600 border border-blue-600 border-solid leading-[185%] rounded-[60px]">
          <FaSearch className='text-[#f9a826] text-xl'/>
          <div>Search Cars</div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center gap-3 px-10 py-5 font-medium text-center text-white bg-blue-600 border border-blue-600 border-solid leading-[185%] rounded-[60px]">
        <FaSearch className='text-[#f9a826] text-xl'/>
        <div>Search Cars</div>
      </div>
    </div>
  );
};

export default Hero;
