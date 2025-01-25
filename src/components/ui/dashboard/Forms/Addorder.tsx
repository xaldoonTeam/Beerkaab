"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface OrderFormData {
  customerName: string;
  tool: string;
  quantity: number;
  orderDate: string;
  notes: string;
}

function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: "",
    tool: "",
    quantity: 1,
    orderDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<OrderFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));

    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (tool: string) => {
    setFormData((prev) => ({ ...prev, tool }));
    if (errors.tool) {
      setErrors((prev) => ({ ...prev, tool: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<OrderFormData> = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Customer name is required.";
    }
    if (!formData.tool.trim()) {
      newErrors.tool = "Tool is required.";
    }
   
    if (!formData.orderDate.trim()) {
      newErrors.orderDate = "Order date is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order Submitted:", formData);
      alert(`Order for ${formData.tool} created successfully!`);
      setFormData({
        customerName: "",
        tool: "",
        quantity: 1,
        orderDate: "",
        notes: "",
      });
    }
  };

  return (
    <div className="container  p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded">
        <div className="space-y-2">
          <Label htmlFor="customerName">Customer Name</Label>
          <Input
            id="customerName"
            name="customerName"
            placeholder="Enter customer name"
            value={formData.customerName}
            onChange={handleChange}
          />
          {errors.customerName && (
            <p className="text-sm text-red-500">{errors.customerName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="tool">Tool</Label>
          <Select onValueChange={handleSelectChange} value={formData.tool}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tool" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tractor">Tractor</SelectItem>
              <SelectItem value="Plow">Plow</SelectItem>
              <SelectItem value="Harvester">Harvester</SelectItem>
            </SelectContent>
          </Select>
          {errors.tool && <p className="text-sm text-red-500">{errors.tool}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Enter quantity"
            value={formData.quantity || ""} // Handle empty state
            onChange={handleChange}
          />
          {errors.quantity && (
            <p className="text-sm text-red-500">{errors.quantity}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="orderDate">Order Date</Label>
          <Input
            id="orderDate"
            name="orderDate"
            type="date"
            value={formData.orderDate}
            onChange={handleChange}
          />
          {errors.orderDate && (
            <p className="text-sm text-red-500">{errors.orderDate}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes for the order"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="bg-[#325E56] text-white">
          Create Order
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
