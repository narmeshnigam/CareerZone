import React, { Suspense, lazy } from "react";
import HomeCrousel from "./Body/HomeCrousel/HomeCrousel";
import Loading from "../FirebaseServer/Loading/Loading";

const NotificationPage = lazy(() =>
  import("./Body/NotificatonPage/NotificationPage")
);
const PopupForm = lazy(() => import("./popUp-home/PopupForm-home"));
const Courses = lazy(() => import("./Body/Courses/Courses"));
const BhiarCreditCard = lazy(() =>
  import("./Body/BhiarCreditCard/BhiarCreditCard")
);
const TopMedicalColleges = lazy(() =>
  import("./Body/TopMedicalColleges/TopMedicalColleges")
);
const TopEngColleges = lazy(() => import("./Body/TopColleges/TopEngColleges"));
const AbroadColleges = lazy(() =>
  import("./Body/AbroadColleges/AbroadColleges")
);

const Achievemets = lazy(() => import("./Body/Achievements/Achievemets"));

const Home = () => {
  return (
    <>
      <HomeCrousel />
      <PopupForm />

      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <NotificationPage />
        <Courses />
        <BhiarCreditCard />
        <TopMedicalColleges />
        <TopEngColleges />
        <AbroadColleges />
        <Achievemets />
      </Suspense>
    </>
  );
};

export default Home;
