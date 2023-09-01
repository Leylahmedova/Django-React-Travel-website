import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPaperclip,
  faPlane,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faHeart, faMugHot } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setFormData({
      ...formData,
      selectedIcon: icon,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.selectedIcon !== "faMugHot") {
        toast.error("You are not human!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
        
          style: {
            // backgroundColor: '#4dc196',
            // color: 'white',
            height:"90px",
          },});
        return;
      }

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Thanks! Your contact information has been saved.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
        
          style: {
            // backgroundColor: '#4dc196',
            // color: 'white',
            height:"90px",
          },});
      } else {
        toast.error("The form could not be submitted: ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
        
          style: {
            // backgroundColor: '#4dc196',
            // color: 'white',
            height:"90px",
          },} + data.error);
      }
    } catch (error) {
      toast.error("The form could not be submitted: ", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeButton: false,
      
        style: {
          // backgroundColor: '#4dc196',
          // color: 'white',
          height:"90px",
        },} + error.message);
    }
  };

  return (
    <>
      <section className="About container__full">
        <Navbar />

        <section className="contact_intro">
          <div className="container_main contact_hero_text">
            <h1>Contact Us</h1>
            <h5>
              <span>
                <Link to="/">
                  Home <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </span>
              <span>
                <a href="" style={{ color: "#8dd3bb " }}>
                  Contact <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </span>
            </h5>
          </div>
        </section>

        <section className="contact_loc">
          <div className="container_main">
            <div>
              <div>
                <div className="contact_loc_box">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{
                      color: "#8dd3bb ",
                      fontSize: "30px",
                      marginBottom: "15px",
                    }}
                  />
                  <h4>Phone</h4>
                  <p>+01-234-567-890</p>
                </div>
                <div className="contact_loc_box">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      color: "#8dd3bb ",
                      fontSize: "30px",
                      marginBottom: "15px",
                    }}
                  />
                  <h4>Address</h4>
                  <p>Iris Watson, 283 Fusce Rd,NY</p>
                </div>
                <div className="contact_loc_box">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{
                      color: "#8dd3bb ",
                      fontSize: "30px",
                      marginBottom: "15px",
                    }}
                  />
                  <h4>Open time</h4>
                  <p>10:00 am to 23:00 pm</p>
                </div>
                <div className="contact_loc_box">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: "#8dd3bb ",
                      fontSize: "30px",
                      marginBottom: "15px",
                    }}
                  />
                  <h4>Email</h4>
                  <p>Info.colorlib @gmail.com</p>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82774.69671830302!2d24.077286625210185!3d56.96328499537209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1549536732147"
                  width="100%"
                  // height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="container_main">
          <section className="contact_form">
            <h2>Get in Touch</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  id=""
                  placeholder="Your Message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div></div>
              <div>
                <div>
                  <span>
                    Please prove you are human by selecting the{" "}
                    <span> Cup</span>.
                  </span>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        marginBottom: "8px",
                        padding: "15px",
                        fontSize: "30px",
                        cursor:"pointer",
                      }}
                      onClick={() => handleIconSelect("faHeart")}
                    />

                    <FontAwesomeIcon
                      icon={faMugHot}
                      style={{
                        marginBottom: "8px",
                        padding: "15px",
                        fontSize: "30px",
                        cursor:"pointer",
                      }}
                      onClick={() => handleIconSelect("faMugHot")}
                    />

                    <FontAwesomeIcon
                      icon={faPlane}
                      style={{
                        marginBottom: "8px",
                        padding: "15px",
                        fontSize: "30px",
                        cursor:"pointer",
                      }}
                      onClick={() => handleIconSelect("faPlane")}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="contact_btn">
                  Send Message
                </button>
              </div>
            </form>
          </section>

          
        </div>
      </section>
    </>
  );
}

export default Contact;
