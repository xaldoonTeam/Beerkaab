"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Mock user data
interface User {
  name: string;
  isAuthenticated: boolean;
}

const user: User = {
  name: "Najma mohame",
  isAuthenticated: true, // Toggle to false for unauthenticated state
};

// Navigation items (unchanged)
const navItems = [
  { to: "/", label: "HOME" },
  { to: "/About", label: "About" },
  { to: "/products", label: "Qalbka" },
  { to: "/contact", label: "CONTACT US" },
  { to: "/Loginpage", label: "Login" },

];

// Helper function to get initials from a name
const getInitials = (name: string): string => {
  if (!name) return "NA"; // Return "NA" if no name is provided
  const parts: string[] = name.split(" ");
  const initials: string = parts.map((part: string) => part[0]).join("").substring(0, 2);
  return initials.toUpperCase();
};

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b-4 border-green-800 shadow-xl fixed z-50 w-full bg-[#EEF3EB]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 h-20">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="BeerKaab Logo" className="h-40 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-10 lg:mr-80">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-green-800 hover:text-green-600 transition font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile Button */}
          {user.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 text-white font-bold"
                >
                  {getInitials(user.name)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-white border border-gray-200 shadow-lg rounded-md p-2"
                style={{ width: "12rem" }} // Explicit width to prevent resizing
              >
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/rent" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                    Rent
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/logout" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" className="text-green-800 hover:text-green-600 font-semibold text-xl">
              Login
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="lg:hidden text-green-800 hover:bg-green-100 rounded-md p-2 transition"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[#EEF3EB] shadow-lg border-l border-gray-200 animate-slide-in duration-300"
          >
            <nav className="flex flex-col gap-6 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-green-800 hover:text-green-600 transition font-medium block text-base border-b border-transparent hover:border-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {user.isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 text-white font-bold"
                    >
                      {getInitials(user.name)}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-white border border-gray-200 shadow-lg rounded-md p-2"
                    style={{ width: "12rem" }} // Explicit width for mobile dropdown
                  >
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/rent" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                        Rent
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/logout" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" className="text-green-800 hover:text-green-600 font-semibold text-xl">
                  Login
                </Button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
