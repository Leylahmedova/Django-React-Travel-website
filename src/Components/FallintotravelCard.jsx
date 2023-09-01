import { Link } from "react-router-dom"
const FallintotravelCard = ({cardImg,cardh2,cardh4,cardPrice}) => {
  return (
   
    <div className="travel__card">
    <img src={cardImg} alt="" />
     <div className="travel__card__details">
           <div className="travel__card__title">
             <div>
                   <h2>{cardh2}</h2>
                   <h4>{cardh4}</h4>
                   </div>
                   <h1>${cardPrice}</h1>
           </div>
           <Link to="/account-flow">Book Flight</Link>
     </div>
</div>
    
  )
}

export default FallintotravelCard