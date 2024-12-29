"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Helper function to get initials from a name
const getInitials = (name: string): string => {
  if (!name) return "NA";
  const parts = name.split(" ");
  return parts.map((part) => part[0]).join("").substring(0, 2).toUpperCase();
};

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userName, setUserName] = React.useState<string | null>(null);
  const navigate = useNavigate(); // React Router's navigation hook

  // Check authentication status on component mount
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUserName(parsedUser.username);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsAuthenticated(false);
        setUserName(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserName(null);
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage and update state
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserName(null);

    // Navigate to the home page without refreshing
    navigate("/");
  };

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/About", label: "About" },
    { to: "/products", label: " kiro " },
    { to: "/contact", label: "CONTACT US" },
  ];

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

          {/* Profile or Login Button */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 text-white font-bold"
                >
                  {userName ? getInitials(userName) : "NA"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/Addproducts" className="flex items-center gap-2 text-green-800 hover:text-green-600">
                    Rent
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 text-green-800 hover:text-green-600"
                  >
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/Loginpage">
              <Button variant="ghost" className="text-green-800 hover:text-green-600 font-semibold text-xl">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
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
            className="w-[300px] sm:w-[400px] bg-[#EEF3EB] shadow-lg border-l border-gray-200"
          >
            <nav className="flex flex-col gap-6 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-green-800 hover:text-green-600 transition font-medium block text-base border-b border-transparent hover:border-green-600"
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="text-green-800 hover:text-green-600 transition font-medium block text-base"
                >
                  Logout
                </button>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
