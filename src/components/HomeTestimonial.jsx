import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Jonah Lawson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at purus sapien. In hac habitasse platea dictumst.",
    role: "Lead Manager",
    company: "Webpt",
    avatar: "https://i.pravatar.cc/100?img=1",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
  {
    name: "Mike Lewsky",
    text: "Suspendisse in sagittis enim, sed sollicitudin justo. Phasellus vehicula sapien nunc, sed viverra urna viverra ornare.",
    role: "Brand Owner",
    company: "Motiva",
    avatar: "https://i.pravatar.cc/100?img=2",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
  {
    name: "Linda Watsons",
    text: "Vivamus eget quam ut est pharetra aliquam nec in nunc. Vestibulum sit amet mi varius, sceleris tortor id.",
    role: "Company CEO",
    company: "Hamilton",
    avatar: "https://i.pravatar.cc/100?img=3",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
  {
    name: "Wanda Forester",
    text: "Quisque sagittis eget ante nec cursus. Phasellus in eros libero. Sed risus est, finibus sed sagittis a, porta sed justo.",
    role: "Company CEO",
    company: "Maven",
    avatar: "https://i.pravatar.cc/100?img=4",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
  {
    name: "Lucy Swann",
    text: "Duis turpis orci, interdum nec bibendum ut, ornare quis lectus. Donec interdum dolor sit amet lobortis blandit.",
    role: "Brand Manager",
    company: "Geoteric",
    avatar: "https://i.pravatar.cc/100?img=5",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
  {
    name: "Jonah Lawson",
    text: "Ut varius velit sed ligula efficitur, id iaculis risus accumsan. Morbi enim nunc, dictum sed eros in, aliquam placerat tortor.",
    role: "Lead Manager",
    company: "Monese",
    avatar: "https://i.pravatar.cc/100?img=6",
    logo: "https://askproject.net/loaner/wp-content/uploads/sites/240/2025/07/client-testi1.png",
  },
];

const Testimonials = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 sm:px-10 lg:px-16"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/7578905/pexels-photo-7578905.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="text-green-400 font-semibold uppercase mb-2 text-sm sm:text-base">
          Testimonials
        </p>

        {/* Heading and Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-snug md:leading-tight">
            Amazing Reviews From Our Clients
          </h2>
          <Link to="/">
            <button className="px-5 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-white transition text-sm sm:text-base">
              View More
            </button>
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md flex flex-col justify-between hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-black">{testimonial.name}</h3>

              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                  <img
                    src={testimonial.logo}
                    alt="company logo"
                    className="w-12 h-12 sm:w-14 sm:h-14 -ml-4 border-4 border-white rounded-full object-cover"
                  />
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm font-medium text-black">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
