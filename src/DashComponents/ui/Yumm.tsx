
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
          name: 'Users',
          icon: <IoPeopleSharp/>
        },
        // {
        //   name:'SubCategory',
        //   icon : <MdCategory/>
        // },
        {
          name:'Companies',
          icon: <FaSellsy />
        },
        {
          name: 'Tools',
          icon: <MdOutlinePayment />,
        },
        {
          name: 'Orders',
          icon: <IoIosNotifications /> ,
        },
       
         
          {
            name:"Reports",
            icon: <TbReportAnalytics />,
          }
          
      ],
    },

   
  ];
  