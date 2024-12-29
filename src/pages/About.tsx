"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-cover bg-center py-40 text-center relative"
        style={{
          backgroundImage:
            "url('https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/15/0/shutterstock_Phil-Darby-684009907.jpg.rend.hgtvcom.616.411.85.suffix/1589560675935.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-5xl font-bold relative z-10"
        >
          About US
        </motion.h1>
      </motion.div>

      <main className="max-w-7xl m-auto w-[90%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-green-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Isku Xiraha Beeraleyda iyo Khubarada Qalabka Beerta
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              "Boggan waxaa loogu talagalay in uu noqdo meel isku xira beeraleyda doonaya inay kobciyaan wax-soosaarkooda iyo dadka aqoonta gaarka ah u leh qalabka beerta. Hadafkeenna waa inaan fududeyno wada shaqeynta iyo isdhaafsiga macluumaadka, si beeraleydu u helaan qalabkii saxda ahaa iyo hagid ay ku horumariyaan tacabkooda. Adiga oo ah beeraley, waxaad ka heli kartaa xalal waxtar leh, halka khubarada qalabka beerta ay halkan ku wadaagaan aqoontooda iyo adeegyo tayo leh."
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-green-900">Learn More</Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/15/0/shutterstock_Phil-Darby-684009907.jpg.rend.hgtvcom.616.411.85.suffix/1589560675935.webp"
                alt="Team working together"
                width={700}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Team section */}
       
      </main>
    </div>
  );
}

export default AboutPage;

