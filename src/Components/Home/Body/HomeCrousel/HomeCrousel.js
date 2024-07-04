import React, { useEffect, useState } from "react";
import db from "../../../../firebase";
import "./HomeCrouse.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeCrouse.css";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeCrousel = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      db.collection("topCarousel_db").onSnapshot((snapshot) => {
        setImgUrls(
          snapshot.docs.map((doc) => ({
            url: doc.data().photoUrl,
          }))
        );
      });
    };

    fetchImages();
  }, []);

  return (
    <div className="Swipper">
      <Swiper
        slidesPerView={1}
        speed={1000}
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
        {imgUrls.map((urls, i) => (
          <SwiperSlide key={i}>
            <img src={urls.url} alt="slide_image" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCrousel;
