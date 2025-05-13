"use client"

import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Leaf  } from "lucide-react"

// Import your Lottie animations
import animationData1 from "../../public/animationData1.json"
import { Link } from "react-router-dom"
import bglottie2 from "../../public/ending trip.json"
import bglottie5 from "../../public/animationdata5.json"
import SectionTwo from "./SectionTwo"
import Tools from "./Tools"
import OfferingsSection from "./offerings-section"
import WhyUsSection from "@/pages/why-us-section"
import Blog from "./Blog"
export default function HomePage() {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0)
  const animationDataList = [animationData1, bglottie5, bglottie2]

  // Auto-rotate animations every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animationDataList.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const handleAnimationComplete = () => {
    // This will be called when an animation completes
    // We're also using the interval above as a fallback
  }

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-green-50 to-white overflow-hidden ">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full container max-w-7xl  mx-auto px-4 sm:px-6 gap-8 py-16 md:py-28">
          <motion.div className="w-full md:w-1/2 z-10" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#325E56]"
              variants={itemVariants}
            >
              Horumar Waxsoosaar <br className="hidden sm:inline" /> & Guul Joogto Ah
            </motion.h1>

            <motion.p className="mb-8 max-w-md text-gray-700 text-sm sm:text-base lg:text-lg" variants={itemVariants}>
              Beero si kalsooni leh! 🌾 <span className="font-semibold">Beerkaab</span> waxay kuu keeneysaa qalab iyo
              agab tayo sare oo aad Kiraysan karto kuna habboon dhammaan xilliyada. Horumari waxsoosaarkaaga maanta.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6" variants={itemVariants}>
              <Link to="/products" >
                <Button className="w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold text-lg bg-[#325E56] hover:bg-[#448175] transition-all duration-300 shadow-md hover:shadow-lg">
                  Dalbo agab
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/adeeg" >
                <Button className="w-full sm:w-auto px-8 py-3 rounded-xl text-gray-700 font-semibold text-lg bg-[#eebd4f] hover:bg-[#f5ca6a] transition-all duration-300 shadow-md hover:shadow-lg">
                  Dalbo Adeeg
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animation Section */}
          <motion.div
            className="w-full md:w-1/2 h-auto relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl p-4 ">
              <Lottie
                key={currentAnimationIndex}
                animationData={animationDataList[currentAnimationIndex]}
                loop={false}
                autoplay={true}
                onComplete={handleAnimationComplete}
                className="w-full h-auto"
              />

              {/* Animation indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {animationDataList.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAnimationIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentAnimationIndex === index ? "bg-[#325E56] w-6" : "bg-gray-300"
                    }`}
                    aria-label={`View animation ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Other Sections */}
      <div className="">
        <SectionTwo />
        <Tools />
        <OfferingsSection />
        <WhyUsSection />
        <Blog />

        <div className="bg-emerald-50 text-white py-20 pt-32 relative overflow-hidden ">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300"></div> */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 0.5, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-700/50"
                          ></motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 0.5, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-700/50"
                          ></motion.div>
                        </div>
              
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                          >
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                              className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center"
                            >
                              <Leaf className="w-10 h-10 text-emerald-700" />
                            </motion.div>
              
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
                              Ready to Transform Your
                              <span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent ml-2">
                                Agricultural Operations?
                              </span>
                            </h2>
                            <p className="text-xl text-black mb-10">
                              Contact our team of experts today to discuss how our services can help you achieve better results and
                              maximize your farm's potential.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                  to="/contact"
                                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-emerald-900 bg-white rounded-full hover:bg-emerald-50 transition-colors duration-300 shadow-lg shadow-emerald-900/20"
                                >
                                  Contact Us
                                  <ChevronRight className="ml-2 h-5 w-5" />
                                </Link>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                  to="/services/pricing"
                                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-700 rounded-full hover:bg-emerald-600 transition-colors duration-300 border border-emerald-600 shadow-lg shadow-emerald-900/20"
                                >
                                  View Pricing
                                </Link>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
      </div>
    </>
  )
}

function Mail(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
