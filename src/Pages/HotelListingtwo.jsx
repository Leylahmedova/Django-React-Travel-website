
import Location from "../images/Location.png";

import { Link } from "react-router-dom";
import Review from "../Components/Review";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsFillSuitSpadeFill,BsFillCupHotFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineRoomService,MdKeyboardArrowRight,MdWineBar,MdOutlineWifi } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
export default function HotelListingtwo() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/blog/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const areImagesAvailable =
    data.staysImages && data.staysImages.length > 0;

  // Slice the first 5 images if available, otherwise, set an empty array
  const staysImages = areImagesAvailable
    ? data.staysImages.slice(0, 5)
    : [];

  return (
    <>
      <section className="HotelListingtwo">
        <div className="container">
          <section className="choose_place_sec">
            <p>{data.destination}</p>
           <MdKeyboardArrowRight/>
            <p>{data.name}</p>
          </section>

          <section className="hotel_general_info">
            <div className="hotel_info">
              <div>
                <h3>{data.name}</h3>
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

                                <p>5 Star Hotel</p>
                              </div>
                  
                </div>
              </div>
              <div>
                <div>
                  <ImLocation2/>
                  <p>{data.location}</p>
                </div>
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
              <h2>
                ${data.price}
                <span>/night</span>
              </h2>
              <div>
                <Link
                  className="hotel_button "
                  to={`/hotels-booking-details/${id}`}
                  state={{ room: data.name }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </section>

          <section className="hotel_images">
            <img src={data.image} alt="" />
            <div>
              {areImagesAvailable && (
                <div>
                  <div>
                    <img src={staysImages[0]} alt="" />
                    <img src={staysImages[1]} alt="" />
                  </div>
                  <div>
                    <img src={staysImages[2]} alt="" />
                    <img src={staysImages[3]} alt="" />
                  </div>
                </div>
              )}
            </div>
          </section>

          <div className="straight_line"></div>

          <section className="hotel_overview">
            <h4>Overview</h4>
            <p>{data.overview}</p>

            <div>
              <div className="hotel_overview_box">
                <div>
                  <h3>{data.rating}</h3>
                  <div>
                    <h4>{data.reviewQuality}</h4>
                    <span>{data.reviewCount} reviews</span>
                  </div>
                </div>
              </div>
              <div className="hotel_overview_box">
                <div>
                  <h3>
                    <img
                      className="overvievstar"
                      src="https://icons.veryicon.com/png/o/weather/weather-5/stars-4.png"
                      alt=""
                    />
                  </h3>
                  <div>
                    <span>Near park</span>
                  </div>
                </div>
              </div>
              <div className="hotel_overview_box">
                <div>
                  <h3>
                    <img
                      className="overvievstar"
                      src="https://icons.veryicon.com/png/o/weather/weather-5/stars-4.png"
                      alt=""
                    />
                  </h3>

                  <span>Near nightlife</span>
                </div>
              </div>
              <div className="hotel_overview_box">
                <div>
                  <h3>
                    <img
                      className="overvievstar"
                      src="https://icons.veryicon.com/png/o/weather/weather-5/stars-4.png"
                      alt=""
                    />
                  </h3>

                  <span>Near theater</span>
                </div>
              </div>
              <div className="hotel_overview_box">
                <div>
                  <h3>
                    <img
                      className="overvievstar"
                      src="https://icons.veryicon.com/png/o/weather/weather-5/stars-4.png"
                      alt=""
                    />
                  </h3>

                  <span>Clean Hotel</span>
                </div>
              </div>
            </div>
          </section>

          <div className="straight_line"></div>

          <section className="hotel_rooms">
            <h4>Available Rooms</h4>
            <div>
              <div className="hotel_rooms_box">
                <div className="availableroom">
                  <img
                    src="https://www.newparkhotelkilkenny.com/upload/slide_images/bedrooms-x-bed-02.jpg"
                    alt=""
                  />
                  <p>Superior room - 1 double bed or 2 twin beds</p>
                </div>
                <div>
                  <h3>
                    ${data.room1price}
                    <span>/night</span>
                  </h3>

                  <Link
                    to={`/hotels-booking-details/${id}`}
                    state={{
                      room: "Superior room - 1 double bed or 2 twin beds",
                    }}
                  >
                    <button className="hotel_button">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="straight_line room_straight_line"></div>
              <div className="hotel_rooms_box">
                <div className="availableroom">
                  <img
                    src="https://image-tc.galaxy.tf/wijpeg-9gg3ltjy4ne7vbzvx0jqtr833/superior-room-1_wide.jpg?crop=89%2C0%2C1742%2C980"
                    alt=""
                  />
                  <p>Superior room - City view - 1 double bed or 2 twin beds</p>
                </div>
                <div>
                  <h3>
                    ${data.room2price}
                    <span>/night</span>
                  </h3>
                  <Link
                    to={`/hotels-booking-details/${id}`}
                    state={{
                      room: "Superior room - City view - 1 double bed or 2 twin beds",
                    }}
                  >
                    <button className="hotel_button">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="straight_line room_straight_line"></div>
              <div className="hotel_rooms_box">
                <div className="availableroom">
                  <img
                    src="https://www.hizelotel.com/resim/upload/sb1982f.jpg"
                    alt=""
                  />
                  <p>Standard Room</p>
                </div>
                <div>
                  <h3>
                    ${data.room3price}
                    <span>/night</span>
                  </h3>
                  <Link
                    to={`/hotels-booking-details/${id}`}
                    state={{
                      room: "Standard Room",
                    }}
                  >
                    <button className="hotel_button">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="straight_line room_straight_line"></div>
              <div className="hotel_rooms_box">
                <div className="availableroom">
                  <img
                    src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/219/2017/11/30114038/Deluxe_room2.jpg"
                    alt=""
                  />
                  <p>Two-Bedroom Suite</p>
                </div>
                <div>
                  <h3>
                    ${data.room4price}
                    <span>/night</span>
                  </h3>
                  <Link
                    to={`/hotels-booking-details/${id}`}
                    state={{
                      room: "Two-Bedroom Suite",
                    }}
                  >
                    <button className="hotel_button">Book now</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="straight_line"></div>

          <section className="hotel_map">
            <div>
              <h4>Location/Map</h4>
            </div>

            <iframe
              src={data.iframe}
              width="100%"
              height="450"
              style={{ border: 0, marginBottom: "8px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              <img src={Location} alt="" />
              <p>{data.location}</p>
            </div>
          </section>

          <div className="straight_line"></div>

          <section className="hotel_service">
            <h4>Amenities</h4>
            <div>
              <div>
                <div className="hotel_service_type">
                  <FaSwimmingPool style={{fontSize:"20px"}}/>
                  <p>Outdoor pool</p>
                </div>
                <div className="hotel_service_type">
                  <FaSwimmingPool style={{fontSize:"20px"}}/>
                  <p>Indoor pool</p>
                </div>
                <div className="hotel_service_type">
                  <BsFillSuitSpadeFill style={{fontSize:"20px"}}/>
                  <p>Spa and wellness center</p>
                </div>
                <div className="hotel_service_type">
                  <IoRestaurantOutline style={{fontSize:"20px"}} />
                  <p>Restaurant</p>
                </div>
                <div className="hotel_service_type">
                  <MdOutlineRoomService style={{fontSize:"20px"}} />
                  <p>Room service</p>
                </div>
              </div>
              <div>
                <div className="hotel_service_type">
                  <IoIosFitness style={{fontSize:"20px"}}/>
                  <p>Fitness center</p>
                </div>
                <div className="hotel_service_type">
                  <MdWineBar style={{fontSize:"20px"}}/>
                  <p>Bar/Lounge</p>
                </div>
                <div className="hotel_service_type">
                  <MdOutlineWifi style={{fontSize:"20px"}}/>
                  <p>Free Wi-Fi</p>
                </div>
                <div className="hotel_service_type">
                  <BsFillCupHotFill style={{fontSize:"20px"}}/>
                  <p>Tea/coffee machine</p>
                </div>
                <div className="hotel_service_type">
                <MdOutlineRoomService style={{fontSize:"20px"}}/>
                  <p>Room service</p>
                </div>
                {/* <div>
                  <a href="#">+24 more</a>
                </div> */}
              </div>
            </div>
          </section>

          <div className="straight_line"></div>

          <section>
            <Review />
          </section>
        </div>
      </section>
    </>
  );
}
