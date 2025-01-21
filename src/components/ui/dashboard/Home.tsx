"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Car, Clock, Coins, KeyRound } from 'lucide-react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line } from "recharts"

const earningsData = [
  { month: "Jan", amount: 50000 },
  { month: "Feb", amount: 85000 },
  { month: "Mar", amount: 101223 },
  { month: "Apr", amount: 75000 },
  { month: "May", amount: 90000 },
  { month: "Jun", amount: 80000 },
]

const bookingData = [
  { week: "W1", bookings: 30 },
  { week: "W2", bookings: 12 },
  { week: "W3", bookings: 25 },
  { week: "W4", bookings: 35 },
  { week: "W5", bookings: 20 },
  { week: "W6", bookings: 30 },
  { week: "W7", bookings: 10 },
]

const carTypeData = [
  { name: "Sedan", percentage: 75 },
  { name: "SUV", percentage: 60 },
  { name: "Compact", percentage: 45 },
  { name: "Luxury", percentage: 50 },
]

const bookingStatusData = [
  { name: "Hired", value: 40 },
  { name: "Pending", value: 35 },
  { name: "Available", value: 25 },
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-900 p-3 rounded-lg">
              <Coins className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold">78.423</h3>
              <p className="text-xs text-emerald-500">15.2% ↑</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-900 p-3 rounded-lg">
              <KeyRound className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">New Booking</p>
              <h3 className="text-2xl font-bold">32.567</h3>
              <p className="text-xs text-emerald-500">5.2% ↑</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-900 p-3 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Rented Cars</p>
              <h3 className="text-2xl font-bold">41.411</h3>
              <p className="text-xs text-emerald-500">21.2% ↑</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="bg-green-900 p-3 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">Available Cars</p>
              <h3 className="text-2xl font-bold">28.623</h3>
              <p className="text-xs text-emerald-500">7.2% ↑</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Earnings Summary</CardTitle>
            <Select defaultValue="jan-jun">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan-jun">Jan 2025 - Jun 2025</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ChartContainer 
              className="h-[300px] "
              config={{
                amount: {
                  label: "Amount",
                  color: "hsl(var(--chart-1))",
                }
              }}
            >
              <BarChart data={earningsData}>
                <Bar dataKey="amount" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Car Availability Form */}
        <Card>
          <CardHeader>
            <CardTitle>Car Availability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Car Number" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car1">Car 1</SelectItem>
                <SelectItem value="car2">Car 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Jan 20, 2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan20">Jan 20, 2025</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="10 AM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10am">10 AM</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full bg-green-900 hover:bg-green-800">Check</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Booking Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Overview</CardTitle>
            <Select defaultValue="weekly">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ChartContainer 
              className="h-[200px]"
              config={{
                bookings: {
                  label: "Bookings",
                  color: "hsl(var(--chart-1))",
                }
              }}
            >
              <BarChart data={bookingData}>
                <Bar dataKey="bookings" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Car Type */}
        <Card>
          <CardHeader>
            <CardTitle>Car Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {carTypeData.map((car) => (
                <div key={car.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{car.name}</span>
                    <span>{car.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full ">
                    <div
                      className="h-full bg-green-900 rounded-full "
                      style={{ width: `${car.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Booking Status */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer 
              className="h-[200px]"
              config={{
                hired: {
                  label: "Hired",
                  color: "hsl(var(--chart-1))",
                },
                pending: {
                  label: "Pending",
                  color: "hsl(var(--chart-2))",
                },
                available: {
                  label: "Available",
                  color: "hsl(var(--chart-3))",
                }
              }}
            >
              <div className="flex justify-center gap-4 mt-4">
                {bookingStatusData.map((status) => (
                  <div key={status.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(var(--chart-${bookingStatusData.indexOf(status) + 1}))` }}
                    />
                    <span className="text-sm">
                      {status.name} ({status.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

