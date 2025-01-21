"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface BookingFormData {
  customerName: string;
  tool: string;
  date: string;
  time: string;
  notes: string;
}

 function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    customerName: "",
    tool: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<BookingFormData>>({});

  const tools = ["Tractor", "Harvester", "Plow", "Seeder", "Irrigation Pump"]; // Replace with actual tool list

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tool: value }));
    if (errors.tool) {
      setErrors((prev) => ({ ...prev, tool: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingFormData> = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer name is required.";
    }
    if (!formData.tool) {
      newErrors.tool = "Please select a tool.";
    }
    if (!formData.date) {
      newErrors.date = "Booking date is required.";
    }
    if (!formData.time) {
      newErrors.time = "Booking time is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Booking Submitted:", formData);
      alert(`Booking successfully created for ${formData.customerName}`);
      setFormData({ customerName: "", tool: "", date: "", time: "", notes: "" });
    }
  };

  return (
    <div className="container p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">New Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded">
        <div className="space-y-2">
          <Label htmlFor="customerName">Customer Name</Label>
          <Input
            id="customerName"
            name="customerName"
            placeholder="Enter customer's name"
            value={formData.customerName}
            onChange={handleChange}
            
          />
          {errors.customerName && (
            <p className="text-sm text-red-500">{errors.customerName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="tool">Tool</Label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tool" />
            </SelectTrigger>
            <SelectContent>
              {tools.map((tool) => (
                <SelectItem key={tool} value={tool}>
                  {tool}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.tool && <p className="text-sm text-red-500">{errors.tool}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Booking Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="text-sm text-red-500 ">{errors.date}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Booking Time</Label>
          <Input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <p className="text-sm text-red-500">{errors.time}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Add any specific instructions or notes for the booking"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full">
          Create Booking
        </Button>
      </form>
    </div>
  );
}


export default BookingForm