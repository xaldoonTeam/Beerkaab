"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
     <div className="relative bg-green-900 text-white p-8">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/tractor-field-ai-generated_268835-11230.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>

        <div className="relative container mx-auto py-20 px-4 lg:px-8 text-center mt-8">
          <h1 className="text-5xl font-extrabold mb-4 mt-10">Qalabka beeraha</h1>
          <div className="text-lg font-medium flex justify-center items-center gap-2 mt-10">
            <span>Home</span>
            <span className="text-gray-300">{'>'}</span>
            <span className="text-gray-200">Services</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto w-[90%] py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-[#325E56] sm:text-5xl sm:tracking-tight lg:text-6xl">
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
              <Button size="lg" className="bg-[#325E56]">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa180E4AR6RFOFvBcUpbU78WP0a2i-6by7w&s"
                alt="Team working together"
                width={700}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
