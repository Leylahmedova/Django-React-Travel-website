import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiDeleteBackFill } from "react-icons/ri";

function Favorities({ basketHotel, hotels, dispatch, tickets, basketTicket }) {
  const [showTicket, setShowTicket] = useState(true);
  const [showHotel, setShowHotel] = useState(false);
  useEffect(() => {
    localStorage.setItem("basketTicket", JSON.stringify(basketTicket));
  }, [basketTicket]);
  const addToBasket = (id) => {
    dispatch({
      type: "SET_BASKETTICKET",
      payload: [...basketTicket, { id: id }],
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: "SET_BASKETTICKET",
      payload: [...basketTicket.filter((ticket) => ticket.id !== id)],
    });
  };

  useEffect(() => {
    localStorage.setItem("basketHotel", JSON.stringify(basketHotel));
  }, [basketHotel]);

  const addToHotelBasket = (id) => {
    dispatch({
      type: "SET_BASKETHOTEL",
      payload: [...basketHotel, { id: id }],
    });
  };
  const removeFromHotelBasket = (id) => {
    dispatch({
      type: "SET_BASKETHOTEL",
      payload: [...basketHotel.filter((ticket) => ticket.id !== id)],
    });
  };
  //teze yazilanlar
  const [data, setData] = useState([]);
  const [hoteldata, setHotelData] = useState([]);
  const [favoritItems, setFavoritItems] = useState([]);
  const [favoritHotel, setFavoritHotel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blog/ticketfavorit/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleRemoveFavoritTicket = (itemId) => {
    fetch(`/blog/ticketfavorit/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        const updatedBasketItems = favoritItems.filter(
          (item) => item.id !== parseInt(itemId)
        );
        setFavoritItems(updatedBasketItems);
        fetch("http://localhost:8000/blog/ticketfavorit/")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
      } else {
        console.error("Error removing item from basket:", response.statusText);
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/blog/hotelfavorit/")
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data);
      });
  }, []);

  const handleRemoveFavoritHotel = (itemId) => {
    fetch(`/blog/hotelfavorit/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        const updatedBasketItems = favoritHotel.filter(
          (item) => item.id !== parseInt(itemId)
        );
        setFavoritHotel(updatedBasketItems);
        fetch("http://localhost:8000/blog/hotelfavorit/")
          .then((response) => response.json())
          .then((data) => {
            setHotelData(data);
          });
      } else {
        console.error("Error removing item from basket:", response.statusText);
      }
    });
  };

  return (
    <section className="Favorities">
      <div className="container">
        <section className="favorities_category">
          <h2>Favourites</h2>
          <div className="favorities_category_box">
            <div
              className={showTicket ? "active_box" : null}
              onClick={() => {
                setShowHotel(!showHotel);
                setShowTicket(!showTicket);
              }}
            >
              <h4>Flights</h4>
              <span>{data.length ? data.length + " marked" : null}</span>
            </div>
            <span className="flight_return_line"></span>

            <div
              className={showHotel ? "active_box" : null}
              onClick={() => {
                setShowTicket(!showTicket);
                setShowHotel(!showHotel);
              }}
            >
              <h4>Places</h4>
              <span>
                {hoteldata.length ? hoteldata.length + " marked" : null}
              </span>
            </div>
          </div>
        </section>

        <section className="favourites_places">
          <div className={showHotel ? "show_hotels" : "hide_hotels"}>
            {hoteldata.length
              ? hoteldata.map((ticket) => {
                  // let ticket = hotels.find((a) => a.id === basketItem.id);
                  // const inBasket = basketHotel.find((t) => t.id === basketItem.id);
                  // console.log(ticket)
                  {
                    /* data.length?data.map((ticket)=>{ */
                  }
                  return (
                    <div className="favoritie-card" key={ticket.product.id}>
                      <div className="hotel_listing_places_name">
                        <div
                          style={{
                            backgroundImage: `url(${ticket.product.image})`,
                          }}
                        >
                          <div className="favorities_listing_img_frame">
                            <p>9 images</p>
                          </div>
                        </div>

                        <div className="hotel_listing_places_name_feat">
                          <div>
                            <div className="hotel_listing_places_sec">
                              <h3>{ticket.product.name}</h3>
                              <div>
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="small_star "
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                  </svg>

                                  <p>{ticket.product.location}</p>
                                </div>

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

                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="small_star"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                      />
                                    </svg>

                                    <p>
                                      <span>
                                        {
                                          ticket.product.amenities
                                            .length
                                        }
                                      </span>
                                      Amenities
                                    </p>
                                  </div>
                                </div>

                                <div>
                                  <button className="hotel_frame">
                                    <p>{ticket.product.rating}</p>
                                  </button>
                                  <p>
                                    <span>{ticket.product.reviewQuality}</span>{" "}
                                    {ticket.product.reviewCount} reviews
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p>starting from</p>
                              <h4>
                                {ticket.product.price}
                                <span>/night</span>
                              </h4>
                              <p>excl. tax</p>
                            </div>
                          </div>

                          <div className="rectangle4">.</div>
                          <div className="favourites_btns">
                            <Link
                              to={`/hotel-listing-two/${ticket.product.id}`}
                            >
                              <div className="view_places_flex">
                                <button>View Place</button>
                              </div>
                            </Link>
                            <div className="add_to_basket">
                              <button
                                onClick={() => {
                                  handleRemoveFavoritHotel(ticket.product.id);
                                  removeFromHotelBasket(ticket.product.id);
                                }}
                              >
                                <MdFavorite className="favorutie_heart" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>

          <div className={showTicket ? "show_tickets" : "hide_tickets"}>
            {data.length
              ? data.map((ticket) => {
                  // let ticket = tickets.find((a) => a.id === basketItem.id);
                  // const inBasket = basketTicket.find((t) => t.id === basketItem.id);

                  return (
                    <div className="favoritie-card" key={ticket.product.id}>
                      <div className="flight_listing_places_name">
                        <div
                          style={{
                            backgroundImage: `url(${ticket.product.image})`,
                          }}
                        ></div>

                        <div className="flight_listing_places_name_feat">
                          <div>
                            <div>
                              <button className="flight_frame">
                                <p>{ticket.product.rating}</p>
                              </button>
                              <p>
                                <span>{ticket.product.reviewQuality}</span>{" "}
                                {ticket.productreviewCount} reviews
                              </p>
                            </div>
                            <div>
                              <p>starting from</p>
                              <h4>${ticket.product.price}</h4>
                            </div>
                          </div>

                          <div>
                            <div>
                              <div>
                                <div>
                                  <h3>
                                    {ticket.product.departTime} -{" "}
                                    {ticket.product.arrivalTime}
                                  </h3>
                                  <span>{ticket.product.airline}</span>
                                </div>

                                <p>non stop</p>

                                <div>
                                  <h3>{ticket.product.durationstring}</h3>
                                  <span>{ticket.product.passengerClass}</span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3>
                                {ticket.product.departDate} -{" "}
                                {ticket.product.returnDate}
                              </h3>
                              <p>
                                {ticket.product.froms}-{ticket.product.to}
                              </p>
                            </div>
                          </div>

                          <div className="rectangle4">.</div>
                          <div className="favourites_btns">
                            <Link to={`/flight-details/${ticket.product.id}`}>
                              <div className="view_places_flex">
                                <button className="view_places_flex">
                                  View Place
                                </button>
                              </div>
                            </Link>
                            <div className="add_to_basket">
                              <button
                                onClick={() => {
                                  handleRemoveFavoritTicket(ticket.product.id);
                                  removeFromBasket(ticket.product.id);
                                }}
                              >
                                <MdFavorite className="favorutie_heart" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </section>
      </div>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Favorities);
