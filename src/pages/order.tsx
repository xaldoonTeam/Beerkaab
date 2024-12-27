"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {Link} from "react-router-dom"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock order data
const orderItems = [
  { id: 1, name: "Powls", quantity: 1, price: 700 },
  { id: 2, name: "Cagaf", quantity: 2, price: 500 },
]

 function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
         

          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Complete Your Order</h2>
            <form className="bg-white rounded-lg shadow p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>

              <div className="space-y-2">
                <Label>City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mogadishu">Mogadishu</SelectItem>
                    <SelectItem value="hargeisa">Hargeisa</SelectItem>
                    <SelectItem value="kismayo">Kismayo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

             <Link to="/OrderSummary">

              <Button type="submit" className="w-full bg-[#2B5F0F] hover:bg-[#234d0c] text-white">
                Place Order
              </Button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage