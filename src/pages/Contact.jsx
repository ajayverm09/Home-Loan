import React from "react";
import HomeFaq from "../components/HomeFaq";
import ContactNavigate from "../components/ContactNavigate";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
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
            Contact Us
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-gray-200 flex flex-wrap justify-center items-center gap-2">
            <Link to="/" className="hover:text-green-400 hover:underline">
              <span className="font-medium">Home</span>
            </Link>
            <span className="text-green-400 text-lg md:text-xl">➜</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <ContactForm />
      </div>

      {/* Contact Info / Navigate Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <ContactNavigate />
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <HomeFaq />
      </div>
    </div>
  );
};

export default Contact;
