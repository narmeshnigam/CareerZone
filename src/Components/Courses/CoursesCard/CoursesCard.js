import React from 'react'
import './CoursesCard.css'

const CoursesCard = ({name, img}) => {
  return (
    <div className='CoursesCard__container'>
        <div className='CoursesCard__img'><img src={img}></img></div>
        <div className='CoursesCard__des'>{name}</div>
      
    </div>
  )
}

export default CoursesCard
