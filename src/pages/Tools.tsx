"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";

const tools = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
    title: "CAGAf",
    price: "$100.5",
    action: "Kirayso",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
    title: "CAGAf",
    price: "$100.5",
    action: "Kirayso",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
    title: "CAGAf",
    price: "$100.5",
    action: "Kirayso",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvkvOvoL2Hrmq6gfrp4w-4pxijGNi6UMMUXXBMLxJ-XzNbUYmraUX9CO4OugtafRScAk&usqp=CAU",
    title: "CAGAf",
    price: "$100.5",
    action: "Kirayso",
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-gradient-to-b from-[#EEF3EB] to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <motion.h1 
            className="text-center text-4xl font-bold text-[#2B5F0F] mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            TOOLS
          </motion.h1>
          <motion.h2 
            className="text-center text-xl font-semibold text-gray-800 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What we do for your business?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0  bg-black  bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{tool.title}</h3>
                  <p className="text-green-600 font-semibold mb-4">{tool.price}</p>
                  <div className="flex space-x-2">
                    <Link to="/products"  className="flex-1">
                      <Button
                        variant="default"
                        className="w-full bg-green-800 hover:bg-green-700 transition-colors duration-300 rounded-full"
                      >
                        {tool.action}
                                          <Button className="ml-20 bg-green-800 text-xl hover:bg-green-700 pr-5">+</Button>
  </Button>
                    </Link>
                    <Link to="/products"  className="flex-1">
                     
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

