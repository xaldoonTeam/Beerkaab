import React, { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';

import HomePage from './pages/Home';
import Navbars from './components/ui/nav';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import DhashRoute from './Dashboard/DhashRoute';
import Notfound from './Dashboard/Notfound';
import Allproducts from './pages/Allproducts';
import Order from './pages/order';
import Companyes from './pages/companys';
import Ordesevice from './pages/Ordeservice';
import OrderSummary from './pages/OrderSummary';
import Home from './Dashboard/DasHome';
import Login from './pages/Login';
import SignupForm from './pages/SignupForm';
import Register from './Dashboard/Register';
import EmployersData from './DashComponents/ui/EmployersData';
import Addproducts from './pages/Addproducts';
import SingleProduct from './pages/SingleProduct';
import Addorderservice from './pages/AddorderService';
import Adeeg from './pages/Adeeg';
import Tools from './Dashboard/Tools';
import Orders from './Dashboard/Orders';
import Users from './Dashboard/Users'
import Companies from './Dashboard/Companies'
import Reports from './Dashboard/Reports'
import Blog from './pages/Blog';
import BlogPage from './pages/blogPage';
import ServiceDetails from './pages/ServiceDetails';
import BolgDetails from './pages/bolgDetails';

// ✅ Auth check
const isAuthenticated = () => !!localStorage.getItem('token');

// ✅ ProtectedRoute TypeScript component
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return isAuthenticated() ? children : <Navigate to="/loginpage" replace />;
};

// ✅ ProtectedLayout wrapper for public pages
const ProtectedLayout = () => {
  return isAuthenticated() ? (
    <>
      <Navbars />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/loginpage" replace />
  );
};

// ✅ Routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Allproducts /> },
      { path: 'orderpage', element: <Order /> },
      { path: 'companyes', element: <Companyes /> },
      { path: 'ordesevice', element: <Ordesevice /> },
      { path: 'ordersummary', element: <OrderSummary /> },
      { path: 'addproducts', element: <Addproducts /> },
      { path: 'singleproduct', element: <SingleProduct /> },
      { path: 'servicedetails', element: <ServiceDetails /> },
      { path: 'addorderservice', element: <Addorderservice /> },
      { path: 'adeeg', element: <Adeeg /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blogpage', element: <BlogPage /> },
      { path: 'bolgdetails', element: <BolgDetails /> },
      { path: '*', element: <Notfound /> },
    ],
  },
  {
    path: '/loginpage',
    element: <Login />,
  },
  {
    path: '/signupform',
    element: <SignupForm />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DhashRoute />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'tools', element: <Tools /> },
      { path: 'orders', element: <Orders /> },
      { path: 'Users', element: <Users /> },
      { path: 'Companies', element: <Companies /> },
      { path: 'teams', element: <EmployersData /> },
      { path: 'user', element: <Register /> },
      { path: 'Reports', element: <Reports /> },
      { path: '*', element: <Notfound /> },
    ],
  },
]);

// ✅ AppRouter Component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
