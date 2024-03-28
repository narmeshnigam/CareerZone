import React from 'react'
import './Courses.css'
import CoursesCard from './CoursesCard/CoursesCard'

const Courses = () => {
  return (
    <div className='courses__container'>
      <div className='courses__heading'>WE ARE THE ASIA'S LEADING ADMISSION CONSULTANT IN INDIA AND ABROAD. !</div>
      <div>
        <div className='courses__card'>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/B.tech.png'} desc={'B.tech /B.E'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/student.png'} desc={'Diploma'}/>
            <CoursesCard img={'	https://thecareerzone.co.in/img/icon/technician.png'} desc={'M.tech'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/automation.png'} desc={'Polytechnic'}/>
        </div>
        <div className='courses__card'>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/doctorss.png'} desc={'MBBS'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/dentist.png'} desc={'BDS'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/nurse.png'} desc={'Bsc Nursing'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/dentistts.png'} desc={'BAMS'}/>
        </div>
        <div className='courses__card'>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/medicine.png'} desc={'B.Pharma'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/ayurvedic.png'} desc={'BPT'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/law.png'} desc={'BALLB'}/>
            <CoursesCard img={'https://thecareerzone.co.in/img/icon/graduation.png'} desc={'MBA'}/>
        </div>
      </div>
    </div>
  )
}

export default Courses
