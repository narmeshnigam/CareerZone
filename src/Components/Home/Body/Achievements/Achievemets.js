import React from "react";
import "./Achievements.css";
import AchievementsPoints from "./AchievementsPoints/AchievementsPoints";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Achievemets = () => {
  const RedirectContact = () => {
    window.location.href = "/contact";
  };
  return (
    <div className="achiv__container">
      <div className="achiv__left__container">
        <div className="achiv__left__container__heading">OUR ACHIEVEMENTS</div>
        <div className="achiv__left__container__desc">
          Since our humble beginning in 2001, The Career Zone has been
          constantly providing quality and professional guidance to students.
          With our dedicated approach, we have been able to win the confidence
          of students who have approached us to fulfil their educational goals.
          This is evident form the fact that majority of students come to us by
          reference. We strive to provide the best possible service to our
          students. The following achievements are the hallmark of our success:
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <AchievementsPoints
            desc={
              "Direct Representation of Top Ranked 500+ Colleges and Universities."
            }
          />
          <AchievementsPoints
            desc={"100 % student admissions in various institutions."}
          />
          <AchievementsPoints
            desc={
              "Successful processing of Financial Aid / Scholarships Applications."
            }
          />
          <AchievementsPoints
            desc={"95 % success rate in providing admission."}
          />
        </div>
        <div className="achiv__left__container__buttons">
          <button
            style={{ backgroundColor: "#107F1E", color: "#ffff" }}
            onClick={RedirectContact}
          >
            Call Now
          </button>
          <button
            style={{ backgroundColor: "#df200be2", color: "#ffff" }}
            onClick={RedirectContact}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="achiv__right__container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://thecareerzone.co.in/images/gallery/2.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://thecareerzone.co.in/images/gallery/3.jpg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://thecareerzone.co.in/images/gallery/4.jpg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Achievemets;
