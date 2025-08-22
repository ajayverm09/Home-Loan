import React, { useEffect, useState } from "react";

const StatItem = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, "")); // number only
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center sm:text-left">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        {count}
        {value.replace(/[0-9]/g, "")}
      </h3>
      <p className="text-xs sm:text-sm text-gray-200">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Left side - Image + Overlay + Stats */}
        <div className="relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Meeting"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] object-cover rounded-xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#01271E] via-green-900/90 to-transparent"></div>

          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 z-10 w-full text-green-500 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            <StatItem value="14+" label="Years of Experience" />
            <StatItem value="92%" label="Approval Success" />
            <StatItem value="20K" label="Homes Financed" />
            <StatItem value="999+" label="Positive Reviews" />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-green-600 font-medium mb-2">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#01271E] mb-4 sm:mb-6 leading-snug">
            Change the world of finance where life matters.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            Suspendisse in sagittis enim, sed sollicitudin justo. Phasellus
            vehicula sapien nunc, sed viverra urna viverra ornare. Etiam in
            ullamcorper turpis. Vivamus eget quam ut est pharetra aliquam nec in
            nunc.
          </p>
          <button className="px-5 sm:px-6 py-2 sm:py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
