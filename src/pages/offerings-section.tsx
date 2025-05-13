"use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Leaf, Mail, MapPin, Phone, Tractor, Wrench } from "lucide-react"
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
    <>
   <section className="py-20 bg-green-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6"> Our Services </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Initial Consultation",
                      description: "We begin with a thorough assessment of your needs and goals.",
                    },
                    {
                      step: "2",
                      title: "Service Planning",
                      description: "We develop a detailed plan tailored to your specific requirements.",
                    },
                    {
                      step: "3",
                      title: "Scheduling",
                      description: "We coordinate timing to minimize disruption to your operations.",
                    },
                    {
                      step: "4",
                      title: "Service Execution",
                      description: "Our experienced team performs the service with precision and care.",
                    },
                    {
                      step: "5",
                      title: "Follow-up",
                      description: "We ensure your complete satisfaction and address any additional needs.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLJD73iCkxL5s0XVRhgSXdkcjRrWEE8W3yQ&s"
                  alt="Service process"
                  className="relative z-10 rounded-3xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        
        
         <section id="how-it-works" className="bg-gray-50 py-16 ">
                  <div className="container max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
                      <p className="mt-4 text-gray-500">
                        Renting agriculture tools and booking services is simple and straightforward
                      </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                      <Card className="border-none shadow-md">
                        <CardHeader className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <Calendar className="h-8 w-8 text-green-600" />
                          </div>
                          <CardTitle className="mt-4 font-bold text-xl">1. Book Online</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-gray-500">
                            Browse our selection of tools and services, select your dates, and book online in minutes.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-none shadow-md">
                        <CardHeader className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <Tractor className="h-8 w-8 text-green-600" />
                          </div>
                          <CardTitle className="mt-4">2. Receive Equipment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-gray-500">
                            Pick up your equipment at our location or choose our delivery service for added convenience.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-none shadow-md">
                        <CardHeader className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <Wrench className="h-8 w-8 text-green-600" />
                          </div>
                          <CardTitle className="mt-4">3. Get Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-gray-500">
                            Our team provides full support, including equipment training and technical assistance when needed.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
            
        </>
  )
}

export default OfferingsSection

