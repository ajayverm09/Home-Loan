import React from "react";
import { FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-green-600 uppercase font-semibold tracking-wider mb-2 text-sm sm:text-base">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#01271E] leading-snug">
          Let&apos;s Talk About Your <br className="hidden sm:block" /> Future
          Home
        </h2>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-[#00221C] text-white p-6 sm:p-10 flex flex-col justify-between rounded-lg">
          <div>
            <h3 className="text-green-500 font-semibold mb-3 text-lg">
              Our Office
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Second Floor, Agency Building, <br />
              88343 Grady Shore, Ashaland <br />
              Kansas 23899-8360
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <h3 className="text-green-500 font-semibold mb-3 text-lg">
              Contact
            </h3>
            <p className="text-base sm:text-lg mb-2">+1 (234) 567 890 00</p>
            <p className="text-base sm:text-lg mb-6">loaner.info@mail.com</p>

            {/* Social Icons */}
            <div className="flex space-x-5 text-xl">
              <a href="#" className="hover:text-green-500">
                <FaBehance />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaDribbble />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-200 p-6 sm:p-10 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Send a message
          </h3>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                Your Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                  Phone <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+1 (234) 567 890"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                  Email <span className="text-green-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                Message
              </label>
              <textarea
                placeholder="Hello there!"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-green-500 text-green-600 py-3 rounded hover:bg-green-500 hover:text-white transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.204190403533!2d-122.42067968468132!3d37.77851987975747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5ba8f0f1%3A0xb7a650eb3f7f7f!2sAgency%20Building!5e0!3m2!1sen!2sus!4v1692444444444!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="filter grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
