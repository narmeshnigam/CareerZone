import React from 'react'
import './HomeCrouse.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeCrouse.css';

import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const HomeCrousel = () => {
  return (
    <div className='Swipper'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2000,
            enabled: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://media.istockphoto.com/id/1209030407/photo/campanile-inside-of-the-trinity-college-campus-in-dublin-ireland.jpg?s=1024x1024&w=is&k=20&c=elsc35xlNLa7CtFiFlr9lTdsj_vcLHZ26PuxkB_ibOk='></img></SwiperSlide>
        <SwiperSlide><img src='https://media.istockphoto.com/id/1273273094/photo/khalsa-college-is-a-historic-educational-institution-in-the-northern-indian-city-of-amritsar.jpg?s=1024x1024&w=is&k=20&c=YdF7r2VJ6N7Yni2j5N4URlfUg71tPvCFCZInRZRFpVo=' ></img></SwiperSlide>
        <SwiperSlide><img src='https://media.istockphoto.com/id/623741248/photo/university-in-hanover.webp?s=1024x1024&w=is&k=20&c=tWFB5EaBV-YUMNy_wHqrdBHe7qdrZy0YbC4KQDkpbRk=' ></img></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeCrousel
