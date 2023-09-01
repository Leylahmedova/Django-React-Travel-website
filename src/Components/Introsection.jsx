import AOS from "aos";
import { useEffect } from "react";

import MovingComponent from "react-moving-text";
import Videos from "../Pages/Vidoes"
const Introsection = () => {

  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <div className="introsection-flight-search">
       <Videos/>
      <div className="introsection-content" data-aos="fade-up">
      <MovingComponent
  type="fadeInFromBottom"
  duration="1500ms"
  delay="0s"
  direction="normal"
  timing="ease-out"
  iteration="1"
  fillMode="backwards">
    <h3>Helping Others</h3>
</MovingComponent>
<MovingComponent
  type="fadeInFromBottom"
  duration="1500ms"
  delay="0s"
  direction="normal"
  timing="ease-out"
  iteration="1"
  fillMode="backwards">
     <h1>Live & Travel</h1>
</MovingComponent>
<MovingComponent
  type="fadeInFromBottom"
  duration="1000ms"
  delay="0.5s"
  direction="normal"
  timing="ease-out"
  iteration="1"
  fillMode="backwards">
  <h5>Special offers to suit your plan</h5>
</MovingComponent>
      </div>
     
    </div>
  )
}

export default Introsection