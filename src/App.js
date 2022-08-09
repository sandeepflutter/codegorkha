import React from "react";
import Nav from "./Navbar/Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Website from "./Link/Website";
import Mobile from "./Link/Mobile";
import Desktop from "./Link/Desktop";
import Iot from "./Link/Iot";
import Contact from "./Link/Contact";
import Home from "./Link/Home";
import Career from "./Link/Career";
import data from "./Link/data";


function App() {
  return (
  
<Router>
  <div>
        <Nav/>
<Routes>
<Route path="/" exact element={<Home/>} />
        <Route path="/Website" element={<Website/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/Desktop" element={<Desktop/>}/>
        <Route path="/Iot" element={<Iot/>}/>
        <Route   path="/Contact" element={<Contact social={data.social}/>}/>
        <Route path="/Career" element={<Career/>}/>
        
</Routes>
</div>
</Router>
  );
}

export default App;