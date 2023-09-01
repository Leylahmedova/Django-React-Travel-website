import React from 'react'
import telegram from '../svg/telegram.svg'
import leftrightarrow from '../svg/leftrightarrow.svg'
import plus from '../svg/plus.svg'
const WhereFlying = () => {
  return (
    <div className='whereFlying'>
        <h3>Where are you flying? </h3>
        <div className="flying-inputs">
          <form action="">
            <fieldset>
            <legend>From - To</legend>
            <input type="text"  placeholder='Lahore - Karachi'/>
              <img src={leftrightarrow} alt="" />
            </fieldset>
            <fieldset>
              <legend>Trip</legend>
              <select name="" id="">
                <option value="">Return</option>
              </select>
            </fieldset>

            <fieldset>
            <legend>Depart- Return</legend>
            <input type="text"  placeholder='07 Nov 22 - 13 Nov 22'/>
        
            </fieldset>

            <fieldset>
            <legend>Passenger - Class</legend>
            <input type="text"  placeholder='1 Passenger, Economy'/>
        
            </fieldset>
           
        
          </form>
        </div>
        <div className="flying-btns">
          <button><img src={plus} alt="" /> Add Promo Code</button>
          <button><img src={telegram} alt="" /> Show Flights</button>
        </div>
    </div>
  )
}

export default WhereFlying