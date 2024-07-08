import React from "react";
import "./Sidebar.css";
import { Link, To } from "react-router-dom";

const Sidebar = ({ value, onback = () => {} }) => {
  return (
    <div
      className="sid__container"
      style={{ display: value ? "block" : "none" }}
    >
      <div className="sid_options">
        <div className="sid__back__option" onClick={() => onback()}>
          <img src="./back.png" alt="" />
          <span>Back</span>
        </div>
      </div>

      <div className="sid_margin"></div>
      <div className="sid_bottom">
        <div className="sid_bottom_heading">Follow us On</div>
        <hr className="line_break" />
        <div className="sid_bottom_socials">
          <Link to="https://twitter.com/THECAREERZONE3?t=1qAsCc-z4B8FE3fYlxOaIA&s=09">
            <img
              src="./twitter.png"
              style={{ height: "20px" }}
              title="Twitter"
            />
          </Link>
          <Link href="https://www.facebook.com/thecareerzone.co.in">
            <img style={{ height: "20px" }} src="/facebook.png" alt="icon" />
          </Link>
          <Link
            href="https://www.instagram.com/the_careerzone/"
            target="_blank"
          >
            <img src="/instagram.png" style={{ height: "20px" }} alt="icon" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=919304365563"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ height: "20px" }} src="/whatsapp.png" alt="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
