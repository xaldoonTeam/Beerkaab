"use client"

import { useRef } from "react"
import {Link} from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: string
  name: string
  image: string
  dailyRate: number
}

interface RelatedProductsProps {
  products: Product[]
}


export function RelatedProducts({ products }: RelatedProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-8 w-8 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-8 w-8 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <Card
            key={product.id}
            className="min-w-[240px] max-w-[240px] overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <div className="relative h-[160px] w-full">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-green-700 font-medium">${product.dailyRate}/day</span>
                <Link to={`/products/${product.id}`}>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
