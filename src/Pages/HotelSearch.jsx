import Introsection from "../Components/Introsection";
import FallintotravelCard from "../Components/FallintotravelCard";
import telegram from "../svg/telegram.svg";
import PerfectTripCard from "../Components/PerfectTripCard";
import person from "../svg/person.svg";
import bed from "../svg/bed.svg";
import { NavLink, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import footerlogo from "../svg/footerlogo.svg";
import logo from "../svg/logo.svg";
import whiteLogo from "../svg/whiteLogo.svg";
import plane from "../svg/plane.svg";
import blackheart from "../svg/blackheart.svg";
import johndayi from "../images/JohnCircle.png";
import whiteBed from "../svg/whiteBed.svg";
import Navbar from "../Components/Navbar";
import whitePlane from "../svg/whitePlane.svg";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { RiShoppingCart2Line } from "react-icons/ri";
function HotelSearch({ basketHotelBuy, basketTicketBuy,dispatch }) {
  const [trip, setTrip] = useState([]);
  const [location, setLocation] = useState([]);
  const [recent, setRecent] = useState([]);
  const [locationCount, setLocationCount] = useState(1);
  const [count, setCount] = useState(4);
  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((a) => a.json())
      .then((a) => {
        setTrip(a);
      });
    fetch("http://localhost:3000/trips")
      .then((a) => a.json())
      .then((a) => {
        setRecent(a);
      });
    fetch("http://localhost:3000/location")
      .then((b) => b.json())
      .then((b) => {
        setLocation(b);
      });
  }, []);
  const handleClick = () => [setCount(count + 4)];
  const handleClickLess=()=>[setCount(4)]
  const [say, setSay] = useState(3);
  const increaseCount = () => {
    setSay(say + 3);
  };
  const decreaseCount=()=>{
    setSay(3)
  }

  const seeMore = () => [setLocationCount(locationCount + 1)];
  const seeLess=()=>[setLocationCount(1)]
  const [enterdestination, setEnterDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("");
  const nav = useNavigate();

  const enterDestinationChange = () => {
    dispatch({
      type: "ENTERDESTINATION_INPUT",
      payload: enterdestination,
    });
  };
  const checkInChange = () => {
    dispatch({
      type: "CHECKIN_INPUT",
      payload: checkIn,
    });
  };
  const checkOutChange = () => {
    dispatch({
      type: "CHECKOUT_INPUT",
      payload: checkOut,
    });
  };
  const roomChange = () => {
    dispatch({
      type: "ROOM_INPUT",
      payload: rooms,
    });
  };
  const commonFunc2 = (e) => {
    e.preventDefault();
    enterDestinationChange();
    checkInChange();
    checkOutChange();
    roomChange();
    nav("/hotel-listing-one");
  };

  const [navColor, setnavColor] = useState("transparent");
  const [navlinkColor, setNavlinkColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");
  const [logos, setLogos] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor(" #fff") : setnavColor("transparent");
    window.scrollY > 10 ? setNavlinkColor("#fff") : setNavlinkColor("#000");
    window.scrollY > 10 ? setButtonColor("#000") : setButtonColor("#fff");
    window.scrollY > 10 ? setLogos(!logos) : setLogos(logos);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

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

  return (
    <>
    <div className="container__full">
    <Navbar />

      <div className="introsection-flight-search">
        <Introsection />
      </div>
      <div className="container_main">
        <div className="whereFlying">
          <h3>Where are you flying? </h3>
          <div className="flying-inputs">
            <form action="">
              <fieldset>
                <legend>Enter Destination</legend>
                <img src={bed} alt="" />
                <input
                  value={enterdestination}
                  onChange={(e) => setEnterDestination(e.target.value)}
                  type="text"
                  placeholder="Istanbul, Turkey"
                />
              </fieldset>
              <fieldset>
                <legend>Check In</legend>
                <input
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  type="date"
                  placeholder="Fri 12/2"
                />
              </fieldset>

              <fieldset>
                <legend>Check Out</legend>
                <input
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  type="date"
                  placeholder="Sun 12/4"
                />
              </fieldset>

              <fieldset>
                <legend>Rooms & Guests</legend>
                
                <select
                   value={rooms}
                   onChange={(e)=>setRooms(e.target.value)}
                >
                  <option value="">Rooms & Guests</option>
                  <option value="1 Room - 1 Guest">1 Room - 1 Guest</option>
                  <option value="1 Room - 2 Guests">1 Room - 2 Guests</option>
                  <option value="1 Room - 3 Guests">1 Room - 3 Guests</option>
                  <option value="1 Room - 4 Guests">1 Room - 4 Guests</option>
                  <option value="1 Room - 5 Guests">1 Room - 5 Guests</option>
                  <option value="2 Rooms - 6 Guests">2 Rooms - 6 Guests</option>
                  <option value="2 Rooms - 7 Guests">2 Rooms - 7 Guests</option>
                  <option value="2 Rooms - 8 Guests">2 Rooms - 8 Guests</option>
                  <option value="2 Rooms - 9 Guests">2 Rooms - 9 Guests</option>
                  <option value="2 Rooms - 10 Guests">
                    2 Rooms - 10 Guests
                  </option>
                </select>
               
              </fieldset>
            </form>
          </div>
          <div className="flying-btns">
            <button>
              <img src={telegram} alt="" />
              <Link onClick={commonFunc2}>Show Places</Link>
            </button>
          </div>
        </div>
      </div>
       <div className="container_main">
       <div className="text__button__content ">
            <div>
              <h1>Plan your perfect trip</h1>
              <p>
                Search Flights & Places Hire to our most popular destinations
              </p>
            </div>
            {/* <button className="btn btn2" onClick={increaseCount}>See More</button> */}
            {
              say <recent.length?
            <div onClick={increaseCount} className="btn btn2 landingbtn">
              <h4>See More</h4>
            </div>
            :
            <div onClick={decreaseCount} className="btn btn2 landingbtn">
              <h4>See Less</h4>
            </div>
            }
            
          </div>
       <div className="perfect_trip_cards">
            {recent.slice(0, say).map((t, b) => {
              return (
                <PerfectTripCard
                  key={b}
                  perfectCardImg={t.tripImg}
                  tripName={t.tripName}
                />
              );
            })}
          </div>
       </div>
    
    
      <div className="container_main">
        <div className="text__button__content ">
          <div>
            <h1>Fall into travel</h1>
            <p>
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          {
            count<trip.length ?
<div onClick={handleClick} className="btn btn2">
      <h4>See More</h4>
    </div> :
    <div onClick={handleClickLess} className="btn btn2">
    <h4>See Less</h4>
  </div>
           }
        </div>
      </div>
      <div className="container_main">
        <div className="fall__into__travel__cards">
          {trip.slice(0, count).map((t) => (
            <FallintotravelCard
              key={t.id}
              cardImg={t.image}
              cardh2={t.travelName}
              cardh4={t.about}
              cardPrice={t.price}
            />
          ))}
        </div>
      </div>
      <div className="container_main">
        <div className="text__button__content ">
          <div>
            <h1>Fall into travel</h1>
            <p>
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          {
            locationCount<location.length?
            <div onClick={seeMore} className="btn btn2">
            <h4>See More</h4>
          </div>:
           <div onClick={seeLess} className="btn btn2">
           <h4>See Less</h4>
         </div>
          }
          
        </div>
      </div>
      <div className="container_main">
        {location.slice(0, locationCount).map((t, b) => (
          <div key={b} className="sri__Lanka">
            <div className="about__Sri__Lanka">
              <div className="sri__lanka__title">
                <h1>Backpacking {t.name}</h1>
                <div className="sri__lanka__price">
                  <h3>
                    From <span>${t.price}</span>
                  </h3>
                </div>
              </div>
              <p>{t.paragraf}</p>
              <div onClick={seeMore} className="btn-div">
                <Link to="/account-flow">Book Flight</Link>
              </div>
            </div>
            <div className="sri__lanka__imgs">
              <div>
                <img src={t.image1} alt="" />
              </div>
              <div>
                <img src={t.image2} alt="" />
              </div>
              <div>
                <img src={t.image3} alt="" />
              </div>

              <div>
                <img src={t.image4} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sri__lanka__blank"></div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(HotelSearch);
