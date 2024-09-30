import React from "react"
import Navbar from "../Mycomponents/Navbar"
import Img from "../Mycomponents/Img"
import Herosection from "../Mycomponents/Herosection";
import Footer from "../Mycomponents/Footer";
function Home(){
    return(
        <>
        <Navbar />
        <Img />
        <Herosection 
        cName = "hero7-page"
        cName1 = "hero8-page"
        cName2 = "hero9-page"
        cName3 = "hero10-page"
        title = "Embellished Mules"
        price = "Rs. 3,299"
        btn = "QUICK VIEW"
        />
        <Footer />
        
        </>
    )
}
export default Home;