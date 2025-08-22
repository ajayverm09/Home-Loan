import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      {/* Small Heading */}
      <h4 className="text-sm md:text-base font-semibold text-gray-700 tracking-widest mb-4">
        ABOUT US
      </h4>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
        Change the world of finance where life matters. <br className="hidden sm:block" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:block" />
        Aenean at purus sapien. In hac habitasse platea dictumst
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-12">
        Suspendisse in sagittis enim, sed sollicitudin justo. Phasellus vehicula
        sapien nunc, sed viverra urna viverra ornare. Etiam in ullamcorper
        turpis. Vivamus eget quam ut est pharetra aliquam nec in nunc. Vestibulum
        sit amet mi varius, scelerisque tortor id, accumsan lorem. Phasellus et
        vulputate cras ultricies odio id orci porta.
      </p>

      {/* CEO Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="CEO"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 shadow-lg border-4 border-white"
        />
        <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
          Lucas Abraham
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Company CEO
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
