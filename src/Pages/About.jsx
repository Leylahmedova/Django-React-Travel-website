import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 0,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }, []);

  const [boxHeight, setBoxHeight] = useState(600);

  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(true);
  };
  return (
    <>
      <section className="About container__full">
        <Navbar />

        <section className="about_intro">
          <div className="container_main about_hero_text">
            <h1>About Us</h1>
            <h5>
              <span>
                <Link to="/">
                  Home <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </span>
              <span>
                <a href="" style={{ color: "#8dd3bb " }}>
                  About <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </span>
            </h5>
          </div>
        </section>

        <section className="about_services">
          <div className="container_main">
            <div>
              <div className="about_service_box">
                <div>
                  <FontAwesomeIcon
                    icon={faSailboat}
                    style={{ color: "#8dd3bb ", fontSize: "60px" }}
                  />
                </div>
                <h3>Activities</h3>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="about_service_box">
                <div>
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    style={{ color: "#8dd3bb ", fontSize: "60px" }}
                  />
                </div>
                <h3>Travel Arrangements</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
              <div className="about_service_box">
                <div>
                  <FontAwesomeIcon
                    icon={faCompass}
                    style={{ color: "#8dd3bb ", fontSize: "60px" }}
                  />
                </div>
                <h3>Private Guide</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
              <div className="about_service_box">
                <div>
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    style={{ color: "#8dd3bb ", fontSize: "60px" }}
                  />
                </div>
                <h3>Location Manager</h3>
                <p>
                  A small river named Duden flows by their place and supplies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container_main">
          <section className="about_counter">
            <div>
              <img
                src="https://preview.colorlib.com/theme/traveland/images/about.jpg"
                alt=""
              />
            </div>
            <div>
              <div>
                <h2>About Traveland</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
              <div>
                <div className="about_counter_box">
                  <div>
                    <p>30</p>
                    <span>Amazing Deals</span>
                  </div>
                </div>
                <div className="about_counter_box">
                  <div>
                    <p>200</p>
                    <span>Sold Tours</span>
                  </div>
                </div>
                <div className="about_counter_box">
                  <div>
                    <p>2,500</p>
                    <span>New Tours</span>
                  </div>
                </div>
                <div className="about_counter_box">
                  <div>
                    <p>40</p>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="about_testimony">
          <div className="container_main">
            <h2>Happy Traveler Says</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide about_testimony_box"
                  style={{
                    backgroundImage: `url('https://preview.colorlib.com/theme/traveland/images/traveler-1.jpg')`,
                    height: `${boxHeight}px`,
                  }}
                >
                  <div>
                    <p>
                    I was really excited to try this product, but unfortunately it didn't live up to my expectations. It's difficult to use and doesn't have all the features I was looking for.
                    </p>
                    <p>Roger Scott</p>
                    <span>Marketing Manager</span>
                  </div>
                </div>
                <div
                  className="swiper-slide about_testimony_box"
                  style={{
                    backgroundImage: `url('https://preview.colorlib.com/theme/traveland/images/traveler-2.jpg')`,
                    height: `${boxHeight}px`,
                  }}
                >
                  <div>
                    <p>
                    This product exceeded my expectations in every way. It's easy to use and has all the features I need. Highly recommended!
                    </p>
                    <p>Roger Scott</p>
                    <span>Marketing Manager</span>
                  </div>
                </div>
                <div
                  className="swiper-slide about_testimony_box"
                  style={{
                    backgroundImage: `url('https://preview.colorlib.com/theme/traveland/images/traveler-3.jpg')`,
                    height: `${boxHeight}px`,
                  }}
                >
                  <div>
                    <p>
                      If you're new to this kind of product, this is a great
                      option. It's easy to use and has all the basic features
                      you need to get started. However, more advanced users
                      might find it lacking.
                    </p>
                    <p>Roger Scott</p>
                    <span>Marketing Manager</span>
                  </div>
                </div>
                <div
                  className="swiper-slide about_testimony_box"
                  style={{
                    backgroundImage: `url('https://preview.colorlib.com/theme/traveland/images/traveler-5.jpg')`,
                    height: `${boxHeight}px`,
                  }}
                >
                  <div>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p>Roger Scott</p>
                    <span>Marketing Manager</span>
                  </div>
                </div>
                <div
                  className="swiper-slide about_testimony_box"
                  style={{
                    backgroundImage: `url('https://preview.colorlib.com/theme/traveland/images/traveler-4.jpg')`,
                    height: `${boxHeight}px`,
                  }}
                >
                  <div>
                    <p>
                      Overall, I'm happy with this product. It's easy to use and
                      has most of the features I need. However, there are a few
                      minor issues that could be improved.
                    </p>
                    <p>Roger Scott</p>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </section>

        <div className="container_main">
          <section className="about_info_none about_info">
            <div className="about_info_text">
              <div>
                <h2>Things to Know Before Traveling to other Places</h2>
                <p>
                  There are a variety of travel insurance plans and options, but
                  they typically cover emergency medical coverage, evacuation
                </p>
              </div>
              <div>
                <p>
                  <span>1.</span> This may seem obvious, but depending on how much you travel it’s important to be sure you have the correct pages available in your passport
                </p>
                <p>
                  <span>2.</span> A small river named Duden flows by their place
                  and supplies it with the necessary regelialia.
                </p>
                <p>
                  <span>3.</span>Every day, people are turned away from a country because they don’t have the proper visa, and if this happens, you cannot even leave the airport.
                </p>
                {showMore && (
                  <>
                    <p>
                      <span>4.</span> You’ll be forced to leave the country immediately on the next available flight, which means this “little mistake” could end up costing you thousands of dollars.
                    </p>
                    <p>
                      <span>5.</span> If you arrive at a new destination and don’t have a place to stay you, you’ll eventually find a spot…but not without some stress involved.
                    </p>
                  </>
                )}
                {!showMore && (
                  <p>
                    <button
                      className="about_readmore"
                      onClick={handleReadMoreClick}
                    >
                      Read more
                    </button>
                  </p>
                )}
              </div>
            </div>
            <div>
              <img
                src="	https://preview.colorlib.com/theme/traveland/images/about-1.jpg"
                alt=""
              />
            </div>
          </section>
          <section className="res_about_info about_info">
            <div>
              <img
                src="	https://preview.colorlib.com/theme/traveland/images/about-1.jpg"
                alt=""
              />
            </div>
            <div className="about_info_text">
              <div>
                <h2>Things to Know Before Traveling to other Places</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
              <div>
                <p>
                  <span>1.</span> A small river named Duden flows by their place
                  and supplies it with the necessary regelialia.
                </p>
                <p>
                  <span>2.</span> A small river named Duden flows by their place
                  and supplies it with the necessary regelialia.
                </p>
                <p>
                  <span>3.</span> A small river named Duden flows by their place
                  and supplies it with the necessary regelialia.
                </p>
                {showMore && (
                  <>
                    <p>
                      <span>4.</span> A small river named Duden flows by their
                      place and supplies it with the necessary regelialia.
                    </p>
                    <p>
                      <span>5.</span> A small river named Duden flows by their
                      place and supplies it with the necessary regelialia.
                    </p>
                  </>
                )}
                {!showMore && (
                  <p>
                    <button
                      className="about_readmore"
                      onClick={handleReadMoreClick}
                    >
                      Read more
                    </button>
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default About;
