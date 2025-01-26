"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

function WhyUsSection() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-20 mt-10 sm:mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[#ffd000] text-base sm:text-lg font-semibold uppercase">
                MAXAA NOOGA DOORANAYSAA
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Kobcinta Cunnooyinka Caafimaadka Leh
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Waxaan diiradda saarnaa koritaanka iyo soo saarista cuntooyin caafimaad leh, iyadoo aan la isticmaalin
                wax sun ah. Waxaan ku dadaalnaa in aan bixino cuntooyin caafimaad leh oo ka yimaada beero dabiici ah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Organic Solutions Circular Progress */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24">
                  <CircularProgressbar
                    value={85}
                    text={`${85}%`}
                    styles={buildStyles({
                      textColor: "#325E56",
                      pathColor: "#325E56",
                      trailColor: "#E0E0E0",
                      textSize: "22px",
                    })}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold">Xalka Dabiiciga ah</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Waxaan bixinaa xalal dabiici ah oo waxtar leh, iyadoo aan la isticmaalin wax kiimikooyin waxyeello
                    leh, si loo gaaro koritaanka beeraha caafimaadka leh.
                  </p>
                </div>
              </div>

              {/* Quality Agriculture Circular Progress */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24">
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      textColor: "#325E56",
                      pathColor: "#325E56",
                      trailColor: "#E0E0E0",
                      textSize: "22px",
                    })}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold">Tayada Beeraha</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Beeraha aan ka shaqeyno waxay leedahay tayo sare, iyadoo la hubinayo in ay soo saaraan cuntooyin
                    nadiif ah oo kharashkoodu yahay mid macquul ah.
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 mt-4 sm:mt-6 bg-[#325E56] hover:bg-[#3d746a] text-white font-semibold text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/09-09-2021/agrowfarm-liberty-demo_Free/974977506/web/assets/images/a6.jpg"
              alt="Farmer working with wheelbarrow"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection

