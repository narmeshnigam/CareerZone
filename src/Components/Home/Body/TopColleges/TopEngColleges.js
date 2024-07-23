import React from "react";
import "../TopMedicalColleges/TopMedicalColleges.css";
import MedicalCollegesCard from "../TopMedicalColleges/MedicalCollegesCard/MedicalCollegesCard";

const TopEngColleges = () => {
  return (
    <div className="topMed__container">
      <div className="topMed__heading topEng">
        TOP <span style={{ color: "#666666" }}>ENGINEERING</span> COLLEGES
      </div>
      <div className="topMed__card">
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/BHARATI-VIDYAPEETH-DEEMED-UNIVERSITY.jpg"
          }
          name={"BHARATI VIDYAPEETH DEEMED UNIVERSITY"}
          location={"PUNE, MAHARASHTRA"}
          time={"ESTD 1964"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/MIT-WORLD-PEACE-UNIVERSITY.jpg"
          }
          name={"Maharashtra Institute Of Technology(MIT)"}
          location={"PUNE, MAHARASHTRA"}
          time={"ESTD 1983"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/united-group-of-institiution-6-admission-provider-index.jpg"
          }
          name={"UNITED GROUP OF INSTITUTIONS"}
          location={"GREATER NOIDA"}
          time={"ESTD 2005"}
          loading="lazy"
        />
        <MedicalCollegesCard
          img={
            "https://thecareerzone.co.in/img/gallery/GALGOTIAS-COLLEGE-OF-ENGINEERING-AND-TECHNOLOGY-.jpg"
          }
          name={"GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY"}
          location={"GREATER NOIDA, U.P"}
          time={"ESTD 1999"}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TopEngColleges;
