"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import  {Link} from  "react-router-dom";

function OrderPage() {
  const [formData, setFormData] = useState({
    farmer_name: "",
    phone: "",
    address: "",
    start_date: "",
    end_date: "",
    status: "pending", // Default value for status
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/orders/create", formData);

      if (response.status === 200) {
        navigate("/OrderSummary");
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Complete Your Order</h2>
            <form
              className="bg-white rounded-lg shadow p-6 space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="farmer_name">Farmer Name</Label>
                <Input
                  id="farmer_name"
                  placeholder="Enter your full farmer name"
                  
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                  
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                      
                  />
                </div> */}
                
              </div>

            
<Link to='/OrderSummary'>
              <Button
                type="submit"
                className="w-full bg-[#2B5F0F] hover:bg-[#234d0c] text-white"
              >
                Place Order
              </Button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
