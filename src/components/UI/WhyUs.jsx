import * as React from "react";
import {motion} from "framer-motion"

function WhyUs() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
     className="bg-[#000d6b]">
      <div className="w-full mx-auto py-20 md:w-10/12">
      <div className="text-5xl font-bold leading-10 pb-10 text-white text-center ">
                Why Choose Us?
              </div>

        <div className="max-w-[1381px] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-5">


            <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}className="flex flex-col items-center  md:mt-0 md:w-3/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64f24bf7eb8d8e655737345e13f9f1c5c03798b04620331415d47f921aa540c0?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="aspect-[0.83] w-[51px] text-[#f9a826] "
                alt="Special Financing"
              />
              <div className="mt-6 text-xl font-bold text-[#f9a826] leading-6 text-center md:text-left">
                Special Financing Offers
              </div>
              <div className="mt-6 text-base leading-7 text-white text-center md:text-left">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }} className="flex flex-col items-center mt-10 md:mt-0 md:ml-5 md:w-3/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c19da46dde4df98390e6ef3fa8ca8b6af68bcf183f8c23676972b0ae21b1e8e2?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="aspect-[0.98] w-[60px]"
                alt="Trusted Car Dealership"
              />
              <div className="mt-6 text-xl font-bold text-[#f9a826] leading-6 text-center md:text-left">
                Trusted Car Dealership
              </div>
              <div className="mt-6 text-base leading-7 text-white text-center md:text-left">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }} className="flex flex-col items-center mt-10 md:mt-0 md:ml-5 md:w-3/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27864ad5c60af256b7ef3c0ef417fa02d43c98edb5cb613a18aad6b4cbb06c96?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="aspect-[0.98] w-[60px]"
                alt="Transparent Pricing"
              />
              <div className="mt-6 text-xl font-bold text-[#f9a826] leading-6 text-center md:text-left">
                Transparent Pricing
              </div>
              <div className="mt-6 text-base leading-7 text-white text-center md:text-left">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }} className="flex flex-col items-center mt-10 md:mt-0 md:ml-5 md:w-3/12 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e334408f0f1f9712da124006db8a058a0bbfb451db9058eb78f659b7d80096?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="aspect-[0.98] w-[60px]"
                alt="Expert Car Service"
              />
              <div className="mt-6 text-xl font-bold text-[#f9a826] leading-6 text-center md:text-left">
                Expert Car Service
              </div>
              <div className="mt-6 text-base leading-7 text-white text-center md:text-left">
                Our stress-free finance department that can
                <br />
                find financial solutions to save you money.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhyUs;
