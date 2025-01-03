"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { id: "cagaf", name: "Cagaf" },
  { id: "yaanbo", name: "Yaanbo" },
  { id: "daynabo", name: "Daynabo" },
  { id: "gudin", name: "Gudin" },
  { id: "qalabka-dallaqa", name: "Qalabka Dallaqa" },
  { id: "lagu-goorto", name: "Lagu Goorto" },
];

const products = [
  {
    id: 1,
    title: "Powls",
    image: "https://s3-alpha-sig.figma.com/img/ecbb/0ab8/366d3863b946da36839390250faed6aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io5adGEY8AXBIfWj5rkRpop7VR7luRXNq1~0DSep3im5kxdGXHveqgLjiDqTkSp9gJkf14lV5rVQfTRa75eyr9WjOq5YW4tUowerDrgou~wovertxZnk4mcpaQ76g6bkhFivIxYG77jVjSxOyuU5u6EPYE8zF1V0l26vsuCQW9EAotdrryXL~glEYxONu5N~ne8vTDSb7l-bVezrM95MwBWo6lLi35sBUI3QJat1bTkIahnCOifyp6sYppkkSAfT8LLL-82enEEWKRerZvM2z9z-5kVBQjviP1agCxVVGQcsaILbsV4EO9A7XZ8u2TiJfI5dfPVd5Fa00iLedtpg6w__",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
    dailyPrice: 100.5,
    weeklyPrice: 700,
    monthlyPrice: 15000,
    category: "cagaf",
  },
  {
    id: 2,
    title: "Powls",
    image: "https://s3-alpha-sig.figma.com/img/ecbb/0ab8/366d3863b946da36839390250faed6aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io5adGEY8AXBIfWj5rkRpop7VR7luRXNq1~0DSep3im5kxdGXHveqgLjiDqTkSp9gJkf14lV5rVQfTRa75eyr9WjOq5YW4tUowerDrgou~wovertxZnk4mcpaQ76g6bkhFivIxYG77jVjSxOyuU5u6EPYE8zF1V0l26vsuCQW9EAotdrryXL~glEYxONu5N~ne8vTDSb7l-bVezrM95MwBWo6lLi35sBUI3QJat1bTkIahnCOifyp6sYppkkSAfT8LLL-82enEEWKRerZvM2z9z-5kVBQjviP1agCxVVGQcsaILbsV4EO9A7XZ8u2TiJfI5dfPVd5Fa00iLedtpg6w__",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
    dailyPrice: 100.5,
    weeklyPrice: 700,
    monthlyPrice: 15000,
    category: "yaanbo",
  },
];

export default function ListingPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex mt-20 flex-wrap justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-[#2B5F0F]">LISTING ITEMS</h1>
        <div className="w-full sm:w-auto">
          <Input
            type="search"
            placeholder="Halkan ka Raadso Adeega Aad Rabto"
            className="bg-gray-100 w-full sm:w-72 rounded-lg shadow-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2B5F0F] focus:border-[#2B5F0F]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {/* Sidebar */}
        <div className="w-full sm:w-64 shrink-0 bg-[#EEF3EB] p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl text-[#2B5F0F] mb-6">CATEGORIES</h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li
                key={category.id}
                className="flex items-center gap-2 cursor-pointer hover:text-[#2B5F0F] transition-all duration-300"
              >
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                  className="bg-[#ffffff] border-[#03390b] data-[state=checked]:bg-[#8B4513] data-[state=checked]:border-[#8B4513]"
                />
                <label htmlFor={category.id} className="cursor-pointer">
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="flex-1 space-y-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-wrap sm:flex-nowrap gap-6 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full sm:w-72 h-48 shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#2B5F0F] mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-1 mb-4">
                  <p className="text-green-800">${product.dailyPrice} Daily</p>
                 
                </div>
                <Link to="/OrderPage">
                  <Button className="bg-[#2B5F0F] hover:bg-[#234d0c] text-white px-6 py-3 rounded-lg">
                    Kirayso
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
