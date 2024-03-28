import './App.css';
import './App.css'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';

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
        element: <AboutUs />, 
      },
    ],
  },
]);

export default App;
