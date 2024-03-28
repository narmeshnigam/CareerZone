import React from 'react'
import './BhiarCreditCard.css'

const BhiarCreditCard = () => {
  return (
    <div className='creditcard__container'>
        <div className='creditcard__left__container'>
            <div className='creditcard__left__container__heading'>YOU WILL GET ADMISSION THROUGH BIHAR STUDENT CREDIT CARD</div>
            <div className='creditcard__left__container__subheading'>Education Loan Scheme For Pursuing Higher Education For Students Of Bihar</div>
            <div><button>बिहार स्‍टूडेंट क्रेडिट कार्ड योजना की संशोधित मार्गदर्शिका लागू करने के संबंध में |</button></div>
            <div><button>बिहार स्टूडेंट क्रेडिट कार्ड योजना</button></div>
            <div><button className='bhiar__apply__now__btn' style={{backgroundColor:'#df200be2', fontFamily: 'Poppins'}}>Apply Now</button></div>
        </div>
        <div className='creditcard__right__container'>
            <img src='https://thecareerzone.co.in/images/crid.jpg'></img>
        </div>
    </div>
  )
}

export default BhiarCreditCard
