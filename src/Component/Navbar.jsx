import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../Images/Only_Logo.png";

export default function Navbar() {
  const [navIcon3, setnavIcon3] = useState(false);
  const [navIconUL, setnavIconUL] = useState("navbar__UL");
  const [navHeader, setnavHeader] = useState("navbar__header");
  const [NavIcon3, setNavIcon3] = useState("nav-icon3Dulicate");
  function handleClick() {
    setnavIcon3((navIcon3) => !navIcon3);
  }
  function addToUL() {
    setnavIconUL((navIconUL) => !navIconUL);
  }
  function addToNavHeader() {
    setnavHeader((navHeader) => !navHeader);
  }
  function addToNavIcon3() {
    setNavIcon3((NavIcon3) => !NavIcon3);
  }
  return (
    <>
      <div
        className="navbar__Container"
        id={navHeader ? "navbar__header2" : "navbar__header"}
      >
        <div className="navbar__Logo">
          <div className="navbar__LogoWrapper">
            <img src={logo} alt="Logo" className="navbar__LogoImg" />
            <h3 className="navbar__H3">Octa Servicez</h3>
          </div>
        </div>
        <div className="navbar__PageList">
          <ul
            className={navIconUL ? "navbar__UL2" : "navbar__UL"}
            onClick={() => {
              handleClick();
              addToUL();
              addToNavHeader();
            }}
          >
            <li id="navbar_LIHome" className="navbar__LI">
              <a href="#hero">Home</a>
            </li>
            <li id="navbar_LIService" className="navbar__LI">
              <a href="#services__Container">Services</a>
            </li>
            <li id="navbar_LIAbout" className="navbar__LI">
              <a href="#aboutMainContainer">About</a>
            </li>
            <li id="navbar_LIBlog" className="navbar__LI">
              <a href="#blogMainContainer">Blog</a>
            </li>
            <li id="navbar_LIContact" className="navbar__LI">
              <a href="#contactMainContainer">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar__Signin">
          <div
            id={NavIcon3 ? "nav-icon3Dulicate" : "nav-icon3"}
            className={navIcon3 ? "open" : ""}
            onClick={() => {
              handleClick();
              addToUL();
              addToNavHeader();
              addToNavIcon3();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
