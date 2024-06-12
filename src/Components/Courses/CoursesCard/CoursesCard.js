import React from "react";
import "./CoursesCard.css";

const CoursesCard = ({ name, img }) => {
  return (
    <div className="CoursesCard__container">
      <div className="CoursesCard__img">
        <img src={img} alt={name} />
        <div className="CoursesCard__name-overlay">{name}</div>
      </div>
    </div>
  );
};

export default CoursesCard;
