import React from "react";
import SriLanka1 from "../images/SriLanka1.png";
import SriLanka2 from "../images/SriLanka2.png";
import SriLanka3 from "../images/SriLanka3.png";
import SriLanka4 from "../images/SriLanka4.png";
const SriLanka = () => {
  return (
    <>
      <div className="container_main">
        <div className="sri__Lanka">
          <div className="about__Sri__Lanka">
            <div className="sri__lanka__title">
              <h1>Backpacking Sri Lanka</h1>
              <div className="sri__lanka__price">
                <h3>
                  From <span>$700</span>
                </h3>
              </div>
            </div>
            <p>
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
            <div className="btn-div">
              <button>Book Flight</button>
            </div>
          </div>
          <div className="sri__lanka__imgs">
            <div>
              <img
                src="https://www.myluxurytravel.fr/wp-content/uploads/2017/07/voyage-sur-mesure-sri-lanka-scaled.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt140a002a321661c3/60ab2583a450c25ac83cfc58/UK_SriLanka_LK_Header.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i.assetzen.net/i/2VY7rX5z2Jh1/w:1200/h:808/q:70.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://travelmelodies.com/wp-content/uploads/2017/12/travel-melodies-sri-lanka-itinerary-with-kids-768x576.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sri__lanka__blank"></div>
    </>
  );
};

export default SriLanka;
