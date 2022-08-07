import React, { useState } from "react";
import Nav from "./Navbar/Nav";
import {Link} from 'react-scroll';
import {IoMdRocket} from 'react-icons/io';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Website from "./Link/Website";
import Mobile from "./Link/Mobile";
import Desktop from "./Link/Desktop";
import Iot from "./Link/Iot";
import Contact from "./Link/Contact";
import Home from "./Link/Home";
import Career from "./Link/Career";


function App() {


  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <div>
      <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" style={{display: visible ? 'inline' : 'none'}}
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500 text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <IoMdRocket/></button>
        </Link>
        <Router>
  <Nav />
  <Routes>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/Website">
      <Website />
    </Route>
    <Route exact path="/Mobile">
      <Mobile />
    </Route>
    <Route exact path="/Desktop">
      <Desktop />
    </Route>
    <Route exact path="/Iot">
      <Iot />
    </Route>
    <Route exact path="/Contact">
      <Contact />
    </Route>
    <Route exact path="/Career">
      <Career />
    </Route>
  </Routes>
</Router>
    </div>
  );
}

export default App;