import React from "react";
import Newsletter from "./Newsletter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Newsletter />

      <div className="bg-[#011D19] text-white py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Explore Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-green-400 transition">About</a></li>
              <li><a href="/blog" className="hover:text-green-400 transition">Blog</a></li>
              <li><a href="/faqs" className="hover:text-green-400 transition">FAQs</a></li>
              <li><a href="/team" className="hover:text-green-400 transition">Team</a></li>
              <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h4>
            <p className="text-sm sm:text-base">A: 205 Brook Fork, Alexandria, Maryland 18165</p>
            <p className="text-sm sm:text-base">P: +1 (234) 567 890 00</p>
            <p className="text-sm sm:text-base">E: loaner.info@mail.com</p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4 text-lg">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between text-sm border-t border-gray-700 pt-6">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © 2025 ASK Project. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-green-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-400">Terms & Services</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
