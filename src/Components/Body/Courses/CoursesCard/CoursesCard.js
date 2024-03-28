import React from 'react'
import './CoursesCard.css'

const CoursesCard = ({img, desc}) => {
  return (
    <div className='coursesCard__container'>
        <img src={img}></img>
        <spna className="coursesCard__desc">{desc}</spna>
    </div>
  )
}

export default CoursesCard
