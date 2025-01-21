"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface NotificationFormData {
  title: string;
  message: string;
  targetAudience: string;
  isUrgent: boolean;
}

 function NotificationsForm() {
  const [formData, setFormData] = useState<NotificationFormData>({
    title: "",
    message: "",
    targetAudience: "",
    isUrgent: false,
  });

  const [errors, setErrors] = useState<Partial<NotificationFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof NotificationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleToggle = () => {
    setFormData((prev) => ({ ...prev, isUrgent: !prev.isUrgent }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<NotificationFormData> = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = "Target audience is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Notification Submitted:", formData);
      alert(`Notification "${formData.title}" created successfully!`);
      setFormData({
        title: "",
        message: "",
        targetAudience: "",
        isUrgent: false,
      });
    }
  };

  return (
    <div className="container  p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Create Notification</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter notification title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter notification message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            name="targetAudience"
            placeholder="Enter target audience (e.g., All Users, Admins)"
            value={formData.targetAudience}
            onChange={handleChange}
          />
          {errors.targetAudience && (
            <p className="text-sm text-red-500">{errors.targetAudience}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="isUrgent">Mark as Urgent</Label>
          <Switch id="isUrgent" checked={formData.isUrgent} onCheckedChange={handleToggle} />
        </div>

        <Button type="submit" className="w-full">
          Create Notification
        </Button>
      </form>
    </div>
  );
}

export default NotificationsForm