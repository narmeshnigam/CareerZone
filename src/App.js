import "./App.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Services from "./Components/Services/Services";
import EducationalService from "./Components/Services/EducationalService/EducationalService";
import StudentCreditCard from "./Components/Services/StudentCreditCard/StudentCreditCard";
import Gallery from "./Components/Gallery/Gallery";
import Courses from "./Components/Courses/Courses";
import CoursesAboutPage from "./Components/Courses/CoursesAboutPage/CoursesAboutPage";
import Blogs from "./Components/Blogs/Blogs";
import Admin from "./Components/FirebaseServer/Admin";
import AdminLogin from "./Components/FirebaseServer/AdminLogin/AdminLogin";
import AdminNav from "./Components/FirebaseServer/AdminNav/AdminNav";
import HomeCrousel from "./Components/FirebaseServer/HomeCrousel/HomeCrousel";
import AdminNotification from "./Components/FirebaseServer/AdminNotification/AdminNotification";
import AdminCourses from "./Components/FirebaseServer/AdminCourses/AdminCourses";
import CollegeDetails from "./Components/College/CollegeDetails/CollegeDetails";
import AdminCollegeDetails from "./Components/FirebaseServer/AdminCollegeDetails/AdminCollegeDetails";
import College from "./Components/College/College";
import AdminGallery from "./Components/FirebaseServer/AdminGallery/AdminGallery";
import AdminContact from "./Components/FirebaseServer/AdminContact/AdminContact";
import LeadHistory from "./Components/CRM/Lead History Page/LeadHistory";
import FollowUpPage from "./Components/CRM/FollowUpPage/FollowUpPage";
import CreateNewLead from "./Components/CRM/CreateNewLead/CreateNewLead";
import CreateNewUser from "./Components/CRM/CreateNewUser/CreateNewUser";
import FollowUpHistory from "./Components/CRM/FollowUpHistory/FollowUpHistory";
import UserListsPage from "./Components/CRM/UserListPage/UserListsPage";
import PopUpForm from "./Components/CRM/Lead History Page/PopUpForm/PopUpForm";
import Dashboard from "./Components/CRM/Dashboard/Dashboard";
import BlogStore from "./Components/Blogs/BlogStore/BlogStore";
import AddNewUser from "./Components/FirebaseServer/AdminNewUser/AdminNewUser";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const AdminPannelRoutes = () => {
  return (
    <>
      <AdminNav />
      <Outlet />
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
        path: "/Popup",
        element: <PopUpForm />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/edu_service",
        element: <EducationalService />,
      },
      {
        path: "/services/stdCred_service",
        element: <StudentCreditCard />,
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
        path: "/courses/:name",
        element: <CoursesAboutPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/college",
        element: <College />,
      },
      {
        path: "/college/:name",
        element: <CollegeDetails />,
      },
      {
        path: "/leadHistory",
        element: <LeadHistory />,
      },
      {
        path: "/createLead",
        element: <CreateNewLead />,
      },
      {
        path: "/followUp/:id",
        element: <FollowUpPage />,
      },
      {
        path: "/newUser",
        element: <CreateNewUser />,
      },
      {
        path: "/followUpHistory",
        element: <FollowUpHistory />,
      },
      {
        path: "/userlist",
        element: <UserListsPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/BlogList",
        element: <BlogStore />,
      },
    ],
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminPannelRoutes />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/homecrousel",
        element: <HomeCrousel />,
      },
      {
        path: "/admin/notification",
        element: <AdminNotification />,
      },
      {
        path: "/admin/courses",
        element: <AdminCourses />,
      },
      {
        path: "/admin/collegedetails",
        element: <AdminCollegeDetails />,
      },
      {
        path: "/admin/gallery",
        element: <AdminGallery />,
      },
      {
        path: "/admin/contact",
        element: <AdminContact />,
      },
      {
        path: "/admin/user",
        element: <AddNewUser />,
      },
    ],
  },
]);

export default App;
