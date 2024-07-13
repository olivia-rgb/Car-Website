import React from "react";
import {motion} from "framer-motion"

function SellingCar() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }} className="flex justify-center items-center flex-col md:flex-row mx-auto w-10/12 gap-10 pt-4 ">
      <div className="flex overflow-hidden relative flex-col justify-center items-start p-10 md:p-20 text-base text-white rounded-2xl max-w-full md:max-w-[685px] min-h-[394px] max-md:px-5">
        <img
          src="/assets/slider-img/slider-2.jpg"
          className="object-cover absolute inset-0 w-full h-full "
          alt="Looking for a car"
        />
        <div className="relative mt-3 text-2xl md:text-3xl font-bold leading-8 md:leading-10">
          Are You Looking
          <br />
          For a Car ?
        </div>
        <div className="relative mt-3 md:mt-9 leading-6 md:leading-7">
          We are committed to providing our customers with
          <br />
          exceptional service.
        </div>
        <div className="flex relative gap-3 justify-center px-8 md:px-16 py-3 md:py-6 mt-5 font-bold text-center text-[#000d6b] bg-[#f9a826] rounded-xl border border-white border-solid leading-[100%] max-md:px-5">
          <div className="flex-auto">Get Started</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7217827c27f9a287e5bd131ad62b0cea8a61d45e54f7f5b4d9ee84c080447fe8?"
            className="shrink-0 self-start w-3.5 aspect-square"
            alt="Icon"
          />
        </div>
      </div>

      <div className="flex overflow-hidden relative flex-col justify-center items-start p-10 md:p-20 text-base text-white rounded-2xl max-w-full md:max-w-[685px] min-h-[394px] max-md:px-5">
        <img
          src="/assets/slider-img/slider-2.jpg"
          className="object-cover absolute inset-0 w-full h-full"
          alt="Selling a car"
        />
        <div className="relative mt-3 text-2xl md:text-3xl font-bold leading-8 md:leading-10">
          Do You Want to
          <br />
          Sell a Car ?
        </div>
        <div className="relative mt-3 md:mt-9 leading-6 md:leading-7">
          We are committed to providing our customers with
          <br />
          exceptional service.
        </div>
        <div className="flex relative gap-3 justify-center px-8 md:px-16 py-3 md:py-6 mt-5 font-bold text-center text-[#000d6b] bg-[#f9a826] rounded-xl border border-white border-solid leading-[100%] max-md:px-5">
          <div className="flex-auto">Get Started</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7217827c27f9a287e5bd131ad62b0cea8a61d45e54f7f5b4d9ee84c080447fe8?"
            className="shrink-0 self-start w-3.5 aspect-square"
            alt="Icon"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SellingCar;
