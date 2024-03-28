import React from 'react'
import AbroadColleges from './Body/AbroadColleges/AbroadColleges';
import Achievemets from './Body/Achievements/Achievemets';
import BhiarCreditCard from './Body/BhiarCreditCard/BhiarCreditCard';
import Courses from './Body/Courses/Courses';
import HomeCrousel from './Body/HomeCrousel/HomeCrousel';
import NotificationPage from './Body/NotificatonPage/NotificationPage';
import TopEngColleges from './Body/TopColleges/TopEngColleges';
import TopMedicalColleges from './Body/TopMedicalColleges/TopMedicalColleges';

const Home = () => {
  return (
    <>
        <HomeCrousel/>
        <NotificationPage/>
        <Courses/>
        <BhiarCreditCard/>
        <TopMedicalColleges/>
        <TopEngColleges/>
        <AbroadColleges/>
        <Achievemets/>
    </>
  )
}

export default Home
