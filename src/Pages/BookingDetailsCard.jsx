import airplane from "../svg/airplane.svg";
import johncircle from "../images/johncircle.png";
import calendar from "../svg/calendar.svg";
import qrCode from "../svg/qrCode.svg";
import roundVector from "../svg/roundVector.svg";
import bridge from "../images/bridge.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function BookingDetailsCard() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:2605/tickets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section className="emirates__second">
      <div className="container">
        <div>
          <div className="emirates__heading">
            <h1>{data.airline} A380 Airbus</h1>
            <h1>${data.price}</h1>
          </div>
          <div className="emirates__location  emirates__location_hotel">
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
              <h1>{data.departTime}</h1>
              <span>Newark(EWR)</span>
            </div>
            <img src={airplane} alt="" />
            <div>
              <h1>{data.arrivalTime}</h1>
              <span>Newark(EWR)</span>
            </div>
          </div>
          <div className="main_card">
            <div className="card_heading">
              <img src={johncircle} alt="" />
              <div className="card_inner">
                <div>
                  <h2>James Doe</h2>
                  <h4>Boarding Pass N’123</h4>
                </div>
                <h2 className="business">{data.passengerClass}</h2>
              </div>
            </div>
            <div className="flying_dates">
              <div className="flying_date">
                <div>
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <span>Date</span>
                    <h4>{data.departDate}</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <span>Flight time</span>
                    <h4>{data.departTime}</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <span>Gate</span>
                    <h4>A12</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={calendar} alt="" />
                  </div>
                  <div>
                    <span>Seat</span>
                    <h4>128</h4>
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

          <div className="assets">
            <div>
              <img src={bridge} alt="" />
              <div>
                <h5>James Doe</h5>
                <span>Boarding Pass N’123</span>
              </div>
            </div>
            <div>
              <img src={roundVector} alt="" />
            </div>
            <div>
              <img src={bridge} alt="" />
              <div>
                <h5>James Doe</h5>
                <span>Boarding Pass N’123</span>
              </div>
            </div>
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

export default BookingDetailsCard;
