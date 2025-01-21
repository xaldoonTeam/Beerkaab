"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createToolsFn } from "@/Redux/Slice/CreateSlice/createProductSlice";  // Use the correct action creator
import { AppDispatch, RootState } from "@/Redux/Store";

interface UploadedImage {
  id: string;
  url: string;
}

export default function CreateToolPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isSuccess, isError, errorMsg } = useSelector((state: RootState) => state.createTools);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !price || !location || !category || !uploadedImage) {
      alert("All fields are required!");
      return;
    }

    const toolData =[ {
      name,
      description,
      price,
      location,
      category,
      organization_id: 1, // Replace with your logic
      image: "uploadedImage.url",
    }];

    // Dispatch the correct action to create the tool
    dispatch(createToolsFn(toolData));  // Use the action creator here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-40 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Create New Tool</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-[2fr,1fr] gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Tool Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-[#f3f6f3]" />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-[#f3f6f3]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-[#f3f6f3]" />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="bg-[#f3f6f3]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="bg-[#f3f6f3]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    {isLoading ? "Creating..." : "Create Tool"}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Tool Image</Label>
                    <div className="flex gap-2 items-center">
                      <Input type="file" accept="image/*" onChange={handleImageUpload} className="flex-1" />
                    </div>
                  </div>

                  {uploadedImage && (
                    <div className="relative">
                      <img src={uploadedImage.url} alt="Uploaded preview" className="w-full h-32 object-cover rounded-md" />
                      {/* <button
                        type="button"
                        onClick={handleDeleteImage}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button> */}
                    </div>
                  )}
                </div>
              </div>
              {isError && <p className="text-red-500">{errorMsg}</p>}
              {isSuccess && <p className="text-green-500">Tool created successfully!</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
