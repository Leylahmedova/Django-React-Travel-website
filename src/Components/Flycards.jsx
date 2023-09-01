import airplane from "../svg/airplane.svg"
import johncircle from "../images/johncircle.png"
import calendar from "../svg/calendar.svg"
import qrCode from "../svg/qrCode.svg"
import roundVector from "../svg/roundVector.svg"
import bridge from "../images/bridge.png"
function Flycards() {
  return (
    <div className="container-main">
    <section className="flying_cards">
       
         
      <div className="airplanes">
        <div>
        <h1>12:00 pm</h1>
        <span>Newark(EWR)</span>
        </div>
        <img src={airplane} alt="" />
        <div>
        <h1>12:00 pm</h1>
        <span>Newark(EWR)</span>
        </div>
      </div>
      <div className="main_card">
      <div className="card_heading">
        <img src={johncircle} alt="" />
        <div className="card_inner">
        <div  >
        <h2>James Doe</h2>
        <h4>Boarding Pass N’123</h4>
        </div>
        <h2 className="business">Busniess Class</h2>
        </div>
      </div>
      <div className="flying_dates">
        <div className="flying_date">
            <div>
                <div><img src={calendar} alt="" /></div>
                <div>
                    <span>Date</span>
                    <h4>Newark(EWR)</h4>
                </div>
            </div>
            <div>
                <div><img src={calendar} alt="" /></div>
                <div>
                    <span>Flight time</span>
                    <h4>12:00</h4>
                </div>
            </div>
            <div>
                <div><img src={calendar} alt="" /></div>
                <div>
                    <span>Gate</span>
                    <h4>A12</h4>
                </div>
            </div>
            <div>
                <div><img src={calendar} alt="" /></div>
                <div>
                    <span>Seat</span>
                    <h4>128</h4>
                </div>
            </div>
          
        </div>

        <div className="EK">
        <div>
            <h1>EK</h1>
            <span>ABC12345</span>
            </div> 
          
                <img src={qrCode} alt="" />
           
        </div>
      </div>
      </div>
    
      <div className="assets">
        <div>
          <img src={bridge} alt="" />
          <div>
            <h5>James Doe</h5>
            <span>Boarding Pass N’123</span>
          </div>
        </div>
           <div><img src={roundVector} alt="" /></div>
           <div>
          <img src={bridge} alt="" />
          <div>
            <h5>James Doe</h5>
            <span>Boarding Pass N’123</span>
          </div>
        </div>
      </div>
    
    </section>
    </div>
  )
}

export default Flycards