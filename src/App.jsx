import { useState } from "react";
import "./App.css";
import Aos from "aos";
import Footer from "./Components/Footer";
import BookingDetails from "./Pages/BookingDetails";
import LandingPage from "./Pages/LandingPage";
import FlightListing from "./Pages/FlightListing";
import FlightDetails from "./Pages/FlightDetails";
import HotelListingone from "./Pages/HotelListingone";
import HotelListingtwo from "./Pages/HotelListingtwo";
import Favorities from "./Pages/Favorities";
import NotFound from "./Pages/NotFound";
import FlightSearch from "./Pages/FlightSearch";
import BookingDetailsCard from "./Pages/BookingDetailsCard";
import HotelSearch from "./Pages/HotelSearch";
import HotelsBookingDetails from "./Pages/HotelBookingDetails";
import SecondNavbar from "./Components/SecondNavbar";
import Login from "./Pages/Login";
import Sign_up from "./Pages/Sign_up";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AccountFlow from "./Pages/AccountFlow";
import HotelDetailsCard from "./Pages/HotelDetailsCard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import ScrollButton from "./Components/ScrollTop";
import Vidoes from "./Pages/Vidoes";
import Swipers from "./Pages/Swipers";
import Favicon from "react-favicon";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verification from "./Pages/Verification";
import ForgetPassword from "./Pages/ForgetPassword";
import Profil from "./Pages/Profil";
import Invoice from "./Pages/Invoice";
import UserPage from "./Pages/UserPage";
import Navbar from "./Components/Navbar";

function App({
  dispatch,
  basketTicket,
  basketHotel,
  basketTicketBuy,
  basketHotelBuy,
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    document.title = "Travel Agency";
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/blog/list/")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a,
        });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/blog/hotels/")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_HOTELS",
          payload: a,
        });
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("basketTicket", JSON.stringify(basketTicket));
  }, [basketTicket]);

  useEffect(() => {
    localStorage.setItem("basketHotel", JSON.stringify(basketHotel));
  }, [basketHotel]);

  useEffect(() => {
    localStorage.setItem("basketTicketBuy", JSON.stringify(basketTicketBuy));
  }, [basketTicketBuy]);
  useEffect(() => {
    localStorage.setItem("basketHotelBuy", JSON.stringify(basketHotelBuy));
  }, [basketHotelBuy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let [color, setColor] = useState("#ffffff");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToastContainer />
      <Favicon url="https://www.freeiconspng.com/thumbs/travel-icon-png/plane-travel-flight-tourism-travel-icon-png-10.png" />

      {loading ? (
        <div className="loading">
          <GridLoader
            color="#fff"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="wrapper">
          {pathname !== "/not-found" &&
            pathname !== "/" &&
            pathname !== "/flight-search" &&
            pathname !== "/hotel-search" &&
            pathname !== "/login" &&
            pathname !== "/sign-up" &&
            pathname !== "/about" &&
            pathname !== "/contact" && <SecondNavbar />}
          <Routes>
            <Route path="/user_page" element={<UserPage />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/Profil" element={<Profil />} />

            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route
              path="/verify/:verificationCode"
              element={<Verification />}
            />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/account-flow" element={<AccountFlow />} />
            <Route path="/flight-search" element={<FlightSearch />} />
            <Route path="/hotel-search" element={<HotelSearch />} />
            <Route path="/flight-listing" element={<FlightListing />} />
            <Route path="/booking-details/:id" element={<BookingDetails />} />
            <Route path="/flight-details/:id" element={<FlightDetails />} />
            <Route
              path="/booking-detailsCard/:id"
              element={<BookingDetailsCard />}
            />
            <Route path="/hotel-listing-one" element={<HotelListingone />} />
            <Route
              path="/hotel-listing-two/:id"
              element={<HotelListingtwo />}
            />
            <Route
              path="/hotels-booking-details/:id"
              element={<HotelsBookingDetails />}
            />
            <Route path="/favourites" element={<Favorities />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Sign_up />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/Swipers/:id" element={<Swipers />} />
            <Route
              path="/hotel-detailsCard/:id"
              element={<HotelDetailsCard />}
            />
          </Routes>
          <ScrollButton />
          {pathname !== "/not-found" && <Footer />}
        </div>
      )}
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);
