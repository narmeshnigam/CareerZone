import './App.css';
import './App.css'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Services from './Components/Services/Services';
import EducationalService from './Components/Services/EducationalService/EducationalService';
import StudentCreditCard from './Components/Services/StudentCreditCard/StudentCreditCard';
import Gallery from './Components/Gallery/Gallery';
import Courses from './Components/Courses/Courses';
import CoursesAboutPage from './Components/Courses/CoursesAboutPage/CoursesAboutPage';

const AppLayout = () => {
  return (
    <> 
    <Navbar />
    <Outlet/>
    <Footer/>
    
    </>
  );
};
const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "aboutUs",
        element: <About />, 
      },
      {
        path: "/services",
        element: <Services />, 
      },
      {
        path: '/services/edu_service',
        element: <EducationalService/>
      },
      {
        path: '/services/stdCred_service',
        element: <StudentCreditCard/>
      },
      {
        path: "/contact",
        element: <Contact />, 
      },
      {
        path: "/gallery",
        element: <Gallery />, 
      },
      {
        path: "/courses",
        element: <Courses />, 
      },
      {
        path: "/courses/dparma",
        element: <CoursesAboutPage />, 
      },
    ],
  },
]);

export default App;
