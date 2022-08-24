import React from "react";
import {Link} from 'react-scroll';

import {TiArrowSortedUp} from 'react-icons/ti';
import Footer from "../Navbar/Footer";
import Clients from "../Home/Clients";
import Services from "../Home/Services";
import Features from "../Home/Features";
import About from "../Home/About";
import Landing from "../Home/Landing";


export const Home = () => {
    return (
      <div className="bg-blue-50">
      <Landing/>
      <About />
      <Features/>
      <Services/>
      <Clients/>
      <div className="bg-sky-900 justify-center flex items-center">
      <Link href="#" to="home" spy={true} smooth={true} duration={500} >
      <button id="myBtn" class="bg-transparent text-blue-500 text-6xl"><TiArrowSortedUp/></button>
       </Link>
       </div>
      <Footer className="items-center"/>
      </div>
    );
  };
  
  export default Home;