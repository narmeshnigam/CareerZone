import React, { Suspense, lazy, memo } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomeCrousel from "./Components/FirebaseServer/HomeCrousel/HomeCrousel";
import Loading from "./Components/FirebaseServer/Loading/Loading";

const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Services = lazy(() => import("./Components/Services/Services"));
const EducationalService = lazy(() =>
  import("./Components/Services/EducationalService/EducationalService")
);
const StudentCreditCard = lazy(() =>
  import("./Components/Services/StudentCreditCard/StudentCreditCard")
);
const Gallery = lazy(() => import("./Components/Gallery/Gallery"));
const Courses = lazy(() => import("./Components/Courses/Courses"));
const CoursesAboutPage = lazy(() =>
  import("./Components/Courses/CoursesAboutPage/CoursesAboutPage")
);
const Blogs = lazy(() => import("./Components/Blogs/Blogs"));
const Admin = lazy(() => import("./Components/FirebaseServer/Admin"));
const AdminLogin = lazy(() =>
  import("./Components/FirebaseServer/AdminLogin/AdminLogin")
);
const AdminNav = lazy(() =>
  import("./Components/FirebaseServer/AdminNav/AdminNav")
);
const AdminFollowUpInfo = lazy(() =>
  import("./Components/FirebaseServer/AdminFollowUpInfo/AdminFollowUpInfo")
);
const AdminNotification = lazy(() =>
  import("./Components/FirebaseServer/AdminNotification/AdminNotification")
);
const AdminCourses = lazy(() =>
  import("./Components/FirebaseServer/AdminCourses/AdminCourses")
);
const CollegeDetails = lazy(() =>
  import("./Components/College/CollegeDetails/CollegeDetails")
);
const AdminCollegeDetails = lazy(() =>
  import("./Components/FirebaseServer/AdminCollegeDetails/AdminCollegeDetails")
);
const College = lazy(() => import("./Components/College/College"));
const AdminGallery = lazy(() =>
  import("./Components/FirebaseServer/AdminGallery/AdminGallery")
);
const AdminContact = lazy(() =>
  import("./Components/FirebaseServer/AdminContact/AdminContact")
);
const LeadHistory = lazy(() =>
  import("./Components/CRM/Lead History Page/LeadHistory")
);
const FollowUpPage = lazy(() =>
  import("./Components/CRM/FollowUpPage/FollowUpPage")
);
const CreateNewLead = lazy(() =>
  import("./Components/CRM/CreateNewLead/CreateNewLead")
);
const FollowUpHistory = lazy(() =>
  import("./Components/CRM/FollowUpHistory/FollowUpHistory")
);
const UserListsPage = lazy(() =>
  import("./Components/CRM/UserListPage/UserListsPage")
);
const PopUpForm = lazy(() =>
  import("./Components/CRM/Lead History Page/PopUpForm/PopUpForm")
);
const Dashboard = lazy(() => import("./Components/CRM/Dashboard/Dashboard"));
const BlogStore = lazy(() => import("./Components/Blogs/BlogStore/BlogStore"));
const AddNewUser = lazy(() =>
  import("./Components/FirebaseServer/AdminNewUser/AdminNewUser")
);
const UserLogin = lazy(() => import("./Components/CRM/UserLogin/UserLogin"));

const AppLayout = memo(() => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
));

const AdminPannelRoutes = memo(() => (
  <>
    <AdminNav />
    <Outlet />
  </>
));

const App = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "aboutUs",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Popup",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <PopUpForm />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/services/edu_service",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <EducationalService />
          </Suspense>
        ),
      },
      {
        path: "/services/stdCred_service",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <StudentCreditCard />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "/courses",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "/courses/:name",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <CoursesAboutPage />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/college",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <College />
          </Suspense>
        ),
      },
      {
        path: "/college/:name",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <CollegeDetails />
          </Suspense>
        ),
      },
      {
        path: "/leadHistory",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <LeadHistory />
          </Suspense>
        ),
      },
      {
        path: "/createLead",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <CreateNewLead />
          </Suspense>
        ),
      },
      {
        path: "/followUp/:id",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <FollowUpPage />
          </Suspense>
        ),
      },
      {
        path: "/followUpHistory",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <FollowUpHistory />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/BlogList",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <BlogStore />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: "/userlogin",
    element: (
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <UserLogin />
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: <AdminPannelRoutes />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Admin />
          </Suspense>
        ),
      },
      {
        path: "/admin/homecrousel",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <HomeCrousel />
          </Suspense>
        ),
      },
      {
        path: "/admin/notification",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminNotification />
          </Suspense>
        ),
      },
      {
        path: "/admin/courses",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminCourses />
          </Suspense>
        ),
      },
      {
        path: "/admin/followUpHistory",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminFollowUpInfo />
          </Suspense>
        ),
      },
      {
        path: "/admin/collegedetails",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminCollegeDetails />
          </Suspense>
        ),
      },
      {
        path: "/admin/gallery",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminGallery />
          </Suspense>
        ),
      },
      {
        path: "/admin/contact",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AdminContact />
          </Suspense>
        ),
      },
      {
        path: "/admin/user",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AddNewUser />
          </Suspense>
        ),
      },
      {
        path: "/admin/userlist",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <UserListsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
