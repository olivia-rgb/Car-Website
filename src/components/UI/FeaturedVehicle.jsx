import React from 'react'

function FeaturedVehicle() {
  return (
    <div className='flex flex-col md:flex-row w-10/12 mx-auto gap-5 md:gap-20 mt-9'>
        <div className='w-full md:w-1/2'>
           <div className="text-2xl md:text-4xl font-bold leading-8 md:leading-[56px] max-w-full md:max-w-[460px] text-[#000d6b]">Get A Fair Price For Your<br />Car Sell To Us Today</div>
           <div className="text-sm md:text-base leading-6 md:leading-7 max-w-full md:max-w-[493px] text-slate-950 mt-2 md:mt-4">We are committed to providing our customers with exceptional service,<br />competitive pricing, and a wide range of.</div>
           <div className="flex flex-col items-start max-w-full md:max-w-[498px] text-slate-950 mt-4 md:mt-6">
              <div className="flex gap-2.5 self-stretch px-2.5 md:px-5 max-md:flex-wrap">
                 <div className="flex justify-center items-center text-xs font-black leading-6 text-center whitespace-nowrap rounded-xl bg-blue-600 bg-opacity-10 h-[25px] w-[25px]"></div>
                 <div className="flex-auto my-auto text-sm md:text-base font-medium leading-6 md:leading-7 max-md:max-w-full">We are the UK’s largest provider, with more patrols in more places</div>
              </div>
              <div className="flex gap-2.5 px-2.5 md:px-5 mt-2 md:mt-5">
                 <div className="flex justify-center items-center text-xs font-black leading-6 text-center whitespace-nowrap rounded-xl bg-blue-600 bg-opacity-10 h-[25px] w-[25px]"></div>
                 <div className="my-auto text-sm md:text-base font-medium leading-6 md:leading-7">You get 24/7 roadside assistance</div>
              </div>
              <div className="flex gap-2.5 px-2.5 md:px-5 mt-2 md:mt-4">
                 <div className="flex justify-center items-center text-xs font-black leading-6 text-center whitespace-nowrap rounded-xl bg-blue-600 bg-opacity-10 h-[25px] w-[25px]"></div>
                 <div className="flex-auto my-auto text-sm md:text-base font-medium leading-6 md:leading-7">We fix 4 out of 5 cars at the roadside</div>
              </div>
              <div className="flex gap-3 justify-center mt-4 md:mt-5 px-5 md:px-7 py-3 md:py-5 text-sm md:text-base font-bold leading-4 text-center text-[#000d6b] bg-[#f9a826] rounded-xl border border-blue-600 border-solid">
                <div>Get Started</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb53ce7377f74869b7b0a03e52b6291cae37fe4a5037d075c9bef24ee269f9e?"
                  className="shrink-0 self-start w-3.5 aspect-square"
                  alt="Icon"
                />
              </div>
           </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-5 md:gap-7'>
            <div className='flex flex-col gap-3 md:flex'>
                <div><img src="/assets/feat-img/1.png" alt="Vehicle 1" className='hidden md:block'/></div>
                <div><img src="/assets/feat-img/2.png" alt="Vehicle 2" className='hidden md:block'/></div>
            </div >
            <div className='pt-5 md:pt-20'><img src="/assets/feat-img/3.png" alt="Vehicle 3" /></div>
        </div>
    </div>
  )
}

export default FeaturedVehicle
