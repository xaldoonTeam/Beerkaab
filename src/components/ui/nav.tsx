import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About Us" },
    { to: "/products", label: "Qalab" },
    { to: "/Adeeg", label: "Adeeg" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blog", label: "BLOG" },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#325E56]  text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <span>123 Anywhere Street, NY</span>
            <span>|</span>
            <span>pagupone@mail.com</span>
            <span>|</span>
            <span>+1 (333) 000-0000</span>
          </div>
          <div className="flex gap-6 w">
              <Link 
                to="#" 
                className="   rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link 
                to="#" 
                className="   rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link 
                to="#" 
                className="   rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link 
                to="#" 
                className="   rounded-md text-white hover:bg-[#234d0c] transition-colors"
              >
                <Facebook size={24} />
              </Link>
            </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-lg h-20">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center ml-8">
            <img
              src="/logo.png"
              alt="BeerKaab Logo"
              className="h-full max-h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-black  font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="hover:text-orange-600 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login/Logout */}
          <div>
            {isAuthenticated ? (
              <Button
                variant="ghost"
                className="text-sm text-green-900 hover:text-orange-600"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="text-sm text-white bg-[#325E56]  px-4 py-2 rounded-lg hover:bg-gray-800">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-black">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="text-black text-left"
                  >
                    Logout
                  </button>
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






























// import * as React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";

// // Helper function to get initials from a name
// const getInitials = (name: string): string => {
//   if (!name) return "NA";
//   const parts = name.split(" ");
//   return parts.map((part) => part[0]).join("").substring(0, 2).toUpperCase();
// };

// function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const [userName, setUserName] = React.useState<string | null>(null);
//   const navigate = useNavigate(); // React Router's navigation hook

//   React.useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");

//     if (token && storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setIsAuthenticated(true);
//         setUserName(parsedUser.username);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//         setIsAuthenticated(false);
//         setUserName(null);
//       }
//     } else {
//       setIsAuthenticated(false);
//       setUserName(null);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     setUserName(null);
//     navigate("/"); // Navigate to the home page without refreshing
//   };

  // const navItems = [
  //   { to: "/", label: "Home" },
  //   { to: "/About", label: "About" },
  //   { to: "/products", label: "Qalab" },
  //   { to: "/Adeeg", label: "Adeeg" },
  //   { to: "/contact", label: "Contact Us" },
  // ];

//   return (
//     <nav className="bg-white shadow-lg fixed z-50 w-full">
//       <div className="container mx-auto flex justify-between items-center py-4 px-8 h-20">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img src="/logo.png" alt="BeerKaab Logo" className="h-40 w-auto" />
//         </Link>

//         {/* Centered Desktop Menu */}
//         <div className="flex-1 hidden lg:flex justify-center space-x-8">
//           <ul className="flex space-x-9">
//             {navItems.map((item) => (
//               <li key={item.to}>
//                 <Link
//                   to={item.to}
//                   className="text-green-800 hover:text-green-600 transition-all duration-300 font-semibold text-lg"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Login/Logout Button on the Right */}
//         <div className="flex items-center">
//           {isAuthenticated ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="w-12 h-12 flex items-center justify-center rounded-full bg-green-800 text-white font-bold shadow-md hover:shadow-lg transition-all"
//                 >
//                   {userName ? getInitials(userName) : "NA"}
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//                 align="end"
//                 className="w-48 bg-white border border-gray-200 shadow-md rounded-lg"
//               >
//                 <DropdownMenuItem asChild>
//                   <Link
//                     to="/dashboard"
//                     className="flex items-center gap-2 text-green-800 hover:text-green-600"
//                   >
//                     Dashboard
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     to="/Addproducts"
//                     className="flex items-center gap-2 text-green-800 hover:text-green-600"
//                   >
//                     Rent
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left flex items-center gap-2 text-green-800 hover:text-green-600"
//                   >
//                     Logout
//                   </button>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <Link to="/Loginpage">
//               <Button
//                 variant="ghost"
//                 className=" bg-green-900 rounded-2xl text-white hover:text-white hover:bg-green-700 font-semibold text-xl transition-all"
//               >
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button
//             variant="ghost"
//             className="lg:hidden text-green-800 hover:bg-green-100 rounded-md p-2 transition-all duration-300"
//             aria-label="Toggle menu"
//           >
//             <Menu className="h-6 w-6" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent
//           side="right"
//           className="w-[300px] sm:w-[400px] bg-[#EEF3EB] shadow-md border-l border-gray-200"
//         >
//           <nav className="flex flex-col gap-6 p-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.to}
//                 to={item.to}
//                 className="text-green-800 hover:text-green-600 transition-all duration-300 font-medium text-base block py-2"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             {isAuthenticated && (
//               <button
//                 onClick={handleLogout}
//                 className="text-green-800 hover:text-green-600 transition-all duration-300 font-medium block text-base py-2"
//               >
//                 Logout
//               </button>
//             )}
//           </nav>
//         </SheetContent>
//       </Sheet>
//     </nav>
//   );
// }

// export default Navbar;
