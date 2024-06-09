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
              The Career Zone was established in 2001 with the aim of providing
              quality guidance to students who intend to study.{" "}
            </div>
            <Link to={"/services/edu_service"}>
              <button onClick={() => scrollTop()}>Read More</button>
            </Link>
          </div>
        </div>
        <div className="education__service__container">
          <img src="./credit.png" style={{ height: "100px" }} />
          <div className="education__ser__content">
            <div className="edu__ser__heading">STUDENT CREDIT CARD</div>
            <div className="edu__ser__des">
              Bihar Student Credit Card Yojana 2021: Candidates can check their
              BSSC application status now.
            </div>
            <Link to={"/services/stdCred_service"}>
              <button onClick={() => scrollTop()}>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
