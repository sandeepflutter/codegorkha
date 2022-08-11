import React from "react";
import {Link} from 'react-scroll';
import Screen from "../Link/Screen";
import {IoMdRocket} from 'react-icons/io';

export const Home = () => {
    return (
      <div id="skill" className="px-4  py-10 mx-auto md:max-w-full  md:px-12 lg:px-8 lg:py-10">
     <p className="text-center font-bold text-3xl"> Website</p>
<div className="flex justify-center items-center">
<div className="h-72 w-96 text-center">
<div>
     
<Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" 
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500 text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <IoMdRocket/></button>
        </Link>
   <Screen/>
   <Screen/>
    </div>
</div>
</div>

      </div>
    );
  };
  
  export default Home;