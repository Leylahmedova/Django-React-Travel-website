import location from "../svg/location.svg";
import { Link } from "react-router-dom";
import hotelcard from "../svg/hotelcard.svg";
import johncircle from "../images/johncircle.png";
import calendar from "../svg/calendar.svg";
import hotelmint from "../svg/hotelmint.svg";
import qrCode from "../svg/qrCode.svg";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import rightvector from "../svg/rightvector.svg";

function HotelDetailsCard() {
  const loc = useLocation();
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
    <section className="emirates__second">
      <div className="container">
        <div className="booking_detail_header">
          <h4>{data.destination}</h4>
          <img src={rightvector} alt="" />
          <h4>{data.name}</h4>
        </div>

        <div>
          <div className="emirates__heading">
            <h1>{data.name} </h1>
            <h1>${data.price}</h1>
          </div>
          <div className="emirates__location emirates__location_hotel">
            <p>
              <img src={location} alt="" />
              {data.location}
            </p>
            <div>
              <div>
                <Link to="/account-flow">Download</Link>
              </div>
            </div>
          </div>
        </div>
        <section className="flying_cards">
          <div className="airplanes">
            <div>
              <h1>{checkIn}</h1>
              <span>Check-In</span>
            </div>
            <img src={hotelcard} alt="" />
            <div>
              <h1>{checkOut}</h1>
              <span>Check-Out</span>
            </div>
          </div>
          <div className="main_card">
            <div className="card_heading">
              <img src={johncircle} alt="" />
              <div className="card_inner">
                <div>
                  <h2>James Doe</h2>
                </div>
                <h2 className="business">{loc.state.place}</h2>
              </div>
            </div>
            <div className="flying_dates">
              <div className="flying_date flying_date_hotel">
                <div className="hotel_title_card">
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div >
                    <span>Check-In </span>
                    <h4>{data.checkIn}</h4>
                  </div>
                </div>
                <div className="hotel_title_card">
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <span>Check-Out </span>
                    <h4>{data.checkOut}</h4>
                  </div>
                </div>
                <div className="hotel_title_card">
                  <div>
                    <img src={hotelmint} alt="" />
                  </div>
                  <div>
                    <span>Room no.</span>
                    <h4>On arival</h4>
                  </div>
                </div>
              </div>

              <div className="EK">
                <div>
                  <h1>EK</h1>
                  <span>ABC12345</span>
                </div>

                <img src={qrCode} alt="" />
              </div>
            </div>
          </div>

          <div className=" assets-2">
            <img src={data.image} alt="" />
          </div>
        </section>
        <div className="terms_condition">
          <h2>Terms and Conditions</h2>
          <h4>Payments</h4>
          <p>
            ~If you are purchasing your ticket using a debit or credit card via
            the Website, we will process these payments via the automated secure
            common payment gateway which will be subject to fraud screening
            purposes.{" "}
          </p>
          <p>
            ~If you do not supply the correct card billing address and/or
            cardholder information, your booking will not be confirmed and the
            overall cost may increase. We reserve the right to cancel your
            booking if payment is declined for any reason or if you have
            supplied incorrect card information. If we become aware of, or is
            notified of, any fraud or illegal activity associated with the
            payment for the booking, the booking will be cancelled and you will
            be liable for all costs and expenses arising from such cancellation,
            without prejudice to any action that may be taken against us.
          </p>
          <p>
            ~Golobe may require the card holder to provide additional payment
            verification upon request by either submitting an online form or
            visiting the nearest Golobe office, or at the airport at the time of
            check-in. Golobe reserves the right to deny boarding or to collect a
            guarantee payment (in cash or from another credit card) if the card
            originally used for the purchase cannot be presented by the
            cardholder at check-in or when collecting the tickets, or in the
            case the original payment has been withheld or disputed by the card
            issuing bank. Credit card details are held in a secured environment
            and transferred through an internationally accepted system.
          </p>
          <h4>Contact Us</h4>
          <p>
            If you have any questions about our Website or our Terms of Use,
            please contact:
            <br />
            Golobe Group Q.C.S.C <br />
            Golobe Tower <br />
            P.O. Box: 22550 <br />
            Doha, State of Qatar <br />
            Further contact details can be found at golobe.com/help <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default HotelDetailsCard;
