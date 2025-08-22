import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-200 text-center">
      {/* Subtitle */}
      <p className="text-sm uppercase text-gray-600">Our Team</p>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 max-w-2xl mx-auto">
        Meet Our Professional Team Members
      </h2>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Socials */}
              <div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                <div className="flex space-x-4 text-green-500 text-xl">
                  <a href="#" className="hover:text-green-700">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-green-700">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-green-700">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* Name and Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
