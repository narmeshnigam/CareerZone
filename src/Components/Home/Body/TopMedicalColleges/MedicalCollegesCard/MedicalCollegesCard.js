import React from "react";
import "./MedicalCollegesCard.css";

const MedicalCollegesCard = ({img, name, location, time}) => {
  return (
    <div className="medicalCollegeCard__container">
      <div>
        <img style={{width: '17rem',borderRadius:'20px 20px 0px 0px'}} src={img}></img>
      </div>
      <div className="medicalCollegeCard__heading">
        {name}
      </div>
      <div className="medicalCollegeCard__loctime">
        <img
          style={{height: "1.5rem", marginRight: "0.4rem" }}
          src="./map-pin.png"
        ></img>
        <div>{location}</div>
      </div>
      <div className="medicalCollegeCard__loctime">
        <img
          style={{ height: "1.5rem", marginRight: "0.4rem" }}
          src="./calendar-event.png"
        ></img>
        <div>{time}</div>
      </div>
      <div className="medicalCollegeCard__button">
        <button>Know more</button>
      </div>
    </div>
  );
};

export default MedicalCollegesCard;
