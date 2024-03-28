import React from 'react'
import './AbroadColleges.css'

const AbroadColleges = () => {
  return (
    <div className='abroad__container'>
      <div className='abroad__left__container'>
        <img src='https://media.istockphoto.com/id/545368188/photo/world-map-and-country-flags.jpg?s=1024x1024&w=is&k=20&c=NMo_fsng7CHdXcVufRMrjLj9TR-kMf7eePnhZ__qExg='></img>
      </div>
      <div className='abroad__right__container'>
        <div className='abroad__right__container__heading'>COUNTRIES WE PROVIDE SERVICE IN <span style={{color:"#107F1E"}}>Abroad !</span></div>
        <div className='abroad__right__container__desc'>With new medical colleges coming up in neighbouring countries, the process to find a seat is much easier - some of the popular choices for Indian students, Students wanting to apply for MBBS abroad would be required to have an aggregate percentage of at least 50%</div>
        <div style={{fontSize:'1.5rem', color:'#df200be2', fontWeight:'600'}}>MBBS in neighbouring countries –</div>
        <div className='abroad__right__container__countries'>
            <div>
                <img src='https://thecareerzone.co.in/img/abroad/bangladesh.png'></img>
                <img src='https://thecareerzone.co.in/img/abroad/nepal.png'></img>
                <img src='https://thecareerzone.co.in/img/abroad/kyrgyzstan.png'></img>
                <img src='https://thecareerzone.co.in/img/abroad/philippines.png'></img>
                <img src='https://thecareerzone.co.in/img/abroad/russia.png'></img>
            </div>
        </div>
        <button>Contact Now</button>
      </div>
    </div>
  )
}

export default AbroadColleges
