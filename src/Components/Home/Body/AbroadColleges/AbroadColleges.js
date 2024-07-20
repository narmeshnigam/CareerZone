import React from "react";
import "./AbroadColleges.css";

const AbroadColleges = () => {
  const handleContact = () => {
    window.location.href = "/PopupHome";
  };

  return (
    <div className="abroad__container">
      <div className="abroad__left__container">
        <img
          src="https://38.media.tumblr.com/1766cb2b2468185bfe41ddd2f1819b2d/tumblr_n9fvbcXVVf1qcung4o1_1280.gif"
          loading="lazy"
        ></img>
      </div>
      <div className="abroad__right__container">
        <div className="abroad__right__container__heading">
          COUNTRIES WE PROVIDE SERVICE IN{" "}
          <span style={{ color: "#107F1E" }}>Abroad !</span>
        </div>
        <div className="abroad__right__container__desc">
          With new medical colleges coming up in neighbouring countries, the
          process to find a seat is much easier - some of the popular choices
          for Indian students, Students wanting to apply for MBBS abroad would
          be required to have an aggregate percentage of at least 50%
        </div>
        <div
          style={{ fontSize: "1.5rem", color: "#df200be2", fontWeight: "600" }}
        >
          MBBS in neighbouring countries –
        </div>
        <div className="abroad__right__container__countries">
          <div>
            <img
              src="https://thecareerzone.co.in/img/abroad/bangladesh.png"
              loading="lazy"
            ></img>
            <img
              src="https://thecareerzone.co.in/img/abroad/nepal.png"
              loading="lazy"
            ></img>
            <img
              src="https://thecareerzone.co.in/img/abroad/kyrgyzstan.png"
              loading="lazy"
            ></img>
            <img
              src="https://thecareerzone.co.in/img/abroad/philippines.png"
              loading="lazy"
            ></img>
            <img
              src="https://thecareerzone.co.in/img/abroad/russia.png"
              loading="lazy"
            ></img>
          </div>
        </div>
        <button onClick={handleContact}>Contact Now</button>
      </div>
    </div>
  );
};

export default AbroadColleges;
