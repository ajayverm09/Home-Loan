import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    image:
      "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/selective-focus-of-investors-couple-sitting-at-tab-2TQL8C9-1024x683.jpg",
    title: "Experience Elegant Mortgage",
    date: "July 26, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at...",
  },
  {
    image:
      "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/female-african-american-real-estate-company-to-buy-68X4CJC-1024x683.jpg",
    title: "Lush Housing, Quality House",
    date: "July 26, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at...",
  },
  {
    image:
      "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/customers-who-choose-to-buy-a-condominium-room-and-MZMGR2V-1024x683.jpg",
    title: "Brilliant Debt Classic Lending",
    date: "July 26, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at...",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-12 text-center">
      {/* Heading */}
      <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest mb-2">
        Blog & News
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        Insights From Loaner
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article, idx) => (
          <Link
            key={idx}
            to={`/blogs/${idx + 1}`}
            className="relative group rounded-md overflow-hidden shadow-md text-left transition-transform duration-500 transform hover:scale-[1.01]"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 group-hover:rotate-[1.5deg] group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 bg-white group-hover:bg-green-900 transition-all duration-500">
              <div className="text-xs sm:text-sm flex flex-wrap items-center gap-2 group-hover:text-white text-gray-500 mb-2">
                <span>ASK Project</span>
                <span className="text-green-500 group-hover:text-white">•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-colors group-hover:text-white text-gray-800">
                {article.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-200 line-clamp-3">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <Link
        to="/blogs"
        className="mt-10 px-5 py-2 sm:px-6 sm:py-3 border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition inline-block text-sm sm:text-base"
      >
        View More
      </Link>
    </section>
  );
};

export default BlogSection;
