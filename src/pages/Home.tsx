import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData1 from "../../public/animationData1.json";
import {Link} from'react-router-dom'
import { Button } from '@/components/ui/button';
import bglottie2 from "../../public/ending trip.json";
import bglottie5 from "../../public/animationdata5.json";
import Categories from './Ctegory';
import Tools from './Tools';
import Services from './Services';
import Blog from './Blog'
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
    <div className="w-full flex flex-col items-center justify-center bg-white ">
      {/* Navbar */}
     

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-8 mt-20 ">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left ml-20">
  <p className="text-xl font-medium text-black-600 uppercase ">
    Ku soo dhowow
  </p>
  <h1 className="text-7xl  font-extrabold mb-4 leading-tight text-[#287509]">
    BEERKAAB
  </h1>
  <p className="text-lg font-medium mb-6 text-gray-700">
    Ku xidhnow xalalka ugu wanaagsan ee beeraleyda <br/>  iyo khubarada beerta. 
    Ujeedadayadu waa in aan fududeyno <br/> wada shaqeynta iyo horumarinta tacabkaaga.
  </p>
  <Link to='/products'>
  <Button className="px-8 py-2 mt-3 bg-green text-gray-700 font-semibold text-xl bg-[#EEF3EB] rounded-full hover:bg-green-700 transition-all">
Dalbo Qalab  </Button></Link>

<Link to='/Dalboadeeg'>

<Button className="px-8 ml-4 py-2 mt-3 bg-green text-gray-700 font-semibold text-xl bg-[#EEF3EB] rounded-full hover:bg-green-700 transition-all">
Dalbo Adeeg  </Button></Link>
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
    <Tools/>
    <Categories/>
    <Services/>
       <div className='mt-20'>
 <Blog/></div>
    </>
  );
};

export default HomePage;
