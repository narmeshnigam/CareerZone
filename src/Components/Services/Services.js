import React from 'react'
import "./Services.css"
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__top__img'>
        <div>Our Services</div>
      </div>
      <div className='services__holder'>
        <div className='education__service__container'>
            <svg fill="#4587EF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 210 256" enable-background="new 0 0 210 256" xmlSpace="preserve" stroke="#4587EF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M174.55,144.5L174.55,144.5c-1.4-4-5-6.5-9.2-6.5H159V23c0-11.708-9.292-21-21-21H25C12.57,2,2,12.57,2,25v183 c0,11.9,10.95,22,22.75,22l114.213,0c1.207,0,2.27,0.984,2.18,2.188c-0.095,1.266-1.153,1.812-2.393,1.812h-45.5L128,254h80 L174.55,144.5z M82.05,220.2c-3.199,0-5.599-2.399-5.6-5.598c-0.001-3.045,2.557-5.602,5.602-5.602 c3.199,0.001,5.598,2.401,5.598,5.6C87.55,217.8,85.25,220.2,82.05,220.2z M144,138h-19.65c-5.3,0-9.8,4.7-9.8,10l0,0 c0,5.3,4.5,10,9.8,10h19.8v42H18V31h126V138z M80.892,97.987l-1.733-0.66l-28.016-10.48v25.664c0,5.529,13.286,10.026,29.707,10.026 s29.707-4.497,29.707-10.026V86.847l-27.933,10.48L80.892,97.987z M41.2,77.811v31.894c1.98,0.908,3.342,2.929,3.342,5.281v14.028 H32.989v-14.028c0-2.311,1.362-4.332,3.301-5.24V75.995l-8.252-3.095l52.854-19.805l52.772,19.805L80.892,92.706L41.2,77.811z"></path> </g></svg>
            <div className='education__ser__content'>
                <div className='edu__ser__heading'>EDUCATIONAL SERVICES</div>
                <div className='edu__ser__des'>The Career Zone was established in 2001 with the aim of providing quality guidance to students who intend to study. </div>
                <Link to={'/services/edu_service'}><button>Read More</button></Link>
            </div>
        </div>
        <div className='education__service__container'>
            <svg fill="#4587EF" width="200px" height="200px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>credit-card</title> <path d="M0 26.016q0 0.832 0.576 1.408t1.44 0.576h28q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-28q-0.832 0-1.44 0.608t-0.576 1.408v20zM2.016 26.016v-14.016h28v14.016h-28zM2.016 8v-1.984h28v1.984h-28zM4 24h4v-1.984h-4v1.984zM4 20h6.016v-5.984h-6.016v5.984zM10.016 24h4v-1.984h-4v1.984zM16 24h4v-1.984h-4v1.984zM22.016 24h1.984v-1.984h-1.984v1.984zM26.016 24h1.984v-1.984h-1.984v1.984z"></path> </g></svg>
            <div className='education__ser__content'>
                <div className='edu__ser__heading'>STUDENT CREDIT CARD</div>
                <div className='edu__ser__des'>Bihar Student Credit Card Yojana 2021: Candidates can check their BSSC application status now.</div>
                <Link to={'/services/stdCred_service'}><button>Read More</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
