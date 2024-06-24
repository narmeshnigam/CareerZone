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
        <div className="service__item">
          <img
            src="./scholarship.png"
            alt="Scholarship"
            className="service__image"
          />
          <div className="service__content">
            <div className="service__heading">EDUCATIONAL SERVICES</div>
            <div className="service__description">
              The Career Zone started in 2001 to help students find the right
              schools. Today, they are number one in educational consulting and
              work with many colleges and universities in India (including Uttar
              Pradesh, Maharashtra, Bangalore, Orissa, Madhya Pradesh,
              Rajasthan, Tamil Nadu) and even overseas.
            </div>
            <Link to={"/services/edu_service"}>
              <div className="service__btn" onClick={() => scrollTop()}>
                Read More
              </div>
            </Link>
          </div>
        </div>
        <br />
        <div className="service__item">
          <img
            src="./credit.png"
            alt="Credit Card"
            className="service__image"
          />
          <div className="service__content">
            <div className="service__heading">STUDENT CREDIT CARD</div>
            <div className="service__description">
              The Bihar Student Credit Card Yojana, also called "MNSSBY Bihar
              Student Credit Card Scheme", is a program that started in October
              2016. This program helps students by giving them loans to pay for
              their higher education. If you applied for this program in 2021,
              you can now check the status of your application.
            </div>
            <Link to={"/services/stdCred_service"}>
              <div className="service__btn" onClick={() => scrollTop()}>
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
