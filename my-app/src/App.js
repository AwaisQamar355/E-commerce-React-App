import React from "react";
// import Navbar from "./Mycomponents/Navbar";
// import Img from "./Mycomponents/Img";
import { Route , Routes} from "react-router-dom"
import Home from "./routers/Home";
import Women from "./routers/Women";
import Men from "./routers/Men";
import Girls from "./routers/Girls";
import Sale from "./routers/Sale";
import Accessories from "./routers/Accessories";
function App() {
  return (
    <>
    {/* <Navbar />
    <Img /> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/girls" element={<Girls/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
    </Routes>
    </>
  );
}

export default App;
