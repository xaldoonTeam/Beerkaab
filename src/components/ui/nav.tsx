import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" border-b-4 border-green-800 shadow-xl fixed z-50 w-full bg-[#EEF3EB]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 h-20"> {/* Set a fixed height for navbar */}
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // Replace with your logo's path
            alt="BeerKaab Logo"
            className="h-40 " // Increased logo size
          />
        </div>

        {/* Menu Items */}
        <div>
          <ul className="flex space-x-10 text-green-800 font-medium mr-40 ">
            <li className="hover:text-green-600 transition">
              <a href="/">HOME</a>
            </li>
            {/* <li className="hover:text-green-600 transition">
              <a href="/organizations">Organization</a>
            </li> */}
            <li className="hover:text-green-600 transition">
              <a href="/About">About</a>
            </li>
            <li className="hover:text-green-600 transition">
              <a href="/products">Qalbka</a>
            </li>
           
            <li className="hover:text-green-600 transition">
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div>
          <button className="text-xl font-semibold hover:text-green-600">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
