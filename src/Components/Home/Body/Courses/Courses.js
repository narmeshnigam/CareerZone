import React from "react";
import "./Courses.css";
import CoursesCard from "./CoursesCard/CoursesCard";

const Courses = () => {
  return (
    <div className="courses__container">
      <div className="courses__heading">AVAILABLE COURSES</div>
      <div>
        <div className="courses__card">
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/B.tech.png"}
            name={"B.tech /B.E"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/student.png"}
            name={"Diploma"}
            loading="lazy"
          />
          <CoursesCard
            img={"	https://thecareerzone.co.in/img/icon/technician.png"}
            name={"M.tech"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/automation.png"}
            name={"Polytechnic"}
            loading="lazy"
          />
        </div>
        <div className="courses__card">
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/doctorss.png"}
            name={"MBBS"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/dentist.png"}
            name={"BDS"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/nurse.png"}
            name={"Bsc Nursing"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/dentistts.png"}
            name={"BAMS"}
            loading="lazy"
          />
        </div>
        <div className="courses__card">
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/medicine.png"}
            name={"B.Pharma"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/ayurvedic.png"}
            name={"BPT"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/law.png"}
            name={"BALLB"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/graduation.png"}
            name={"MBA"}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
