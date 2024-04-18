import React, {useState, useEffect} from 'react'
import db from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import CollegeCard from './CollegeCard/CollegeCard';

const College = () => {
    const [collegeCat, setCollegeCat] = useState({});
    const [openSections, setOpenSections] = useState({});
  
    useEffect(() => {
      window.scrollTo(0, 0);
      const fetchColleges = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "collegeData"));
          const categories = {};
  
          querySnapshot.forEach((doc) => {
            const collegeData = doc.data();
            const category = collegeData.category;
  
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(collegeData);
          });
  
          setCollegeCat(categories);
          const initialOpenState = Object.fromEntries(Object.keys(categories).map(cat => [cat, false]));
          setOpenSections(initialOpenState);
        } catch (error) {
          console.error("Error fetching courses: ", error);
        }
      };
  
      fetchColleges();
    }, []);
  
    const toggleMedicalSection = (category) => {
      setOpenSections(prevState => ({
        ...prevState,
        [category]: !prevState[category]
      }));
    };
  
  
    return (
      <div className="coursespg__container">
        <div style={{backgroundImage:'url(https://www.shutterstock.com/image-photo/young-asian-business-team-work-260nw-1695247384.jpg)', rotate: "180deg", backgroundPosition:'top', height: "40vh"}} className="coursespg__container__heading__container">
          <div className="coursespg__container__heading" style={{rotate: "180deg"}}>Colleges</div>
        </div>
  
        <div className="coursespg__container__having__tables">
          {Object.entries(collegeCat).map(([category, college]) => (
            <div
              className="coursespg__medical__courses__table__container"
              key={category}
            >
              <div
                className="coursespg__medical__courses__table__container__heading"
                onClick={() => toggleMedicalSection(category)}
                style={{ borderRadius: openSections[category] ? "10px 10px 0 0" : "10px" }}
              >
                Top {category} Colleges
                <img
                  src="./dropdownarrow.png"
                  alt="dropdown arrow"
                  style={{ transform: openSections[category] ? "rotate(180deg)" : "" }}
                />
              </div>
              <div
                className={`coursespg__medical__courses__table__withImg ${openSections[category] ? "open" : "closed"}`}
              >
                <div className="coursespg__medical__courses__table">
                  <div className="coursespg__medical__courses__card__container__withHeading">
                    <div className="courses__card__container__main">
                      {college.map((college, index) => (
                        <Link style={{textDecoration:'none'}} to={`/college/${college.name}`}><CollegeCard
                         key={index}
                         name={college.name}
                         img={college.backgroundImg} /></Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default College
