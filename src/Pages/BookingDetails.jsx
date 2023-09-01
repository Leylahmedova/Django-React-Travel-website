import plane from "../svg/plane.svg";
import vifi from "../svg/vifi.svg";
import timer from "../svg/timer.svg";
import fastfood from "../svg/fastfood.svg";
import seat from "../svg/seat.svg";
import leftline from "../svg/leftline.svg";
import rightline from "../svg/rightline.svg";
import radioBlack from "../svg/radioBlack.svg";
import { useParams } from "react-router-dom";
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

import { FaPlane } from "react-icons/fa";
import { HiWifi } from "react-icons/hi";
import { RiTimerFill } from "react-icons/ri";
import { MdFastfood, MdAirlineSeatReclineNormal } from "react-icons/md";

import { BiCircle } from "react-icons/bi";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
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

  const nav = useNavigate();
  const handleOkButtonClick = () => {
    if (
      country !== "" &&
      nameoncard !== "" &&
      cvc !== "" &&
      expdate !== "" &&
      cardnumber !== ""
    ) {
      setFormState(initialForm);
      nav(`/booking-detailsCard/${id}`);
    }
  };
  const handleOkButtonClicknum = () => {
    if (phonenumber !== "") {
      setFormState(initialForm);
      setOpen(!open);
    }
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleNewClick = () => {
    setIsActive(!isActive);
  };

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hide, setHide] = useState(false);
  if (hide) {
    setOpen(false);
    setShowModal(false);
    setHide(false);
  }

  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/blog/list/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const formattedDate = new Date(data.departDate).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <section
      className={
        showModal ? "booking_detail blur_booking_detail " : "booking_detail"
      }
    >
      <div className="container_main">
        <div className="airbus_section">
          <div>
            <div className="emirates">
              <div className="emirates__airbus">
                <h2>{data.airline} A380 Airbus</h2>
                <h1>${data.price}</h1>
              </div>
              <div className="return__date">
                <h3>Return {formattedDate}</h3>
                <h3>{data.durationstring}</h3>
              </div>
              <div className="emirates_logos">
                <div className="emirates_main_logo">
                  <img src={data.image} alt="" />
                  <div>
                    <h1>{data.airline}</h1>
                    <span>Airbus A320</span>
                  </div>
                </div>
                <div className="emirates_svgs">
                  <div>
                    <FaPlane style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <HiWifi style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <RiTimerFill style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <MdFastfood style={{ fontSize: "30px" }} />
                  </div>
                  <div>
                    <MdAirlineSeatReclineNormal style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>

              <div className="flight_time">
                <h1>{data.departTime}</h1>
                <h3>Newark(EWR)</h3>
                <AiOutlineSwapLeft style={{ fontSize: "45px" }} />
                <FaPlane style={{ fontSize: "45px" }} />
                <AiOutlineSwapRight style={{ fontSize: "45px" }} />
                <h1>{data.arrivalTime}</h1>
                <h3>Newark(EWR)</h3>
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
                {!isActive ? (
                  <BiCircle
                    style={{ color: "white", fontSize: "25px" }}
                    onClick={handleClick}
                  />
                ) : (
                  <BiCircle
                    style={{ fontSize: "25px" }}
                    onClick={handleClick}
                  />
                )}
              </div>
              <div className={isActive ? "pay__part bg-salmon" : "pay__part"}>
                <div>
                  <h3>Pay part now, part later</h3>
                  <p>
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </p>
                </div>
                {!isActive ? (
                  <BiCircle
                    style={{ fontSize: "30px" }}
                    onClick={handleClick}
                  />
                ) : (
                  <BiCircle
                    style={{ color: "white", fontSize: "30px" }}
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="economy">
            <div className="economy_div">
              <img src={data.airportImg} alt="" />
              <div className="economy_text">
                <h3>{data.passengerClass} </h3>
                <h1>{data.airline} A380 Airbus</h1>
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
                Your booking is protected by <span>golobe</span>{" "}
              </h2>
            </div>
            <div className="economy_price">
              <h2 className="price_details">Price Details</h2>
              <div>
                <h2>Base Fare </h2>
                <h2>$400</h2>
              </div>
              <div>
                <h2>Discount</h2>
                <h2>$400</h2>
              </div>
              <div>
                <h2>Taxes</h2>
                <h2>$400</h2>
              </div>
              <div>
                <h2>Service Fee</h2>
                <h2>$400</h2>
              </div>
              <div>
                <h2>Total</h2>
                <h2>$400</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingDetails;
