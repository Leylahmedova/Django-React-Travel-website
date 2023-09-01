import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import AOS from "aos";

const planeimg='planeImg.png'
const planeimgPath=`/static/${planeimg}`
function NotFound() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
   

     <div className="container_main">
     <div className="error-page">
        <div className="error-left"  data-aos={"fade-right"}>
            <img src={planeimgPath} alt="" />
        </div>
        <div className="error-content"   data-aos={"fade-left"}>
            <h1>40<span>4</span> </h1>
            <h2>Oops! It looks like you're lost.</h2>
            <p>The page you're looking for isn't available. Try to search again or use the go to.</p>
            <Link to="/">Go back to homepage</Link>
        </div>
    </div>
     </div>
     
    </>
  
  )
  }
export default NotFound




