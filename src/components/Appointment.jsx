import React from "react";
import { Link } from "react-router-dom";

const AppointmentSection = () => {
  return (
    <section className="bg-[#002d25] text-white py-12 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Form */}
        <div className="bg-gray-100 text-black p-6 sm:p-8 rounded-xl shadow-lg w-full">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name <span className="text-green-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone <span className="text-green-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+1 (234) 567 890"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-green-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Hello there!"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-600 outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full border border-green-600 text-black font-semibold py-3 rounded-md hover:bg-green-600 hover:text-white transition"
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-green-500 font-semibold uppercase tracking-wide">
            Appointment
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Elegant Mortgage, Satisfaction Guaranteed
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
            Explore competitive rates, flexible terms, and personalized solutions 
            designed to fit your financial goals.
          </p>
          <Link to="/">
            <button className="border border-green-600 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
