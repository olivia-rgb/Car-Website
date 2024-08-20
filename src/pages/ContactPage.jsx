import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import Navbar2 from "../components/UI/Navbar2";
import Footer from "../components/UI/Footer"; 
import contact from "/assets/contact.avif";
import backgroundImage from "/assets/bg-img/bgcar9.jpeg"

const ContactPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What should I consider before buying a car?",
      answer:
        "Before buying a car, consider your budget, the car's fuel efficiency, reliability, and safety features. It's also important to research the vehicle's history if buying used, and compare prices to ensure you're getting a fair deal.",
    },
    {
      question: "Is it better to buy a new or used car?",
      answer:
        "Buying a new car offers the latest features and a full warranty, but it depreciates faster. A used car is more affordable and has already undergone the steepest depreciation, but it may require more maintenance and have a shorter warranty.",
    },
    {
      question: "How do I finance a car purchase?",
      answer:
        "You can finance a car through a bank loan, dealership financing, or leasing. Compare interest rates and terms from different lenders to find the best option for your budget. Ensure you understand the total cost of the loan, including interest.",
    },
    {
      question: "What are the most important car accessories to have?",
      answer:
        "Essential car accessories include a phone mount, jumper cables, a first-aid kit, a tire pressure gauge, and floor mats. Depending on your needs, you may also consider adding a backup camera, a dashcam, or seat covers.",
    },
    {
      question: "How often should I service my car?",
      answer:
        "It's recommended to service your car every 12,000 miles or 12 months, whichever comes first. Regular maintenance includes oil changes, brake checks, tire rotations, and fluid top-ups. Check your owner's manual for specific guidelines.",
    },
    {
      question: "What should I look for when test driving a car?",
      answer:
        "During a test drive, check the car's handling, acceleration, braking, and comfort. Listen for unusual noises and test the functionality of features like air conditioning, infotainment, and safety systems. Ensure the car meets your expectations.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col  min-h-screen">
      <div className="relative">
        <div className="absolute  bg-blue-500 inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, height: '100px' }}></div>
        <Navbar2 className="relative z-10 text-white bg-[#000d6b] bg-opacity-70" />
      </div>

      {/* Contact Us Section */}
      <div className="w-full flex flex-col justify-center items-center mt-40 p-6 bg-gray-100">
        <div className="w-full lg:w-4/5 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-[#000d6b] text-white rounded-md hover:bg-blue-600"
              >
                Send Message
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


<Footer />
    </div>
    
  );
};

export default ContactPage;
