import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Web Development", href: "#" },
        { name: "App Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
      ],
    },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="bg-green-800 text-white">
      {/* Top Section */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2 border-b border-green-700">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faFacebook} className="hover:text-black" />
          <FontAwesomeIcon icon={faTwitter} className="hover:text-black" />
          <FontAwesomeIcon icon={faInstagram} className=" hover:text-black" />
        </div>
        <p className="text-sm">Free Shipping on orders over $50!</p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-0">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold hover:text-gray-300">
          BrandLogo
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-400 hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 md:top-auto left-0 right-0 md:bg-transparent bg-green-800 px-4 py-4 md:px-0 z-50`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="block text-white px-4 py-2 hover:text-gray-300"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="absolute hidden group-hover:block bg-gray-700 text-sm mt-2 rounded shadow-lg">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.href}
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
