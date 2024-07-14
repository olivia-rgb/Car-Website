import  React from "react";

function Features() {
  return (
    <div className="flex justify-center items-center py-10 w-10/12 mx-auto text-[#000d6b] ">
      <div className="flex gap-5 justify-between max-w-full w-[1190px] max-md:flex-wrap">
        <div className="flex flex-col items-center ">
          <div className="text-4xl font-extrabold leading-[53.2px]">836M</div>
          <div className="mt-1 text-[#f9a826] font-bold text-base leading-9 text-center">
            CARS FOR SALE
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold leading-[53.2px]">738M</div>
          <div className="mt-1 text-[#f9a826] font-bold text-base leading-9 text-center">
            DEALER REVIEWS
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold leading-[53.2px]">100M</div>
          <div className="mt-1 text-[#f9a826] font-bold text-base leading-9 text-center">
            VISITORS PER DAY
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="self-center text-4xl font-bold leading-[53.2px]">
            238M
          </div>
          <div className="mt-1 text-[#f9a826] font-bold text-base leading-9 text-center">
            VERIFIED DEALERS
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;