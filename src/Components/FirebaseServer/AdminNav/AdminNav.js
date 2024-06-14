import React from "react";
import { Link, To, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./adminNav.css";
const auth = getAuth();

const AdminNav = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("Log out successfully");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div
      className="nav__conatiner"
      style={{ width: "100%", position: "static" }}
    >
      <div className="top__nav">
        <div className="nav__logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              fill="black"
              class="bi bi-house"
              viewBox="0 0 16 16"
              margin="10px"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </Link>
        </div>
        <div className="nav__links">
          <Link style={{ textDecoration: "none" }} to="/admin/homecrousel">
            <span onClick={() => scrollTop()}>HomeCrousel</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/user">
            <span onClick={() => scrollTop()}>User</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/notification">
            <span onClick={() => scrollTop()}>Notification</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/courses">
            <span onClick={() => scrollTop()}>Courses</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/collegedetails">
            <span onClick={() => scrollTop()}>College Details</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/gallery">
            <span onClick={() => scrollTop()}>Gallery</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/admin/contact">
            <span onClick={() => scrollTop()}>Contact</span>
          </Link>
          <span onClick={() => logOut()}>Log Out</span>
        </div>
        <div className="nav__top__menu__bar">
          <svg
            // onClick={() => menubar()}
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
      {/* <Sidebar value={isSidebar} onback={() => handleback()} /> */}
    </div>
  );
};

export default AdminNav;
