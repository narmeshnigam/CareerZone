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
            desc={"B.tech /B.E"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/student.png"}
            desc={"Diploma"}
            loading="lazy"
          />
          <CoursesCard
            img={"	https://thecareerzone.co.in/img/icon/technician.png"}
            desc={"M.tech"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/automation.png"}
            desc={"Polytechnic"}
            loading="lazy"
          />
        </div>
        <div className="courses__card">
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/doctorss.png"}
            desc={"MBBS"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/dentist.png"}
            desc={"BDS"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/nurse.png"}
            desc={"Bsc Nursing"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/dentistts.png"}
            desc={"BAMS"}
            loading="lazy"
          />
        </div>
        <div className="courses__card">
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/medicine.png"}
            desc={"B.Pharma"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/ayurvedic.png"}
            desc={"BPT"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/law.png"}
            desc={"BALLB"}
            loading="lazy"
          />
          <CoursesCard
            img={"https://thecareerzone.co.in/img/icon/graduation.png"}
            desc={"MBA"}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
