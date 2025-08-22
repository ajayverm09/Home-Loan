import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#011D19] py-16 px-6 md:px-14 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
      {/* Left: Logo + Text */}
      <div className="flex flex-col space-y-4 max-w-lg text-center lg:text-left">
        {/* Logo */}
        <div className="w-40 md:w-64 h-auto mx-auto lg:mx-0">
          <img
            src="https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/logo_Asset-1-1024x236.png"
            alt="Loaner Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl font-light text-white">
          We only transfer ownership of your home, not your future.
        </p>
      </div>

      {/* Right: Input + Image */}
      <div className="bg-[#01271E] p-6 rounded-lg w-full max-w-xl shadow-lg flex flex-col md:flex-row items-center gap-6">
        {/* Input Section */}
        <div className="flex flex-col w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
            Subscribe to our newsletter
          </h3>

          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 pr-12 rounded-md border border-green-500 focus:outline-none text-white bg-transparent placeholder-white"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-green-400 text-2xl">
              &rarr;
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 flex-shrink-0 rounded-md overflow-hidden">
          <img
            src="https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/man-showing-house-mockup-to-clients-5C9HYCE.jpg"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
