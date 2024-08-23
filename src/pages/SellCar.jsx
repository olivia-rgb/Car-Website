import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
const SellYourCarPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What documents do I need to sell my car?",
      answer:
        "To sell your car, you'll need the car's title, a valid driver's license, proof of insurance, and any service records. You may also need a bill of sale and release of liability form, depending on your local regulations.",
    },
    {
      question: "How do I determine the value of my car?",
      answer:
        "You can determine your car's value by researching similar models online, checking valuation tools like Kelley Blue Book or Edmunds, and considering the car's condition, mileage, and features.",
    },
    {
      question: "Can I sell a car that is still under finance?",
      answer:
        "Yes, you can sell a car that is still under finance, but you'll need to pay off the remaining loan balance before the sale. Alternatively, the buyer may pay off the loan directly to the lender as part of the transaction.",
    },
    {
      question: "How can I make my car more attractive to buyers?",
      answer:
        "To make your car more attractive, ensure it's clean and well-maintained. Consider having it professionally detailed, fixing minor issues, and providing detailed service records. High-quality photos and a well-written description can also help.",
    },
    {
      question: "What should I do if the buyer wants a test drive?",
      answer:
        "If a buyer wants a test drive, accompany them and ensure they have a valid driver's license. Verify their insurance coverage and take necessary precautions to protect your vehicle during the drive.",
    },
    {
      question: "How do I transfer ownership after selling my car?",
      answer:
        "To transfer ownership, you'll need to sign over the car title to the new owner, complete any required paperwork, and submit it to your local Department of Motor Vehicles (DMV). Provide the buyer with a bill of sale and any other required documents.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col  min-h-screen">
      
    <Navbar />
    <div>
      {/* Hero Section */}
      <div className="relative mt-20 bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="relative w-full md:w-1/2">
            <img
              src='/assets/video/buycar2.jpg'
              alt="Sell Your Car"
              className="rounded-md shadow-lg h-full object-cover"
              style={{ height: 'calc(100vh - 8rem)' }} // Adjust this value to match the form height
            />
            <div className="absolute bottom-0 left-10  bg-black bg-opacity-50 p-4">
              <h2 className="text-white text-3xl md:text-5xl font-bold">Sell to Us at the Best Price</h2>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10">
            <form className="bg-white p-8 rounded-md shadow-md">
              <div className="mb-4">
                <label className="block text-[#000d6b] text-md font-bold mb-2" htmlFor="make">
                  Make
                </label>
                <input
                  id="make"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000d6b]  font-bold mb-2" htmlFor="model">
                  Model
                </label>
                <input
                  id="model"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000d6b] text-md font-bold mb-2" htmlFor="year">
                  Year of Manufacture
                </label>
                <input
                  id="year"
                  type="number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000d6b] text-md font-bold mb-2" htmlFor="condition">
                  Condition
                </label>
                <input
                  id="condition"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000d6b] text-md font-bold mb-2" htmlFor="transmission">
                  Transmission
                </label>
                <input
                  id="transmission"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#000d6b] text-md text-sm font-bold mb-2" htmlFor="carDetails">
                  Car Details
                </label>
                <textarea
                  id="carDetails"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#000d6b] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex flex-col items-center p-4 py-20 bg-white">
        <div className="w-full lg:w-4/5">
          <h2 className="text-xl md:text-3xl font-bold mb-11 text-[#000d6b] text-center flex justify-center items-center gap-1">
            Frequently Asked Questions
            <FaQuestion className="text-[#f9a826] animate-pulse" />
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 200,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="border rounded-lg shadow-lg hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-7 bg-gray-50">
                    <p className="text-base">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SellYourCarPage;
