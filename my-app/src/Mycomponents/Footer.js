import React from "react"
import './Footerstyle.css'
import Img from "../Images/4.png";
import Img1 from "../Images/5.png";
import Img2 from "../Images/6.png";
import Img3 from "../Images/7.png";
import Img4 from "../Images/8.png";
function Footer(){
    return(
        <>
        <div className="hero12-page">
            <div className="hero13-page">
                <h1>CUSTOMER CARE</h1>
                <ul>
                    <li><a href="">SHIPPING & HANDLING</a></li>
                    <li><a href="">EXCHANGE POLICY</a></li>
                    <li><a href="">ORDER CANCELLATION POLICY</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                    <li><a href="">TERMS OF USE</a></li>
                    <li><a href="">FAQ’S</a></li>
                    
                </ul>
                </div>
                <div className="hero13-page">
                <h1>INFORMATION</h1>
                <ul>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">CONTACT US</a></li>
                    <li><a href="">CAREERS</a></li>
                    <li><a href="">STORE LOCATOR</a></li>
                    <li><a href="">LIMELIGHT TRENDS</a></li>
                    
                </ul>
                </div>
        </div>
        <div className="footer1-page">
                <img src={Img}></img>
                <img src={Img2}></img>
                <img src={Img1}></img>
                    
        </div>
        <div className="footer2-page">
                    <h4>We Accept</h4>
                </div>
                <div className="footer3-page">
                    <img src={Img3}></img>
                    <img src={Img4}></img>
                </div>
                <div className="footer4-page">
                    <h5>© 2023, Limelightpk , Powered by Alchemative</h5>
                </div>
        </>
    )
}

export default Footer;





