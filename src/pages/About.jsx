import React from 'react';
import AboutSection from '../components/Aboutus';
import AboutValue from '../components/AboutValue';
import HomePartner from '../components/HomePartner';
import HomeTeam from '../components/HomeTeam';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AboutLast from '../components/AboutLast';
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Wanda Youngs",
    role: "Company CEO",
    img: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/vertical-shot-of-a-successful-middle-aged-woman-at-D86XSZB.jpg",
  },
  {
    name: "Timothy Strong",
    role: "Head Marketing",
    img: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/confident-and-relaxed-bearded-and-brunette-man-in-R9GDWR6.jpg",
  },
  {
    name: "Linda Frost",
    role: "Designer",
    img: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/surprised-excited-woman-on-a-green-background-che-YGU2LQZ.jpg",
  },
  {
    name: "James Wilson",
    role: "Inventory",
    img: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/arabian-businessman-holding-tray-with-papers-near-E9ZXF5U.jpg",
  },
];

const AboutHero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
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
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">About Us</h1>
          <div className="text-sm md:text-lg text-gray-200 flex flex-wrap justify-center items-center gap-2">
            <Link to="/" className="hover:text-green-400 hover:underline">
              <span className="font-medium">Home</span>
            </Link>
            <span className="text-green-400 text-lg">➜</span>
            <span>About</span>
          </div>
        </div>
      </section>

      {/* About & Values */}
      <AboutSection />
      <AboutValue />

      {/* Team Section */}
      <section className="py-12 bg-[#01271E] text-center px-4">
        <p className="text-sm uppercase text-gray-400">Our Team</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mt-2 max-w-2xl mx-auto">
          Meet Our Professional Team Members
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 sm:h-96 object-cover cursor-pointer"
                />

                {/* Hover Overlay with Socials */}
                <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 text-green-500 text-xl">
                    <a href="#" className="hover:text-green-700"><FaFacebookF /></a>
                    <a href="#" className="hover:text-green-700"><FaTwitter /></a>
                    <a href="#" className="hover:text-green-700"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>

              {/* Name and Role */}
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-green-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <HomePartner />
      <AboutLast />
    </div>
  );
};

export default AboutHero;
