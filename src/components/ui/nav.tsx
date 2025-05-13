"use client"

import * as React from "react"
import {Link} from "react-router-dom"
import { useRouter } from "next/navigation"
import { Menu, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const getInitials = (name: string) => {
  if (!name) return "NA"
  const parts = name.split(" ")
  return parts
    .map((part) => part[0])
    .join("")
    .substring(0, 2)
    .toUpperCase()
}

interface NavItem {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products",
    label: "Qalab",
    
  },
  {
    href: "/Adeeg",
    label: "Adeeg",
   
  },
  { href: "/contact", label: "Contact Us" },
  { href: "/BlogPage", label: "Blog" },
]

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [userName, setUserName] = React.useState<string | null>(null)
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  // const router = useRouter()

  React.useEffect(() => {
    const token = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setIsAuthenticated(true)
        setUserName(parsedUser.username || "Guest")
      } catch (error) {
        console.error("Error parsing user data:", error)
        setIsAuthenticated(false)
        setUserName(null)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    setUserName(null)
    // router.push("/")
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#325E56] text-white py-2.5">
        <div className="container mx-auto max-w-7xl flex flex-wrap justify-center sm:justify-between items-center px-4 gap-2">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
            <span className="items-center hidden lg:flex text-sm">
              <MapPin size={16} className="mr-1.5 text-green-200" /> 123 Anywhere Street, NY
            </span>
            <span className="hidden lg:flex text-green-200">|</span>
            <span className="items-center hidden lg:flex text-sm">
              <Mail size={16} className="mr-1.5 text-green-200" /> pagupone@mail.com
            </span>
            <span className="hidden sm:inline text-green-200">|</span>
            <span className="flex items-center text-sm">
              <Phone size={16} className="mr-1.5 text-green-200" /> +1 (333) 000-0000
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="gap-5 hidden lg:flex">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto  flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="py-2">
            <div className="relative h-20 w-40 ">
              <img src="/logo.png" alt="Logo"  className="object-contain -mt-20"  />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-1 xl:space-x-2 text-gray-800 font-medium">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  {item.children ? (
                    <div
                      className="flex items-center cursor-pointer px-3 py-6 hover:text-green-700 transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className="ml-1" />

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 transition-all duration-200 ${
                          activeDropdown === item.href ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2 hover:bg-gray-50 hover:text-green-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.href} className="block px-3 py-6 hover:text-green-700 transition-colors">
                      {item.label}
                    </Link>
                  )}

                  {/* Active indicator */}
                  <div className="absolute bottom-4 left-0 w-full h-1 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Login/Logout or User Dropdown */}
          <div className="hidden sm:flex items-center ml-6">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="w-10 h-10 rounded-full bg-[#325E56] text-white font-bold hover:bg-green-700 transition-colors"
                    aria-label="User menu"
                  >
                    {userName ? getInitials(userName) : "NA"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{userName}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">user@example.com</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-[#325E56] hover:bg-[#2A4F49] text-white px-6 py-2.5 rounded-md transition-colors">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-72">
              <div className="flex flex-col h-full">
                <div className="p-4 bg-[#325E56] flex justify-center">
                  <div className="relative h-16 w-32">
                    <img src="/placeholder.svg?height=64&width=128" alt="Logo"  className="object-contain" />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        {item.children ? (
                          <div className="px-4 py-2">
                            <div className="font-medium text-gray-900 mb-1">{item.label}</div>
                            <ul className="pl-4 border-l-2 border-gray-200 space-y-1">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    to={child.href}
                                    onClick={() => setIsSheetOpen(false)}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-green-700 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setIsSheetOpen(false)}
                            className="block px-4 py-2.5 text-gray-900 hover:bg-gray-50 hover:text-green-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-t border-gray-200">
                  {isAuthenticated ? (
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#325E56] text-white font-bold flex items-center justify-center mr-3">
                          {userName ? getInitials(userName) : "NA"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{userName}</p>
                          <p className="text-xs text-gray-500">user@example.com</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setIsSheetOpen(false)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout()
                            setIsSheetOpen(false)
                          }}
                          className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link to="/login" onClick={() => setIsSheetOpen(false)} className="block w-full">
                      <Button className="w-full bg-[#325E56] hover:bg-[#2A4F49] text-white">Login</Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
