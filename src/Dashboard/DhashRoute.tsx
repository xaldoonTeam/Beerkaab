import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DhashSide from './Dhashside'
import { motion } from 'framer-motion';

function DhashRoute() {
  const theme = localStorage.getItem('theme') || 'light';
  // const navigate= useNavigate()
  //  useEffect(()=>{
  //   if(!localStorage.getItem('userInfo')){
  //       navigate('/');
  //   }
  // },[])

  return (
    <div className='flex w-[100%] '>
       <div className='hidden lg:block fixed z-10 w-[250px] '><DhashSide/></div>
       
       <div className={` mainVew  lg:ml-[250px] w-full h-[100%]  px-8 py-0 ${theme === 'dark' ? 'DarkTheme' : ''}`}>
       <Outlet/>
       </div>
    </div>

  )
}

export default DhashRoute