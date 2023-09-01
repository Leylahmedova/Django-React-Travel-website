
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaPlane } from 'react-icons/fa';
import { HiWifi } from 'react-icons/hi';
import { RiTimerFill } from 'react-icons/ri';
import { MdFastfood,MdAirlineSeatReclineNormal } from 'react-icons/md';

import { AiOutlineSwapLeft,AiOutlineSwapRight } from 'react-icons/ai';
// import { MdFastfood } from 'react-icons/md';
export default function FlightDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/blog/list/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const formattedDate = new Date(data.departDate).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <section className="FlightDetails">
      <div className="container">
        <section className="hotel_general_info">
          <div className="hotel_info">
            <div>
              <h3>{data.airline} A380 Airbus </h3>
              <div>
                <div>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="review_star filled small_star"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                
                 </div>
                <p>5 Star Hotel</p>
              </div>
            </div>
            <div>
              <div>
                <button className="hotel_frame">
                  <p>{data.rating}</p>
                </button>
                <p>
                  <span>{data.reviewQuality}</span> {data.reviewCount} reviews
                </p>
              </div>
            </div>
          </div>

          <div className="hotel_book">
            <h2>${data.price}</h2>
            <div>
             

              <button className="hotel_button">
                <Link to={`/booking-details/${id}`}>Book now</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="flight_detail_img">
          <img src={data.airportImg} alt="" />
        </section>

        <section className="flight_economy_feat">
          <div>
            <h3>Basic Economy Features</h3>
        
          </div>

          <div>
            <img style={{height: '100px',borderRadius:"10px" }}  src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2016/01/Best-Economy-Plus-Gear-Patrol-Lead-Full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=640:*" alt="" />
            <img style={{height: '100px' ,borderRadius:"10px"}} src="https://liveandletsfly.com/wp-content/uploads/2022/10/United-Airlines-Indirect-Change-Fees.jpg" alt="" />
            <img style={{height: '100px' ,borderRadius:"10px"}} src="https://d.newsweek.com/en/full/2064708/long-line-airport.jpg?w=1600&h=1200&q=88&f=aa4890b4e26743ea577e535377144d02" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }} src="https://www.fodors.com/wp-content/uploads/2019/02/plane-hero-2.jpg" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }}src="https://travelpro.ca/cdn/shop/articles/shutterstock_124713472_1024x1024.jpg?v=1680553305" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }}src="https://fee.org/media/22151/flight.jpg?anchor=center&mode=crop&width=1200&rnd=131388985770000000" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }}src="https://static.tripzilla.com/thumb/8/f/194959_800x.jpg" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }}src="https://viewfromthewing.com/wp-content/uploads/2016/05/IMG_1125_zpsd6e116de.jpg" alt="" />
            <img style={{height: '100px',borderRadius:"10px" }}src="https://prospect.org/downloads/5852/download/germanwings_-_service.jpg.jpe?cb=0bbb1c8e0153fe817cd2a8a67acc21e8&w=1200" alt="" />
          </div>
        </section>

        <section className="flight_airline_policy">
          <h3>{data.airline} Airlines Policies</h3>
          <div>
            <div>
            <RiTimerFill style={{fontSize:"25px"}}/>
              <span>
                Pre-flight cleaning, installation of cabin HEPA filters.
              </span>
            </div>
            <div>
            <RiTimerFill style={{fontSize:"25px"}}/>
              <span>
                Pre-flight cleaning, installation of cabin HEPA filters.
              </span>
            </div>
          </div>
        </section>

        <section className="flight_return">
          <div>
            <h4>Return {formattedDate}</h4>
            <p>{data.durationstring}</p>
          </div>

          <div className="flight_return_box">
            <div>
              <div>
                <img src={data.image} alt="" />
                <div>
                  <h5>{data.airline}</h5>
                  <span>Airbus A320</span>
                </div>
              </div>
              <div>
                <FaPlane style={{fontSize:"32px"}} />
                <div className="flight_return_line"></div>
                <HiWifi style={{fontSize:"32px"}}/>
                <div className="flight_return_line"></div>
                <RiTimerFill style={{fontSize:"32px"}}/>
                <div className="flight_return_line"></div>
                <MdFastfood style={{fontSize:"32px"}}/>
                <div className="flight_return_line"></div>
                <MdAirlineSeatReclineNormal style={{fontSize:"32px"}}/>
              </div>
            </div>

            <div>
              <div>
                <h5>{data.departTime}</h5>
                <p>Newark(EWR)</p>
              </div>

              <div>
                <AiOutlineSwapLeft style={{fontSize:"45px"}}/>
                <FaPlane style={{fontSize:"45px"}} />
                <AiOutlineSwapRight style={{fontSize:"45px"}}/>
              </div>

              <div>
                <h5>{data.arrivalTime}</h5>
                <p>Newark(EWR)</p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  );
}
