


// import React from 'react'
// import { FiUser } from 'react-icons/fi'
// import { MdOutlineMailOutline } from 'react-icons/md'
// import { RiLockPasswordLine } from 'react-icons/ri'
// import { Link, useNavigate } from 'react-router-dom'
// import {useState, useEffect} from 'react';
// import { useDispatch } from 'react-redux'
// import { AppDispatch, RootState } from '@/Redux/Store'
// import { useSelector } from 'react-redux'
// import { toast } from 'react-hot-toast';
// import { RegisterFn, resetRegisterState } from '@/Redux/Slice/RegisterSlice'
// import { AiOutlineIdcard } from 'react-icons/ai'
// import SideParsm from '@/DashComponents/SideParsm'
// import Nav from '@/DashComponents/Nav'

import Nav from "@/DashComponents/Nav";
import SideParsm from "@/DashComponents/SideParsm";
import { RegisterFn, resetRegisterState } from "@/Redux2/Slice/RegisterSlice";
import { AppDispatch, RootState } from "@/Redux/Store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";






function Register() {
  const [full_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type_id, setType] = useState('');
  // const [company_id,setcompany_id]= useState('')
  const dispatch = useDispatch<AppDispatch>();
  // const [isAdmin, setIsAdmin] = useState(false);

   
  const { isLoading, isError, isSuccess, errorMsg } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      full_name,
      email,
      password,
      type_id: +type_id,
      company_id: userInfo.company_id,
    }; 
    dispatch(RegisterFn(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('User registered', { id: 'registerToast' });
      navigate('/');
    }
  
    if (isError) {
      toast.error(errorMsg, { id: 'registerToast' });
      dispatch(resetRegisterState());
    }
    dispatch(resetRegisterState())
  }, [isSuccess, isError, errorMsg, isLoading]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');


  // useEffect(() => {
  //   if (userInfo.type.type === 'admin') {
  //     setIsAdmin(true);
  //   } else {
  //     setIsAdmin(false);
  //   }
  // }, [userInfo]);

  return (
    // <div>
    //   <div className="p-3 flex items-center">
    //     <h1 className="md:hidden">
    //       <SideParsm />
    //     </h1>
    //     <div className="navhome p-0 flex w-full justify-end">
    //       <Nav />
    //     </div>
    //   </div>

    // <div className="flex justify-center items-center min-h-screen font-serif ">
      
    //   <form onSubmit={submitHandler} className="bg-white sm:px-10 dark:text-black px-6 lg:px-24 py-4 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.4)] w-full max-w-[600px] mx-4">
    //     <div className="flex flex-col items-center dark:text-black justify-center gap-2">
    //       <img src="public/tiigsi-main.png" alt="" className="w-[130px]" />
    //       <h1 className="font-semibold pt-5">Register</h1>
    //       <p className="text-sm">
    //         Register new user
    //       </p>
    //     </div>
    //     <div className="py-8">
    //       <div className="flex flex-col gap-1">
    //         <label htmlFor="">Username</label>
    //         <div className="relative">
    //           <input
    //             type="text"
    //             value={full_name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="Enter your username"
    //             className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
    //           />
    //           <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    //         </div>
    //         <label htmlFor="">Email</label>
    //         <div className="relative">
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             placeholder="Enter your email"
    //             className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
    //           />
    //           <MdOutlineMailOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    //         </div>
    //         <label htmlFor="">Password</label>
    //         <div className="relative">
    //           <input
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             placeholder="Enter your password"
    //             className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
    //           />
    //           <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    //         </div>
    //         <label htmlFor="">Role</label>
    //         <div className="relative">
    //         <select
    //           value={type_id}
    //           onChange={(e) => setType(e.target.value)}
    //           className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
    //         >
    //           <option value="">Select Role</option>
    //           {isAdmin ? (
    //             <option value="1">Admin</option>
    //           ) : (
    //             <option value="2">User</option>
    //           )}
    //         </select>
    //           <AiOutlineIdcard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    //         </div>
    //         {/* <label htmlFor="">Company_id</label> */}
    //         {/* <div className="relative">
    //           <input
    //             type="text"
    //             value={company_id}
    //             onChange={(e) => setcompany_id(e.target.value)}
    //             placeholder="Enter company id "
    //             className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
    //           />
    //           <AiOutlineIdcard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
    //         </div> */}
    //         <button type='submit' className="rounded-[8px] p-2 my-4 shadow-[0_0_15px_rgba(35,173,241,0.5)] bg-gradient-to-r from-[#ff9a5b] to-[#fb6b05] w-full text-white">
    //         {isLoading ? 'Loading...' : 'Register'}
    //         </button>
    //         {/* <Link to={'/'}>
    //           <p className="text-center text-sm">
    //             already have account?<span className="text-[#F67821]">
    //               Login!
    //             </span>
    //           </p>
    //         </Link> */}
    //       </div>
    //     </div>
    //   </form>


      
    // </div>
    // </div>
    <div className="min-h-screen ">
    <div className='p-3 flex justify-between'>
      <h1 className='lg:hidden'>
        <SideParsm />
      </h1>
      <div className="navhome p-0 flex w-full justify-end">
        <Nav />
      </div>
    </div>
    <div>
      <h1 className="font-semibold text-lg">Create Organisation</h1>
      <form onSubmit={submitHandler} className="bg-white dark:text-black my-2 p-4 rounded-[8px] w-full flex flex-col">
        
       
          <div >
            <div className="formdiv flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col">
                  <label htmlFor="">Full name</label>
                  <input
                    type="text"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={full_name}
                onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={email}
                                onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={password}
                                onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Role</label>
            <div className="relative">
           <select
              value={type_id}
              onChange={(e) => setType(e.target.value)}
              className="rounded-[8px] p-2 bg-[#EDF2F6] w-full pl-8"
            >
              <option value="">Select Role</option>
             
                <option value="1">Admin</option>
              
                <option value="2">User</option>
         
            </select> 
                </div>
               
              </div>
            
            </div>
            </div>
          </div>
      
        <div className="div flex justify-end my-4">
          <button type='submit' className='bg-[#605BFF] rounded-[8px] shadow-[0_4px_23.5px_rgba(96,91,255,1)] flex justify-center w-[14%] text-white p-2'>create User</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register