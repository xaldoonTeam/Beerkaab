import {createBrowserRouter ,Outlet} from 'react-router-dom'
// import Header from './components/Header/Header'
import HomePage from './pages/Home'
import Navbars from './components/ui/nav'
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import Allproducts from './pages/Allproducts'
import Dalboadeeg from './pages/dalboadeeg'
import Order from './pages/order'
import Companyes from './pages/companys'
import Ordesevice from './pages/Ordeservice'
const Router =()=>{
  // const search =(query)=>{
    
  // }
 return(
    <div>
        <div className=" ">
            {/* <Head/> */}
        </div>
    <div className=" static z-50">
      {/* <Search  /> */}
           <Navbars/>
        {/* <Header/> */}
    </div>
    <div className=' '>
        <Outlet/>
    </div>
    <div className=''><Footer/></div>
    </div>
 )
}
export default Router

export const router= createBrowserRouter([
    {
        path:'/',
        element: <Router/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
           
            {
                path:'register',
                // element: <Register/>
            },
            {
              path:`order`,
            //   element:<OrderPage/>
            },
            {
                path: "shop",
                // element: <ShopP/>
            },
           
           
            {
                path:'login',
                // element:<Login/>
            },
            {
              path: 'product/:id',
            //   element: <ProductItem />,
            },
            {
              path:'product/veiw',
            //   element:<ProductView/>
            },
            {
              path:'cart',
            //   element:<CartPage/>
            },
            {
              path:'allProducts',
            //   element:<ProductsHome/>
            },
            {
                path:'Contact',
                element:<Contact/>
              },
              {
                path:'about',
                element:<About/>
              },
              {
                path:'products',
                element:<Allproducts/>
              },
              {
                path:'Dalboadeeg',
                element:<Dalboadeeg/>
              },
              {
                path:'Orderpage',
                element:<Order/>
              },
              {
                path:'Companyes',
                element:<Companyes/>
              },
              {
                path:'Ordesevice',
                element:<Ordesevice/>
              },
            

        ]
    },
   
//   {
//     path: '/dashboard',
//     element: <DhashRoute />,
//     children: [
//       {
//         index: true,
//         element: <ECommerce />,
//       },
//       {
//       path:"Ecommerce",
//        element:<ECommerce/>
//       },
      
//       {
//         path:'orders',
//         element: <Orders/>,
//       },
//       {
//         path: 'employees',
//         element: <Employees/>,
//       },
      
//       {
//         path: 'products',
//         element: <Products />,
//       },
//       {
//         path: 'users',
//         element: <SubCategory />,
//       },
//       { path: 'orders', 
//        element: <Orders />
//      },
//      {
//       path:'Customers',
//       element:<Customers/>
//      },
//      {
//       path:'calender',
//       element:<Calender/>
//      },
//     //  {
//     //   path:'Pie',
//     //   element:<Pie/>
//     //  },
//      {
//       path:'editor',
//       element:<Editro/>
//      },
//      {
//       path:'Categories/category/Create',
//       element:<CreateCategory/>
//      },
//      {
//       path:'Product/new',
//       element:<CreateProduct/>
//      },
//      {
//       path:"kanban",
//       element:<Kanban/>
//      },
//      {
//       path:'area',
//       element:<Area/>
//     },
//      {
//       path:'Linchart',
//       element: <LinChart/>
//      },
//      {
//       path:'Categories',
//       element:<Category/>
//      },
//      {
//         path:'*',
//         element: <NotFoundd/>
//     },
//     {
//      path:"Recycle",
//      element:<Recycle/>
//     },
//     {
//       path:'Category/update/:catId',
//       element:<UpdateCategory/>
//     },
//     {
//       path:'product/update/:productID',
//       element:<UpdateProduct/>
//     },
//     {
//       path:'Shipping/:orderId',
//       element:<ShippingO/>
//     }
//     ],
//   },
 ])