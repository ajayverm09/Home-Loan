import React from "react";

const partners = [
  "Drop estate",
  "webpt",
  "oeoteric",
  "Maven",
  "Hamilton Lane",
  "Monese",
  "motiva",
  "straiv.",
  "CUCHEN*",
];

// CSS for animation
const styles = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const Partners = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-green-500 mb-4 text-lg font-semibold uppercase tracking-wide">
            Our Partners
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Our Partners Will Provide the Best Financial Services for You
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="bg-[#01271E] text-green-400 h-40 flex items-center justify-center text-lg md:text-xl font-semibold rounded-lg group"
              style={{
                opacity: 0,
                animationName: "fadeInUp",
                animationDuration: "0.6s",
                animationFillMode: "forwards",
                animationTimingFunction: "ease",
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <span className="transition-all duration-300 group-hover:scale-110">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partners;
