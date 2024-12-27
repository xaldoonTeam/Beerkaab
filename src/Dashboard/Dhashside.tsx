// import React from 'react'
// import { AiOutlineProduct } from 'react-icons/ai'
// import { FcSalesPerformance } from 'react-icons/fc'
// import { LuLayoutDashboard } from 'react-icons/lu'
// import { MdAnalytics } from 'react-icons/md'
// import { TbLayoutDashboardFilled } from 'react-icons/tb'
// import { MdOutlinePayment } from "react-icons/md";
// import { IoIosNotifications, IoIosSettings } from 'react-icons/io'
// import { FaSellsy } from "react-icons/fa";
// import { Outlet } from 'react-router-dom'
// import { IoLogOut } from 'react-icons/io5'

// function DhashSide() {
//   return (
//     <div className=' bg-[#EEF0F4] w-[100%] h-screen  ' >
//         <div className=' flex flex-col justify-between bg-white w-[250px] h-screen '>
//             <div className=' ml-3'>
//           <div className=' flex px-3 pt-4 pb-7  gap-3 items-center align-baseline'>
//             <img src="/public/logosample.png" alt="" width={'40px'}/>
//             <h1 className='text-2xl font-semibold'>Macaash</h1>
//             </div>
//                 <nav   className='flex px-3 items-center my-2 py-2 bg-gradient-to-r from-[#605bff] to-[#3a3799] text-white rounded-lg  gap-2 text-lg'><TbLayoutDashboardFilled /> Dashboard</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><MdAnalytics /> Vendor</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><AiOutlineProduct/> Products</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><FaSellsy />
//  Sales</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><MdOutlinePayment /> Purchases</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><IoIosNotifications /> Notifications</nav>
//                 <nav className='flex px-3 items-center my-2 py-2 text-gray-500 rounded-2xl gap-2 text-lg'><IoIosSettings/> settings</nav>
//             </div> 
//             {/* <div>
//             <img src="public/upgrade.png" alt="" className='w-[180px] h-[180px]' />
//             </div> */}
//             <div className='flex ml-3 mt-10 items-center gap-5  mb-5 '>
//               <div className='rounded-full relative  h-[50px] w-[50px] bg-[#87B6A1]' >
//                     <h1 className='font-bold text-2xl absolute top-3 left-3 text-gray-700 ' >M</h1>
//               </div>
             
//               <div className='flex justify-between items-center gap-4'>

//               <div>
//               <h2 className='font-semibold hidden md:block '>maria ali</h2>
//               <h2 className='text-gray-500'>user</h2>

//               </div>
//               <IoLogOut className='text-gray-600 text-2xl' />
//               </div>
              
//             </div> 
//         </div>  
                
  
        
//     </div>
//   )
// }

// export default DhashSide


import  { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../DashComponents/ui/Yumm';
import { useStateContext } from '../DashComponents/ui/ContextProvider';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/Redux/Store';
import { useDispatch } from 'react-redux';
import { getOneCompanayFN } from '@/Redux/Slice/GetOneCompanaySlice';

const DhashSide = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize, } = useStateContext();
  const dispatch=useDispatch<AppDispatch>()
 
  const GetOneCompanayState=useSelector((state:RootState)=> state.GetOneCompanay)

  useEffect(()=>{
   dispatch(getOneCompanayFN())
  },[dispatch])


  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize! <= 1020) {
      setActiveMenu(false);
      
    }
    
  };


  useEffect(() => {
    // Check the theme preference stored in local storage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('DarkSide');
    } else {
      document.body.classList.remove('DarkSide');
    }
  }, []);

  const activeLink = `flex items-center rounded-xl  gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-gradient-to-r from-[#605bff] to-[#3a3799] shadow-[0_4px_23px_0_rgba(96,91,255,0.5)] `;
  const normalLink = 'flex items-center rounded-xl gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-light-gray m-2';

  return (
    <div className={`bg-white w-[100%] h-screen ${localStorage.getItem('theme') === 'dark' ? 'DarkSide' : ''}`}>
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/Dashboard/Home" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-[20px] font-extrabold tracking-tight dark:text-white  text-slate-900">
              <span>{GetOneCompanayState.data.company_name}  <span className='text-orange-700'>Beer</span>Kaab </span>
            </Link>
            <div content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                  to={`/Dashboard/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  })}
                  // active ClassName={activeLink}
                  className={({isActive}) => `${isActive ? activeLink : normalLink}`}
                >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DhashSide;