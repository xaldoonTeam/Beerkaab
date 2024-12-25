import {createBrowserRouter ,Outlet} from 'react-router-dom'
// import Header from './components/Header/Header'
import React from 'react'
import HomePage from './pages/Home'
import Navbars from './components/ui/nav'


const Router =()=>{
  // const search =(query)=>{
    
  // }
 return(
    <div>
        <div className=" ">
            {/* <Head/> */}
        </div>
    <div className=" mt-4  ">
      {/* <Search  /> */}
           <Navbars/>
        {/* <Header/> */}
    </div>
    <div>
        <Outlet/>
    </div>
    <div>footer</div>
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
                path:'about',
                element: <h1>this is about page</h1>
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
                path:'*',
                // element: <NotFound/>
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
            }

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