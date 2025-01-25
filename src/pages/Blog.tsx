"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const blogs = [
  {
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",

    description:
      " khudradaha waxay abuuri kartaa shaqooyin cusub, gaar ahaan beeraleyda iyo ganacsatada. Ku beeri khudradaha suuqyada waxay ka caawin kartaa beeraleyda inay helaan dakhli joogto ah, iyadoo sidoo kale abuuraysa shaqooyin cusub ee ka yimaada beeralayda ama suuqyada iibka.",
  },
  {
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",
    description:
      "Marka aad isticmaaleyso sunta, waxaa muhiim ah inaad raacdo tilmaamaha soo saarayaasha ku saabsan isticmaalka iyo badbaadada. Tani waxay ka hortagi doontaa waxyeellooyinka caafimaad iyo deegaan.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRilxlyNP7s4ddqG_XrZLRIw22qhk2Oh4MGrkBfz4J-57vYofMulhFUXxo10u4yBBUHs&usqp=CAU_",
    description:
      "Xaqiiji in ciidda ay tahay mid bacrin ah oo si fiican u ka bogsata biyaha. Haddii ciidda ay culus tahay (sida dhoobo), waxaad u baahan doontaa inaad si fiican u hagaajiso",
  },
  {
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",
    description:
      "Xasuuso in noocyada xabuubta ee aad doorato ay ku xiran tahay nooca dhirta ama khudaarta aad rabto inaad beerato. Noocyada qaar waxay u baahan yihiin ciid gaar ah ama daryeel gaar ah.",
  },
];

function BlogSlider() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-16 mt-12 sm:mt-24 pb-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#325E56] mb-8">BLOGS</h2>

      <div className="relative">
        {/* Soft Shadow Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-52 bg-gradient-to-r from-green-900/50 via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-52 bg-gradient-to-l from-green-900/50 via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 shadow-xl">
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt="Blog post image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 line-clamp-3">{blog.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden md:flex -left-6 h-12 w-12 bg-white border-none hover:bg-gray-100 text-[#2B5F0F] z-20" />
          <CarouselNext className="hidden md:flex -right-6 h-12 w-12 bg-white border-none hover:bg-gray-100 text-[#2B5F0F] z-20" />
        </Carousel>

        {/* Light Green Shadows Behind Arrows */}
        <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#e8f5e9] -z-10" />
        <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#e8f5e9] -z-10" />
      </div>
    </div>
  )
}

export default BlogSlider

