"use client";

import React, { useState } from "react";

interface Tool {
  title: string;
  price: number;
  location: string;
  image: string;
}

const tools: Tool[] = [
  {
    title: "Cozy Cottage",
    price: 1200,
    location: "Downtown",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_lcq0H2eLPUcWXWkQyvedCx4mLUlFhW-ShPd77Es8Q_G2mkXltL3yJBsMH00kaJC-DY&usqp=CAU",
  },
  {
    title: "Luxurious Apartment",
    price: 2000,
    location: "Uptown",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Modern Studio",
    price: 800,
    location: "City Center",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Rustic Barn",
    price: 1500,
    location: "Countryside",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Beachfront Bungalow",
    price: 3000,
    location: "Seaside",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
  {
    title: "Penthouse Suite",
    price: 5000,
    location: "Downtown",
    image: "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
  },
];

export default function ToolsPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white p-8">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>

        <div className="relative container mx-auto py-20 px-4 lg:px-8 text-center mt-8">
          <h1 className="text-5xl font-extrabold mb-4 mt-10">Qalabka beeraha</h1>
          <div className="text-lg font-medium flex justify-center items-center gap-2 mt-10">
            <span>Home</span>
            <span className="text-gray-300">{'>'}</span>
            <span className="text-gray-200">Services</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filter Sidebar */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#325E56] mb-4">QALABKA BEERAHA</h3>
                  <ul className="space-y-2">
                    {["Mashiinnada Beerta", "Abuurka", "Nidaamyada Biyaha", "Fertiliyoonka", "Alaabta Beeraha", "Guriyada Beerta"].map((item) => (
                      <li key={item} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filters */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">FILTERS</h3>
                  <ul className="space-y-4">
                    {[
                      { id: "under100", label: "Ka hooseeya $100" },
                      { id: "100to500", label: "$100 ilaa $500" },
                      { id: "500to1000", label: "$500 ilaa $1000", defaultChecked: true },
                      { id: "1000to2000", label: "$1000 ilaa $2000" },
                      { id: "over2000", label: "Ka sareeya $2000" },
                    ].map(({ id, label, defaultChecked }) => (
                      <li key={id}>
                        <input type="checkbox" id={id} className="mr-2 accent-[#325E56]" defaultChecked={defaultChecked} />
                        <label htmlFor={id}>{label}</label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4">NOOCYADA ADEEGA</h3>
          <ul className="space-y-4">
            <li>
              <input type="checkbox" id="mechanical" className="mr-2 accent-[#325E56]  " />
              <label htmlFor="mechanical">Qalabka Mashiinka</label>
            </li>
            <li>
              <input type="checkbox" id="chemical" className="mr-2 accent-[#325E56]" />
              <label htmlFor="chemical">Fertilizers Kiimikada</label>
            </li>
            <li>
              <input type="checkbox" id="organic" className="mr-2 accent-[#325E56]" defaultChecked />
              <label htmlFor="organic">Alaabta Dabiiciga ah</label>
            </li>
            <li>
              <input type="checkbox" id="tools" className="mr-2 accent-[#325E56]" />
              <label htmlFor="tools">Alaabta Beeraha</label>
            </li>
            <li>
              <input type="checkbox" id="livestock" className="mr-2 accent-[#325E56]" />
              <label htmlFor="livestock">Alaabta Xoolaha</label>
            </li>
          </ul>
        </div>

        <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">FILTERS</h3>
                  <ul className="space-y-4">
                    {[
                      { id: "under100", label: "Ka hooseeya $100" },
                      { id: "100to500", label: "$100 ilaa $500" },
                      { id: "500to1000", label: "$500 ilaa $1000", defaultChecked: true },
                      { id: "1000to2000", label: "$1000 ilaa $2000" },
                      { id: "over2000", label: "Ka sareeya $2000" },
                    ].map(({ id, label, defaultChecked }) => (
                      <li key={id}>
                        <input type="checkbox" id={id} className="mr-2 accent-[#325E56]" defaultChecked={defaultChecked} />
                        <label htmlFor={id}>{label}</label>
                      </li>
                    ))}
                  </ul>
                </div>
      
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {tools.slice(0, visibleCount).map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 border transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="relative h-64 w-full rounded-lg overflow-hidden group">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-4 bg-slate-100 p-4 ">
                      <h2 className="text-lg font-semibold text-[#325E56]0">{tool.title}</h2>
                      <p className="text-[#325E56]">{tool.location}</p>
                      <p className="text-[#325E56] font-bold">${tool.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < tools.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-2 bg-[#325E56] font-semibold text-white rounded-md shadow hover:bg-[#40786d]"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
