import { connect } from "react-redux";
import accountBack from "../images/accountBack.png";
import john from "../images/John.png";
import { Link } from "react-router-dom";
import Modal from "../Components/Modal";
import visa from "../svg/visaBlack.svg";
import radio from "../svg/radio.svg";
import addCard from "../svg/addCard.svg";
import checkbox from "../svg/checkbox.svg";
import { AiOutlineClose } from "react-icons/ai";
import swal from "sweetalert";
import { MdOutlineDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AccountFlow({
  basketHotelBuy,
  hotels,
  dispatch,
  tickets,
  basketTicketBuy,
}) {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  
  const resetInputs = () => {
    setCardNumber("");
    setExpDate("");
    setCvc("");
    setNameOnCard("");
    setCountry("");
  };
  const [showFlight, setShowFlight] = useState(true);
  const [showStays, setShowStays] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [open, setOpen] = useState(true);

  if (open) {
    setShowCard(false);
    setShowModal(false);
    setOpen(false);
  }
  const [data, setData] = useState([]);
  const [hoteldata, setHotelData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const handleRemoveAllFromBasketHotel = () => {
    fetch(`/blog/hotelbasket/removeAll/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setHotelBasketItems([]);
        setHotelData([]); // Tüm otel verilerini sıfırla
        removeAllFromHotelCard();
        fetch("http://localhost:8000/blog/basket/")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
      } else {
        console.error("Error removing items from basket:", response.statusText);
      }
    });
  };
  const handleRemoveAllFromBasketTicket = () => {
    // Assuming you have some form of authentication/token handling
    const authToken = "your_auth_token_here"; // Replace with actual authentication token
  
    fetch(`/blog/basket/removeAll/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`, // Include authentication token
      },
    })
    .then((response) => {
      if (response.ok) {
        // Assuming these functions exist and have the expected behavior
        removeAllFromTicketCard();
        setBasketItems([]);
        
        // Fetch updated data after removing items from the basket
        return fetch("http://localhost:8000/blog/basket/");
      } else {
        throw new Error("Error removing items from basket");
      }
    })
    .then((response) => response.json())
    .then((data) => {
      // Assuming this function updates the data state
      setData(data);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  };
  
  const removeAllFromHotelCard = () => {
    dispatch({
      type: "SET_BASKETHOTELBUY",
      payload: [],
    });
  };
  const removeAllFromTicketCard= () => {
    dispatch({
      type: "SET_BASKETTICKETBUY",
      payload: [],
    });
  };

  const [promokod, setPromokod] = useState("");
  const [promokodlar, setPromokodlar] = useState([
    "PROMO1",
    "PROMO2",
    "PROMO3",
  ]);
  const [discount, setDiscount] = useState(false);
  const submitpromokod = (e) => {
    e.preventDefault();
    // Burada promokod değerini kullanabilirsiniz
    const matchedPromokod = promokodlar.find((item) => item === promokod);

    if (matchedPromokod) {
      console.log("Promokod matched:", matchedPromokod);
      setDiscount(true);
    } else {
      setDiscount(false);
      console.log("Promokod not found");
    }
    setPromokod('')
  };

  const navigate = useNavigate();
  const [hotelPrice, setHotelPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  let total = 0;
  let totalTicket=0

  useEffect(() => {
    hoteldata.map((a) => {
      total = total + a.product.price;
      setHotelPrice(total);
    });
    if(discount&&showStays &&(total!=0)){
      total=total-50
      setHotelPrice(total)
    }
  

  }, [hoteldata,discount]);
  useEffect(() => {
    data.map((a) => {
      totalTicket = totalTicket + a.product.price;
      setTicketPrice(totalTicket);
    });
    if(discount&&showFlight &&(totalTicket!=0)){
      totalTicket=totalTicket-50
      setTicketPrice(totalTicket)
    }
   
  }, [data,discount]);
  const [type,setType]=useState("")
  const [totalprice,setTotalprice]=useState(0)
  useEffect(()=>{
    if(showFlight){
      setTotalprice(ticketPrice)
    }
    else if(showStays){
       setTotalprice(hotelPrice)
    }

  },[showFlight, showStays, ticketPrice, hotelPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(showFlight){
      setType("Flight")
    }
    else{
       setType("Hotel")
    }
      const cardData = {
      cardnumber: cardNumber,
      expdate: expDate,
      cvc: cvc,
      nameoncard: nameOnCard,
      country: country,
      hotelprice:totalprice,
      type:type
    };
    try {
      const response = await fetch("/payments/add_card/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      const responseData = await response.json();

      if (response.ok) {

        setOpen(!open)
        if(type=='Flight'){
         handleRemoveAllFromBasketTicket()
        }
        else if(type=='Hotel'){
          handleRemoveAllFromBasketHotel();
        }
  
        console.log("Card added successfully.");
        resetInputs();
        setErrors({});
        navigate("/invoice");
      } else {
        console.error("Error adding card.");
        setErrors(responseData); // Set errors to display to the user
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const removeFromCard = (id) => {
    dispatch({
      type: "SET_BASKETTICKETBUY",
      payload: [...basketTicketBuy.filter((ticket) => ticket.id !== id)],
    });
  };

  const removeFromHotelCard = (id) => {
    dispatch({
      type: "SET_BASKETHOTELBUY",
      payload: [...basketHotelBuy.filter((ticket) => ticket.id !== id)],
    });
  };

  //yeni yazdiqlarim

  useEffect(() => {
    fetch("http://localhost:8000/blog/basket/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/blog/hotelbasket/")
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data);
      });
  }, []);

  

  const handleRemoveFromBasket = (itemId) => {
    fetch(`/blog/basket/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        const updatedBasketItems = basketItems.filter(
          (item) => item.id !== parseInt(itemId)
        );
        setBasketItems(updatedBasketItems);
        fetch("http://localhost:8000/blog/basket/")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
      } else {
        console.error("Error removing item from basket:", response.statusText);
      }
    });
  };
  const [hotelBasketItems, setHotelBasketItems] = useState([]);

  const handleRemoveFromBasketHotel = (itemId) => {
    fetch(`/blog/hotelbasket/${itemId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        const updatedBasketItems = hotelBasketItems.filter(
          (item) => item.id !== parseInt(itemId)
        );
        setHotelBasketItems(updatedBasketItems);

        fetch("http://localhost:8000/blog/hotelbasket/")
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
    <section className="account_section">
      <div className="container_main">
        <div className="account_back">
          <img src={accountBack} alt="" />
        </div>
        {/* <div className="account_logo">
          <img src={john} alt="" />
          <h1>John Doe.</h1>
          <p>john.doe@gmail.com</p>
        </div> */}
        <h1 className="account_h1">Tickets/Bookings</h1>
        <div className="account_tab">
          <div
            className={showFlight ? "account_active_tab" : null}
            onClick={() => {
              setShowStays(!showStays);
              setShowFlight(!showFlight);
            }}
          >
            <h1> Flights</h1>
            <span>{data.length} marked</span>
          </div>
          <div
            className={showStays ? "account_active_tab" : null}
            onClick={() => {
              setShowStays(!showStays);
              setShowFlight(!showFlight);
            }}
          >
            <h1>Stays</h1>
            <span>{hoteldata.length} marked</span>
          </div>
        </div>

        <div className="accountflow__page">
          <div className="account_1">
          <div  style={showFlight ? { display: "block" } : { display: "none" }}>
           
            {data.length
              ? data.map((ticket) => {
                  return (
                    <div className="account_card" key={ticket.product.id}>
                      <div>
                        <img  src={ticket.product.image} alt="" />
                      </div>
                      <div>
                        <div>
                          <h4>{ticket.product.froms}</h4>
                          <h2>{ticket.product.departTime}</h2>
                        </div>
                        <div>
                          <h2>—</h2>
                        </div>
                        <div>
                          <h4>{ticket.product.to}</h4>
                          <h2>{ticket.product.arrivalTime}</h2>
                        </div>
                      </div>
                      <div>
                        <div>
                          <h4>Date</h4>
                          <h2>{ticket.product.departDate}</h2>
                        </div>
                        <div>
                          <h2>—</h2>
                        </div>
                       
                        <div>
                          <h4>Return Date</h4>
                          <h2>{ticket.product.returnDate}</h2>
                        </div>
                      </div>
                      <div>
                        <h4>Price</h4>
                        <h2>{ticket.product.price}$</h2>
                      </div>
                    
                      <div className="remove_from_basket">

                        <button
                          onClick={() => {
                            removeFromCard(ticket.product.id);
                            handleRemoveFromBasket(ticket.product.id);
                          }}
                        >
                          <MdOutlineDelete className="remove_basket" />
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
            
         
          </div>
          <div style={showFlight ? { display: "block" } : { display: "none" }} className="basket__card">
            <div>
              <h2>Price</h2>
              <span>{discount &&showFlight? ticketPrice+50 :ticketPrice}$</span>
            </div>
            
            <div>
              <h2>Discount:</h2>
              <span>{discount? 50:0}$</span>
            </div>
            <div>
              <h2>Total price:</h2>
              <span>{ticketPrice}$</span>
            </div>
 
                
            <div>
              <h2>Promo Code</h2>
              <form onSubmit={submitpromokod}>
                <input
                  name="promokod"
                  value={promokod}
                  onChange={(e) => setPromokod(e.target.value)}
                  type="text"
                  placeholder="Enter promo code:"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div>
              <Link  onClick={() => setShowModal(!showModal)} to="" href="">
                Download Ticket
              </Link>
            </div>
            </div>
         
          </div>

          <div className="account_1">
          <div style={showStays ? { display: "block" } : { display: "none" }} >
            {hoteldata.length
              ? hoteldata.map((ticket) => {
                  return (
                    <div className="account_card" key={ticket.product.id}>
                      <div className="account_hotel_image">
                        <img src={ticket.product.image} alt="" />
                      </div>
                      <div>
                        <div>
                          <h4>{ticket.product.destination}</h4>
                        </div>
                        <div>
                          <h2>—</h2>
                        </div>

                        <h4>{ticket.product.location}</h4>
                      </div>

                      <div>
                        <div>
                          <h4>Name</h4>
                          <h2>{ticket.product.name}</h2>
                        </div>
                        <div>
                          <h2>—</h2>
                        </div>
                        <div>
                          <h4>price</h4>
                          <h2>{ticket.product.price}</h2>
                        </div>
                      </div>
                        <div className="remove_from_basket">

                        <button
                          onClick={() => {
                            removeFromHotelCard(ticket.product.id);
                            handleRemoveFromBasketHotel(ticket.product.id);
                          }}
                        >
                          <MdOutlineDelete className="remove_basket" />
                        </button>
                      </div>
                    
                    </div>
                  );
                })
              : null}
                 </div>
               <div style={showStays ? { display: "block" } : { display: "none" }}  className="basket__card">
            <div>
              <h2>Price</h2>
              <span>{discount &&showStays? hotelPrice+50 :hotelPrice}$</span>
            </div>
            
            <div>
              <h2>Discount:</h2>
              <span>{discount? 50:0}$</span>
            </div>
            <div>
              <h2>Total price:</h2>
              <span>{hotelPrice}$</span>
            </div>
 
                
            <div>
              <h2>Promo Code</h2>
              <form onSubmit={submitpromokod}>
                <input
                  name="promokod"
                  value={promokod}
                  onChange={(e) => setPromokod(e.target.value)}
                  type="text"
                  placeholder="Enter promo code:"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div>
              <Link  onClick={() => setShowModal(!showModal)} to="" href="">
                Download Ticket
              </Link>
            </div>
            </div>  
          </div> 
 
          

     
          {showModal && (
            <div className="modal">
              <form onSubmit={handleSubmit}>
                <h1>
                  Add a card{" "}
                  <AiOutlineClose
                    className="modal_close"
                    onClick={() => setHide(!hide)}
                  />
                </h1>
                <AiOutlineClose
                  className="modal_close"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
                <fieldset style={errors.cardnumber ? { borderColor:"red"} :null}>
                  <legend>Card Number</legend>
                  <input
                    type="text"
                    name="cardnumber"
                    value={cardNumber}
                    maxLength={19}
                    // onChange={(e) => setCardNumber(e.target.value)}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setCardNumber(e.target.value);
                      // Sadece rakam ve boşluk kabul eden bir regex
                      if (
                        /^\d{0,4}(\s?\d{0,4})?(\s?\d{0,4})?(\s?\d{0,4})?$/.test(
                          inputValue
                        )
                      ) {
                        // Boşlukları ve gereksiz karakterleri temizle
                        const cleanedValue = inputValue.replace(/\s+/g, "");

                        // Her 4 rakamdan sonra boşluk ekle
                        let formattedValue = "";
                        for (let i = 0; i < cleanedValue.length; i++) {
                          if (i > 0 && i % 4 === 0) {
                            formattedValue += " ";
                          }
                          formattedValue += cleanedValue[i];
                        }

                        setCardNumber(formattedValue);
                      }
                    }}
                    placeholder="4321 4321 4321 4321"
                  />
               
                </fieldset>
                {errors.cardnumber && (
                    <span className="error">{errors.cardnumber}</span>
                  )}

                <div>
                  <div className="expdate">
                  <fieldset style={errors.expdate ? { borderColor:"red"} :null}>
                    <legend>Exp. Date</legend>
                    <input
                      name="expdate"
                      value={expDate}
                      maxLength={4}
                      // onChange={(e) => setExpDate(e.target.value)}
                      onChange={(e) => {
                        if (e.target.value.length <= 4) {
                          setExpDate(e.target.value);
                        }
                      }}
                      type="number"
                      placeholder="02/27"
                    />
                   
                  </fieldset>
                  {errors.expdate && (
                      <span className="error">{errors.expdate}</span>
                    )}
                    </div>
                    <div className="expdate">
                  <fieldset style={errors.cvc ? { borderColor:"red"} :null}>
                    <legend>CVC</legend>
                    <input
                      name="cvc"
                      value={cvc}
                      maxLength={3}
                      // onChange={(e) => setCvc(e.target.value)}
                      onChange={(e) => {
                        if (e.target.value.length <= 3) {
                          setCvc(e.target.value);
                        }
                      }}
                      type="number"
                      placeholder="123"
                    />
                   
                  </fieldset>
                  {errors.cvc && <span className="error">{errors.cvc}</span>}
                  </div>
                </div>


                <fieldset  style={errors.nameoncard ? { borderColor:"red"} :null}>
                  <legend>Name on Card</legend>
                  <input
                    name="nameoncard"
                    value={nameOnCard}
                    maxLength={30}
                    onChange={(e) => {
                      if (e.target.value.length <= 20) {
                        setNameOnCard(e.target.value);
                      }
                    }}
                    //onChange={(e) => setNameOnCard(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                  />
                 
                </fieldset>
                {errors.nameoncard && (
                    <span className="error">{errors.nameoncard}</span>
                  )}
                <fieldset style={errors.country ? { borderColor:"red"} :null}>
                  <legend>Country or Region</legend>
                  <input
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="United States"
                  />
                 
                </fieldset>
                {errors.country && (
                    <span className="error">{errors.country}</span>
                  )}
                <fieldset>
                  <legend>Total-price</legend>
                  <input
                    name="totalprice"
                    value={totalprice}
                    disabled={true}
                    type="number"
                   
                  />
                 
                </fieldset>
             
                <button className="login_btn">Add Card</button>

                <p>
                  By confirming your subscription, you allow The Outdoor Inn
                  Crowd Limited to charge your card for this payment and future
                  payments in accordance with their terms. You can always cancel
                  your subscription.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(AccountFlow);
