import Introsection from "../Components/Introsection";
import Navbar from "../Components/Navbar";
import Videos from "./Vidoes";
import FallintotravelCard from "../Components/FallintotravelCard";
import telegram from "../svg/telegram.svg";
import leftrightarrow from "../svg/leftrightarrow.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function FlightSearch({dispatch}) {
  const [trip, setTrip] = useState([]);
  const [location,setLocation]=useState([])
  const [locationCount,setLocationCount]=useState(1) 
  const [count, setCount] = useState(4);
  
  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((a) => a.json())
      .then((a) => {
        setTrip(a);
      });

      fetch("http://localhost:3000/location")
      .then((b)=>b.json())
      .then((b)=>{
         setLocation(b)
      })
  }, []);
  const [fromto, setFromto] = useState("");
  const [depart,setDepart]=useState("")
  const [returns,setReturns]= useState("");
  const [passenger,setPassenger]=useState("")
  const nav=useNavigate()

  const fromtoChange = () => {
   dispatch({
        type: "FROMTO_INPUT",
        payload:fromto,
      });
  };
  const departChange=()=>{
    dispatch({
      type:"DEPART_INPUT",
      payload:depart
    })
  }
  const returnChange=()=>{
    dispatch({
      type:"RETURN_INPUT",
      payload:returns
    })
  }

  const passengerChange=()=>{
    dispatch({
      type:"PASSENGER_INPUT",
      payload:passenger
    })
  }


  const commonFunc=(e)=>{
    e.preventDefault()
    fromtoChange()
    departChange()
    returnChange()
    passengerChange()
    nav("/flight-listing")
  }

  const seeLess=()=>[setLocationCount(1)]

  const handleClick = () => [setCount(count + 4)];
  const handleClickLess=()=>[setCount(4)]
  const seeMore=()=>[setLocationCount(locationCount + 1)]
  return (
    <>
    <div className="container__full">
      <Navbar />
      <div className="introsection-flight-search">
          <Introsection/>
        </div>
      <div className="container_main">
        <div className="whereFlying">
          <h3>Where are you flying? </h3>
          <div className="flying-inputs">
            <form action="">
              <fieldset>
                <legend>From - To</legend>
                <input
                value={fromto}
                onChange={(e)=>setFromto(e.target.value)}
                 type="text" placeholder="Lahore - Karachi" />
                <img src={leftrightarrow} alt="" />
              </fieldset>
              <fieldset>
                <legend>Depart</legend>
                <input
   value={depart}
   onChange={(e)=>setDepart(e.target.value)}
                  type="date"
                  name="departDate"
                  
                />
              </fieldset>

              <fieldset>
                <legend>Return</legend>
                <input
                  value={returns}
                  onChange={(e)=>setReturns(e.target.value)}
                
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  
                />
              </fieldset>

              <fieldset>
                <legend>Passenger - className</legend>
                <select id="passengerclassName" name="passengerclassName" onChange={(e)=>setPassenger(e.target.value)}>
                  <option value="">Passenger class</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First className">First className</option>
                </select>
              </fieldset>
{/* state={...filter} */}
              <div className="flying-btns">
                <button>
                  <img src={telegram} alt="" />
                  <Link onClick={commonFunc} >Show Flights</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container_main">
        <div className="text__button__content ">
          <div>
            <h1>Plan your perfect trip</h1>
            <p>Search Flights & Places Hire to our most popular destinations</p>
          </div>
        </div>
      </div>

      <div className="map__background">
        <div className="container">
          <div className="map__coordinat"></div>
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
    <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
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
       {location.slice(0, locationCount).map((t,b) => (
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
                 <p>
                   {t.paragraf}
                 </p>
                 <div onClick={seeMore} className="btn-div">
                 <Link to="/account-flow">Book Flight</Link>
                 </div>
               </div>
               <div className="sri__lanka__imgs">
                 <div>
                   <img
                     src={t.image1}
                     alt=""
                   />
                 </div>
                 <div>
                   <img
                     src={t.image2}
                     alt=""
                   />
                 </div>
                 <div>
                   <img
                     src={t.image3}
                     alt=""
                   />
                 </div>
     
                 <div>
                   <img
                     src={t.image4}
                     alt=""
                   />
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
export default connect(t)(FlightSearch);
