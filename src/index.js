import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './Components/Navbar/Header';
import Body from "./Components/Body/Body";
import Education from "./Components/Education";
import Courses from "./Components/Courses";
import Apply_Now from "./Components/Apply_Now";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
         <> <Header />
      <Outlet/>
      <Footer/></> 
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "Courses",
        element: <Courses />, 
      },
      {
        path: "Education",
        element: <Education />, 
      },
      {
        path: "Apply",
        element: <Apply_Now />, 
      },
      
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
