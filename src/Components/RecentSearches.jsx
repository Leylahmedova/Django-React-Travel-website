import Istanbul from "../images/Istanbul.png"
import Sydney from "../images/Sydney.png"
import  Baku from "../images/Baku.png"
import Maldives from "../images/Maldives.png"
const recentSearches = () => {
  return (
    <div className="recent__search">
        <h1>Your recent searches</h1>
        <div className="search__places">
            <div className="search__place">
                <img src={Istanbul} alt="" />
                <div className="place__details">
                    <h3>Istanbul, Turkey</h3>
                    <span>325 places</span>
                </div>
            </div>

            <div className="search__place">
                <img src={Sydney} alt="" />
                <div className="place__details">
                    <h3>Sydney, Australia</h3>
                    <span>325 places</span>
                </div>
            </div>

            <div className="search__place">
                <img src={Baku} alt="" />
                <div className="place__details">
                    <h3>Baku, Azerbaijan</h3>
                    <span>325 places</span>
                </div>
            </div>

            <div className="search__place">
                <img src={Maldives} alt="" />
                <div className="place__details">
                    <h3>Malé, Maldives</h3>
                    <span>325 places</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default recentSearches