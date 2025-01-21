"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface CompanyFormData {
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

 function CompaniesForm() {
  const [formData, setFormData] = useState<CompanyFormData>({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<CompanyFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof CompanyFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CompanyFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Company name is required.";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person is required.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.phone.trim() || !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required.";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Company Submitted:", formData);
      alert(`Company ${formData.name} added successfully!`);
      setFormData({
        name: "",
        contactPerson: "",
        email: "",
        phone: "",
        address: "",
        description: "",
      });
    }
  };

  return (
    <div className="container  p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Add New Company</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded">
        <div className="space-y-2">
          <Label htmlFor="name">Company Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter company name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input
            id="contactPerson"
            name="contactPerson"
            placeholder="Enter contact person's name"
            value={formData.contactPerson}
            onChange={handleChange}
          />
          {errors.contactPerson && (
            <p className="text-sm text-red-500">{errors.contactPerson}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            placeholder="Enter company's address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Add a brief description about the company"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full">
          Add Company
        </Button>
      </form>
    </div>
  );
}

export default CompaniesForm