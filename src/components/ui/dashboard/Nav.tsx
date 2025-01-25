import React, { useEffect, useState } from "react";
import { Bell, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function DashboardHeader() {
  const [userName, setUserName] = useState<string | null>(null);
  const [initials, setInitials] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser); // Parse the user data
        if (user.username) {
          setUserName(user.username);

          // Generate initials
          const nameParts = user.username.split(" ");
          const userInitials = nameParts
            .map((part: string) => part[0])
            .join("")
            .toUpperCase();
          setInitials(userInitials);
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirect to the home page
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Left Section */}
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {/* Search Bar */}
        <div className="relative max-w-sm w-64">
          <Search
            className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 py-1.5 pl-10 pr-3 text-sm text-gray-800 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            aria-label="Search"
          />
        </div>

        {/* Notification Icon */}
        <button
          className="rounded-full p-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 p-2 rounded-full bg-[#c6ede6] text-sm text-gray-800 hover:bg-gray-400"
          >
            <div className="h-8 w-8 rounded-full bg-[#325E56] flex items-center justify-center text-white font-semibold">
              {initials || "NA"}
            </div>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
