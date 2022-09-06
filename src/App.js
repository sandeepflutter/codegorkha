import React from "react";
import Nav from "./Navbar/Nav";
import { Routes, Route} from 'react-router-dom';
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
  <ScrollToTop>
  <div>
        <Nav/>
<Routes>
<Route path="/" element={<Home/>} />
        <Route path="/Website" element={<Website/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/Desktop" element={<Desktop/>}/>
        <Route path="/Contact" element={<Contact social={data.social}/>}/>
        <Route path="/Career" element={<Career/>}/>
</Routes>
</div>
</ScrollToTop>
  );
}


export default App;