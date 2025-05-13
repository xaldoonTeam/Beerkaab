import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Calendar, Home, ChevronRight } from "lucide-react";
// import { toast } from "@/components/ui/use-toast";

export default function EquipmentDetailPage() {
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handlePaymentClick = (method: string) => {
    setShowPopup(method);
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  const handleBooking = () => {
    // Form validation could be added here
    // toast({
    //   title: "Booking Confirmed!",
    //   description: "Your equipment has been successfully booked.",
    // });
  };

  const equipment = {
    name: "Cagaf Tractor - Heavy Duty",
    description: "Professional heavy-duty tractor for construction and agricultural work",
    price: 150,
    rating: 4.8,
    reviews: 124,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white mt-24">
      <div className="container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6 mt-8">
          <Link to="/" className="hover:text-green-600 flex items-center">
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/services" className="hover:text-green-600">
            Services
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-green-700 font-medium">Equipment Booking</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - image and details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQH4vQ1HFzLzTA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689487152112?e=2147483647&v=beta&t=JGGWT3blDz1NCDn5G_MWVDxDht6KepMGbfDVHmzY4ic"
                  alt="Cagaf Tractor"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-md">
                  Available
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{equipment.name}</h1>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(equipment.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">({equipment.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-green-700">${equipment.price}</div>
                </div>

                <p className="text-gray-700 mb-6">{equipment.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center">
                    <Calendar className="h-6 w-6 text-green-700 mb-1" />
                    <div className="text-center">
                      <div className="font-semibold">Available Today</div>
                      <div className="text-xs text-gray-600">Book now</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-center">
                      <div className="font-semibold">24/7 Support</div>
                      <div className="text-xs text-gray-600">Full assistance</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-center">
                      <div className="font-semibold">Insured</div>
                      <div className="text-xs text-gray-600">100% coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - booking form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
              <div className="bg-gradient-to-r bg-green-100 p-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-900">Book Now</div>
                <div className="text-xl font-bold text-green-900">${equipment.price}</div>
              </div>

              <div className="p-6 space-y-5">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange("service", value)}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="heavy-lifting">Heavy Lifting</SelectItem>
                      <SelectItem value="earth-digging">Earth Digging</SelectItem>
                      <SelectItem value="material-transport">Material Transport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => handleInputChange("location", value)}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200">
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hargeisa">Hargeisa</SelectItem>
                      <SelectItem value="burco">Burco</SelectItem>
                      <SelectItem value="boorama">Boorama</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Display */}
                <div className="flex justify-between items-center py-4 mt-2 border-t border-b border-gray-200">
                  <span className="text-lg font-semibold text-gray-700">Price :</span>
                  <span className="text-xl font-bold text-green-700">${equipment.price}</span>
                </div>

                {/* Payment Method Buttons */}
                <div className="text-center">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Payment Method
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => handlePaymentClick("zaad")}
                    className=" bg-green-500 hover:bg-gray-600 text-white font-bold py-5"
                  >
                    Zaad
                  </Button>
                  <Button
                    onClick={() => handlePaymentClick("edahab")}
                    className=" bg-green-200 hover:bg-green-600 text-black font-bold py-5"
                  >
                    Edahab
                  </Button>
                </div>

                <Link to="/OrderSummary" onClick={handleBooking}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg mt-10">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-center relative shadow-2xl transform transition-all animate-in fade-in zoom-in-95">
            <div className="absolute top-4 right-4">
              <button onClick={closePopup} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${showPopup === "zaad" ? "bg-yellow-100" : "bg-blue-100"}`}>
              <span className={`text-2xl font-bold ${showPopup === "zaad" ? "text-yellow-600" : "text-blue-600"}`}>
                {showPopup === "zaad" ? "Z" : "E"}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-2">Pay with {showPopup === "zaad" ? "Zaad" : "Edahab"}</h2>

            <p className="text-gray-600 mb-6">Please send your payment to this number</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-mono font-bold tracking-wider">9999</p>
              <p className="text-sm text-gray-500 mt-1">Reference: EQUIP-{Math.floor(Math.random() * 10000)}</p>
            </div>

            <Button
              onClick={closePopup}
              className={`w-full py-3 ${showPopup === "zaad" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            >
              I've Completed Payment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
