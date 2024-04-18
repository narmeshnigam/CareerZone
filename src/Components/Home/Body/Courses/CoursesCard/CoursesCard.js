import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CoursesCard.css'

const CoursesCard = ({img, desc}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses')
  }


  return (
    <div className='coursesCard__container' onClick={handleClick}>
        <img src={img}></img>
        <spna className="coursesCard__desc">{desc}</spna>
    </div>
    
  )
}

export default CoursesCard
