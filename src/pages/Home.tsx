import React, { useState } from 'react'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import  animationData1 from "../../public/animationData1.json"
import  animationData2 from "../../public/animationData2.json"
import  bglottie2 from "../../public/bg lottie2.json"
import  bglottie3 from "../../public/bglottie.json"


function HomePage() {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const animationDataList = [animationData1 , animationData2, bglottie2, bglottie3];
  const handleAnimationComplete = () => {
    setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animationDataList.length);
  };
  return (
    <div className='md:flex qayb w-[90%] m-auto gap-5 md:items-center justify-center'>
      <div className='md:w-[50%] qor box-border heroText mt-20'>
            <h2 className='text-3xl mgc m-3 font-extrabold'>
              <span className='cinwaan'>BeerKaab</span> 
            </h2>
            <p className='m-5  TextLoram'>
            Madaddaalo nin weyn iyo
Maad ma ku tiriyaa!
Milaygu waa milaygii
Rag maleeganayoo
Naago mooska hurdeen!!
            </p>
            <button className='btnh text-center m-4 font-semibold p-4 rounded-lg hover:bg-[#e81383] hover:text-white'>
              Shop Now
            </button>
          </div>
          <div className='lottie sm:w-[400px] h-[200px] md:w-[600px] md:h-[400px] m-5'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0.5 }}
              exit={{ opacity: 10, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Lottie
                animationData={animationDataList[currentAnimationIndex]}
                loop={false}
                autoplay={true}
                onComplete={handleAnimationComplete}
              />
            </motion.div>
          </div>
      
    </div>
  )
}

export default HomePage