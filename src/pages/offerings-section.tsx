"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const offerings = [
  {
    title: "Beerista Siidhka",
    description: ["Venenatis eros et, sed commodo risus.", "Nullam sit amet laoreet elit."],
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPvImLhGia15S22BrMOstyCnp0SbofPKwiXwfX208G_2LNwSax",
  },
  {
    title: "Quality Standards",
    description: ["Venenatis eros et, sed commodo risus.", "Nullam sit amet laoreet elit."],
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPvImLhGia15S22BrMOstyCnp0SbofPKwiXwfX208G_2LNwSax",
  },
  {
    title: "Organic Services",
    description: ["Venenatis eros et, sed commodo risus.", "Nullam sit amet laoreet elit."],
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPvImLhGia15S22BrMOstyCnp0SbofPKwiXwfX208G_2LNwSax",
  },
]

function OfferingsSection() {
  return (
    <section className="py-16 sm:px-4 lg:px-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#325E56]">
          Adeegyada Aanu Bixino
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <img
                    src={offering.image || "/placeholder.svg"}
                    alt={offering.title}
                    className="w-full h-full object-cover"
                  />
                  <CardHeader className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
                    <CardTitle className="text-[#325E56] text-xl md:text-2xl font-semibold">{offering.title}</CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="p-4 space-y-2">
                  {offering.description.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferingsSection

