"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const getInitials = (name: string) => {
  if (!name) return "NA";
  const parts = name.split(" ");
  return parts
    .map((part) => part[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/About", label: "About Us" },
  { to: "/products", label: "Qalab" },
  { to: "/Adeeg", label: "Adeeg" },
  { to: "/contact", label: "Contact Us" },
  { to: "/blog", label: "BLOG" },
];

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userName, setUserName] = React.useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUserName(parsedUser.username || "Guest");
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsAuthenticated(false);
        setUserName(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserName(null);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#325E56] text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center px-4 gap-2">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
            <span className="flex items-center">
              <MapPin size={14} className="mr-1" /> 123 Anywhere Street, NY
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center">
              <Mail size={14} className="mr-1" /> pagupone@mail.com
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center">
              <Phone size={14} className="mr-1" /> +1 (333) 000-0000
            </span>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-700 transition duration-300"
  >
    <Twitter size={18} /> {/* This represents the X (Twitter) icon */}
  </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-0">
          {/* Logo */}
          <Link to="/" className="flex h-0 items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-28 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-black font-medium text-lg ml-80">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="hover:text-green-700 transition duration-300 py-8 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login/Logout or User Dropdown */}
          <div className="hidden sm:flex items-center">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-10 h-10 rounded-full bg-[#325E56] text-white font-bold hover:bg-green-700 transition duration-300">
                    {userName ? getInitials(userName) : "NA"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white shadow-md border rounded-md">
                  <DropdownMenuItem>
                    <Link
                      to="/dashboard"
                      className="block w-full px-4 py-2 text-sm hover:bg-gray-100 transition duration-300"
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-300"
                    >
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/Loginpage">
                <Button className="bg-[#325E56] text-white px-6 py-3 rounded-lg hover:bg-[#2A4F49] transition duration-300 text-lg">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden p-2">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-64">
              <div className="flex flex-col h-full">
                <div className="p-4 bg-[#325E56]">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="/logo.png" alt="Logo" className="h-20 -mt-8 w-auto object-contain"
                   />
                </div>
                <ul className="flex-1 overflow-y-auto py-4 px-4">
                  {navItems.map((item) => (
                    <li key={item.to} className="mb-1">
                      <Link
                        to={item.to}
                        onClick={() => setIsSheetOpen(false)}
                        className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="p-4 border-t">
                  {isAuthenticated ? (
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-300 rounded"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/Loginpage"
                      onClick={() => setIsSheetOpen(false)}
                      className="block w-full"
                    >
                      <Button className="w-full bg-[#325E56] text-white px-4 py-2 rounded-lg hover:bg-[#2A4F49] transition duration-300">
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
