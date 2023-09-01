import face from "../svg/face.svg"
import google from "../svg/google.svg"
import apple from "../svg/apple.svg"
import mail from "../svg/mail.svg"
import visa from "../svg/visaBlack.svg"
import radio from "../svg/radio.svg"
import addCard from "../svg/addCard.svg"
import { useState } from "react";
import checkbox from "../svg/checkbox.svg"
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react"
import { NavLink } from "react-router-dom";
import Modal from "./Modal"
function Login_signUp() {
  const [open,setOpen]=useState(false)
  const [showModal,setShowModal]=useState(false)
  const [hide,setHide]=useState(false)
  if(hide){
    setOpen(false)
    setShowModal(false)
    setHide(false)
  } 
  return (

    <>
    
     <div className={open?"login__signUp hide_login_signUp":"login__signUp"}  >
            <h1>Login or Sign up to book</h1>
            <input type="number" pattern="[0-9]*" min={0} max={10} placeholder="Phone Number" />
            <p>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
            <div onClick={()=>{
              setOpen(!open)
          
              }} className="continue"><h2>Continue</h2></div>
            <div className="or"><h3>Or</h3></div>
            <div className="login_logos">
              <div><img src={face} alt="" /></div>
              <div><img src={google} alt="" /></div>
              <div><img src={apple} alt="" /></div>
            </div>
            <div className="mail">
              <img src={mail} alt="" />
              <h2>Continue with email</h2> 
            </div>
          </div>
          <div className={open?"show_login_signUp add_new_card":"add_new_card"}>
            <div>
              <div>
              <img src={visa} alt="" />
                <h2>**** 4321 <span>02/27</span></h2>
              </div>
                <img src={radio} alt="" />

            </div>
            <div>
               <img onClick={()=>{
                setShowModal(!showModal)
                // setHide(!hide)
                }} src={addCard} alt="" />
               <span>Add a new card</span>
            </div>
          </div>
         {showModal && 
          <div  className={hide ? "modal hide_modal":"modal"}>
         
            
             <form action="">
             <h1>Add a new Card</h1>
             <AiOutlineClose className="modal_close" onClick={()=>setHide(!hide)}/>
             <fieldset>
                <legend>Card Number</legend>
                <input type="text" pattern="[0-9]*"  placeholder="4321 4321 4321 4321"/>
                  <img src={visa} alt="" />
                </fieldset>
                <div>
                <fieldset>
                <legend>Exp. Date</legend>
                <input type="text"    placeholder="02/27"/>
                
                </fieldset>
                <fieldset>
                <legend>CVC</legend>
                <input type="number"  placeholder="123"/>
                </fieldset>
                </div>
    
                <fieldset>
                <legend>Name on Card</legend>
                <input type="text"  placeholder="John Doe"/>
                </fieldset>
    
                <fieldset>
                <legend>Country or Region</legend>
                <input type="text"  placeholder="United States"/>
                </fieldset>
                <h4><img src={checkbox} alt="" />Securely save my information for 1-click checkout</h4>
                <NavLink to="/booking-detailsCard">Add Card</NavLink>
                <p>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
             </form>
        </div>
         }

    </>
   
  )
}

export default Login_signUp