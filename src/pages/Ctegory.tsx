import React from "react";
import { Tractor, Trees } from "lucide-react"; // Valid icons from lucide-react

const Categories: React.FC = () => {
  const categories = [
    {
      icon: <Trees size={36} className="text-green-700" />,
      label: "Harvesting",
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
      label: "Seed Drill",
    },
  ];

  return (
    <div className="py-12 bg-[#f5f7f3]">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-green-700 mb-10 uppercase">
        Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center  rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Icon */}
            <div className="bg-green-100 rounded-full p-4 mb-4 flex items-center justify-center">
            <img
                        src="https://s3-alpha-sig.figma.com/img/c6b0/118f/ec3ff6d115f540aee6b23eda5e6e0403?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZbcCvPuOhRsjk7ZofU32rodJxmwso56wBURHsNWyAktZeuPV7Avew4mMbjGFRy~yU8hAs5riQb5y0V9pcQMx43G1CcWGErvCARC1urK8rDykjhGseiRKC3owM3O4~R5Zh43~ybS7XGm1aQNRGDNRkYPjj~PH~gGF547VAIsAvnCYYQpVJUwLiqHfAelJKnmgOBJLO70GfRf0e43BuK7Yq~rWo9N2lNT~FE3ugZla5RqwH0VSzuZUE4z5XDKRQIONiolSFFdXiKPpvcxZmSW9morqX7TDajzx0ygbL~GznrAyoZ7HBKPEJWh150K0W-GubK9wqb8oL3zelItEqnrnQ__"
                        alt="Blog post image"
                        className="w-20 h-20 object-cover"
                      />    </div>        {/* Label */}
            <p className="text-xl font-semibold text-green-700">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
