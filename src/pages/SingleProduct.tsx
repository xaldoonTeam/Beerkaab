import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../pages/Products/breadcrumb";
import { ProductGallery } from "../pages/Products/product-gallery";
import { ProductSpecifications } from "../pages/Products/product-specifications";
import { RelatedProducts } from "../pages/Products/related-products";
import { ReviewSection } from "../pages/Products/review-section";
import { BookingWidget } from "../pages/Products/booking-widget";
import { ContactOwner } from "../pages/Products/contact-owner";
import { useState } from "react";

// This would typically come from a database or API
const productData = {
  id: "1",
  name: "Cagaf Tractor",
  description:
    "The John Deere 5075E is a versatile utility tractor designed for various agricultural tasks. It offers reliability, comfort, and advanced features to enhance productivity on your farm.",
  images: [
    "https://www.vision-techniques.com/wp-content/uploads/2023/10/tractor@2x.png",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  dailyRate: 150,
  location: "Hargeisa, Somaliland",
  owner: {
    name: "Ahmed Mohamed",
    phone: "+252 63 123 4567",
    email: "ahmed@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  availableFrom: "2024-01-15",
  availableTo: "2024-12-31",
  specifications: [
    { name: "Engine Power", value: "75 HP" },
    { name: "Transmission", value: "12F/12R PowrReverser™" },
    { name: "Hydraulic System", value: "Open Center" },
    { name: "Lift Capacity", value: "3,700 lbs" },
    { name: "Fuel Capacity", value: "20 gallons" },
  ],
  features: [
    "4-cylinder diesel engine",
    "Comfortable operator station",
    "Easy-to-use controls",
    "Versatile hydraulic system",
    "Durable construction",
  ],
  reviews: [
    {
      id: "1",
      user: "Mohamed Ali",
      rating: 5,
      date: "2023-12-10",
      comment: "Excellent tractor, very reliable and powerful. Helped me complete my farming tasks efficiently.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "2",
      user: "Amina Hassan",
      rating: 4,
      date: "2023-11-25",
      comment: "Good machine, but fuel consumption is a bit high. Otherwise very satisfied with the performance.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ],
  relatedProducts: [
    {
      id: "2",
      name: "Harvester X200",
      image: "/placeholder.svg?height=300&width=400",
      dailyRate: 200,
    },
    {
      id: "3",
      name: "Planter Pro",
      image: "/placeholder.svg?height=300&width=400",
      dailyRate: 120,
    },
    {
      id: "4",
      name: "Irrigation System",
      image: "/placeholder.svg?height=300&width=400",
      dailyRate: 80,
    },
  ],
}

export default function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/equipment-detail" },
          { label: productData.name, href: `/products/${id}`, active: true },
        ]}
        className="mb-6"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Gallery and Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Product Gallery */}
          <ProductGallery images={productData.images} productName={productData.name} />

          {/* Product Information */}
          <div className="bg-white rounded-2xl  p-6 space-y-6">
            <h1 className="text-3xl font-bold text-green-700">{productData.name}</h1>
            <p className="text-gray-700 leading-relaxed">{productData.description}</p>

            {/* Specifications */}
            {/* <ProductSpecifications specifications={productData.specifications} features={productData.features} /> */}
          </div>

          {/* Reviews Section */}
          <ReviewSection reviews={productData.reviews} />
          
          {/* Related Products */}
          <RelatedProducts products={productData.relatedProducts} />
        </div>

        {/* Right Column - Booking and Contact */}
        <div className="space-y-6">
          {/* Booking Widget */}
          <BookingWidget
            dailyRate={productData.dailyRate}
            availableFrom={productData.availableFrom}
            availableTo={productData.availableTo}
          />

          {/* Contact Owner */}
          {/* <ContactOwner owner={productData.owner} /> */}
        </div>
      </div>
    </div>
  );
}
