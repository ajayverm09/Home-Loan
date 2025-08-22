import React, { useState } from "react";
import { motion } from "framer-motion";
import Herobg from "../assets/herobg.mp4";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={Herobg}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-16 lg:px-24 text-white">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center max-w-2xl text-center md:text-left"
        >
          <span className="uppercase text-green-400 font-semibold tracking-wide">
            Welcome to Loaner
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-4">
            Dream Your Mortgage Loan and Make It a Reality Today
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis pulvinar.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-green-500 rounded-sm px-6 py-2 hover:bg-green-500 hover:text-white transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="underline hover:text-green-500 transition"
            >
              Appointment
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 rounded-lg shadow-lg overflow-hidden w-full sm:w-[350px] md:w-[300px] lg:w-[350px]"
        >
          {/* Thumbnail */}
          <div className="relative">
            <img
              src="https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/man-showing-house-mockup-to-clients-5C9HYCE.jpg"
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-green-600 text-white align-middle flex items-center justify-center cursor-pointer hover:bg-green-800 rounded-full text-5xl"
              >
                ‣
              </motion.div>
            </button>
          </div>

          {/* Clients Section */}
          <div className="bg-[#01271E] text-white p-4 flex flex-col items-center md:items-start">
            <p className="text-2xl font-bold">1000+</p>
            <p className="text-sm text-green-400">Satisfied Clients</p>
            <div className="flex -space-x-3 mt-3">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/45.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/77.jpg",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90%] md:w-[800px] aspect-video bg-black rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-white text-black rounded-full px-3 py-1 z-10"
            >
              ✕
            </button>
            <video
              className="w-full h-full object-cover"
              src={Herobg} // reuse or replace
              autoPlay
              controls
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
