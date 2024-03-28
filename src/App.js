import './App.css';
import './App.css'
import AbroadColleges from './Components/Body/AbroadColleges/AbroadColleges';
import Achievemets from './Components/Body/Achievements/Achievemets';
import BhiarCreditCard from './Components/Body/BhiarCreditCard/BhiarCreditCard';
import Courses from './Components/Body/Courses/Courses';
import HomeCrousel from './Components/Body/HomeCrousel/HomeCrousel';
import NotificationPage from './Components/Body/NotificatonPage/NotificationPage';
import TopEngColleges from './Components/Body/TopColleges/TopEngColleges';
import TopMedicalColleges from './Components/Body/TopMedicalColleges/TopMedicalColleges';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <HomeCrousel/>
    <NotificationPage/>
    <Courses/>
    <BhiarCreditCard/>
    <TopMedicalColleges/>
    <TopEngColleges/>
    <AbroadColleges/>
    <Achievemets/>
    <Footer/>
    </>
  );
}

export default App;
