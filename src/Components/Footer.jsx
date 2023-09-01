// import letterbox from "../svg/letterbox.svg"
// import footerLogo from "../svg/footerLogo.svg"
import {BsFacebook,BsTwitter,BsYoutube} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

const letterbox='letterbox.svg'
const letterboxPath=`/static/${letterbox}`

const footerlogo='footerLogo.svg'
const footerLogoPath=`/static/${footerlogo}`


const Footer = () => {
  return (
    <div className="container__full">
    <section className="footer__section">
        
        <div className="footer">
            <div>
            <div>
                <h1>Subscribe  Newsletter</h1>
                <h4>The Travel</h4>
                <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                <form action="">
                    <input type="email"  placeholder="Your email address" required/>
                    <button>Subscribe</button>
                </form>
            </div>
         
            <img src={letterboxPath} alt="" />
        
            </div>
        </div>
      
  
        <div className="footer-blank-div"></div>
       
        <div className="main__footer">
       
           <div className="footer__logo">
            <img src={footerLogoPath} alt="" />
            <nav>
            <ul>
                <li><a href=""><BsFacebook/></a></li>
                <li><a href=""><BsTwitter/></a></li>
                <li><a href=""><BsYoutube/></a></li>
                <li><a href=""><AiFillInstagram/></a></li>
            </ul>
           </nav>
           </div>
           <div className="footer__links">
            <h4>Our Destinations</h4>
            <ul>
                <li><a href="">Canada</a></li>
                <li><a href="">Alaksa</a></li>
                <li><a href="">France</a></li>
                <li><a href="">Iceland</a></li>
            </ul>
           </div>
           <div className="footer__links">
            <h4>Our Activities</h4>
            <ul>
                <li><a href="">Northern Lights</a></li>
                <li><a href="">Cruising & sailing</a></li>
                <li><a href="">Multi-activities</a></li>
                <li><a href="">Kayaing</a></li>
            </ul>
           </div>
           <div className="footer__links">
            <h4>Travel Blogs</h4>
            <ul>
                <li><a href="">Bali Travel Guide</a></li>
                <li><a href="">Sri Lanks Travel Guide</a></li>
                <li><a href="">Peru Travel Guide</a></li>
                <li><a href="">Bali Travel Guide</a></li>
            </ul>
           </div>
           <div className="footer__links">
            <h4>About Us</h4>
            <ul>
                <li><a href="">Our Story</a></li>
                <li><a href="">Work with us</a></li>
            </ul>
           </div>
           <div className="footer__links">
            <h4>Contact Us</h4>
            <ul>
                <li><a href="">Our Story</a></li>
                <li><a href="">Work with us</a></li>
            </ul>
           </div>
       
        </div>
       
    </section>
    </div>
  )
}

export default Footer