import * as React from "react";

function Footer() {
  return (
    <div className="bg-[#000d6b] py-10">
      <div className="flex max-w-[1381px] mx-auto px-4 md:px-10 justify-center items-center text-white leading-[185%] max-md:px-5">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-base">
            <div className="text-xl font-bold leading-6 capitalize">
              Company
            </div>
            <div className="mt-7">About Us</div>
            <div className="mt-7">Blog</div>
            <div className="mt-7">Services</div>
            <div className="mt-7">FAQs</div>
            <div className="mt-7">Terms</div>
            <div className="mt-7">Contact Us</div>
          </div>
          <div className="flex flex-col text-base">
            <div className="text-xl font-bold leading-6 capitalize">
              Quick Links
            </div>
            <div className="mt-7">Get in Touch</div>
            <div className="mt-7">Help center</div>
            <div className="mt-7">Live chat</div>
            <div className="mt-7">How it works</div>
          </div>
          <div className="flex flex-col self-stretch text-base">
            <div className="text-xl font-bold leading-6 capitalize">
              Our Brands
            </div>
            <div className="mt-8">Toyota</div>
            <div className="mt-7">Porsche</div>
            <div className="mt-7">Audi</div>
            <div className="mt-7">BMW</div>
            <div className="mt-7">Ford</div>
            <div className="mt-7">Nissan</div>
          </div>
          <div className="flex flex-col self-stretch text-base">
            <div className="text-xl font-bold leading-6 capitalize">
              Vehicles Type
            </div>
            <div className="mt-7">Sedan</div>
            <div className="mt-7">Hatchback</div>
            <div className="mt-7">SUV</div>
            <div className="mt-7">Hybrid</div>
            <div className="mt-6">Electric</div>
            <div className="mt-7">Coupe</div>
          </div>
          <div className="flex flex-col leading-[100%]">
            <div className="text-xl font-bold">Our Mobile App</div>
            <div className="flex gap-5 justify-between px-9 py-3.5 mt-8 rounded-2xl bg-white bg-opacity-10 max-md:px-5">
              <div className="my-auto text-2xl"></div>
              <div className="flex flex-col">
                <div className="text-xs">Download on the</div>
                <div className="mt-2.5 text-base font-bold">Apple Store</div>
              </div>
            </div>
            <div className="flex gap-5 py-3.5 pr-14 pl-6 mt-3 rounded-2xl bg-white bg-opacity-10 max-md:px-5">
              <div className="text-2xl"></div>
              <div className="flex flex-col">
                <div className="text-xs">Get in on</div>
                <div className="mt-2.5 text-base font-medium">Google Play</div>
              </div>
            </div>
            <div className="mt-9 text-xl font-bold">Connect With Us</div>
            <div className="flex gap-5 justify-between mt-11 text-base text-center whitespace-nowrap max-md:mt-10">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
