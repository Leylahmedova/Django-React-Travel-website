import arrowop from "../images/arrowop.png";
import Rectangle_16 from "../images/Rectangle 16.png";
import Line_1 from "../images/Line 1.png";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import { BsBasket2, BsBasket2Fill } from "react-icons/bs";

import { RiShoppingBag3Line,RiShoppingBag3Fill} from "react-icons/ri";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";
function FlightListing({ basketTicket, dispatch, basketTicketBuy }) {
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

  const addToCard = (id) => {
    dispatch({
      type: "SET_BASKETTICKETBUY",
      payload: [...basketTicketBuy, { id: id }],
    });
  };
  const removeFromCard = (id) => {
    dispatch({
      type: "SET_BASKETTICKETBUY",
      payload: [...basketTicketBuy.filter((ticket) => ticket.id !== id)],
    });
  };

  const [new1,setNew1]=useState(localStorage.getItem("fromtoinput")|| "")
  const [new2,setNew2]=useState(localStorage.getItem("departinput")|| "")
  const [new3,setNew3]=useState(localStorage.getItem("returninput")|| "")
  const [new4,setNew4]=useState(localStorage.getItem("passengerinput")|| "")

  
  
  const [data, setData] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [filter, setFilter] = useState({
    fromTo:  `${new1}`,
    departDate: `${new2}`,
    returnDate:  `${new2}`,
    passengerClass: `${new4}`,
    checkedAirlines: [],
    selectedRating: "",
    timeRange: [0, 24],
    priceRange: [0, 1000],
    filterType: "Cheapest",
  });

  const [numShown, setNumShown] = useState(4);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  function handleShowMore() {
    setNumShown(numShown + 4);
  }

  function handleShowLess() {
    setNumShown(4);
  }

  //yeni yazilanlar
  useEffect(() => {
    fetch("http://localhost:8000/blog/list/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredFlights(data);
      });
  }, []);
  const ticketElements = filteredFlights.slice(0, numShown);
const [basketItems, setBasketItems] = useState([]);
const[favoritItems,setFavoritItems]=useState([])
  const handleAddToBasket = (productId) => {
    fetch('/blog/basket/', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBasketItems((prevBasketItems) => [...prevBasketItems, data]);
        basketItems.map((a)=>{
          console.log(a.product.id)
        })
      })
      .catch((error) => {
        console.error('Error adding item to basket:', error);
      });
  };

  const handleRemoveFromBasket = (itemId) => {  
    fetch(`/blog/basket/${itemId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',  
      },
    })
    .then((response) => {
      if (response.ok) {
        
        const updatedBasketItems = basketItems.filter((item) => item.id !== parseInt(itemId));
        setBasketItems(updatedBasketItems);
      } else {
        console.error('Error removing item from basket:', response.statusText);
      }
    })
  };

  const handleAddToFavoritTicket = (productId) => {
    fetch('/blog/ticketfavorit/', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoritItems((prevBasketItems) => [...prevBasketItems, data]);
      })
      .catch((error) => {
        console.error('Error adding item to basket:', error);
      });
  };
  const handleRemoveFavoritTicket= (itemId) => {  
    fetch(`/blog/ticketfavorit/${itemId}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',  
      },
    })
    .then((response) => {
      if (response.ok) {
        
        const updatedBasketItems = favoritItems.filter((item) => item.id !== parseInt(itemId));
        setFavoritItems(updatedBasketItems);
      } else {
        console.error('Error removing item from basket:', response.statusText);
      }
    })
  };



  ///////////////////

  const allAirlines = data.map((flight) => flight.airline);
  const uniqueAirlines = [...new Set(allAirlines)];

  const handlefilter = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const checkedAirlines = filter.checkedAirlines.slice();

      if (checked) {
        checkedAirlines.push(value);
      } else {
        const index = checkedAirlines.indexOf(value);

        if (index > -1) {
          checkedAirlines.splice(index, 1);
        }
      }

      setFilter({
        ...filter,
        checkedAirlines,
      });
    } else {
      setFilter({
        ...filter,
        [name]: value,
      });
    }
  };

  const handlePriceRangeChange = (value) => {
    setFilter({ ...filter, priceRange: value });
  };

  const handleTimeRangeChange = (value) => {
    setFilter({ ...filter, timeRange: value });
  };

  const handleStyle = {
    backgroundColor: "#8dd3bb",
    border: "2px solid #8dd3bb",
    height: 25,
    width: 25,
    marginTop: -10,
    marginLeft: -1,
    opacity: 1,
  };

  const trackStyle = {
    backgroundColor: "#112211",
    height: 3,
  };

  useEffect(() => {
    let filteredData = data.filter((flight) => {
      if (
        filter.fromTo &&
        !flight.fromTo.toLowerCase().startsWith(filter.fromTo.toLowerCase())
      ) {
        return false;
      }

      if (filter.departDate && flight.departDate) {
        const departDateObj = new Date(filter.departDate);
        const flightDepartDateObj = new Date(flight.departDate);
        if (departDateObj.getTime() !== flightDepartDateObj.getTime()) {
          return false;
        }
      }

      if (filter.returnDate && flight.returnDate) {
        const returnDateObj = new Date(filter.returnDate);
        const flightReturnDateObj = new Date(flight.returnDate);
        if (returnDateObj.getTime() !== flightReturnDateObj.getTime()) {
          return false;
        }
      }

      if (
        filter.passengerClass &&
        flight.passengerClass !== filter.passengerClass
      ) {
        return false;
      }

      if (
        filter.checkedAirlines.length > 0 &&
        !filter.checkedAirlines.includes(flight.airline)
      ) {
        return false;
      }

      if (
        filter.selectedRating &&
        flight.rating <= parseInt(filter.selectedRating)
      ) {
        return false;
      }

      if (filter.timeRange && filter.timeRange.length === 2) {
        const departTime = parseInt(flight.departTime);
        const timeRangeStart = parseInt(filter.timeRange[0]);
        const timeRangeEnd = parseInt(filter.timeRange[1]);
        if (departTime < timeRangeStart || departTime > timeRangeEnd) {
          return false;
        }
      }

      if (filter.priceRange && filter.priceRange.length === 2) {
        const price = parseInt(flight.price);
        const priceRangeStart = parseInt(filter.priceRange[0]);
        const priceRangeEnd = parseInt(filter.priceRange[1]);
        if (price < priceRangeStart || price > priceRangeEnd) {
          return false;
        }
      }

      return true;
    });

    if (filter.filterType === "Cheapest") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (filter.filterType === "Best") {
      filteredData.sort((a, b) => b.rating - a.rating);
    } else if (filter.filterType === "Quickest") {
      filteredData.sort((a, b) => a.duration - b.duration);
    }

    setFilteredFlights(filteredData);
  }, [data, filter]);


  return (
    <div className="container__full">
    <section className="FlightListing">
      <div className="container">
        <section className="flight_listing_roadmap">
          <div className="flight_listing_roadmap_box">
            <div>
              <span>From - To</span>

              <input
                type="text"
                name="fromTo"
                value={filter.fromTo}
                onChange={handlefilter}
                placeholder="Lahore - Karachi"
              />
              <img src={arrowop} alt="" />
            </div>
          </div>

          <div className="flight_listing_roadmap_box">
            <div>
              <input
                type="date"
                name="departDate"
                value={filter.departDate}
                onChange={handlefilter}
              />
              <span>Depart </span>
            </div>
          </div>

          <div className="flight_listing_roadmap_box">
            <div>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={filter.returnDate}
                onChange={handlefilter}
              />
              <span>Return</span>
            </div>
          </div>

          <div className="flight_listing_roadmap_box">
            <div>
              <select
                id="passengerClass"
                name="passengerClass"
                value={filter.passengerClass}
                onChange={handlefilter}
              >
                <option value="">Passenger Class</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
              <span>Passenger - class</span>
            </div>
          </div>
        </section>

        <section className="flight_listing_main_section">
          <div>
            <h3>Filters</h3>

            <div className="filte_box">
              <div>
                <h4>Price</h4>
              </div>
              <div>
                <Slider
                  range
                  min={0}
                  max={1000}
                  value={filter.priceRange}
                  onChange={handlePriceRangeChange}
                  handleStyle={handleStyle}
                  trackStyle={trackStyle}
                />
                <div className="filter_values">
                  <span>${filter.priceRange[0]}</span>
                  <span>${filter.priceRange[1]}</span>
                </div>
              </div>
            </div>
            <img src={Rectangle_16} alt="" />
            <div className="filte_box">
              <div>
                <h4>Departure Time</h4>
              </div>
              <div>
                <Slider
                  range
                  min={0}
                  max={24}
                  step={0.01}
                  value={filter.timeRange}
                  onChange={handleTimeRangeChange}
                  handleStyle={handleStyle}
                  trackStyle={trackStyle}
                />
                <div className="filter_values">
                  <span>{filter.timeRange[0]}</span>
                  <span>{filter.timeRange[1]}</span>
                </div>
              </div>
            </div>
            <img src={Rectangle_16} alt="" />

            <div className="filte_box">
              <div>
                <h4>Rating</h4>
              </div>
              <div className="filter_rating_flex">
                <div className="filter_rating">
                  <button
                    className={
                      filter.selectedRating === "0+" ? "ratingActive" : ""
                    }
                    onClick={() =>
                      setFilter({ ...filter, selectedRating: "0+" })
                    }
                  >
                    <span>0+</span>
                  </button>
                </div>
                <div className="filter_rating">
                  <button
                    className={
                      filter.selectedRating === "1+" ? "ratingActive" : ""
                    }
                    onClick={() =>
                      setFilter({ ...filter, selectedRating: "1+" })
                    }
                  >
                    <span>1+</span>
                  </button>
                </div>
                <div className="filter_rating">
                  <button
                    className={
                      filter.selectedRating === "2+" ? "ratingActive" : ""
                    }
                    onClick={() =>
                      setFilter({ ...filter, selectedRating: "2+" })
                    }
                  >
                    <span>2+</span>
                  </button>
                </div>
                <div className="filter_rating ">
                  <button
                    className={
                      filter.selectedRating === "3+" ? "ratingActive" : ""
                    }
                    onClick={() =>
                      setFilter({ ...filter, selectedRating: "3+" })
                    }
                  >
                    <span>3+</span>
                  </button>
                </div>
                <div className="filter_rating">
                  <button
                    className={
                      filter.selectedRating === "4+" ? "ratingActive" : ""
                    }
                    onClick={() =>
                      setFilter({ ...filter, selectedRating: "4+" })
                    }
                  >
                    <span>4+</span>
                  </button>
                </div>
              </div>
            </div>
            <img src={Rectangle_16} alt="" />

            <div className="filte_box">
              <div>
                <h4>Airlines</h4>
              </div>
              <div>
                <div className="filter_airlines_flex">
                  {uniqueAirlines.map((airline) => (
                    <label key={airline}>
                      <input
                        type="checkbox"
                        name="checkedAirlines"
                        value={airline}
                        checked={filter.checkedAirlines.includes(airline)}
                        onChange={handlefilter}
                      />
                      <span>{airline}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              
              <button className="clear_filter"
                onClick={() => setFilter({
                  fromTo:  ``,
                  departDate: ``,
                  returnDate:  ``,
                  passengerClass: ``,
                  checkedAirlines: [],
                  selectedRating: "",
                  timeRange: [0, 24],
                  priceRange: [0, 1000],
                  filterType: "Cheapest",
                })}
              >
                Clear Filter
              </button>
            </div>
          </div>

          <div className="line_up"></div>

          <div className="flight_listing_places">
            <div className="wrapper">
              <div
                className={`flight_listing_places_box ${
                  activeIndex === 0 ? "active" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                <button
                  onClick={() =>
                    setFilter({ ...filter, filterType: "Cheapest" })
                  }
                >
                  <p>Cheapest</p>
                </button>
                {activeIndex === 0 && <div className="boxline" />}
              </div>
              <img src={Line_1} alt="" />

              <div
                className={`flight_listing_places_box ${
                  activeIndex === 1 ? "active" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                <button
                  onClick={() => setFilter({ ...filter, filterType: "Best" })}
                >
                  <p>Best</p>
                </button>
                {activeIndex === 1 && <div className="boxline" />}
              </div>
              <img src={Line_1} alt="" />

              <div
                className={`flight_listing_places_box ${
                  activeIndex === 2 ? "active" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                <button
                  onClick={() =>
                    setFilter({ ...filter, filterType: "Quickest" })
                  }
                >
                  <p>Quickest</p>
                </button>
                {activeIndex === 2 && <div className="boxline" />}
              </div>
            </div>
            <div className="flight_listing_page_count">
              <p>
                Showing {ticketElements.length} of{" "}
                <span>{filteredFlights.length} places</span>
              </p>
            </div>

            {ticketElements.map((ticket) => {
              const inBasket = basketTicket.find((t) => t.id === ticket.id);
              const inBasketBuy = basketTicketBuy.find(
                (t) => t.id === ticket.id
              );
              
              return (
                <div className="flight_listing_places_name" key={ticket.id}>
                  <div 
                    style={{ backgroundImage: `url(${ticket.image})`,
                    }}
                  ></div>

                  <div className="flight_listing_places_name_feat">
                    <div>
                      <div>
                        <button className="flight_frame">
                          <p>{ticket.rating}</p>
                        </button>
                        <p>
                          <span>{ticket.reviewQuality}</span>{" "}
                          {ticket.reviewCount} reviews
                        </p>
                      </div>
                      <div>
                        <p>starting from</p>
                        <h4>${ticket.price}</h4>
                      </div>
                    </div>

                    <div>
                      <div>
                        <div>
                          <div>
                            <h3>
                              {ticket.departTime} - {ticket.arrivalTime}
                            </h3>
                            <span>{ticket.airline}</span>
                          </div>

                          <p>non stop</p>

                          <div>
                            <h3>{ticket.durationstring}</h3>
                            <span>{ticket.passengerClass}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3>
                          {ticket.departDate} - {ticket.returnDate}
                        </h3>
                        <p>
                          {ticket.froms}-{ticket.to}
                        </p>
                      </div>
                    </div>

                    <div className="rectangle4">.</div>

                    <div className="view_places_flex">
                      <div className="filter_rating e">
                        {inBasket ? (
                          <button onClick={() => {
                            handleRemoveFavoritTicket(ticket.id)
                            removeFromBasket(ticket.id)}}>
                           <MdFavorite className="favorutie_heart"/>
                          </button>
                        ) : (
                          <button onClick={() =>{ 
                            handleAddToFavoritTicket(ticket.id)
                            addToBasket(ticket.id)}}>
                            <MdFavoriteBorder className="favorutie_heart"/>
                          </button>
                        )}
                      </div>
                      <Link to={`/flight-details/${ticket.id}`}>
                        View Place
                      </Link>
                      <div className="add_to_basket">
                        {inBasketBuy ? (
                          <button onClick={() =>
                           { handleRemoveFromBasket(ticket.id)
                           removeFromCard(ticket.id)}}>
                            <RiShoppingBag3Fill/>
                          </button>
                        ) : (
                          <button onClick={() =>{ 
                            handleAddToBasket(ticket.id)
                            addToCard(ticket.id)}}>
                            <RiShoppingBag3Line />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {numShown < filteredFlights.length ? (
              <button className="show_result" onClick={handleShowMore}>
                Show More
              </button>
            ) : (
              <button className="show_result" onClick={handleShowLess}>
                Show Less
              </button>
            )}
          </div>
        </section>
      </div>
    </section>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(FlightListing);
