import React from 'react';
import './CoursesCard.css';

const CoursesCard = ({ name, img }) => {
  return (
    <div className='CoursesCard__scroll_container'>
      <div className='CoursesCard__container'>
        <div className='CoursesCard__img'><img src={img} alt={name} /></div>
        <div className='CoursesCard__des'>{name}</div>
      </div>
    </div>
  );
};

export default CoursesCard;