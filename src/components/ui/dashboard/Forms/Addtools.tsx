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
import { useDispatch, useSelector } from "react-redux";
import { createToolsFn, resetToolsState } from "../../../../Redux/Slice/CreateSlice/createProductSlice"; // Adjust the import path
import { Toaster } from "@/components/ui/toaster";

interface FormData {
  name: string;
  description: string;
  price: string;
  location: string;
  category: string;
  image: string;
}

function AddToolForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    description: "",
    price: "",
    location: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = React.useState<Partial<FormData>>({});
  const dispatch = useDispatch();
  const { isLoading, isError, errorMsg, isSuccess } = useSelector((state: any) => state.createTools);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
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
    if (formData.price.length < 1) {
      newErrors.price = "Price is required.";
    }
    if (formData.location.length < 1) {
      newErrors.location = "Location is required.";
    }
    if (formData.category.length < 1) {
      newErrors.category = "Category is required.";
    }
    if (!formData.image) {
      newErrors.image = "Image is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Dispatch the async action to create the tool
      dispatch(createToolsFn([formData])); // Pass the formData as an array here
      // Dispatch resetToolsState without arguments
      dispatch(resetToolsState()); // Reset state after submission
    }
  };
  

  React.useEffect(() => {
    if (isSuccess) {
      alert("Tool added successfully!");
      // Reset form on success
      setFormData({
        name: "",
        description: "",
        price: "",
        location: "",
        category: "",
        image: "",
      });
      dispatch(resetToolsState()); // Reset the state after successful submission
    }
  }, [isSuccess, dispatch]);

  React.useEffect(() => {
    if (isError) {
      alert(errorMsg || "An error occurred");
      dispatch(resetToolsState()); // Reset on error as well
    }
  }, [isError, errorMsg, dispatch]);

  return (
    <Card className="w-full max-w-6xl mt-20">
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
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              placeholder="Enter the price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Enter the location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              placeholder="Enter the category"
              value={formData.category}
              onChange={handleChange}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image}</p>
            )}
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-4 h-32 object-cover"
              />
            )}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding Tool..." : "Add Tool"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddToolForm;
