"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Drilling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
  {
    title: "Drilling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
  {
    title: "Tools",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
];

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-[#2B5F0F] mb-8">
        SERVICES
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-[#144700] text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{service.description}</p>
              {/* Button Placeholder */}
              <Button className="h-10 w-24 bg-white rounded-full text-black text-center font-semibold">Learn more</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;
