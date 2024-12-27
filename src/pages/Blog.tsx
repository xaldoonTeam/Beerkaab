"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const blogs = [
  {
    image: "/placeholder.svg",
    title: "Agricultural Tips",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
  {
    image: "/placeholder.svg",
    title: "Fresh Produce",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
  {
    image: "/placeholder.svg",
    title: "Tomato Growing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
  {
    image: "/placeholder.svg",
    title: "Farming Tips",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam pariatur lorem ipsum dolor sit amet.",
  },
]

export function BlogSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold text-[#2B5F0F] mb-8">
        BLOGS
      </h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="m-auto w-[90%]"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {blogs.map((blog, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-sm">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{blog.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-200 hover:bg-gray-100" />
        <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-200 hover:bg-gray-100" />
      </Carousel>
    </div>
  )
}

export default BlogSlider