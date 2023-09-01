// import logo from "../svg/logo.svg";
import plane from "../svg/plane.svg";
import bed from "../svg/bed.svg";
import blackheart from "../svg/blackheart.svg";
import johndayi from "../images/JohnCircle.png";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { RiShoppingCart2Line } from "react-icons/ri";
import footerlogo from "../svg/footerlogo.svg"
import React, { useRef, useState, useEffect } from "react";
import { removeAuthToken } from "../Pages/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {FaPlane } from 'react-icons/fa';
import {IoIosBed,IoMdHeart } from 'react-icons/io';
const logo='logo.svg'
const logoP=`/static/${logo}`
import {
 faArrowRightFromBracket,faLock
} from "@fortawesome/free-solid-svg-icons";
const SecondNavbar = ({ basketHotelBuy, basketTicketBuy }) => {
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
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [logos, setLogos] = useState(false);
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
        <Link to="/Profil">User Page </Link>
        <button className="logout" onClick={handleLogout}>Logout <FontAwesomeIcon icon={faArrowRightFromBracket}/> </button>
      </div>
    </div>
  );
  return (
   
     <div className="container__full">
    <header className="flight-search-navbar">
   
      <nav className="nav_links">
        <ul>
          <li>
            <NavLink className="nav_link" to="/flight-search">
              {" "}
              <FaPlane style={{fontSize:'23px',marginRight:"8px"}}/>
               Find Flight
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/hotel-search">
            <IoIosBed style={{fontSize:'23px',marginRight:"8px"}}/>
               Find Stays
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/blogs">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="logo">
      <AiOutlineBars className="menu_bar" onClick={openOverlayMenu} />
        <img src={logoP} alt="" />
      </div>


     

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
            <Link to="/about">Blog</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>

      <div className="john__btns">
        
        <h3 className="favourites_link">
          <IoMdHeart style={{fontSize:"24px",marginRight:"4px"}}/>
          <NavLink className="nav_link" to="/favourites">
            Favourites
          </NavLink>
        </h3>
        <h3>|</h3>
        <NavLink className="account_icon_nav" to="/account-flow">
          <div className="shop_count">
            <RiShoppingCart2Line className="shop_icon" />
            <span>{basketHotelBuy.length + basketTicketBuy.length}</span>
          </div>
        </NavLink>
        <img className="john__image" src={johndayi} alt="" />
        
       
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
      </div>
     
    </header>
    </div>
  
  );
};
const t = (a) => a;
export default connect(t)(SecondNavbar);
