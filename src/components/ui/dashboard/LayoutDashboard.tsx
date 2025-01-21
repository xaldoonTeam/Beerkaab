import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Nav";

function DhashRoute() {
  // Get the theme from local storage or default to 'light'
  const theme = localStorage.getItem("theme") || "light";

  return (
    <div className="  flex ">
      {/* <div className="">
        <Navbar />
      </div> */}
      <div className=" ">
        <Sidebar />

      </div>

      <div>
        {/* <Navbar /> */}
      </div>
      <div className="flex-1    ml-5">
      <div className="">
        <Navbar />
      </div>
      <Outlet />
      </div>
    </div>
  );
}

export default DhashRoute;






// <div className={`flex ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
//       {/* Navbar */}
//       <div className="fixed w-full">
//         <Navbar />
//       </div>

//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 h-screen w-60">
//         <Sidebar />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 bg-slate-100 p-4 ml-60 mt-16">
//         <Outlet />
//       </div>
//     </div>