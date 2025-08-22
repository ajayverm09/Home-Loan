import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./BlogsData";

const BlogSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-12 text-center">
      {/* Section Heading */}
      <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest mb-2">
        Blog & News
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-gray-800">
        Insights From Loaner
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {blogs.map((article) => (
          <Link
            key={article.id}
            to={`/blogs/${article.id}`}
            className="relative group rounded-lg overflow-hidden shadow-md text-left transition-transform duration-500 transform hover:scale-[1.01]"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 sm:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:rotate-[1.5deg] group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 bg-white group-hover:bg-green-900 transition-all duration-500">
              <div className="text-xs sm:text-sm flex flex-wrap items-center space-x-2 group-hover:text-white text-gray-500 mb-2">
                <span>ASK Project</span>
                <span className="text-green-500 group-hover:text-white">•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-colors group-hover:text-white text-gray-800">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-200 line-clamp-3">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
