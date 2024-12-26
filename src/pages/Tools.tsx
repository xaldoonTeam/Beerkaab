import React from "react";
import { Button } from "@/components/ui/button";

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
      action: "Read More",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
      title: "CAGAf",
      price: "$100.5",
      action: "Read More",
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
    <div className="bg-[#f5f7f3]">
    <div className="max-w-7xl mx-auto py-8 ">
      {/* Tools Section */}
      <section className="mb-16">
        <h1 className="text-center text-4xl font-bold text-[#2B5F0F] mb-2">
          TOOLS
        </h1>
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">
          What we do for your business?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4  ">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="rounded-lg  overflow-hidden flex flex-col items-center p-4 "
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="  rounded-lg shadow-md bg-white  w-60 h-60  p-2"
              />
              <h3 className="text-xl font-bold mt-4 -ml-40">{tool.title}</h3>
              <p className="text-green-600 font-semibold -ml-44">{tool.price}</p>
              <Button
                variant="default"
                className={`mt-4 -ml-32  bg-green-800 rounded-full `}
              >
                {"tool.action"}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
