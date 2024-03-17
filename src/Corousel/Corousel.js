import React, { useState } from 'react';
import './Carousel.css'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="arrow_left">
        <ArrowLeft2 size="102" color="#FF8A65" onClick={goToPreviousSlide} />
      </div>

      <div className="arrow_right">
        <ArrowRight2 size="102" color="#FF8A65" onClick={goToNextSlide} />
      </div>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
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
