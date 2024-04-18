import React, { useState, useEffect } from "react";
import "./Courses.css";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import CoursesCard from "./CoursesCard/CoursesCard";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courseCat, setCourseCat] = useState({});
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const categories = {};

        querySnapshot.forEach((doc) => {
          const courseData = doc.data();
          const category = courseData.courseCategory;

          if (!categories[category]) {
            categories[category] = [];
          }
          categories[category].push(courseData);
        });

        setCourseCat(categories);
        // Initialize open state for each category to false
        const initialOpenState = Object.fromEntries(Object.keys(categories).map(cat => [cat, false]));
        setOpenSections(initialOpenState);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  const toggleMedicalSection = (category) => {
    setOpenSections(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };


  return (
    <div className="coursespg__container">
      <div className="coursespg__container__heading__container">
        <div className="coursespg__container__heading">Courses</div>
      </div>

      <div className="coursespg__container__having__tables">
        {Object.entries(courseCat).map(([category, courses]) => (
          <div
            className="coursespg__medical__courses__table__container"
            key={category}
          >
            <div
              className="coursespg__medical__courses__table__container__heading"
              onClick={() => toggleMedicalSection(category)}
              style={{ borderRadius: openSections[category] ? "10px 10px 0 0" : "10px" }}
            >
              {category}
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
                  <div className="coursespg__medical__courses__card__container__heading">
                    Medical Courses After Class 10:
                  </div>
                  <div className="courses__card__container__main">
                    {courses.map((course, index) => (
                      course.after10th ? <Link style={{textDecoration:'none'}} to={`/courses/${course.name}`}><CoursesCard
                       key={index}
                       name={course.name}
                       img={course.backgroundImage} /></Link> : null
                    ))}
                  </div>
                  <div className="coursespg__medical__courses__card__container__heading">
                    Medical Courses After Class 12:
                  </div>
                  <div className="courses__card__container__main">
                    {courses.map((course, index) => (
                      course.after12th ? <Link style={{textDecoration:'none'}} to={`/courses/${course.name}`}><CoursesCard 
                      key={index}
                      name={course.name}
                      img={course.backgroundImage} /></Link> : null
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
};

export default Courses;
