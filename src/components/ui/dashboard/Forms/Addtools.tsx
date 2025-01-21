import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";

interface FormData {
  name: string;
  description: string;
  uses: string;
}

 function AddToolForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    description: "",
    uses: "",
  });
  const [errors, setErrors] = React.useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (formData.name.length < 2) {
      newErrors.name = "Tool name must be at least 2 characters.";
    }
    if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    if (formData.uses.length < 5) {
      newErrors.uses = "Uses must be at least 5 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Show success message (update based on your Toaster library's usage)
      alert(`Tool added successfully: ${formData.name}`);
      setFormData({ name: "", description: "", uses: "" });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Agriculture Tool</CardTitle>
        <CardDescription>
          Enter the details of the new agricultural tool below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="name">Tool Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter tool name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the tool and its primary function"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="uses">Uses</Label>
            <Textarea
              id="uses"
              name="uses"
              placeholder="List the main uses of the tool (comma-separated)"
              value={formData.uses}
              onChange={handleChange}
            />
            {errors.uses && (
              <p className="text-sm text-red-500">{errors.uses}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Add Tool
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddToolForm