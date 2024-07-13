import * as React from "react";
import { motion } from "framer-motion";

function Review() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5, // Delay before animation starts
        duration: 1, // Animation duration
      }}
      className="flex justify-center items-center px-16 py-10 rounded-2xl max-md:px-5"
    >
      <div className="flex flex-col mt-10 w-full max-w-[1401px] max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-between text-white max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-5xl text-[black] font-bold leading-10 max-md:max-w-full">
            What our customers say
          </div>
          <div className="flex-auto my-auto text-[black] text-base pt-3 text-center leading-7 max-md:max-w-full">
            Rated 4.7 / 5 based on 28,370 reviews
          </div>
        </div>
        <div className="mt-10 max-md:mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 py-8 w-full bg-[#000d6b] rounded-2xl shadow-2xl text-white font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 text-xl font-medium leading-9">
                  <div className="flex-auto text-[#f9a826] font-black">Great Work</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1530e731285f839eb622fd71ad6e323ea0f83224690aacb2d2457abbc2193132?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-[1.43] w-[37px]"
                  />
                </div>
                <div className="mt-11 text-base leading-7 max-md:mt-10 max-md:mr-2.5">
                  “Amazing design, easy to customize and a design
                  <br />
                  quality superlative account on its cloud platform for
                  <br />
                  the optimized performance. And we didn’t on our
                  <br />
                  original designs.”
                </div>
                <div className="flex gap-4 mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b07291fbf01c56822a3f3f99c8a8f1b33de41cf4c23637143d604afc764d6ce4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-square w-[60px]"
                  />
                  <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                    <div className="text-base font-medium leading- text-[#f9a826]">
                      Leslie Alexander
                    </div>
                    <div className="mt-3 text-sm leading-6 text-[#f9a826]">Facebook</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1, // Delay before animation starts
                duration: 1, // Animation duration
              }}
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow px-10 py-8 w-full bg-[#000d6b] rounded-2xl shadow-2xl text-white font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 text-xl font-medium leading-9">
                  <div className="flex-auto font-black text-[#f9a826]">Awesome Design</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1530e731285f839eb622fd71ad6e323ea0f83224690aacb2d2457abbc2193132?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-[1.43] w-[37px]"
                  />
                </div>
                <div className="mt-11 text-base leading-7 max-md:mt-10 max-md:mr-1.5">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br />
                  elit, sed do eiusmod tempor incididunt ut labore et
                  <br />
                  dolore magna aliqua. Ut enim ad minim veniam sed
                  <br />
                  do eiusmod”
                </div>
                <div className="flex gap-4 self-start mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87319bc19d1e3a66afdd2397dafde7ee52408ccce50d78c2fda4eb1e0f2247c?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-square w-[60px]"
                  />
                  <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                    <div className="text-base font-medium leading- text-[#f9a826]">
                      Cody Fisher
                    </div>
                    <div className="mt-3 text-sm leading-6 text-[#f9a826]">Google</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.5, // Delay before animation starts
                duration: 1, // Animation duration
              }}
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow px-10 py-8 w-full bg-[#000d6b] rounded-2xl shadow-2xl text-white font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 text-xl font-medium leading-9">
                  <div className="flex-auto font-black text-[#f9a826]">Great Service</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1530e731285f839eb622fd71ad6e323ea0f83224690aacb2d2457abbc2193132?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-[1.43] w-[37px]"
                  />
                </div>
                <div className="mt-11 text-base leading-7 max-md:mt-10 max-md:mr-2.5">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing
                  <br />
                  elit, sed do eiusmod tempor incididunt ut labore et
                  <br />
                  dolore magna aliqua. Ut enim ad minim veniam sed
                  <br />
                  do eiusmod”
                </div>
                <div className="flex gap-4 self-start mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7de1b8e499b37e2415da3b4ff196640b0fa4d6e9024a7eb7bdf27ccfe5868763?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-square w-[60px]"
                  />
                  <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
                    <div className="text-base font-medium leading- text-[#f9a826]">
                      Jenny Wilson
                    </div>
                    <div className="mt-3 text-sm leading-6 text-[#f9a826]">Amazon</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Review;
