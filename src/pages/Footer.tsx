"use client"

import {Link} from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#325E56] text-white mt-10 sm:mt-20">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Logo and Links */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">BEERKAAB</h2>
            <p className="text-sm sm:text-base max-w-md lg:flex hidden">Experience the difference with Pagupone Rental Agency.</p>
            <div className="lg:flex hidden flex-wrap gap-4 text-sm sm:text-base ">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/features" className="hover:underline">
                About
              </Link>
              <Link to="/pricing" className="hover:underline">
                Qalab
              </Link>
              <Link to="/careers" className="hover:underline">
                Adeeg
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact us
              </Link>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </div>
          </div>

          {/* Right Section: Subscription Form */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#eebd4f]">Stay Up-to-Date with the Latest Rental Opportunities</h3>
            <p className="text-sm sm:text-base">Subscribe to our email list for updates and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-auto flex-grow p-2 rounded-md sm:rounded-r-none border border-gray-400 text-black"
              />
              <button className="w-full sm:w-auto bg-[#2b514a] hover:bg-[#427b70] text-white px-4 py-2 rounded-md sm:rounded-l-none transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#264B48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mb-2 sm:mb-0">© 2023 Pagupone. All rights reserved.</p>
          <p>Designed by TokoTema</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

