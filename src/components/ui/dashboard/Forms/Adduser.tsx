"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";

interface UserFormData {
  name: string;
  email: string;
  role: string;
  phone: string;
}

export default function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    role: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<UserFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof UserFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
    if (errors.role) {
      setErrors((prev) => ({ ...prev, role: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<UserFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Role is required.";
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("User Submitted:", formData);
      alert(`User ${formData.name} added successfully!`);
      setFormData({
        name: "",
        email: "",
        role: "",
        phone: "",
      });
    }
  };

  return (
    <div className="container  p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter user name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter user email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select
            onValueChange={handleSelectChange}
            value={formData.role}
            // placeholder="Select a role"
          >
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Manager">Manager</SelectItem>
            <SelectItem value="Viewer">Viewer</SelectItem>
          </Select>
          {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <Button type="submit" className="bg-[#325E56] text-white">
          Add User
        </Button>
      </form>
    </div>
  );
}
