"use client"

import { useState } from "react"
import {Link} from "react-router-dom"

interface Tool {
  id: string
  title: string
  price: number
  category: string
  condition: string 
  image: string
}

const tools: Tool[] = [
  {
    id: "tool1",
    title: "Tractor XL-5000",
    price: 12000,
    category: "Mashiinnada Beerta",
    condition: "Available",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    id: "tool2",
    title: "Harvester Pro",
    price: 8500,
    category: "Abuurka",
    condition: "Available",
    image: "https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg",
  },
  {
    id: "tool3",
    title: "Irrigation System",
    price: 2200,
    category: "Nidaamyada Biyaha",
    condition: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
  {
    id: "tool4",
    title: "Organic Fertilizer",
    price: 450,
    category: "Fertiliyoonka",
    condition: "Available",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    id: "tool5",
    title: "Seed Planter",
    price: 1800,
    category: "Abuurka",
    condition: "Available",
    image: "https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg",
  },
  {
    id: "tool6",
    title: "Farm Greenhouse",
    price: 5000,
    category: "Guriyada Beerta",
    condition: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
]

export default function ToolsPage() {
  const [visibleCount, setVisibleCount] = useState(3)

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  // Function to get condition badge color
  // const getConditionColor = (condition: string) => {
  //   switch (condition) {
  //     case "New":
  //       return "bg-blue-500"
  //     case "Used":
  //       return "bg-amber-500"
  //     case "Refurbished":
  //       return "bg-purple-500"
  //     default:
  //       return "bg-gray-500"
  //   }
  // }

  return (
    <div className="bg-gray-100 py-8 sm:py-12">
      <div className=" container  mx-auto px-4 sm:px-2 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">Qalabka Beeraha</h1>
          <p className="mt-2 text-gray-600">Farm Equipment Available for Rent or Purchase</p>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {tools.slice(0, visibleCount).map((tool) => (
            <Link to={`/SingleProduct`} key={tool.id} className="block">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-transform duration-300 hover:scale-105 ">
                {/* Image Section */}
                <div className="relative aspect-w-16   aspect-h-9 mb-4 overflow-hidden rounded-md h-48">
                  <img src={tool.image || "/placeholder.svg"} alt={tool.title}  className="object-cover w-full" />
                  <div
                    className={`absolute top-2  right-2 ${(tool.condition)} bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {tool.condition}
                  </div>
                </div>

                {/* Tool Info */}
                <div className="mt-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{tool.title}</h2>
                  <p className="text-gray-600 mb-2">{tool.category}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-800 font-bold">${tool.price.toLocaleString()}</span>
                    <Link to="/SingleProduct">
                    <button className="px-3 py-1 bg-[#325E56] text-white text-sm rounded hover:bg-[#40786d] transition-colors">
                      View Details
                    </button></Link>
                  </div>
                </div>
              </div>
            </Link>
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
