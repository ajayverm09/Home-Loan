import React from "react";
import {
  FaPen,
  FaUsers,
  FaCog,
  FaChartLine,
  FaLock,
  FaUserFriends,
} from "react-icons/fa";

const values = [
  {
    icon: <FaPen />,
    title: "Passion",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
  {
    icon: <FaCog />,
    title: "Commitment",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
  {
    icon: <FaLock />,
    title: "Honesty",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
  {
    icon: <FaUserFriends />,
    title: "Team Work",
    desc: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis leo.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-green-600 font-semibold">
          Our Values
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          The Best Choice at <br className="hidden sm:block" /> Affordable Rates
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {values.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 text-center border border-transparent hover:border-green-600"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green-950 text-green-200 text-lg sm:text-xl">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
