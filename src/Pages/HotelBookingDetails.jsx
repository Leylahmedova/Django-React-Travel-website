import leftline from "../svg/leftline.svg";
import rightline from "../svg/rightline.svg";
import radioBlack from "../svg/radioBlack.svg";
import hotel from "../svg/hotel.svg";
import rightvector from "../svg/rightvector.svg";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import face from "../svg/face.svg";
import google from "../svg/google.svg";
import apple from "../svg/apple.svg";
import mail from "../svg/mail.svg";
import visa from "../svg/visaBlack.svg";
import radio from "../svg/radio.svg";
import addCard from "../svg/addCard.svg";
import checkbox from "../svg/checkbox.svg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import { CgArrowLongLeftC, CgArrowLongRightC } from "react-icons/cg";
import { FaHotel } from "react-icons/fa";
function BookingDetails() {
  const initialForm = {
    cardnumber: "",
    expdate: "",
    cvc: "",
    nameoncard: "",
    country: "",
    phonenumber: "",
  };
  const [formState, setFormState] = useState(initialForm);
  const { cardnumber, expdate, cvc, nameoncard, country, phonenumber } =
    formState;
  const [contactModal, setContactModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setErrorMessage("");
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      country == "" ||
      nameoncard == "" ||
      cvc == "" ||
      expdate == "" ||
      cardnumber == "" ||
      phonenumber == ""
    ) {
      setErrorMessage("Please fill in all fields!");

      return;
    } else {
      setErrorMessage("");
    }
    handleOkButtonClick();
  };

  const [statefor, setStatefor] = useState(false);
  const nav = useNavigate();
  const handleOkButtonClick = () => {
    if (
      country !== "" &&
      nameoncard !== "" &&
      cvc !== "" &&
      expdate !== "" &&
      cardnumber !== ""
    ) {
      // setFormState(initialForm);
      setErrorMessage("");
      setStatefor(!statefor);

      //  nav(`/hotel-detailsCard/${id}`);
    }
  };

  const handleOkButtonClicknum = () => {
    if (phonenumber !== "") {
      setFormState(initialForm);
      setOpen(!open);
    }
  };
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hide, setHide] = useState(false);
  if (hide) {
    setOpen(false);
    setShowModal(false);
    setHide(false);
  }

  const loc = useLocation();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleNewClick = () => {
    setIsActive(!isActive);
  };

  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:2605/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const checkIn = new Date(data.checkIn).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const checkOut = new Date(data.checkOut).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <section className="booking_detail">
        <div className="container">
          <div
            className="booking_detail_header"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h4>{data.destination}</h4>
            <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
            <h4>{data.name}</h4>
          </div>
        </div>
        <div className="container_main">
          <div className="airbus_section">
            <div>
              <div className="emirates">
                <div className="emirates__airbus">
                  <h2>{loc.state.room}</h2>
                  <h1>$240</h1>
                </div>

                <div className="emirates_logos">
                  <div className="emirates_main_logo emirates_main_logo_two">
                    <img src={data.image} alt="" />
                    <div>
                      <h1>{data.name}</h1>
                      <span>{data.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flight_time">
                  <h1>{checkIn}</h1>
                  <h3>Check-In</h3>
                  <CgArrowLongLeftC style={{ fontSize: "32px" }} />
                  <FaHotel style={{ fontSize: "40px" }} />
                  <CgArrowLongRightC style={{ fontSize: "32px" }} />
                  <h1>{checkOut}</h1>
                  <h3>Check-Out</h3>
                </div>
              </div>
              <div className="pay__main">
                <div
                  className={
                    !isActive ? "pay__in__full bg-salmon" : "pay__in__full"
                  }
                >
                  <div>
                    <h3>Pay in full</h3>
                    <p>Pay the total and you are all set</p>
                  </div>
                  {isActive ? (
                    <img onClick={handleClick} src={radioBlack} alt="" />
                  ) : (
                    <img onClick={handleClick} src={radio} alt="" />
                  )}
                </div>
                <div className={isActive ? "pay__part bg-salmon" : "pay__part"}>
                  <div>
                    <h3>Pay part now, part later</h3>
                    <p>
                      Pay $207.43 now, and the rest ($207.43) will be
                      automatically charged to the same payment method on Nov
                      14, 2022. No extra fees.
                    </p>
                  </div>
                  {!isActive ? (
                    <img onClick={handleClick} src={radioBlack} alt="" />
                  ) : (
                    <img onClick={handleClick} src={radio} alt="" />
                  )}
                </div>
              </div>
            </div>
           

            <div className="economy">
              <div className="economy_div">
                <img src={data.image} alt="" />
                <div className="economy_text">
                  <h3>{data.name}</h3>
                  <h1>{loc.state.room}</h1>
                  <div>
                    <div>
                      <p>{data.rating}</p>
                    </div>
                    <h4>
                      {data.reviewQuality} {data.reviewCount} reviews
                    </h4>
                  </div>
                </div>
              </div>
              <div>
                <h2>
                  Your booking is protected by <span>golobe</span>
                </h2>
              </div>
              <div className="economy_price">
                <h2 className="price_details">Price Details</h2>
                <div>
                  <h2>Base Fare </h2>
                  <h2>$240</h2>
                </div>
                <div>
                  <h2>Discount</h2>
                  <h2>$0</h2>
                </div>
                <div>
                  <h2>Taxes</h2>
                  <h2>$20</h2>
                </div>
                <div>
                  <h2>Service Fee</h2>
                  <h2>$5</h2>
                </div>
                <div>
                  <h2>Total</h2>
                  <h2>$265</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingDetails;
