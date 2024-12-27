"use client"

import * as React from "react"
import {Link} from "react-router-dom"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/About", label: "About" },
  { to: "/products", label: "Qalbka" },
  { to: "/contact", label: "CONTACT US" },
]

 function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="border-b-4 border-green-800 shadow-xl fixed z-50 w-full bg-[#EEF3EB]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 h-20">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="BeerKaab Logo"
            className="h-40 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center ">
          <ul className="flex space-x-10 lg:mr-80 ">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link 
                  to={item.to}
                  className="text-green-800 hover:text-green-600 transition font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="ghost" className="text-green-800 hover:text-green-600 font-semibold text-xl">
            LOGIN
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen} >
  <SheetTrigger asChild >
    <Button
      variant="ghost"
      className="lg:hidden text-green-800 hover:bg-green-100  rounded-md p-2 transition"
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
          className="text-green-800  hover:text-green-600 transition font-medium block  text-base border-b border-transparent hover:border-green-600"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
      <Button
        variant="ghost"
        className="text-green-800 -ml-4 hover:text-green-600 hover:bg-green-100 rounded-md font-semibold text-based justify-start px-4 py-2 transition"
      >
        LOGIN
      </Button>
    </nav>
  </SheetContent>
</Sheet>

      </div>
    </nav>
  )
}

export default Navbar