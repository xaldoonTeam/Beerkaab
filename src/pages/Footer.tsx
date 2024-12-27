import {Link} from "react-router-dom"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#f5f7f3]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className=" ">
          <img
            src="/logo.png" // Replace with your logo's path
            alt="BeerKaab Logo"
            className="h-40 -mt-16 -m-5" // Increased logo size
          />
            <p className="text-gray-600 max-w-sm text-xl   ">
              Waxa kugu diyaara qaklabka beeraha dhamaan Waxa kugu diyaara qaklabka beeraha
              Waxa kugu diyaara qaklabka beeraha dhamaan Waxa
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4  ">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#2B5F0F]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-600 hover:text-[#2B5F0F]">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/organizations" className="text-gray-600 hover:text-[#2B5F0F]">
                  Organizations
                </Link>
              </li>
              <li>
                <Link to="/owners" className="text-gray-600 hover:text-[#2B5F0F]">
                  Owners
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4 ">Get In Touch</h3>
            <div className="flex gap-4">
              <Link 
                to="#" 
                className="bg-[#2B5F0F] p-2 rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link 
                to="#" 
                className="bg-[#2B5F0F] p-2 rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link 
                to="#" 
                className="bg-[#2B5F0F] p-2 rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link 
                to="#" 
                className="bg-[#2B5F0F] p-2 rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Facebook size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#e8ede5]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-gray-600 flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full border border-gray-400" />
            copyright 2024
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full border border-gray-400" />
            call center
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer