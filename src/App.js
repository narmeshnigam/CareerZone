import React from 'react'; // Import useState from React
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Services from './Components/Services/Services';
import EducationalService from './Components/Services/EducationalService/EducationalService';
import StudentCreditCard from './Components/Services/StudentCreditCard/StudentCreditCard';
import Gallery from './Components/Gallery/Gallery';

import Modal from './Components/Modal/Modal';
//import Courses from './Components/Courses/Courses';
import CareerBlogs from './Components/CareerBlogs/CareerBlogs';


import CoursesAboutPage from './Components/Courses/CoursesAboutPage/CoursesAboutPage';
import Blogs from './Components/Blogs/Blogs';
import Admin from './Components/FirebaseServer/Admin';
import AdminLogin from './Components/FirebaseServer/AdminLogin/AdminLogin';
import AdminNav from './Components/FirebaseServer/AdminNav/AdminNav';
import HomeCrousel from './Components/FirebaseServer/HomeCrousel/HomeCrousel';

const AppLayout = () => {
  

  return (
    <> 
    <Navbar />
    <Outlet/>
    <Footer/>
    
    </>
  );
};
const AdminPannelRoutes = () => {
  return(
    <>
    <AdminNav/>
    <Outlet/>
    </>
  )
}
const App = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'aboutUs',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services/edu_service',
        element: <EducationalService />,
      },
      {
        path: '/services/stdCred_service',
        element: <StudentCreditCard />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      // {
      //   path: '/courses',
      //   element: <Courses />,
      // },
      {
        path: '/CareerBlogs',
        element: <CareerBlogs />,
      },
     
      {
        path: "/courses/dparma",
        element: <CoursesAboutPage />, 
      },
      {
        path: "/blogs",
        element: <Blogs/>, 
      },
    ],
  },
  {
    path: "/login",
    element: <AdminLogin/>, 
  },
  {
    path: '/admin',
    element: <AdminPannelRoutes/>,
    children:[
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: '/admin/homecrousel',
        element: <HomeCrousel/>
      }
    ]
  }
]);

export default App;
