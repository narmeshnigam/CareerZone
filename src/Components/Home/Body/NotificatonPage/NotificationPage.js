import React from 'react'
import './Notification.css'

const NotificationPage = () => {
  return (
    <div className='noti__container'>
        <div className='noti__left__container'>
            <div className='noti__heading'>YOU WILL GET ADMISSION IN <span style={{color:'#4587EF'}}>TOP COLLEGES.</span></div>
            <div className='noti__about'>About us</div>
            <div className='noti__subheading'>About The Career Zone is a Leading Education consulatncy that can provide Top Course in India / Abraod Colleges for your career path.</div>
            <div>The Career Zone, one of India’s largest Career Counselling Consultants, is here to mentor the students towards their educational goals and drive them to create a better world. Not always can a perfect college or stream be the best for every student.</div>
            <div className='noti__options'>
                <div className='noti__options__left'>
                    <div style={{backgroundColor:"#9aa0a732", borderRadius:'0.7rem'}}>- MBBS</div>
                    <div>- BMAS</div>
                    <div style={{backgroundColor:"#9aa0a732", borderRadius:'0.7rem'}}>- ENGINEERING</div>
                    <div>- BUSINESS MANAGEMENT & COMMERCE</div>
                </div>
                <div className='noti__options__left'>
                    <div style={{backgroundColor:"#9aa0a732", borderRadius:'0.7rem'}}>- LAW</div>
                    <div>- EDUCATION & TEACHING</div>
                    <div style={{backgroundColor:"#9aa0a732", borderRadius:'0.7rem'}}>- HOSPITALITY & TOURISM</div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className='noti__right__container'>
            <div className='noti__right__heading'>LATEST NOTIFICATION</div>
            {/* <div>
                <div>notification 1</div>
                <div>notification 2</div>
                <div>notification 3</div>
                <div>notification 4</div>
                <div>notification 5</div>
                <div>notification 6</div> */}
            {/* </div> */}
        </div>
      
    </div>
  )
}

export default NotificationPage