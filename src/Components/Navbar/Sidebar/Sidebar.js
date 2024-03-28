import React from 'react'
import "./Sidebar.css"

const Sidebar = ({
  value,
  onback = () => {}
}) => {

  return (
    <div className='sid__container' style={{display: value ? "block" : "none" }}>
        <div className='sid_options'>
            <div className='sid__back__option' onClick={() => onback()}><img src='./back.png' alt=''/><span>Back</span></div>
            <hr className='line_break'/>
            <div className='options' onClick={() => onback()}>Home</div><hr className='line_break'/>
            <a href='/#courses' style={{textDecoration: "none"}} onClick={() => onback()}><div className='options'>About</div><hr className='line_break'/></a>
            <a href='/admission' style={{textDecoration: "none"}} onClick={() => onback()}><div className='options'>Service</div><hr className='line_break'/></a>
            <a href="/notifications" style={{textDecoration: "none"}} onClick={() => onback()}><div className='options'>Courses</div><hr className='line_break'/></a>
            <a href='/about' style={{textDecoration: "none"}} onClick={() => onback()}><div className='options'>Gallery</div><hr className='line_break'/></a>
            <a href='/#contact' style={{textDecoration: "none"}} onClick={() => onback()}><div className='options'>Contact</div><hr className='line_break'/></a>
        </div>
        <div className='sid_margin'></div>
        <div className='sid_bottom'>
            <div className='sid_bottom_heading'>Follow us On</div>
            <hr className='line_break'/>
            <div className='sid_bottom_socials'>
                <a href="https://www.youtube.com/@KINEMATICSCLASSES24"><img src="/youtube.png" alt="icon" /></a>
                <a href="https://www.facebook.com/kinematicsclasses.page"><img src="/facebook.png" alt="icon" /></a>
                <a href="https://www.instagram.com/kinematicsclassespvtltd/" target='_blank'><img src="/instagram.png" alt="icon" /></a>
                <a href="https://wa.me/8527915213" target='_blank' rel="noreferrer"><img src="/whatsapp.png" alt="icon" /></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar