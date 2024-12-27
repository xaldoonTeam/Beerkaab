
import { AiOutlineProduct } from "react-icons/ai";
import { FaSellsy } from "react-icons/fa";
import { IoIosNotifications,  } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdAnalytics, MdOutlinePayment } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbLayoutDashboardFilled,  TbReportAnalytics } from "react-icons/tb";

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Home',
          title:"Dashboarda",
          icon: <TbLayoutDashboardFilled />,
        },
      ],
    },
  
    {
     
      links: [
        {
          name: 'Teams' ,
          // icon: <AiOutlineShoppingCart />,
          icon:<MdAnalytics />
        },
        {
          name: 'Tools',
          icon: <AiOutlineProduct/>
        },
        // {
        //   name:'SubCategory',
        //   icon : <MdCategory/>
        // },
        {
          name:'Orders',
          icon: <FaSellsy />
        },
        {
          name: 'Recyle bin',
          icon: <MdOutlinePayment />,
        },
        {
          name: 'Receiveable',
          icon: <IoIosNotifications /> ,
        },
        {
            name: 'Payables',
            icon: <RiSecurePaymentLine />  ,
          },
          {
            name:'User',
            icon:<IoPeopleSharp />
          },
          {
            name:"Employees",
            icon:<IoPeopleSharp />
         },
          {
            name:"Reports",
            icon: <TbReportAnalytics />,
          }
          
      ],
    },

   
  ];
  