import React from "react";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom"
export default function ToolsPage() {
  const tools = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
      title: "CAGAf",
      price: "$100.5",
      action: "Kirayso",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
      title: "CAGAf",
      price: "$100.5",
      action: "Kirayso",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
      title: "CAGAf",
      price: "$100.5",
      action: "Kirayso",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
      title: "CAGAf",
      price: "$100.5",
      action: "Kirayso",
    },
  ];

  return (
    <div className="bg-[#EEF3EB] -mt-10">
      <div className="max-w-7xl mx-auto py-8  m-auto w-[90%]">
        {/* Tools Section */}
        <section className="mb-16">
          <h1 className="text-center text-4xl font-bold text-[#2B5F0F] mb-2">
            TOOLS
          </h1>
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
            What we do for your business?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden flex flex-col items-center p-4 bg-white shadow-lg"
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="rounded-lg shadow-md w-60 h-60 p-2 mb-4"
                />
                <h3 className="text-xl font-bold mt-4 text-center">{tool.title}</h3>
                <p className="text-green-600 font-semibold text-center mb-4">
                  {tool.price}
                </p>
                <Link to="/products">
                <Button
                  variant="default"
                  className="mt-4 bg-green-800 rounded-full"
                >
                  {tool.action}
                </Button></Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
