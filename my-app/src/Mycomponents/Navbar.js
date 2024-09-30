import React from "react";
import "./Navbarstyle.css";
import img1 from "../Images/1.png";
import img2 from "../Images/2.png";
import img4 from "../Images/4.svg";
function Navbar(){
    return(
        <>
        <div className="nav-page">
            <h5>FREE DELIVERY FOR ORDERS ABOVE RS 2490 WITHIN PAKISTAN</h5>
        </div>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="nav2-page">
            <img src={img1}></img>
            <img src={img2}></img>
                <div className="nav5-page">
                    <input type="text" placeholder="Search">
                    </input>
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-navicon"></i></span>
          </button>
            <div className="navbar-collapse" id="navbarSupportedContent">
            <img src={img4}></img>
            </div>
            <div className="nav4-page">
                <i className="fa fa-cart-arrow-down"></i>        
            </div>
        </nav>
        <div className="nav7-page navbar-expand-lg fixed-top">
            <div className="nav8-page">
                    <i className="fa fa-user-o"></i>
                </div>
            
            <div className="nav9-page">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/women">WOMEN</a></li>
                    <li><a href="/men">MEN</a></li>
                    <li><a href="/girls">GIRLS</a></li>
                    <li><a href="/accessories">ACCESSORIES</a></li>
                    <li><a href="/sale" className="ali">SALE</a></li>
                </ul>
            </div>
            <div className="nav10-page">
                <h6>Checkout</h6>
            </div>
        </div>
        </>
    )
}

export default Navbar;








