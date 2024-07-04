import React from "react";
import "./BhiarCreditCard.css";
import { Link, useNavigate } from "react-router-dom";

const BhiarCreditCard = () => {
  const handleApplyNow = () => {
    window.location.href = "/Popup";
  };
  const handleClick = () => {
    window.location.href = "/services/stdCred_service";
  };

  return (
    <div className="creditcard__container">
      <div className="creditcard__left__container">
        <div className="creditcard__left__container__heading">
          YOU WILL GET ADMISSION THROUGH BIHAR STUDENT CREDIT CARD
        </div>
        <div className="creditcard__left__container__subheading">
          Education Loan Scheme For Pursuing Higher Education For Students Of
          Bihar
        </div>
        <div style={{ fontSize: "1.3rem" }}>
          बिहार स्‍टूडेंट क्रेडिट कार्ड योजना की संशोधित मार्गदर्शिका लागू करने
          के संबंध में |
        </div>
        <div style={{ display: "inline-block", marginRight: "5rem" }}>
          <button onClick={handleClick}>
            बिहार स्टूडेंट क्रेडिट कार्ड योजना
          </button>
        </div>
        <div style={{ display: "inline-block" }}>
          <button
            className="bhiar__apply__now__btn"
            style={{ backgroundColor: "#df200be2", fontFamily: "Urbanist" }}
            onClick={handleApplyNow}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="creditcard__right__container">
        <img src="./credit.png" loading="lazy"></img>
      </div>
    </div>
  );
};

export default BhiarCreditCard;
