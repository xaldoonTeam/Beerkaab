// import React, { useState } from 'react'
// import Lottie from 'lottie-react';
// import { motion } from 'framer-motion';
// import  animationData1 from "../../public/animationData1.json"
// import  animationData2 from "../../public/animationData2.json"
// import  animationData3 from "../../public/animation_lmi2b8gl.json"
// import  bglottie2 from "../../public/ending trip.json"
// import  bglottie5 from "../../public/animationdata5.json"


// function HomePage() {
//   const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
//   const animationDataList = [animationData1,bglottie5,animationData2,bglottie5 , animationData2,animationData3,bglottie2];
//   const handleAnimationComplete = () => {
//     setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animationDataList.length);
//   };
//   return (
//     <div className='md:flex qayb w-[90%] m-auto gap-5 md:items-center justify-center'>
//       <div className='md:w-[50%] qor box-border heroText mt-20'>
//             <h2 className='text-3xl mgc m-3 font-extrabold'>
//               <span className='cinwaan'>BeerKaab</span> 
//             </h2>
//             <p className='m-5  TextLoram'>
//             Madaddaalo nin weyn iyo
// Maad ma ku tiriyaa!
// Milaygu waa milaygii
// Rag maleeganayoo
// Naago mooska hurdeen!!
//             </p>
//             <button className='btnh bg-green-700 text-white text-center m-4 font-semibold p-4 rounded-lg hover:bg-[#e81383] hover:text-white'>
//               Shop Now
//             </button>
//           </div>
//           <div className='lottie sm:w-[400px] h-[200px] md:w-[600px] md:h-[400px] m-5'>
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0.5 }}
//               exit={{ opacity: 10, x: 100 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Lottie
//                 animationData={animationDataList[currentAnimationIndex]}
//                 loop={false}
//                 autoplay={true}
//                 onComplete={handleAnimationComplete}
//               />
//             </motion.div>
//           </div>
      
//     </div>
//   )
// }

// export default HomePage






import React, { useState } from 'react'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import  animationData1 from "../../public/animationData1.json"
import  animationData2 from "../../public/farmergreen.json"
import  animationData3 from "../../public/animation_lmi2b8gl.json"
import  bglottie2 from "../../public/ending trip.json"
import  bglottie5 from "../../public/animationdata5.json"

const HomePage = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const animationDataList = [
    animationData1,
    bglottie5,
    
    
    
    bglottie2,
  ];
ls
  const handleAnimationComplete = () => {
    setCurrentAnimationIndex(
      (prevIndex) => (prevIndex + 1) % animationDataList.length
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto gap-8 -mt-5">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-gray-800">
          Welcome to <span className="text-green-600">BeerKaab</span>
        </h1>
        <p className="text-lg font-medium mb-6 text-gray-600">
          Madaddaalo nin weyn iyo
          Maad ma ku tiriyaa!
          <br />
          Milaygu waa milaygii
          Rag maleeganayoo
          Naago mooska hurdeen!!
        </p>
        <button className="px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition-all">
          Shop Now
        </button>
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-[50%] h-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
  );
};

export default HomePage;
