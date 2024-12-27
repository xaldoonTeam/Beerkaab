"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock order data
const orderItems = [
  { id: 1, name: "buufin", quantity: 1, price: 700 },
  { id: 2, name: "beeris", quantity: 2, price: 500 },
]

export default function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 mt-20 font-serif text-green-800">Waxad Dalbatay</h2>
            <div className="bg-white rounded-lg shadow p-6">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                  </div>
                  <p className="font-medium">${item.price * item.quantity}</p>
                </div>
              ))}
              <Separator className="my-4" />
              
              
              <div className="flex justify-between py-2 text-lg font-semibold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            {/* Product Images */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Product Images</h3>
              <div className="grid grid-cols-1 ">
                {[1].map((index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={`https://s3-alpha-sig.figma.com/img/ecbb/0ab8/366d3863b946da36839390250faed6aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io5adGEY8AXBIfWj5rkRpop7VR7luRXNq1~0DSep3im5kxdGXHveqgLjiDqTkSp9gJkf14lV5rVQfTRa75eyr9WjOq5YW4tUowerDrgou~wovertxZnk4mcpaQ76g6bkhFivIxYG77jVjSxOyuU5u6EPYE8zF1V0l26vsuCQW9EAotdrryXL~glEYxONu5N~ne8vTDSb7l-bVezrM95MwBWo6lLi35sBUI3QJat1bTkIahnCOifyp6sYppkkSAfT8LLL-82enEEWKRerZvM2z9z-5kVBQjviP1agCxVVGQcsaILbsV4EO9A7XZ8u2TiJfI5dfPVd5Fa00iLedtpg6w__`}
                      alt={`Product ${index}`}
                      className="w-full h-full p-5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

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

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer">Bank Transfer</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-[#2B5F0F] hover:bg-[#234d0c] text-white">
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

 