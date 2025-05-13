"use client"

import { ArrowRight } from "lucide-react"
import {Link} from "react-router-dom"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    id: 1,
    title: "Khudradaha iyo Shaqo Abuurista",
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",
    date: "April 15, 2023",
    description:
      "Khudradaha waxay abuuri kartaa shaqooyin cusub, gaar ahaan beeraleyda iyo ganacsatada. Ku beeri khudradaha suuqyada waxay ka caawin kartaa beeraleyda inay helaan dakhli joogto ah, iyadoo sidoo kale abuuraysa shaqooyin cusub ee ka yimaada beeralayda ama suuqyada iibka.",
  },
  {
    id: 2,
    title: "Isticmaalka Sunta Dalagga",
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",
    date: "March 22, 2023",
    description:
      "Marka aad isticmaaleyso sunta, waxaa muhiim ah inaad raacdo tilmaamaha soo saarayaasha ku saabsan isticmaalka iyo badbaadada. Tani waxay ka hortagi doontaa waxyeellooyinka caafimaad iyo deegaan.",
  },
  {
    id: 3,
    title: "Hagaajinta Ciidda",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRilxlyNP7s4ddqG_XrZLRIw22qhk2Oh4MGrkBfz4J-57vYofMulhFUXxo10u4yBBUHs&usqp=CAU_",
    date: "February 10, 2023",
    description:
      "Xaqiiji in ciidda ay tahay mid bacrin ah oo si fiican u ka bogsata biyaha. Haddii ciidda ay culus tahay (sida dhoobo), waxaad u baahan doontaa inaad si fiican u hagaajiso",
  },
  {
    id: 4,
    title: "Doorashada Xabuubta",
    image: "https://cms-resources.coleparmer.com/t/ta-237-pesticides-being-sprayed.jpg",
    date: "January 5, 2023",
    description:
      "Xasuuso in noocyada xabuubta ee aad doorato ay ku xiran tahay nooca dhirta ama khudaarta aad rabto inaad beerato. Noocyada qaar waxay u baahan yihiin ciid gaar ah ama daryeel gaar ah.",
  },
]

function BlogSlider() {
  return (
    <section className="bg-gradient-to-b  from-white to-green-50/50 py-16">
      <div className="mx-auto max-w-7xl ">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">BLOGS</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Waxaan idinla wadaagnaa macluumaad muhiim ah oo ku saabsan beeraha iyo wax soo saarka
          </p>
        </div>

        <div className="relative ">
          {/* Subtle gradient overlays for carousel edges */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-green-50 via-green/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-green-50 via-green/40 to-transparent z-10 pointer-events-none"></div> */}

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
 <CarouselContent className="-ml-40 ">
              {blogs.map((blog) => (
                <CarouselItem key={blog.id} className=" md:basis-1/2 lg:basis-1/2">
                  <Link to={`/BlogPage`} className="block h-full">
                    <Card className="h-full border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-md overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={blog.image || "/placeholder.svg"}
                          alt={`Sawir ku saabsan: ${blog.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 bg-green-700 text-white text-xs px-2 py-1 m-2 rounded">
                          {blog.date}
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-lg text-green-800 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 line-clamp-3">{blog.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0 pb-5 px-5">
                        <Button variant="link" className="p-0 h-auto text-green-700 hover:text-green-900 font-medium">
                          Sii akhri <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
             ))}
            </CarouselContent>

            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="static h-10 w-10 bg-white border border-green-200 hover:bg-green-50 text-green-700 shadow-sm transform-none translate-y-0 mr-2" />
              <CarouselNext className="static h-10 w-10 bg-white border border-green-200 hover:bg-green-50 text-green-700 shadow-sm transform-none translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
        <Link to={`/BlogPage`} className="block h-full">

          <Button className="bg-green-700 hover:bg-green-800">
            Dhammaan Maqaalada
            <ArrowRight className="ml-2 h-4 w-4" />
            
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSlider
