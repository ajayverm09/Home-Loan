import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] mb-12 sm:mb-16 lg:mb-20 bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Box */}
      <div className="relative z-10 ml-auto mr-4 sm:mr-8 md:mr-16 lg:mr-24 max-w-full sm:max-w-lg md:max-w-xl bg-white shadow-lg p-6 sm:p-8 md:p-10 rounded-lg">
        <p className="text-xs sm:text-sm uppercase text-green-700 tracking-wide mb-2">
          Let’s Talk!
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Amazing Mortgage, <br /> Let’s Start Today!
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
          Ut elit tellus, luctus nec ullamcorper.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-green-500 text-black font-medium rounded-md hover:bg-green-500 hover:text-white transition">
            Get Started
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 text-black font-medium rounded-md flex items-center gap-2 hover:text-green-500 transition">
            Appointment <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
