import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Navbar.css";
import { Link} from "react-router-dom";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const menubar = () => {
    console.log("open");
    setIsSidebar(true);
  };
  const handleback = () => {
    setIsSidebar(false);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="nav__conatiner">
      <div className="top__nav">
        <div className="nav__logo">
          <Link to="/"><img src="https://thecareerzone.co.in/img/logo-wide.png" alt="" /></Link>
        </div>
        <div className="nav__links">
          <Link style={{textDecoration: "none"}} to="/"><span  onClick={() => scrollTop()}>Home</span></Link>
          <Link style={{textDecoration: "none"}} to="/aboutUs"><span onClick={() => scrollTop()}>About</span></Link>
          <Link style={{textDecoration: "none"}} to="/services"><span onClick={() => scrollTop()}>Services</span></Link>
          <Link style={{textDecoration: "none"}} to="/courses"><span onClick={() => scrollTop()}>Courses</span></Link>
          <Link style={{textDecoration: "none"}} to="/gallery"><span onClick={() => scrollTop()}>Gallery</span></Link>
          <Link style={{textDecoration: "none"}} to="/contact"><span onClick={() => scrollTop()}>Contact</span></Link>
        </div>
        <div className="nav__socials">
          <img src="./facebook.png" alt=""></img>
          <img src="./whatsapp.png" alt=""></img>
          <img src="./youtube.png" alt=""></img>
          <img src="./instagram.png" alt=""></img>
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
