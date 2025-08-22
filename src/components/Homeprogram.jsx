import React from "react";
import { Check } from "lucide-react";

const programs = [
  {
    title: "Refinancing Options",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
  {
    title: "Jumbo Loans",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
  {
    title: "VA Loans",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
  {
    title: "FHA Loans",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
  {
    title: "Flexible Mortgages",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
  {
    title: "Fixed-Rates Mortgages",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
  },
];

const Programs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-sm font-semibold text-green-600 tracking-widest uppercase">
              Our Programs
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-2">
              Change the World of Finance <br className="hidden sm:block" /> Where
              Life Matters
            </h2>
          </div>
          <button className="border border-green-500 text-green-500 px-6 py-2 rounded-md font-medium hover:bg-green-500 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-md flex flex-col items-start hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 group-hover:bg-green-500 group-hover:text-white transition duration-300 mb-4">
                <Check size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
