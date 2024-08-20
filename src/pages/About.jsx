import React from "react";
import { motion } from "framer-motion";
import aboutImage from "/assets/about.jpg";
import browse from "/assets/browse.jpg";
import inspect from "/assets/inspect.jpg";
import buy from "/assets/slider-img/buy.jpg"; // Replace with your image path
import Navbar from "../components/UI/Navbar"; 
import Footer from "../components/UI/Footer"; ; 

const AboutSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <div className="relative  w-full h-[50vh] md:h-[70vh] flex items-center justify-start">
        <img
          src={aboutImage}
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 ml-6 md:ml-12 p-4 bg-black bg-opacity-50 rounded-md">
          <h1 className="text-white text-left text-4xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* About Us Content Section */}
      <motion.div
        className="p-6 md:p-10 w-full max-w-[70%] bg-white text-gray-700 flex flex-col md:flex-row justify-center items-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl text-[#000d6b] md:mr-20 md:text-4xl font-semibold mb-4">
          Who We Are
        </h2>
        <p className="text-lg max-w-2xl text-center">
          We are a dedicated team of professionals committed to helping you find
          the best deals on cars. With years of experience in the automotive
          industry, we strive to provide a seamless and enjoyable car buying
          experience. Our mission is to empower our customers by offering
          transparency, trust, and exceptional service. We believe in building
          long-term relationships with our clients by providing honest advice
          and guidance throughout the car buying process. Whether you're
          purchasing your first vehicle or adding another to your collection, we
          are here to ensure you make a well-informed decision with confidence.
        </p>
      </motion.div>

      {/* How It Works Section */}
      <div className="bg-[#000d6b] py-8">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-white text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Step 1 */}
          <div className="self-start w-full max-w-[400px] md:max-w-[30%] flex flex-col md:items-end md:mb-0 mb-8">
            <div className="bg-slate-200 p-4 md:p-6 rounded-lg shadow-xl mb-4">
              <h3 className="text-xl font-semibold mb-4">
                Browse through thousands of cars
              </h3>
              <p className="text-left">
                Find the one that meets your expectation
              </p>
            </div>
            <img
              src={browse}
              alt="Browse"
              className="w-full h-[150px] md:h-[200px] object-cover rounded-lg border border-gray-300"
            />
          </div>

          {/* Step 2 */}
          <div className="self-end w-full max-w-[400px] md:max-w-[30%] flex flex-col md:items-start md:mb-0 mb-8">
            <img
              src={inspect}
              alt="Inspect"
              className="w-full h-[150px] md:h-[200px] object-cover rounded-lg border border-gray-300 mb-4"
            />
            <div className="bg-slate-200 p-4 md:p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4">
                Check inspection report
              </h3>
              <p className="text-left">
                It helps to understand the true condition of the car
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="self-start w-full max-w-[400px] md:max-w-[30%] flex flex-col md:items-end">
            <div className="bg-slate-200 p-4 md:p-6 rounded-lg shadow-xl mb-4">
              <h3 className="text-xl font-semibold mb-4">
                Meet with our manager
              </h3>
              <p className="text-left">
                Check the car in real life and strike a deal
              </p>
            </div>
            <img
              src={buy}
              alt="Buy"
              className="w-full h-[150px] md:h-[200px] object-cover rounded-lg border border-gray-300"
            />
          </div>
        </motion.div>
      </div>
      <div className="bg-white py-10"></div>

      {/* Footer */}
      <Footer className="mt-20" />
    </div>
  );
};

export default AboutSection;
