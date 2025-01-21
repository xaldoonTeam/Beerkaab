import React, { useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData1 from "../../public/animationData1.json";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bglottie2 from "../../public/ending trip.json";
import bglottie5 from "../../public/animationdata5.json";
import Categories from "./Ctegory";
import Tools from "./Tools";
import Services from "./Services";
import Blog from "./Blog";
import SectionTwo from "./SectionTwo";
import OfferingsSection from "./offerings-section";
import WhyUsSection from "@/pages/why-us-section";

const HomePage = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const animationDataList = [animationData1, bglottie5, bglottie2];

  const handleAnimationComplete = () => {
    setCurrentAnimationIndex(
      (prevIndex) => (prevIndex + 1) % animationDataList.length
    );
  };

  return (
    <>
      <div className="relative w-full bg-green-50 flex flex-col items-center justify-center">
        {/* Pseudo-element for background */}
        <div
          // className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
          // style={{
          //   backgroundImage: `url('https://farmhub-nextjs.vercel.app/assets/img/element/get-element.png')`,
          // }}
        ></div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-8 mt-20">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-[#325E56] ">
              Horumar Waxsoosaar <br /> & Guul Joogto Ah
            </h1>
            <p className="mb-10 max-w-md text-gray-900 font-semibold">
              Beero si kalsooni leh! 🌾 [Beerkaab] waxay kuu keeneysaa qalab iyo
              agab tayo sare oo aad Kiraysan karto kuna habboon dhammaan
              xilliyada. Horumari waxsoosaarkaaga maanta.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <Link to="/products">
                <Button className="px-8 py-3 hover:text-black rounded-2xl hover:bg-[#448175] text-white font-semibold text-xl bg-[#325E56]  transition-all">
                  Dalbo agab
                </Button>
              </Link>

              <Link to="/Dalboadeeg">
                <Button className="px-8 lg:ml-10 hover:text-white rounded-2xl hover:bg-[#325E56]  py-3 bg-green text-gray-700 font-semibold text-xl bg-[#eebd4f] transition-all">
                  Dalbo Adeeg
                </Button>
              </Link>
            </div>
          </div>

          {/* Animation/Image Section */}
          <div className="w-full md:w-[50%] h-auto relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Lottie
                animationData={animationDataList[currentAnimationIndex]}
                loop={false}
                autoplay={true}
                onComplete={handleAnimationComplete}
                className=""
              />
            </motion.div>
          </div>
        </div>
      </div>
<div className="px-6">
      <SectionTwo />
      <Tools />
      <OfferingsSection />
      <WhyUsSection />
      <Blog /></div>
    </>
  );
};

export default HomePage;
