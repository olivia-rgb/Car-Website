import React from "react";
import { motion } from "framer-motion";
import carImage from "/assets/login.jpg"; // Replace with your image path
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Section */}
      <motion.div
        className="md:w-1/2 w-full h-1/2 md:h-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={carImage}
          alt="Car"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-slate-50 flex flex-col justify-center p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <Link to="/">
            <IoHome className="text-3xl text-[#000d6b] hover:text-[#f9a826]" />
          </Link>
        </div>
        <div className="bg-white p-6 max-[450px]:mt-[6rem] rounded-lg shadow-xl">
          <form>
            {/* Car-Specific Signup Fields */}
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="text"
              name="carModel"
              id="carModel"
              placeholder="Car Model"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="text"
              name="carYear"
              id="carYear"
              placeholder="Car Year"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <input
              type="text"
              name="vin"
              id="vin"
              placeholder="VIN (Vehicle Identification Number)"
              className="border border-gray-400 py-2 px-4 w-full rounded mb-3"
            />
            <p className="mt-2 flex gap-2">
              Already have an account?{" "}
              <Link className="font-semibold text-[#000d6b]" to="/login">
                Log In
              </Link>
            </p>
            <button
              className="w-full py-2 mt-5 bg-[#000d6b] text-white font-semibold rounded hover:bg-[#691e69]"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
