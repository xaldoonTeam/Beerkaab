"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface UploadedImage {
  id: string
  url: string
}

export default function CreateListing() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [galmaha, setGalmaha] = useState("")
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedImage({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file)
      })
    }
  }

  const handleDeleteImage = () => {
    setUploadedImage(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      name,
      description,
      address,
      quantity,
      galmaha,
      image: uploadedImage
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-40 px-4 sm:px-6 lg:px-8 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">CREATE LISTING</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-[2fr,1fr] gap-6">
                {/* Left Column - Form Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Magaca</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#f3f6f3]"
                    />
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
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-[#f3f6f3]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="bg-[#f3f6f3]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="galmaha">Qiimaha lagu Kiraynay</Label>
                      <Input
                        id="galmaha"
                        value={galmaha}
                        onChange={(e) => setGalmaha(e.target.value)}
                        className="bg-[#f3f6f3]"
                      />
                    </div>
                    <Button type="submit" className="w-full  bg-green-600 hover:bg-green-700">
                Create Listing
              </Button>
                  </div>
                </div>

                {/* Right Column - Image Upload */}
                <div className="space-y-4">
                  <div>
                    <Label>Images:</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="flex-1"
                      />
                      <Button type="button" className="bg-green-600 hover:bg-green-700">
                        Upload
                      </Button>
                    </div>
                  </div>

                  {uploadedImage && (
                    <div className="relative">
                      <img
                        src='https://s3-alpha-sig.figma.com/img/ecbb/0ab8/366d3863b946da36839390250faed6aa?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io5adGEY8AXBIfWj5rkRpop7VR7luRXNq1~0DSep3im5kxdGXHveqgLjiDqTkSp9gJkf14lV5rVQfTRa75eyr9WjOq5YW4tUowerDrgou~wovertxZnk4mcpaQ76g6bkhFivIxYG77jVjSxOyuU5u6EPYE8zF1V0l26vsuCQW9EAotdrryXL~glEYxONu5N~ne8vTDSb7l-bVezrM95MwBWo6lLi35sBUI3QJat1bTkIahnCOifyp6sYppkkSAfT8LLL-82enEEWKRerZvM2z9z-5kVBQjviP1agCxVVGQcsaILbsV4EO9A7XZ8u2TiJfI5dfPVd5Fa00iLedtpg6w__'
                        alt="Uploaded preview"
                        className="w-full h-32 object-cover rounded-md -ml-16 mt-10"
                      />
                      <button
                        type="button"
                        onClick={handleDeleteImage}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 mt-10"
                      >
                        Delete
                      </button>

                    </div>
                  )}
                   
                </div>
                
              </div>

            
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

