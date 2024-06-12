import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="services__container">
      <div className="services__top__img">
        <div>Our Services</div>
      </div>
      <div className="services__holder">
        <div className="education__service__container">
          <img src="./scholarship.png" style={{ height: "100px" }} />
          <div className="education__ser__content">
            <div className="edu__ser__heading">EDUCATIONAL SERVICES</div>
            <div className="edu__ser__des">
              The Career Zone started in 2001 to help students find the right
              schools. Today, they are number one in educational consulting and
              work with many colleges and universities in India (including Uttar
              Pradesh, Maharashtra, Bangalore, Orissa, Madhya Pradesh,
              Rajasthan, Tamil Nadu) and even overseas.
            </div>
            <Link to={"/services/edu_service"}>
              <div className="edu__btn" onClick={() => scrollTop()}>
                Read More
              </div>
            </Link>
          </div>
        </div>
        <div className="education__service__container">
          <img src="./credit.png" style={{ height: "100px" }} />
          <div className="education__ser__content">
            <div className="edu__ser__heading">STUDENT CREDIT CARD</div>
            <div className="edu__ser__des">
              The Bihar Student Credit Card Yojana, also called "MNSSBY Bihar
              Student Credit Card Scheme", is a program that started in October
              2016. This program helps students by giving them loans to pay for
              their higher education. If you applied for this program in 2021,
              you can now check the status of your application.
            </div>
            <Link to={"/services/stdCred_service"}>
              <div className="edu__btn" onClick={() => scrollTop()}>
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
