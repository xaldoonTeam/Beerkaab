"use client"

import React, { useState } from "react"
import Lottie from "lottie-react"
import { motion } from "framer-motion"
import animationData1 from "../../public/animationData1.json"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import bglottie2 from "../../public/ending trip.json"
import bglottie5 from "../../public/animationdata5.json"
import SectionTwo from "./SectionTwo"
import Tools from "./Tools"
import OfferingsSection from "./offerings-section"
import WhyUsSection from "@/pages/why-us-section"
import Blog from "./Blog"

const HomePage = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0)
  const animationDataList = [animationData1, bglottie5, bglottie2]

  const handleAnimationComplete = () => {
    setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animationDataList.length)
  }

  return (
    <>
      <div className="relative w-full bg-green-50 flex flex-col items-center justify-center mt-20 lg:mt-20">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6  gap-8 py-12 md:py-24">
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-[#325E56]">
              Horumar Waxsoosaar <br className="hidden sm:inline" /> & Guul Joogto Ah
            </h1>
            <p className="mb-6 sm:mb-10 max-w-md text-gray-900 font-semibold text-sm sm:text-base">
              Beero si kalsooni leh! 🌾 [Beerkaab] waxay kuu keeneysaa qalab iyo agab tayo sare oo aad Kiraysan karto
              kuna habboon dhammaan xilliyada. Horumari waxsoosaarkaaga maanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/products" passHref>
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 hover:text-black rounded-2xl hover:bg-[#448175] text-white font-semibold text-lg sm:text-xl bg-[#325E56] transition-all">
                  Dalbo agab
                </Button>
              </Link>
              <Link to="/Dalboadeeg" passHref>
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 hover:text-white rounded-2xl hover:bg-[#325E56] bg-green text-gray-700 font-semibold text-lg sm:text-xl bg-[#eebd4f] transition-all">
                  Dalbo Adeeg
                </Button>
              </Link>
            </div>
          </div>

          {/* Animation/Image Section */}
          <div className="w-full md:w-1/2 h-auto relative mt-8 md:mt-0">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Lottie
                animationData={animationDataList[currentAnimationIndex]}
                loop={false}
                autoplay={true}
                onComplete={handleAnimationComplete}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <SectionTwo />
        <Tools />
        <OfferingsSection />
        <WhyUsSection />
        <Blog />
      </div>
    </>
  )
}

export default HomePage

