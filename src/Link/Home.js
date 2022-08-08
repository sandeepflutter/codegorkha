import {Link} from 'react-scroll';
import {IoMdRocket} from 'react-icons/io';
import React, { useState } from 'react';


export const Home = () => {


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
    
      <div id="skill" className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <Link href="#" to="Home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" style={{display: visible ? 'inline' : 'none'}}
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500 text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <IoMdRocket/></button>
        </Link>
     
     <p>Home</p>
      </div>
    );
  };
  
  export default Home;
  