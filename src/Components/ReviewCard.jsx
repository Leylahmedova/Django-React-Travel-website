import star from "../svg/star.svg"
import google from "../svg/google.svg"

function ReviewCard({cardHeading,cardParagraf,cardName,cardTitle,cardImg}) {
  return (
    <div className="review_card">
        <h1>{cardHeading}</h1>
        <p>{cardParagraf}</p>
     
        <div>
            <img   style={{ width: '35px' }} src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="" />
            <img  style={{ width: '35px' }}  src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="" />
            <img  style={{ width: '35px' }}  src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000"  alt="" />
            <img  style={{ width: '35px' }}  src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="" />
            <img style={{ width: '35px' }}  src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="" />
        </div>
        <h4>{cardName}</h4>
        <h5>{cardTitle}</h5>
        <div>
            <img style={{ width: '35px' }}  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="" />
           
            <h5>Google</h5>
        </div>
        <div className="review_image">
        
        <img src={cardImg} alt="" />

        </div>
    </div>
  )
}

export default ReviewCard