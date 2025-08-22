import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Get Pre-Approved",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    },
    {
      title: "Apply with Ease",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    },
    {
      title: "Expert Guidance",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
    },
  ];

  return (
    <section className="bg-[#02291F] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="House"
            className="w-full h-64 sm:h-80 md:h-[580px] object-cover rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 md:ml-6 lg:ml-10 text-center md:text-left">
          <p className="text-green-500 uppercase font-semibold tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            The Best Choice at <br className="hidden sm:block" /> Affordable Rates
          </h2>

          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-md shadow flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 hover:shadow-lg transition"
              >
                {/* Text */}
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.desc}</p>
                </div>

                {/* Arrow Button */}
                <button className="w-10 h-10 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition">
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
