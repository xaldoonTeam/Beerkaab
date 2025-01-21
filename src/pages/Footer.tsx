import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#325E56]  text-white mt-20">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Logo and Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">BEERKAAB</h2>
            <p className="text-sm max-w-md mb-6">
              Experience the difference with Pagupone Rental Agency.
            </p>
            <div className="flex flex-wrap space-x-4 text-sm">
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
              <Link to="/careers" className="hover:underline">
                Contuct us
              </Link>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
             
            </div>
          </div>

          {/* Right Section: Subscription Form */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Stay Up-to-Date with the Latest Rental Opportunities
            </h3>
            <p className="text-sm mb-6">
              Subscribe to our email list for updates and exclusive offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow p-2 rounded-l-md border border-gray-400"
              />
              <button className="bg-[#2b514a] hover:bg-[#427b70] text-white px-4 py-2 rounded-r-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#264B48]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-sm">
          <p>© 2023 Pagupone. All rights reserved.</p>
          <p>Designed by TokoTema</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
