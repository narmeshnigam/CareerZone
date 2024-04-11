import React, { useState } from 'react'
import './Courses.css'
import CoursesCard from './CoursesCard/CoursesCard';

const Courses = () => {
    const [medical, setMedical] = useState(false);

    const SetMedicalState = () => {
        if (medical == false)
            setMedical(true);
        else
            setMedical(false);
    }

    return (
        <div className='coursespg__container'>
            <div className='coursespg__container__heading__container'>
                <div className='coursespg__container__heading'>Courses</div>
            </div>

            <div className='coursespg__container__having__tables'>

                <div className='coursespg__medical__courses__table__container'>
                    <div className='coursespg__medical__courses__table__container__heading' style={{borderRadius: medical === true ? '10px 10px 0 0' : '10px'}} onClick={() => SetMedicalState()}>
                        <div>Medical Courses</div>
                        <img style={{ transform: medical === true && 'rotate(180deg)' }} src='./dropdownarrow.png' ></img>
                    </div>
                    <div className='coursespg__medical__courses__table__withImg' style={{display: medical === false ? 'none' : 'block' }}>
                        <div className='coursespg__medical__courses__table'>
                            <div className='coursespg__medical__courses__card__container__withHeading'>
                                <div className='coursespg__medical__courses__card__container__heading'>Medical Courses After Class 10:-</div>
                                <div className='courses__card__container__main' > 
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                </div>
                                <div className='coursespg__medical__courses__card__container__heading'>Medical Courses After Class 12:-</div>
                                <div className='courses__card__container__main' > 
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coursespg__medical__courses__table__container '>
                    <div className='coursespg__medical__courses__table__container__heading Engineering' style={{borderRadius: medical === true ? '10px 10px 0 0' : '10px'}} onClick={() => SetMedicalState()}>
                        <div>Engineering Courses</div>
                        <img style={{ transform: medical === true && 'rotate(180deg)' }} src='./dropdownarrow.png' ></img>
                    </div>
                    <div className='coursespg__medical__courses__table__withImg ' style={{display: medical === false ? 'none' : 'block' }}>
                        <div className='coursespg__medical__courses__table Engineering'>
                            <div className='coursespg__medical__courses__card__container__withHeading'>
                                <div className='coursespg__medical__courses__card__container__heading'>Medical Courses After Class 10:-</div>
                                <div className='courses__card__container__main' > 
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                </div>
                                <div className='coursespg__medical__courses__card__container__heading'>Medical Courses After Class 12:-</div>
                                <div className='courses__card__container__main' > 
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                    <CoursesCard />
                                </div>


                                
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Courses
