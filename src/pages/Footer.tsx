"use client"

import {Link} from "react-router-dom"
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import {
  Leaf,
 
} from "lucide-react"
export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
{/* <Link to="/" className="py-2">
            <div className="relative h-20 w-40 ">
              <img src="/logo.png" alt="Logo"  className="object-contain -mt-20"  />
            </div>
          </Link>             */}
            <span className="font-bold text-xl">Berrkaab</span>
          </Link>
          <p className="text-green-100 mb-6">
            Your trusted partner for agricultural equipment rental and professional farming services.
          </p>
          <div className="flex gap-4">
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5"></div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Tools", to: "/tools" },
              { name: "Services", to: "/services" },
              { name: "Blog", to: "/blog" },
              { name: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.to} className="text-green-100 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-4">
            {[
              { name: "Agricultural Services", to: "/services/agricultural" },
              { name: "Equipment Rental", to: "/services/rental" },
              { name: "Consulting Services", to: "/services/consulting" },
              { name: "Service Packages", to: "/services#packages" },
              { name: "Custom Solutions", to: "/services#custom" },
            ].map((service) => (
              <li key={service.name}>
                <Link to={service.to} className="text-green-100 hover:text-white transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4 text-green-100">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a1.998 1.998 0 010-2.827L13.414 3.1a1.998 1.998 0 012.827 0l4.243 4.243a1.998 1.998 0 010 2.827L17.657 16.657z"
                />
              </svg>
              <span>123 Farm Road, Countryside, CA 12345</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@agrirent.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-100">
        <p>© 2025 AgriRent. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer

