import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRef } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNav, setIsNav] = useState(true);
  const navmenus = useRef();

  function turnNavOff() {
    if (isNav === true) {
      setIsNav(false);
    } else {
      setIsNav(true);
    }
  }

  function activateMenus() {
    navmenus.current.style.display = "flex";
  }

  function backtowebresponsivemenubar() {
    navmenus.current.style.display = "none";
  }

  return isNav ? (
    <nav>
      <NavLink to="/" className="navbar-link">
        <img src="/mchatlogo.png" alt="logo" />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/" className="navbar-link">
            Register To Chat
          </NavLink>
        </li>
        <li onClick={turnNavOff}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </li>
      </ul>
      <ul className="mobileresponsivemenubar" ref={navmenus}>
        <div className="mobile-search">
          <input type="text" placeholder="Search" />
          <li className="searchbar">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </li>
          <FontAwesomeIcon
            className="navbar-link"
            icon="fa-close"
            size="xl"
            color="red"
            onClick={backtowebresponsivemenubar}
          />
        </div>
        <li onClick={() => (navmenus.current.style.display = "none")}>
          {" "}
          <NavLink to="/" className="navbar-link">
            Register
          </NavLink>
        </li>
        <li onClick={() => (navmenus.current.style.display = "none")}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </li>
        <div className="social-media">
          <a
            href="https://www.facebook.com/codewithmasoodofficial"
            target="_blank"
          >
            <img
              onClick={() => (navmenus.current.style.display = "none")}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="fb"
            />
          </a>
          <FontAwesomeIcon icon="fa-share" />
          <a
            href="https://www.instagram.com/codewithmasood.official"
            target="_blank"
          >
            <img
              onClick={() => (navmenus.current.style.display = "none")}
              src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
              alt="insta"
            />
          </a>
        </div>
      </ul>
      <div className="hamburgur" onClick={activateMenus}>
        <FontAwesomeIcon icon="fa-bars" />
      </div>
    </nav>
  ) : (
    <div className="search-box">
      <input type="text" placeholder="Search" className="searchbarnav" />
      <FontAwesomeIcon
        icon="fa-close"
        onClick={() => setIsNav(true)}
        size="lg"
      />
    </div>
  );
}

export default Header;
