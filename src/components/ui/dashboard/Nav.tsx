import React from "react";
import { Bell, Search } from "lucide-react";

function DashboardHeader() {
  return (
    <header className="flex  -ml-10 items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Left Section */}
      <h1 className="text-lg font-semibold text-gray-800 ml-10">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
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

        {/* Profile Avatar */}
        <img
          src="https://via.placeholder.com/32" // Replace with actual profile image URL
          alt="User Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default DashboardHeader;
