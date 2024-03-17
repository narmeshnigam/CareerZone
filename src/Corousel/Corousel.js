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
    'https://via.placeholder.com/400x200?text=Image+1',
    'https://via.placeholder.com/400x200?text=Image+2',
    'https://via.placeholder.com/400x200?text=Image+3',
  ];

  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
};

export default App;
