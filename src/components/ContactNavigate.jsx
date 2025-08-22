import React from "react";
import { FileText, Smile, HelpCircle, ArrowRight } from "lucide-react";

const NavigateSection = () => {
  const cards = [
    {
      icon: <FileText className="text-green-500 w-6 h-6" />,
      title: "Programs",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing ut elit tellus, luctus nec.",
      link: "Explore Our Programs",
    },
    {
      icon: <Smile className="text-green-500 w-6 h-6" />,
      title: "Testimonials",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing ut elit tellus, luctus nec.",
      link: "Read All Reviews",
    },
    {
      icon: <HelpCircle className="text-green-500 w-6 h-6" />,
      title: "FAQs",
      desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing ut elit tellus, luctus nec.",
      link: "FAQs Page",
    },
  ];

  return (
    <section className="bg-[#00221C] text-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <p className="text-green-500 font-semibold uppercase mb-3 text-sm sm:text-base">
          Navigate
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 leading-snug">
          Confident Borrowing, <br className="hidden sm:block" /> Fresh Collateralized
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-gray-900 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black mb-6">
                {card.icon}
              </div>

              {/* Title + Description */}
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {card.desc}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-600 font-medium border-b border-green-600 hover:text-green-800 hover:border-green-800 transition"
              >
                {card.link} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigateSection;
