import React from "react";
import {Link} from 'react-scroll';
import Screen from "../Link/Screen";
import {TiArrowSortedUp} from 'react-icons/ti';
import Footer from "../Navbar/Footer";

export const Home = () => {
    return (
      <div className="bg-blue-300">
        <div className="bg-cyan-300">
      <div id="skill" className="px-4  py-10 mx-auto md:max-w-full  md:px-12 lg:px-8 lg:py-10">
     <p className="text-center font-bold text-3xl">Website</p>
<div className="flex justify-center items-center">
<div className=" text-center">
<div>
     
   <Screen/>
    </div>
</div>
</div>

      </div>
      </div> 
      <div className="bg-sky-900 justify-center relative flex items-center ">
      <Link href="#" to="home" spy={true} smooth={true} duration={500} >
      <button id="myBtn" class="bg-transparent w-20 h-20 Agline-center justify-center items-center text-blue-500 text-6xl"><TiArrowSortedUp/></button>
       </Link>
       </div>
      <Footer className="items-center"/>
      </div>
    );
  };
  
  export default Home;