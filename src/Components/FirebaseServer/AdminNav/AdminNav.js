import React from 'react'
import { Link, To } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth();

const AdminNav = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0);
      }

    const logOut = () => {
    signOut(auth).then(() => {
        alert('Log out successfully')
        }).catch((error) => {
        alert(error);
        });
    }
  return (
    <div className="nav__conatiner" style={{position:'static'}}>
        <div className="top__nav">
        <div className="nav__logo">
            <Link to="/"><img src="https://thecareerzone.co.in/img/logo-wide.png"></img></Link>
        </div>
        <div className="nav__links">
            <Link style={{textDecoration: "none"}} to="/admin/homecrousel"><span  onClick={() => scrollTop()}>HomeCrousel</span></Link>
            <Link style={{textDecoration: "none"}} to="/admin/notification"><span onClick={() => scrollTop()}>Notification</span></Link>
            <span onClick={() => logOut()}>Log Out</span>
            {/* <Link style={{textDecoration: "none"}} to="/courses"><span onClick={() => scrollTop()}>Courses</span></Link>
            <Link style={{textDecoration: "none"}} to="/gallery"><span onClick={() => scrollTop()}>Gallery</span></Link>
            <Link style={{textDecoration: "none"}} to="/contact"><span onClick={() => scrollTop()}>Contact</span></Link> */}
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
  )
}

export default AdminNav
