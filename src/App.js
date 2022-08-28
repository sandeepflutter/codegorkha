import React from "react";
import Nav from "./Navbar/Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Website from "./Link/Website";
import Mobile from "./Link/Mobile";
import Desktop from "./Link/Desktop";
import Contact from "./Link/Contact";
import Home from "./Link/Home";
import Career from "./Link/Career";
import data from "./Link/data";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
  
<Router>
  <ScrollToTop>
  <div>
        <Nav/>
<Routes>
<Route path="/" exact element={<Home/>} />
        <Route path="/Website" element={<Website/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/Desktop" element={<Desktop/>}/>
        <Route path="/Contact" element={<Contact social={data.social}/>}/>
        <Route path="/Career" element={<Career/>}/>
        
</Routes>
</div>
</ScrollToTop>
</Router>
  );
}


export default App;