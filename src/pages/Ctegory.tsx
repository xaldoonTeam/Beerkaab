import React from "react";
import { Tractor, Trees } from "lucide-react"; // Valid icons from lucide-react

const Categories: React.FC = () => {
  const categories = [
    {
      icon: <Trees size={36} className="text-green-700" />,
      label: "Mashiinka Biyaha",
    },
    {
      icon: <Tractor size={36} className="text-green-700" />,
      label: "Cagaf",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8.686 2 6 4.686 6 8c0 2.21 1.79 4 4 4h4c2.21 0 4 1.79 4 4 0 3.314-2.686 6-6 6s-6-2.686-6-6m12 0c0 3.314-2.686 6-6 6m6-12V8c0-3.314-2.686-6-6-6m6 6H6"
          />
        </svg>
      ),
      label: "Makina Beerta",
    },
  ];

  return (
    <div className="py-10 ">
      <h2 className="text-center text-2xl font-bold text-green-700 mb-6">CATEGORIES</h2>
      <div className="flex flex-wrap justify-center gap-8 bg-[#f5f7f3] m-auto w-[90%] p-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="bg-green-100 rounded-full flex items-center justify-center p-4">
              {category.icon}
            </div>
            <p className="text-2xl font-semibold text-green-700">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
