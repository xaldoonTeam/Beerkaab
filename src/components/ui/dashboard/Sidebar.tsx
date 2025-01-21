"use client";
import { cn } from "@/lib/utils";

import React, { useState } from "react";
import {
  Bell,
  ClipboardList,
  FileText,
  LogOut,
  Settings,
  Wrench,
  List,
  Wallet,
  Users,
  Home,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  to: string;
}

function ToolRentalSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

  const menuItems: SidebarItem[] = [
    { icon: <Home className="h-5 w-5" />, label: "Dashboard", to: "/dashboard" },
    { icon: <Wrench className="h-5 w-5" />, label: "Tools", to: "/Dashboard/Tooslstable" },
    { icon: <ClipboardList className="h-5 w-5" />, label: "Bookings", to: "/Dashboard/Bookings" },
    { icon: <List className="h-5 w-5" />, label: "Order", to: "/Dashboard/OrderList" },
    { icon: <Wallet className="h-5 w-5" />, label: "Companies", to: "/Dashboard/companiesList" },
    { icon: <Users className="h-5 w-5" />, label: "Users", to: "/Dashboard/UsersList" },
    { icon: <FileText className="h-5 w-5" />, label: "Reports", to: "/reports" },
    { icon: <Bell className="h-5 w-5" />, label: "Notifications", to: "/Dashboard/NotificationsList" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings", to: "/Dashboard/settings" },
  ];

  return (
    <aside
    className={cn(
      "min-h-screen bg-background border-r shadow-md transition-all duration-300",
      isOpen ? "w-64" : "w-20"
    )}
  >
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-zinc-900 text-white transition-width duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="mb-8 px-4 py-4 flex items-center justify-between">
          {isOpen && (
            <div className="text-2xl font-bold">
              <span className="text-green-700">B</span>EERKAAB
            </div>
          )}
          <button
            className="bg-zinc-800 p-2 rounded text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-4 px-3">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                location.pathname === item.to
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-800"
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="px-3 pb-4">
          <button className="flex items-center gap-3 w-full rounded-lg bg-zinc-800 px-3 py-2 text-sm transition-colors hover:bg-zinc-700">
            <LogOut className="h-5 w-5" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Content Area */}
   
      
    </div>
    </aside>
  );
}

export default ToolRentalSidebar;
