import React, { useState } from 'react';
import './Carousel.css'
import Home from '../HoverContent/Home'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [a,setA]=useState(false);
  const [b,setB]=useState(false);
  const [c,setC]=useState(false);
  const [d,setD]=useState(false);
  const [e,setE]=useState(false);
  console.log(a);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };
  setTimeout(()=>{
    goToNextSlide()

  },3000)

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };
  const acalled =()=>{
    console.log("acalled");
    setA(true);
    console.log(a)
  }
  const aremoved = () => {
    setA(false);
  }

  return (
    <>
    <div className="carousel">
       <div className="links">
            <span onMouseOver={()=>acalled()} onMouseOut = {() => aremoved()}>Home</span>
            <span>Courses</span>
            <span>Education</span>
            <span>d</span>
            <span>e</span>
            </div>
      <div className="arrow_left">
        <ArrowLeft2 size="82" color="#FF8A65" onClick={goToPreviousSlide} />
      </div>

      <div className="arrow_right">
        <ArrowRight2 size="82" color="#FF8A65" onClick={goToNextSlide} />
      </div>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
   
      {
      a&&<Home/>
    }
    </div>
    
    </>
  );
};

const App = () => {
  const images = [
    'https://jbgvs.org.in/asset/img/gallery/career.jpg',
    'https://t4.ftcdn.net/jpg/00/82/44/25/360_F_82442519_3dyKdM0EXzhBO027kDLkeJHuPLeplLlf.jpg',
    'https://media.foundit.in/career-advice/wp-content/uploads/2022/03/best-career-option-for-girls.jpg',
  ];

  return (
    <div className="App">
      
      <Carousel images={images} />
    </div>
  );
};

export default App;
