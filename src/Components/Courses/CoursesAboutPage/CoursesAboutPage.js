import React, { useEffect, useState } from 'react'
import db from '../../../firebase';
import { useParams } from 'react-router-dom';
import './CoursesAboutPage.css'

const CoursesAboutPage = () => {

  const {name} =  useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {
    const fetchImages = async () => {
      db.collection("courses").where("name", "==", name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCourse(doc.data())
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    
    fetchImages();
  }, [name]);

  return (
    <div className='courses_about_container'>
      <div className='courses_about_banner_img' style={{backgroundImage: `linear-gradient(to bottom ,#eaedf100, #eaedf1ba),url(${course.backgroundImage})`}}>
        <div>{course.name}</div>
      </div>
      <div className='courses_about_course_container'>
        <div>
          <div>About</div>
          {course.aboutText}
        </div>
        <div><img alt='aboutDpharma' src='https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg'></img></div>
      </div>
      <div className='courses_about_course_container'>
        <div><img alt='aboutDpharma' src='https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/01/18184732/GATE-Eligibility.png'></img></div>
        <div>
          <div>Eligibility Criteria</div>
          <div className='courses_about_eli_points'>
            <ul>
              {course.eligibilityText?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='courses_about_course_container'>
        <div>
          <div>Scope of {course.name}</div>
          <div className='courses_about_eli_points'>
            <ul>
              {course.scopeText?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div><img alt='aboutDpharma' src='https://www.vidhyarthidarpan.com/blog/wp-content/uploads/2021/05/SCOPE.png'></img></div>
      </div>
      <div className='courses_about_course_container'>
        <div style={{width:'40%'}}><img alt='aboutDpharma' src='https://community.thriveglobal.com/wp-content/uploads/2018/03/College.jpeg'></img></div>
        <div style={{width:'60%'}}>
          <div>Colleges for {course.name}</div>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of College</th>
                <th>District Name</th>
                <th>State</th>
                <th>NAC Approved</th>
              </tr>
            </thead>
            <tbody>
              {course.collegeOfferCourse?.map((data, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{data.collegeName}</td>
                  <td>{data.district}</td>
                  <td>{data.state}</td>
                  <td>{data.nac ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='courses_about_course_container'>
        <div style={{width:'100%'}}>
          <div>Suggested Courses</div>
          <div className='courses__about__suggested__btn'>
              {course.suggestionOfCourse?.map((data, index) => (
                <button key={index}>{data}</button>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesAboutPage
