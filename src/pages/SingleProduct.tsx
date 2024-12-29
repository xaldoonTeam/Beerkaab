import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, MapPin, User } from "lucide-react";
import {Link} from 'react-router-dom'
const productData = {
  id: "1",
  name: "Cagaf",
  description:
    "The John Deere 5075E is a versatile utility tractor designed for various agricultural tasks. It offers reliability, comfort, and advanced features to enhance productivity on your farm.",
  image:
    "https://s3-alpha-sig.figma.com/img/ecbb/0ab8/366d3863b946da36839390250faed6aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io5adGEY8AXBIfWj5rkRpop7VR7luRXNq1~0DSep3im5kxdGXHveqgLjiDqTkSp9gJkf14lV5rVQfTRa75eyr9WjOq5YW4tUowerDrgou~wovertxZnk4mcpaQ76g6bkhFivIxYG77jVjSxOyuU5u6EPYE8zF1V0l26vsuCQW9EAotdrryXL~glEYxONu5N~ne8vTDSb7l-bVezrM95MwBWo6lLi35sBUI3QJat1bTkIahnCOifyp6sYppkkSAfT8LLL-82enEEWKRerZvM2z9z-5kVBQjviP1agCxVVGQcsaILbsV4EO9A7XZ8u2TiJfI5dfPVd5Fa00iLedtpg6w__",
  dailyRate: 150,
  location: "Hargeisa, Somaliland",
  owner: "Ahmed Mohamed",
  availableFrom: "2024-01-15",
  availableTo: "2024-12-31",
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-12 pt-32 mb-20">
      <Card className="overflow-hidden shadow-lg p-4 sm:p-8 md:p-12 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative group h-[250px] sm:h-[350px] md:h-[400px] lg:h-full">
              <img
                src={productData.image}
                alt={productData.name}
                className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 space-y-6">
              {/* Title and Description */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
                  {productData.name}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  {productData.description}
                </p>
              </div>

              {/* Pricing and Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center">
                  <DollarSign className="mr-2 text-green-600" />
                  <span className="font-semibold text-base">Price: ${productData.dailyRate}/day</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-green-600" />
                  <span className="text-sm sm:text-base">{productData.location}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 text-green-600" />
                  <span className="text-sm sm:text-base">Owner: {productData.owner}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 text-green-600" />
                  <span className="text-sm sm:text-base">
                    Available: {productData.availableFrom} - {productData.availableTo}
                  </span>
                </div>
              </div>

              {/* Call-to-Action Section */}
              <div className="space-y-4">
                <Link to='/OrderPage'>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
                >
                  Book Now
                </Button></Link>
                <div className="flex justify-between text-xs sm:text-sm text-gray-500"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
