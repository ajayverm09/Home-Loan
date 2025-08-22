import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../components/BlogsData";

export default function SingleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center text-red-500 mt-10">Blog not found</h2>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-96 flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7579128/pexels-photo-7579128.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text */}
        <div className="relative z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{blog.title}</h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base">{blog.date}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6 text-gray-700 leading-relaxed">
        {/* Intro / Subtitle */}
        <p className="mb-6 text-base md:text-lg">
          {blog.intro || "Lorem ipsum intro text..."}
        </p>

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg shadow-md mb-6"
        />

        {/* Rest of Content */}
        <div className="whitespace-pre-line text-sm md:text-base">
          {blog.content}
        </div>

        <button
          onClick={() => navigate("/blogs")}
          className="mt-8 md:mt-10 px-4 md:px-6 py-2 border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition"
        >
          ← Back to Blogs
        </button>
      </div>
    </div>
  );
}
