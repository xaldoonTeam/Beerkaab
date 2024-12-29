import {createBrowserRouter ,Outlet} from 'react-router-dom'
// import Header from './components/Header/Header'
import HomePage from './pages/Home'
import Navbars from './components/ui/nav'
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import DhashRoute from './Dashboard/DhashRoute';
// import Dashhome from './Dashboard/Dashhome';
import Notfound from './Dashboard/Notfound';
import Allproducts from './pages/Allproducts'
import Dalboadeeg from './pages/dalboadeeg'
import Order from './pages/order'
import Companyes from './pages/companys'
import Ordesevice from './pages/Ordeservice'
import OrderSummary from './pages/OrderSummary'
import Reports from './Dashboard/Reports';
import Login from './pages/Login'
import SignupForm from './pages/SignupForm'
import Register from './Dashboard/Register';
import EmployersData from './DashComponents/ui/EmployersData';
import ToolCreate from './Dashboard/createTool';
import  Addproducts from './pages/Addproducts'

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
    <div className='  '>
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
              {
                path:'OrderSummary',
                element:<OrderSummary/>
              },
             
              {
                path:'Loginpage',
                element:<Login/>
              },
              {
                path:'SignupForm',
                element:<SignupForm/>
              },
              {
                path:'Addproducts',
                element:<Addproducts/>
              },

        ]
    },
   
    {
      path:'Dashboard',
      element:<DhashRoute/>,
      children:[
        {
          index:true,
          element:<Reports/>
        },
        {
          path:"Home",
          element:<Reports/>
        },
        {
          path:'*',
          element:<Notfound/>
        },
        {
          path:"Teams",
          element:<EmployersData/>
        },
        {

          // path:"User",
          // element:<Register/>
        },
        {
          // path:"Vendor/CreateVendor",
          // element:<SheetCreateV/>
        },
        {
          // path:"Products",
          // element:<Products/>
        },
        {
          path:"Tools",
          element:<ToolCreate/>
        },
        {
          path:"Products/Expenses/Create",
          // element:<CreateExpenses/>
        },
        {
          path:"Products/Expenses/Update/:expense_id",
          // element:<UpdateExpenses/>
        },
        {
          // path:"Products/Create",
          // element:<ProductCreate/>
        },
        {
          path:"Purchases",
          // element:<CreatePurchase/>
        },
        {
          path:"Sales",
          // element:<SAlesCreate/>
        },
        {
          // path:"Sales/CreateCustomer",
          // element:<CreateCustomer/>
        },
        {
          path:"User",
          element:<Register/>
        },
        {
          path:"Payables/payment/:purchase_id",
          // element:<Payment/>
        },
        {
          path:"TopSales",
          // element:<TopSale/>
        },
        {
          path:"Reports",
          element:<Reports/>
        },
        {
          path:"Reports/SaleReport",
          // element:<SaleReports/>
        },
        {
          // path:"Reports/ExpensesReport",
          // element:<ExpensesReport/>
        },
        {
          path:"Reports/PurchasesReport",
          // element:<PurchaseReport/>
        },
        {
          path:"Reports/Income",
          // element:<ProfitOr/>
        },
        {
          path:"Receipt",
          // element:<Recipt/>
        },
        {
          path:"Vendor/Update/:vendor_id",
          // element:<UpdateVendors/>
        },
        {
          // path:"Products/Update/:product_id",
          // element:<ProductUpdate/>
        },
        {
          path:"Receiveable",
          // element:<RecieveAble/>
        },
        {
          path:"Receiveable/RecieveAblepayment/:sale_id",
          // element:<ReceivePayment/>
        },
        {
          path:"Employees",
          // element:<AllEmoloye/>
        },
        {
          path:"Employees/New",
        //   element:<CreateEmployees/>
        },
        {
          path:"Employees/update/:employee_id",
          // element:<UpdateEmployee/>
        },
        {
          path:"Employees/salaries",
          // element:<Allsalary/>
        },
        {
          path:"Employees/salaries/newSalry",
          // element:<CreateSalary/>
        },
        {
          path:"Employees/salaries/update/:employee_id",
          // element:<UpdateSalary/>
        }

      ]
    }
 ])