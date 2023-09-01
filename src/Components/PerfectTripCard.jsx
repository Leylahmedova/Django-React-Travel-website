import Aos from "aos"
import { useEffect } from "react";
function PerfectTripCard({perfectCardImg,tripName}) {
  
  useEffect(() => {
    Aos.init({

    });
  },[]);

  return (
    <div data-aos={"flip-left"} className="perfect_trip_card">
        <img src={perfectCardImg} alt="" />
        <div>
           <h4>{tripName}</h4>
           <h5>Flights • Hotels • Resorts</h5>
        </div>
    </div>
  )
}

export default PerfectTripCard