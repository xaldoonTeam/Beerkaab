"use client"

import React, { useState } from "react"

interface Tool {
  title: string
  price: string
  location: string
  image: string
}

const tools: Tool[] = [
  {
    title: "Cozy Cottage",
    price: "$1200",
    location: "Downtown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
  {
    title: "Luxurious Apartment",
    price: "$2000",
    location: "Uptown",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Modern Studio",
    price: "$800",
    location: "City Center",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Rustic Barn",
    price: "$1500",
    location: "Countryside",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Beachfront Bungalow",
    price: "$3000",
    location: "Seaside",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Penthouse Suite",
    price: "$5000",
    location: "Downtown",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
]

export default function ToolsPage() {
  const [visibleCount, setVisibleCount] = useState(3)

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  return (
    <div className="bg-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">Available Rentals</h1>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tools.slice(0, visibleCount).map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md">
                <img src={tool.image || "/placeholder.svg"} alt={tool.title} className="object-cover w-full h-full" />
              </div>
              {/* Tool Info */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{tool.title}</h2>
              <p className="text-gray-600 mb-2">{tool.location}</p>
              <p className="text-gray-800 font-bold">{tool.price}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < tools.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#325E56] text-sm sm:text-base font-semibold text-white rounded-md shadow hover:bg-[#40786d] transition-colors duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

