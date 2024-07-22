import React from "react";
import "./TopMedicalColleges.css";
import MedicalCollegesCard from "./MedicalCollegesCard/MedicalCollegesCard";

const TopMedicalColleges = () => {
  return (
    <div className="topMed__container">
      <div className="topMed__heading">
        TOP <span style={{ color: "#4587EF" }}>MEDICAL</span> COLLEGES
      </div>
      <div className="topMed__card">
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/Christian-Medical-College-Vellore.jpg" 
          }
          name={"CHRISTIAN MEDICAL COLLEGE"}
          location={"VELLORE, TAMIL NADU"}
          time={"ESTD 1918"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/ARMED-FORCES-MEDICAL-COLLEGE.jpg"
          }
          name={"ARMED FORCES MEDICAL COLLEGE"}
          location={"PUNE, MAHARASHTRA"}
          time={"ESTD 1984"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={"https://thecareerzone.co.in/img/gallery/kmc-campus.jpg"}
          name={"KASTURBA MEDICAL COLLEGE"}
          location={"MANGALORE, KARNATAKA"}
          time={"ESTD 1955"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={"https://thecareerzone.co.in/img/gallery/maulana-index.jpg"}
          name={"KATIHAR MEDICAL COLLEGE"}
          location={"NEW DELHI, DELHI NCR"}
          time={"ESTD 1959"}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TopMedicalColleges;
