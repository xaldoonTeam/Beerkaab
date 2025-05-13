"use client"

import { useState } from "react"
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover, PopoverContent, PopoverTrigger
} from "@/components/ui/popover"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { CalendarIcon, Info } from "lucide-react"
import { format, addDays } from "date-fns"
import { cn } from "@/lib/utils"

const locationRates = {
  Hargisa: 20,
  Burco: 15,
  Boorma: 25,
}

type RentalType = "daily" | "hourly"

export function BookingWidget() {
  const [location, setLocation] = useState<keyof typeof locationRates>("Hargisa")
  const [rentalType, setRentalType] = useState<RentalType>("daily")
  const [quantity, setQuantity] = useState(1)
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 3))
  const [showPopup, setShowPopup] = useState<"zaad" | "eDahab" | null>(null)

  const dailyRate = locationRates[location]
  const rateMultiplier = rentalType === "hourly" ? 0.15 : 1
  const adjustedRate = dailyRate * rateMultiplier

  const subtotal = adjustedRate * quantity
  const serviceFee = subtotal * 0.1
  const total = subtotal + serviceFee

  const closePopup = () => setShowPopup(null)

  return (
    <Card className="sticky top-24 shadow-lg border-green-100">
      <CardHeader className="bg-green-50 rounded-t-xl">
        <CardTitle className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-800">
            ${adjustedRate.toFixed(2)}
          </span>
          <span className="text-sm text-gray-600">
            per {rentalType}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <Select value={location} onValueChange={(val) => setLocation(val as keyof typeof locationRates)}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(locationRates).map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rental Type & Quantity */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Rental Type</label>
            <Select value={rentalType} onValueChange={(val) => setRentalType(val as RentalType)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="w-full border rounded p-2"
              min={1}
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Start Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">End Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex justify-between">
            <span className="text-gray-600">
              ${adjustedRate.toFixed(2)} × {quantity} {rentalType === "hourly" ? "hours" : "days"}
            </span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-gray-600">Dilevery</span>
              <Popover>
                <PopoverTrigger>
                  <Info className="h-4 w-4 text-gray-400 ml-1 cursor-help" />
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <p className="text-sm text-gray-600">This helps us run our platform and offer services like 24/7 support.</p>
                </PopoverContent>
              </Popover>
            </div>
            <span className="font-medium">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-gray-100 font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
        <Button onClick={() => setShowPopup("zaad")} className="bg-green-500 hover:bg-green-700 text-white h-12 text-lg w-full">
          Pay with Zaad
        </Button>
        <Button onClick={() => setShowPopup("eDahab")} className="bg-green-200 hover:bg-green-600 hover:text-white text-green-800 h-12 text-lg w-full">
          Pay with eDahab
        </Button>
      </CardFooter>
      <div className="m-5">
<Button className="p-5 w-full bg-green-600 hover:bg-green-200 hover:text-black text-lg">Book Now</Button></div>
      {/* Payment Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-center relative shadow-2xl animate-in fade-in zoom-in-95">
            <button onClick={closePopup} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${showPopup === "zaad" ? "bg-yellow-100" : "bg-blue-100"}`}>
              <span className={`text-2xl font-bold ${showPopup === "zaad" ? "text-yellow-600" : "text-blue-600"}`}>
                {showPopup === "zaad" ? "Z" : "E"}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Pay with {showPopup === "zaad" ? "Zaad" : "eDahab"}</h2>
            <p className="text-gray-600 mb-6">Please send your payment to this number</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-lg font-mono font-bold tracking-wider">9999</p>
              <p className="text-sm text-gray-500 mt-1">Reference: EQUIP-{Math.floor(Math.random() * 10000)}</p>
            </div>
            <Button onClick={closePopup} className={`w-full py-3 ${showPopup === "zaad" ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}>
              I've Completed Payment
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
