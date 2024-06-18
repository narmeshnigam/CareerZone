import React, { useEffect, useState } from "react";
import db from "../../../firebase";
import { useParams } from "react-router-dom";
import "./CoursesAboutPage.css";

const CoursesAboutPage = () => {
  const { name } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("courses")
        .where("name", "==", name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCourse(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };

    fetchImages();
  }, [name]);

  return (
    <div className="courses_about_container">
      <div
        className="courses_about_banner_img"
        style={{ backgroundImage: `url(${course.backgroundImage})` }}
      >
        <div className="text-container">{course.name}</div>
      </div>
      <div className="courses_about_course_container">
        <div>
          <div>About</div>
          {course.aboutText}
        </div>
        <div>
          <img src="https://assets.thehansindia.com/h-upload/2022/06/07/1296632-education.webp"></img>
        </div>
      </div>
      <div className="courses_about_course_container">
        <div>
          <img src="https://th.bing.com/th/id/R.bc3550ab1c6e4d134c042968dd9ba80c?rik=9YMC%2f98QuwxpQQ&riu=http%3a%2f%2fcanada1.national.edu%2fwp-content%2fuploads%2f2018%2f07%2fiStock-639710652-1080x675.jpg&ehk=vSa5dN4YxH1KeYozTcE48xc9nfBfVUdKT1hJINHOE5k%3d&risl=&pid=ImgRaw&r=0"></img>
        </div>
        <div>
          <div>Eligibility Criteria</div>
          <div className="courses_about_eli_points">
            <ul>
              {course.eligibilityText?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="courses_about_course_container">
        <div>
          <div>Scope of {course.name}</div>
          <div className="courses_about_eli_points">
            <ul>
              {course.scopeText?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.yEYJQYu0PS2Aq5-YpjR3QQAAAA?rs=1&pid=ImgDetMain"></img>
        </div>
      </div>
      <div className="courses_about_course_container">
        <div style={{ width: "50%" }}>
          <img src="https://static.vecteezy.com/system/resources/previews/003/098/568/original/young-girl-online-studying-at-home-free-vector.jpg"></img>
        </div>
        <div style={{ width: "60%", margin: "10px" }}>
          <div>Colleges for {course.name}</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: "#fefbff",
                  }}
                >
                  S.No
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: "#fefbff",
                  }}
                >
                  Name of College
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: "#fefbff",
                  }}
                >
                  District Name
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: "#fefbff",
                  }}
                >
                  State
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                  }}
                >
                  NAC Approved
                </th>
              </tr>
            </thead>
            <tbody>
              {course.collegeOfferCourse?.map((data, i) => (
                <tr key={i}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {i + 1}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.collegeName}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.district}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.state}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.nac ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="courses_about_course_container">
        <div style={{ width: "60%" }}>
          <div>Suggested Courses</div>
          <div className="courses__about__suggested__btn">
            {course.suggestionOfCourse?.map((data, index) => (
              <button key={index}>{data}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAboutPage;
