import React from "react";
import BlogSection from "../components/BlogsSection";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7579192/pexels-photo-7579192.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Blogs & News
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-gray-200 flex flex-wrap justify-center items-center gap-2">
            <Link to="/" className="hover:text-green-400 hover:underline">
              <span className="font-medium">Home</span>
            </Link>
            <span className="text-green-400 text-lg md:text-xl">➜</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};

export default Blogs;
