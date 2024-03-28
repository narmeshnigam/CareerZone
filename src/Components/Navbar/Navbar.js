import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const menubar = () => {
    console.log("open");
    setIsSidebar(true);
  };
  const handleback = () => {
    setIsSidebar(false);
  };

  return (
    <div className="nav__conatiner">
      <div className="top__nav">
        <div className="nav__logo">
          <img src="https://thecareerzone.co.in/img/logo-wide.png"></img>
        </div>
        <div className="nav__links">
          <span>Home</span>
          <span>About</span>
          <span>Service</span>
          <span>Courses</span>
          <span>Gallery</span>
          <span>Contact</span>
        </div>
        <div className="nav__socials">
          <img src="./facebook.png"></img>
          <img src="./whatsapp.png"></img>
          <img src="./youtube.png"></img>
          <img src="./instagram.png"></img>
        </div>
        <div className="nav__top__menu__bar">
          <svg
            onClick={() => menubar()}
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-deep"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </div>
      </div>
      <Sidebar value={isSidebar} onback={() => handleback()} />
    </div>
  );
};

export default Navbar;
