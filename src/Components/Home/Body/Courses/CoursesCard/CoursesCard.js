

import React from 'react'
import { Link } from 'react-router-dom'
import './CoursesCard.css'

const CoursesCard = ({ img, name }) => {
  return (
    <Link to={`/courses/${name}`} style={{ textDecoration: 'none' }}>
      <div className='coursesCard__container'>
        <img src={img} alt={name} />
        <span className="coursesCard__desc">{name}</span>
      </div>
    </Link>
  )
}

export default CoursesCard;

