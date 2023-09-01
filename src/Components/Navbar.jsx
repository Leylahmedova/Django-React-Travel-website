import logo from "../svg/logo.svg";
import footerlogo from "../svg/footerlogo.svg"
import whiteLogo from "../svg/whiteLogo.svg";
import plane from "../svg/plane.svg";
import bed from "../svg/bed.svg";
import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import whiteBed from "../svg/whiteBed.svg";
import whitePlane from "../svg/whitePlane.svg";
import {FaPlane } from 'react-icons/fa';
import {IoIosBed } from 'react-icons/io';
import { removeAuthToken } from "../Pages/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const overlayMenuRef = useRef();
  function openOverlayMenu(e) {
    if (e.target.classList.contains("menu_bar")) {
      overlayMenuRef.current.classList.add("menu-active");
    }
  }
  function closeOverlayMenu(e) {
    if (e.target.classList.contains("menu_close")) {
      overlayMenuRef.current.classList.remove("menu-active");
    }
  }

  const [navColor, setNavColor] = useState("transparent");
  const [navlinkColor, setNavlinkColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");
  const [logos, setLogos] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const userDropdownStyle = {
    position: "absolute",
    top: "90px",
    right: "20px",
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "5px",
    display: userDropdownOpen ? "block" : "none",
    
  };

  const handleUserClick = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavColor("#fff");
        setNavlinkColor("#fff");
        setButtonColor("#000");
        setLogos(true);
      } else {
        setNavColor("transparent");
        setNavlinkColor("#000");
        setButtonColor("#fff");
        setLogos(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    const userNameCookie = getCookie("user_name");
    setUserName(userNameCookie || "");
    const fullNameCookie = getCookie("full_name");
    setUserFullName(fullNameCookie || "");
    const userEmailCookie = getCookie("user_email");
    setUserEmail(userEmailCookie || "");
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setUserDropdownOpen(false);
    };
  }, [logos]);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "";
  };

  const handleLogout = () => {
    document.cookie = "user_name=; Max-Age=0; path=/;";
    setUserName("");
    removeAuthToken();
    window.location.reload();
    localStorage.removeItem("user_name");
  };

  const formatUserName = (name) => {
    if (name) {
      const [firstName, lastName] = name.split(" ");
      const formattedName =
        firstName.toUpperCase() +
        (lastName ? lastName.charAt(0).toUpperCase() : "");
      return formattedName;
    }
    return null;
  };
  const cleanedUserFullName = userFullName.replace(/["']/g, "");
  const cleanuserEmail = userEmail.replace(/["']/g, "");

  const navlogo="whiteLogo.svg"
  const logoPath=`/static/${navlogo}`
  
  const logo='logo.svg'
  const logoP=`/static/${logo}`       
  const userDropdown = (
    <div style={userDropdownStyle} className="user-dropdown">
      <div className="user-info">
        <div className="username_drop">
          <span>{formatUserName(userName)}</span>
        </div>
        <div>
          <div className="user_fullname">{cleanedUserFullName}</div>

          <span className="user-email">{cleanuserEmail}</span>
        </div>
      </div>
      <div className="user-links">
        <Link  to="/Profil">User Page </Link>
        <button className="logout" onClick={handleLogout}>Logout <FontAwesomeIcon icon={faArrowRightFromBracket}/> </button>
      </div>
    </div>
  );

  return (
    <header
      style={{
        backgroundColor: navColor,
        transition: "all .5s",
      }}
      className="flight-search-navbar"
    >
       <div className="logo">
        {!logos ? <img src={logoPath} alt="" /> : <img src={logoP} alt="" />}
      </div>
      <nav className="nav_links">
        <ul>
          <li>
            <NavLink
              style={{
                transition: "all .5s",
                color: buttonColor,
              }}
              className="nav_link"
              to="/flight-search"
            >
              {!logos ? (
                 <FaPlane style={{fontSize:'23px',marginRight:"8px"}}/>
              ) : (
                // 
                <FaPlane style={{fontSize:'23px',marginRight:"8px"}}/>
              )}
              Find Flight
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                transition: "all .5s",
                color: buttonColor,
              }}
              className="nav_link"
              to="/hotel-search"
            >
               {!logos ? (
                <IoIosBed style={{fontSize:'23px',marginRight:"8px"}}/>
              ) : (
                <IoIosBed style={{fontSize:'23px',marginRight:"8px"}}/>
              )}{" "}
              Find Stays
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                transition: "all .5s",
                color: buttonColor,
              }}
              className="nav_link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                transition: "all .5s",
                color: buttonColor,
              }}
              className="nav_link"
              to="/blogs"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                transition: "all .5s",
                color: buttonColor,
              }}
              className="nav_link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

     

      {userName ? (
        <div className="username">
          <span style={{cursor:"pointer"}}  onClick={handleUserClick}>{formatUserName(userName)}</span>
          {userDropdown}
        </div>
      ) : (
        <div className="login-btns-navbar">
          <Link
            style={{
              color: buttonColor,
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{
              color: navlinkColor,
              backgroundColor: buttonColor,
            }}
            to="/sign-up"
          >
            Sign up
          </Link>
        </div>
      )}

      <div className="overlay_menu" ref={overlayMenuRef}>
        <RxCross2 onClick={closeOverlayMenu} className="menu_close" />
        <img src={footerlogo} alt="" />
        <ul>
          <li>
            <Link to="/flight-search">Find Flight</Link>
          </li>
          <li>
            <Link to="/hotel-search">Find Stays</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {userName && (
            <li>
              <span className="username" onClick={handleUserClick}>
                {userName}
              </span>
              {userDropdownOpen && userDropdown}
            </li>
          )}
        </ul>
      </div>

      <AiOutlineBars
        style={{
          transition: "all .5s",
          color: buttonColor,
        }}
        className="menu_bar"
        onClick={openOverlayMenu}
      />
    </header>
  );
};

export default Navbar;
