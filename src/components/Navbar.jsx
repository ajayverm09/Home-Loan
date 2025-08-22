import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200";
  const activeClass = "text-green-500 bg-white/10";

  return (
    <nav className="w-full bg-black/30 fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/logo_Asset-1-1024x236.png"
            alt="Loaner Logo"
            className="w-32 h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <NavLink to="/" end
              className={({ isActive }) => (isActive ? "text-green-500" : "hover:text-green-500 transition")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              className={({ isActive }) => (isActive ? "text-green-500" : "hover:text-green-500 transition")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs"
              className={({ isActive }) => (isActive ? "text-green-500" : "hover:text-green-500 transition")}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({ isActive }) => (isActive ? "text-green-500" : "hover:text-green-500 transition")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contactform"
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 text-white backdrop-blur-md transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 py-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/10"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/10"}`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/10"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/10"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/contactform"
            className="block text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
