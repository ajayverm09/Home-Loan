import React, { useState } from "react";

const faqData = [
  {
    question: "How long has your company been established?",
    answer:
      "Our company has been around for over 10 years, delivering excellent service to our clients.",
  },
  {
    question: "How much does it cost for one care?",
    answer:
      "The cost varies depending on the services provided. Please contact us for a detailed quote.",
  },
  {
    question: "How many people work at your company?",
    answer:
      "We have a diverse team of over 200 professionals working across various departments.",
  },
  {
    question: "Does your company open job vacancies?",
    answer:
      "Yes, we regularly post job openings. Check our careers page for updates.",
  },
  {
    question: "How do I contact Loaner for appointment?",
    answer:
      "You can reach out via our contact form or call our customer service line.",
  },
  {
    question: "What kind of contracts do you provide?",
    answer:
      "We offer both short-term and long-term contracts tailored to your needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/8962686/pexels-photo-8962686.jpeg"
            alt="FAQ Visual"
            className="w-full h-64 sm:h-80 md:h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Right: FAQ */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center py-4 px-3 sm:px-4 text-left font-medium text-base sm:text-lg transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#01271E] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <span>{item.question}</span>
                  <span className="text-xl cursor-pointer sm:text-2xl">
                    {activeIndex === index ? "×" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 text-gray-600 ${
                    activeIndex === index ? "max-h-40 sm:max-h-52" : "max-h-0"
                  }`}
                >
                  <p className="pb-4 px-4 text-sm sm:text-base">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
